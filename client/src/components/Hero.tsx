import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const popularIngredients = [
    "Chicken", 
    "Beef", 
    "Rice",
    "Fish",
    "Tomato",
    "Lentils"
  ];

  const handlePopularClick = (ingredient: string) => {
    onSearch(ingredient);
  };

  return (
    <section className="relative bg-dark text-white overflow-hidden h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-dark to-black opacity-80"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="font-accent text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-sky-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find Delicious Recipes
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-sky-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover meals you can cook with ingredients you already have
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SearchBar onSearch={onSearch} />
          </motion.div>
          
          <motion.div 
            className="mt-6 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-sky-200 self-center mr-2">Popular:</span>
            {popularIngredients.map((ingredient, index) => (
              <motion.button 
                key={ingredient}
                className="bg-sky-900/50 hover:bg-sky-800/60 px-3 py-1 rounded-full text-sm text-sky-200 backdrop-blur-sm transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePopularClick(ingredient)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
              >
                {ingredient}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
