import { motion } from "framer-motion";
import { useLocation } from "wouter";

interface CollectionCardProps {
  image: string;
  title: string;
  description: string;
  recipeCount: number;
  onViewCollection: () => void;
}

const CollectionCard = ({ image, title, description, recipeCount, onViewCollection }: CollectionCardProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onViewCollection}
    >
      <div className="h-40 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        <h3 className="absolute bottom-4 left-4 text-white font-accent text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-4 dark:text-gray-100">
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-500 text-sm">{recipeCount} recipes</span>
          <motion.button 
            className="text-primary hover:text-primary/80 font-medium text-sm transition-colors flex items-center"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent onClick
              onViewCollection();
            }}
          >
            <span className="mr-1">View Collection</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
