import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll for transparent navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Favorites", path: "/favorites" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      className={`${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'} transition-all duration-300 sticky top-0 z-50`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.5 }
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative">
          <motion.div 
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
            </svg>
            <span className="font-heading font-bold text-xl text-primary">Recipe Finder</span>
          </motion.div>
          
          {/* Desktop Navigation - Centered */}
          <motion.div 
            className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.path}
                onClick={() => window.location.href = link.path}
                className={`font-heading font-medium transition-colors duration-200 cursor-pointer ${
                  location === link.path ? "text-primary" : "hover:text-primary"
                }`}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20, 
                  delay: 0.4 + (index * 0.1) 
                }}
                whileHover={{ y: -4, color: "#ff6b6b" }}
                whileTap={{ y: 0, scale: 0.95 }}
              >
                {link.name}
              </motion.div>
            ))}
            
          </motion.div>
          
          {/* Theme Toggle Button - Right side */}
          <motion.div className="flex justify-end items-center">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6,
                type: "spring", 
                stiffness: 200 
              }}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.8 }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-dark dark:text-white focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.5 
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </motion.button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden pt-4 pb-2"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ 
              height: { duration: 0.4 },
              opacity: { duration: 0.3 },
              y: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.path}
                className={`block py-2 font-heading font-medium cursor-pointer ${
                  location === link.path ? "text-primary" : ""
                }`}
                onClick={() => {
                  window.location.href = link.path;
                  setMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring",
                  damping: 25, 
                  stiffness: 300,
                  delay: 0.1 + (index * 0.08)
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.div>
            ))}
            <div className="flex items-center space-x-3 mt-4 justify-between">
              <Button 
                className="flex-1 rounded-full font-heading font-medium"
                onClick={() => {
                  window.location.href = '/favorites';
                  setMobileMenuOpen(false);
                }}
              >
                <i className="fas fa-heart mr-1"></i> Favorites
              </Button>
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  type: "spring", 
                  stiffness: 200 
                }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.8 }}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
