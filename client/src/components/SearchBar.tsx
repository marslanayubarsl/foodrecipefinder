import { useState } from "react";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className = "" }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Trigger search on input changes
    if (value.trim()) {
      onSearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input 
        type="text" 
        value={searchQuery}
        onChange={handleChange}
        className="w-full px-6 py-4 pr-12 text-dark bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-lg font-medium" 
        placeholder="Enter an ingredient (e.g., 'chicken', 'tomato')"
        aria-label="Search for recipes by ingredient"
      />
      <motion.button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-dark transition-colors"
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Search"
      >
        <i className="fas fa-search fa-lg"></i>
      </motion.button>
    </form>
  );
};

export default SearchBar;
