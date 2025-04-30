import { Recipe } from "@/types";
import { motion } from "framer-motion";

interface RecipeInstructionsProps {
  recipe: Recipe;
}

const RecipeInstructions = ({ recipe }: RecipeInstructionsProps) => {
  // Parse instructions into steps
  const instructionSteps = recipe.strInstructions
    ? recipe.strInstructions
        .split(/\r\n|\n|\r/)
        .filter(step => step.trim() !== '')
        .map((step, index) => ({ id: index + 1, text: step.trim() }))
    : Array(7).fill(null).map((_, index) => {
        return {
          id: index + 1,
          text: `Step ${index + 1}: This is a placeholder instruction step for ${recipe.strMeal}.`
        };
      });

  return (
    <div className="lg:col-span-2">
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="font-heading text-xl font-bold mb-5">Instructions</h2>
        <ol className="space-y-6">
          {instructionSteps.map((step) => (
            <motion.li 
              key={step.id} 
              className="flex"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + (step.id * 0.1) }}
            >
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                {step.id}
              </div>
              <div className="ml-4">
                <p className="text-gray-700">{step.text}</p>
                {step.id === instructionSteps.length && (
                  <div className="mt-3">
                    <img 
                      src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" 
                      alt="Finished dish" 
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.div>
      
      {/* Nutrition Info */}
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="font-heading text-xl font-bold mb-4">Nutrition Information</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <span className="block text-gray-500 text-sm">Calories</span>
            <span className="block font-medium text-lg">320</span>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <span className="block text-gray-500 text-sm">Protein</span>
            <span className="block font-medium text-lg">38g</span>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <span className="block text-gray-500 text-sm">Carbs</span>
            <span className="block font-medium text-lg">12g</span>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <span className="block text-gray-500 text-sm">Fat</span>
            <span className="block font-medium text-lg">14g</span>
          </div>
        </div>
      </motion.div>
      
      {/* Reviews */}
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-heading text-xl font-bold">Reviews</h2>
          <button className="text-primary hover:text-primary/80 font-medium">Write a Review</button>
        </div>
        
        {/* Review List */}
        <div className="space-y-6">
          {/* Review 1 */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center mb-3">
              <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Sarah J." className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <div className="font-medium">Sarah J.</div>
                <div className="text-gray-500 text-sm">2 days ago</div>
              </div>
              <div className="ml-auto flex">
                {Array(5).fill(null).map((_, i) => (
                  <i key={i} className="fas fa-star text-accent"></i>
                ))}
              </div>
            </div>
            <p className="text-gray-700">Absolutely delicious! The flavors are amazing, and the recipe was easy to follow. My whole family loved it.</p>
          </div>
          
          {/* Review 2 */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center mb-3">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael R." className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <div className="font-medium">Michael R.</div>
                <div className="text-gray-500 text-sm">1 week ago</div>
              </div>
              <div className="ml-auto flex">
                {Array(4).fill(null).map((_, i) => (
                  <i key={i} className="fas fa-star text-accent"></i>
                ))}
                <i className="far fa-star text-accent"></i>
              </div>
            </div>
            <p className="text-gray-700">Great recipe! I made a few modifications to suit my taste, and it turned out really well. Will definitely make again.</p>
          </div>
          
          {/* Review 3 */}
          <div>
            <div className="flex items-center mb-3">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Lisa T." className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <div className="font-medium">Lisa T.</div>
                <div className="text-gray-500 text-sm">3 weeks ago</div>
              </div>
              <div className="ml-auto flex">
                {Array(5).fill(null).map((_, i) => (
                  <i key={i} className="fas fa-star text-accent"></i>
                ))}
              </div>
            </div>
            <p className="text-gray-700">This has become a staple in our house! It's easy to prepare and always turns out delicious. Highly recommend!</p>
          </div>
        </div>
        
        {/* Load More Reviews Button */}
        <div className="mt-6 text-center">
          <button className="text-primary hover:text-primary/80 font-medium">
            Load More Reviews <i className="fas fa-chevron-down ml-1"></i>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RecipeInstructions;
