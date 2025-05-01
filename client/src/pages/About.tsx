import { motion } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <motion.div 
      className="animate-fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-black opacity-80"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="lg" emphasis="accent" color="blue" className="mb-4 text-blue-500">
              About Recipe Finder
            </Heading>
            <p className="text-lg md:text-xl mb-0 text-blue-400">Discover the story behind our passion for food</p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="md" className="mb-6">Our Mission</Heading>
            <p className="text-gray-700 mb-4">At Recipe Finder, we believe that cooking should be accessible, enjoyable, and stress-free for everyone. Our mission is to help you discover delicious recipes based on ingredients you already have in your kitchen.</p>
            <p className="text-gray-700 mb-4">Whether you're a beginner cook looking for simple meals, or an experienced chef seeking new inspiration, Recipe Finder provides personalized recipe recommendations tailored to your preferences and available ingredients.</p>
            <p className="text-gray-700">We're passionate about reducing food waste, encouraging creativity in the kitchen, and bringing people together through the joy of cooking and sharing meals.</p>
          </motion.div>
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="People cooking together" className="w-full h-full object-cover" />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg md:order-1 order-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Our team" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            className="md:order-2 order-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading as="h2" size="md" className="mb-6">Our Story</Heading>
            <p className="text-gray-700 mb-4">Recipe Finder was founded in 2023 by a group of food enthusiasts who were frustrated with having to search through countless recipes to find ones that matched the ingredients they had on hand.</p>
            <p className="text-gray-700 mb-4">What started as a small project to solve our own cooking dilemmas quickly grew into a comprehensive platform used by thousands of home cooks around the world.</p>
            <p className="text-gray-700">Our team combines culinary expertise with cutting-edge technology to create an intuitive and helpful tool that makes meal planning easier and more enjoyable.</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" size="md" className="mb-10">Our Values</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-seedling"></i>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-700">We promote sustainable cooking practices and help reduce food waste by suggesting recipes based on what you already have.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-700">We believe in the power of food to bring people together and foster connections across cultures and communities.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-700">We continuously improve our platform with new features and recipes to inspire creativity and make cooking more enjoyable.</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Heading as="h2" size="md" className="mb-8">Join Our Community</Heading>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">Stay updated with the latest recipes, cooking tips, and features by subscribing to our newsletter.</p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input type="email" className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your email address" />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-primary hover:text-primary/80 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary/80 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary/80 text-2xl">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary/80 text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
