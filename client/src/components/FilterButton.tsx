import { motion } from "framer-motion";

interface FilterButtonProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, active = false, onClick }: FilterButtonProps) => {
  return (
    <motion.button
      className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
        active 
          ? "bg-primary text-white" 
          : "bg-gray-200 hover:bg-gray-300"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label}
    </motion.button>
  );
};

export default FilterButton;
