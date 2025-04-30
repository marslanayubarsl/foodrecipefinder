import { Recipe } from "@/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface RecipeDetailHeaderProps {
  recipe: Recipe;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
}

const RecipeDetailHeader = ({ recipe, isFavorite, toggleFavorite }: RecipeDetailHeaderProps) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  
  // Simulated data (not available in the API)
  const prepTime = 10;
  const cookTime = 20;
  const servings = 4;
  const calories = 320;
  const rating = 4.7;
  const reviews = 248;

  return (
    <>
      <Button 
        variant="link" 
        className="flex items-center text-primary hover:text-primary/80 mb-6 p-0" 
        asChild
      >
        <Link href="/">
          <i className="fas fa-arrow-left mr-2"></i> Back to recipes
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src={strMealThumb} 
              alt={strMeal} 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="bg-accent/20 text-dark/80 text-xs px-2 py-1 rounded-full">{strCategory}</span>
              <h1 className="font-accent text-3xl font-bold mt-3 mb-2">{strMeal}</h1>
            </div>
            <motion.button 
              className={`p-2 ${isFavorite ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              onClick={() => toggleFavorite(idMeal)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <i className={isFavorite ? "fas fa-heart text-xl" : "far fa-heart text-xl"}></i>
            </motion.button>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <i className="fas fa-star text-accent"></i>
              <span className="ml-1 font-medium">{rating}</span>
            </div>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">{reviews} reviews</span>
          </div>
          
          <p className="text-gray-700 mb-6">
            {recipe.strInstructions ? recipe.strInstructions.split('. ').slice(0, 2).join('. ') + '...' : `A delicious ${strCategory.toLowerCase()} dish with rich flavors and textures. Perfect for a nutritious meal that's satisfying and full of flavor.`}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <i className="fas fa-clock text-primary"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Prep Time</div>
                <div>{prepTime} mins</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-fire text-primary"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Cook Time</div>
                <div>{cookTime} mins</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-utensils text-primary"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Servings</div>
                <div>{servings} people</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-leaf text-primary"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Calories</div>
                <div>{calories} kcal</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button className="flex-1 rounded-lg">
              <i className="fas fa-print mr-2"></i> Print Recipe
            </Button>
            <Button variant="outline" className="flex-1 rounded-lg">
              <i className="fas fa-share-alt mr-2"></i> Share
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default RecipeDetailHeader;
