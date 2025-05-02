import { useState } from "react";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className = "" }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue); // Trigger search on submit
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // If input is cleared, show all recipes
    if (value.trim() === "") {
      onSearch(""); // Pass empty query to show all recipes
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-stretch gap-2 ${className}`}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="flex-grow px-6 py-4 text-black dark:text-white bg-white dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-lg font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400"
        placeholder="Enter an ingredient (e.g., 'chicken', 'tomato')"
        autoComplete="off"
        aria-label="Search for recipes by ingredient"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-7 py-5 rounded-full bg-primary text-white text-base font-semibold shadow-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Search"
      >
        Search
      </motion.button>
    </form>
  );
};

export default SearchBar;
