import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import RecipeDetailHeader from "@/components/RecipeDetailHeader";
import RecipeIngredients from "@/components/RecipeIngredients";
import RecipeInstructions from "@/components/RecipeInstructions";
import RecipeSimilar from "@/components/RecipeSimilar";
import { useRecipes } from "@/hooks/useRecipes";
import { useFavorites } from "@/hooks/useFavorites";
import { Recipe } from "@/types";
import { Button } from "@/components/ui/button";

const RecipeDetail = () => {
  const [, params] = useRoute("/recipe/:id");
  const { getRecipeById, getRandomRecipes, loading, error } = useRecipes();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [similarRecipes, setSimilarRecipes] = useState<Recipe[]>([]);
  const { toggleFavorite, isFavorite } = useFavorites();

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
              <div className="h-80 md:h-96 bg-gray-200 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-gradient"></div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="h-4 bg-gray-200 rounded-full w-1/4 mb-6"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 bg-gray-200 rounded flex-1"></div>
                <div className="h-10 bg-gray-200 rounded flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <motion.div 
        className="container mx-auto px-4 py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <i className="fas fa-exclamation-circle text-error text-5xl mb-6"></i>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Recipe Not Found</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Sorry, we couldn't load the recipe details. The recipe may have been removed or there might be a temporary issue with our service.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              onClick={() => window.location.href = '/'}
              className="rounded-full"
            >
              <i className="fas fa-home mr-2"></i> Back to Home
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="rounded-full"
            >
              <i className="fas fa-redo mr-2"></i> Try Again
            </Button>
          </div>
        </motion.div>
      </motion.div>
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
        isFavorite={isFavorite(recipe.idMeal)} 
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
