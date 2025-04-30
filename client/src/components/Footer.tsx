import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark to-dark/90 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
              </svg>
              <span className="font-heading font-bold text-xl">Recipe Finder</span>
            </div>
            <p className="text-gray-400 mb-4">Discover delicious recipes with ingredients you already have in your kitchen.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><div onClick={() => window.location.href = '/'} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">Home</div></li>
              <li><div onClick={() => window.location.href = '/about'} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">About Us</div></li>
              <li><div onClick={() => window.location.href = '/contact'} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">Contact</div></li>
              <li><div onClick={() => window.location.href = '/favorites'} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">Favorites</div></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Meal Planner</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Breakfast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Lunch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Dinner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Desserts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Vegetarian</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest recipes and cooking tips.</p>
            <div className="flex">
              <input 
                type="email" 
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary text-dark" 
                placeholder="Your email" 
              />
              <button className="bg-primary hover:bg-primary/90 px-6 py-2 rounded-r-lg transition-colors flex items-center font-medium">
                <span className="mr-2 hidden sm:inline">Subscribe</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
