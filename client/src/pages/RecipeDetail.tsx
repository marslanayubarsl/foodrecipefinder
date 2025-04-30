import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import RecipeDetailHeader from "@/components/RecipeDetailHeader";
import RecipeIngredients from "@/components/RecipeIngredients";
import RecipeInstructions from "@/components/RecipeInstructions";
import RecipeSimilar from "@/components/RecipeSimilar";
import { useRecipes } from "@/hooks/useRecipes";
import { Recipe } from "@/types";

const RecipeDetail = () => {
  const [, params] = useRoute("/recipe/:id");
  const { getRecipeById, getRandomRecipes, loading, error } = useRecipes();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [similarRecipes, setSimilarRecipes] = useState<Recipe[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  useEffect(() => {
    const fetchRecipeData = async () => {
      if (params?.id) {
        const recipeData = await getRecipeById(params.id);
        if (recipeData) {
          setRecipe(recipeData);
          
          // Get similar recipes (random in this case as the API doesn't have similar functionality)
          const randomRecipes = await getRandomRecipes(4);
          if (randomRecipes) {
            setSimilarRecipes(randomRecipes.filter(r => r.idMeal !== params.id));
          }
        }
      }
    };
    
    fetchRecipeData();
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <div className="h-96 bg-gray-200 rounded-xl"></div>
            </div>
            <div className="h-96 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Error Loading Recipe</h2>
        <p className="mb-4">Sorry, we couldn't load the recipe details. Please try again later.</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Recipe Header */}
      <RecipeDetailHeader 
        recipe={recipe} 
        isFavorite={favorites.includes(recipe.idMeal)} 
        toggleFavorite={toggleFavorite} 
      />
      
      {/* Recipe Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <RecipeIngredients recipe={recipe} />
        
        {/* Instructions */}
        <RecipeInstructions recipe={recipe} />
      </div>
      
      {/* Similar Recipes */}
      {similarRecipes.length > 0 && (
        <RecipeSimilar recipes={similarRecipes} />
      )}
    </motion.div>
  );
};

export default RecipeDetail;
