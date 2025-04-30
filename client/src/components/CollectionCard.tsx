import { motion } from "framer-motion";

interface CollectionCardProps {
  image: string;
  title: string;
  description: string;
  recipeCount: number;
}

const CollectionCard = ({ image, title, description, recipeCount }: CollectionCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-500 text-sm">{recipeCount} recipes</span>
          <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">View Collection →</button>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
