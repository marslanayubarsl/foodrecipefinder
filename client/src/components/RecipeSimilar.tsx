import { Recipe } from "@/types";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface RecipeSimilarProps {
  recipes: Recipe[];
}

const RecipeSimilar = ({ recipes }: RecipeSimilarProps) => {
  return (
    <section className="mt-12">
      <h2 className="font-heading text-2xl font-bold mb-6 dark:text-white">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe, index) => (
          <motion.div 
            key={recipe.idMeal}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => window.location.href = `/recipe/${recipe.idMeal}`}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 dark:text-gray-100">
              <h3 className="font-accent text-lg font-semibold line-clamp-1">{recipe.strMeal}</h3>
              <div className="flex items-center mt-2">
                <i className="fas fa-star text-accent text-sm"></i>
                <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">{(Math.random() * (5 - 4) + 4).toFixed(1)}</span>
                <span className="mx-2 text-gray-400 dark:text-gray-500 text-sm">|</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{Math.floor(Math.random() * 30) + 15} min</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecipeSimilar;
