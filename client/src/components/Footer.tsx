import { Link } from "wouter";
import { Facebook, Twitter, Instagram, AtSign } from "lucide-react";

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
              <a href="#" className="bg-gray-800/80 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800/80 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800/80 p-2 rounded-full text-gray-400 hover:text-pink-400 hover:bg-gray-700 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800/80 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                <AtSign className="w-5 h-5" />
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
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Chicken</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Beef</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Rice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Fish</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Tomato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Lentils</a></li>
            </ul>
          </div>
          
          <div className="bg-blue-600/20 p-6 rounded-xl shadow-lg border border-blue-300/30 backdrop-blur-sm">
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-gray-200 mb-4">Subscribe to get the latest recipes and cooking tips.</p>
            <div className="flex">
              <input 
                type="email" 
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-dark shadow-inner border border-blue-200 bg-white/95" 
                placeholder="Your email" 
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-r-lg transition-colors flex items-center font-medium shadow-md">
                <span className="mr-2 hidden sm:inline">Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
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
