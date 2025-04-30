import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      setLoading(true);
      
      try {
        // Get all favorite recipes from localStorage
        const recipePromises = favorites.map(async (id) => {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
          const data = await response.json();
          return data.meals?.[0] || null;
        });

        const results = await Promise.all(recipePromises);
        setFavoriteRecipes(results.filter(Boolean));
      } catch (error) {
        console.error("Error fetching favorite recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteRecipes();
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id);
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h1 
        className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Favorite Recipes
      </motion.h1>
      
      <motion.p 
        className="text-gray-600 mb-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {favorites.length === 0 
          ? "You don't have any favorites yet. Start adding some!" 
          : `You have ${favorites.length} favorite recipe${favorites.length !== 1 ? 's' : ''}`}
      </motion.p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      ) : favoriteRecipes.length === 0 ? (
        <motion.div 
          className="text-center py-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-7xl mb-4">❤️</div>
          <h2 className="text-2xl font-heading font-bold mb-4">No favorites yet</h2>
          <p className="text-gray-600 mb-6">When you find recipes you love, click the heart icon to save them here.</p>
          <motion.a 
            href="/"
            className="bg-primary text-white font-medium px-6 py-3 rounded-full inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Recipes
          </motion.a>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteRecipes.map((recipe, index) => (
            <RecipeCard 
              key={recipe.idMeal} 
              recipe={recipe} 
              index={index}
              toggleFavorite={handleToggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Favorites;
