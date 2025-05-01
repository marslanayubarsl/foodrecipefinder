import { Recipe } from "@/types";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Clock, Star } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
  toggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

const RecipeCard = ({ recipe, index, toggleFavorite, isFavorite = false }: RecipeCardProps) => {
  const { idMeal, strMeal, strCategory, strMealThumb, strArea } = recipe;
  
  // Simulate cooking time (this data is not available in the API)
  const cookingTime = Math.floor(Math.random() * 40) + 10; // Random time between 10-50 mins
  const rating = (Math.random() * (5 - 4) + 4).toFixed(1); // Random rating between 4.0-5.0
  const reviews = Math.floor(Math.random() * 300) + 100; // Random reviews between 100-400

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up stagger-item group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        to={`/recipe/${idMeal}`}
        className="cursor-pointer block"
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={strMealThumb} 
            alt={strMeal} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-0 right-0 p-2">
            <motion.button 
              className={`bg-white p-2 rounded-full shadow-sm transition-colors ${isFavorite ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite && toggleFavorite(idMeal);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={isFavorite ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className={`${isFavorite ? "fill-red-500 text-red-500" : ""} transition-all duration-300 w-5 h-5`} />
            </motion.button>
          </div>
        </div>
        <div className="p-4 dark:text-gray-100">
          <div className="flex items-center mb-1">
            <span className="bg-accent/20 text-dark/80 dark:bg-accent/10 dark:text-gray-300 text-xs px-2 py-1 rounded-full">{strCategory}</span>
            <div className="ml-auto flex items-center">
              <Clock className="text-gray-500 dark:text-gray-400 mr-1 w-4 h-4" />
              <span className="text-gray-500 dark:text-gray-400 text-sm">{cookingTime} min</span>
            </div>
          </div>
          <h3 className="font-accent text-xl font-semibold mt-2 line-clamp-1 group-hover:text-primary transition-colors duration-300">{strMeal}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">
            {strArea ? `${strArea} cuisine` : "Traditional recipe"} with delicious flavors and simple preparation.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <Star className="text-accent fill-accent w-4 h-4" />
                <span className="ml-1 text-gray-700 dark:text-gray-300">{rating}</span>
              </div>
              <span className="mx-2 text-gray-400 dark:text-gray-500">|</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">{reviews} reviews</span>
            </div>
            <div className="text-primary hover:text-primary/80 font-medium text-sm transition-colors group-hover:translate-x-1 duration-300">View Recipe →</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;
