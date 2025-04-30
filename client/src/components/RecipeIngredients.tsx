import { Recipe } from "@/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface RecipeIngredientsProps {
  recipe: Recipe;
}

const RecipeIngredients = ({ recipe }: RecipeIngredientsProps) => {
  const ingredients = useMemo(() => {
    const ingredientList = [];
    
    // TheMealDB API stores ingredients and measures in numbered properties up to 20
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof Recipe] as string;
      const measure = recipe[`strMeasure${i}` as keyof Recipe] as string;
      
      if (ingredient && ingredient.trim() !== '') {
        ingredientList.push({
          id: i,
          name: ingredient,
          measure: measure || 'to taste'
        });
      }
    }
    
    return ingredientList;
  }, [recipe]);

  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-heading text-xl font-bold mb-4">Ingredients</h2>
      
      <ul className="space-y-3">
        {ingredients.map((ingredient) => (
          <motion.li 
            key={ingredient.id} 
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: ingredient.id * 0.05 }}
          >
            <input 
              type="checkbox" 
              className="h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary" 
              id={`ing${ingredient.id}`}
            />
            <label htmlFor={`ing${ingredient.id}`} className="ml-3 text-gray-700 cursor-pointer">
              {ingredient.measure} {ingredient.name}
            </label>
          </motion.li>
        ))}
      </ul>
      
      <div className="mt-6">
        <Button variant="outline" className="w-full rounded-lg">
          <i className="fas fa-shopping-cart mr-2"></i> Add All to Shopping List
        </Button>
      </div>
    </motion.div>
  );
};

export default RecipeIngredients;
