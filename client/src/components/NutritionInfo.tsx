import { motion } from "framer-motion";

interface NutritionValue {
  label: string;
  value: string;
}

interface NutritionInfoProps {
  values: NutritionValue[];
}

const NutritionInfo = ({ values }: NutritionInfoProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-heading text-xl font-bold mb-4">Nutrition Information</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {values.map((item, index) => (
          <motion.div 
            key={item.label}
            className="bg-gray-50 p-3 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="block text-gray-500 text-sm">{item.label}</span>
            <span className="block font-medium text-lg">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NutritionInfo;
