import { Recipe } from "@/types";
import { motion } from "framer-motion";
import { Link } from "wouter";

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
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up stagger-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/recipe/${idMeal}`}>
        <a>
          <div className="relative h-48 overflow-hidden">
            <img 
              src={strMealThumb} 
              alt={strMeal} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-0 right-0 p-2">
              <button 
                className={`bg-white p-2 rounded-full shadow-sm transition-colors ${isFavorite ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite && toggleFavorite(idMeal);
                }}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-1">
              <span className="bg-accent/20 text-dark/80 text-xs px-2 py-1 rounded-full">{strCategory}</span>
              <div className="ml-auto flex items-center">
                <i className="fas fa-clock text-gray-500 mr-1 text-sm"></i>
                <span className="text-gray-500 text-sm">{cookingTime} min</span>
              </div>
            </div>
            <h3 className="font-accent text-xl font-semibold mt-2 line-clamp-1">{strMeal}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {strArea ? `${strArea} cuisine` : "Traditional recipe"} with delicious flavors and simple preparation.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center">
                  <i className="fas fa-star text-accent"></i>
                  <span className="ml-1 text-gray-700">{rating}</span>
                </div>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600 text-sm">{reviews} reviews</span>
              </div>
              <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">View Recipe →</button>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;
