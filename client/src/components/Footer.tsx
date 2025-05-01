import { Link } from "wouter";
import { Facebook, Twitter, Instagram, AtSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-14 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
              </svg>
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-blue-200 to-white text-transparent bg-clip-text">Recipe Finder</span>
            </div>
            <p className="text-blue-100 mb-4">Discover delicious recipes with ingredients you already have in your kitchen.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600/30 p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-500 transition-all transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600/30 p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-500 transition-all transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600/30 p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-500 transition-all transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600/30 p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-500 transition-all transform hover:scale-110">
                <AtSign className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><div onClick={() => window.location.href = '/'} className="text-blue-100 hover:text-white transition-colors cursor-pointer flex items-center"><span className="text-blue-300 mr-2">›</span> Home</div></li>
              <li><div onClick={() => window.location.href = '/about'} className="text-blue-100 hover:text-white transition-colors cursor-pointer flex items-center"><span className="text-blue-300 mr-2">›</span> About Us</div></li>
              <li><div onClick={() => window.location.href = '/contact'} className="text-blue-100 hover:text-white transition-colors cursor-pointer flex items-center"><span className="text-blue-300 mr-2">›</span> Contact</div></li>
              <li><div onClick={() => window.location.href = '/favorites'} className="text-blue-100 hover:text-white transition-colors cursor-pointer flex items-center"><span className="text-blue-300 mr-2">›</span> Favorites</div></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center"><span className="text-blue-300 mr-2">›</span> Meal Planner</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text inline-block">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center"><span className="text-blue-300 mr-2">›</span> Chicken</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center"><span className="text-blue-300 mr-2">›</span> Beef</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center"><span className="text-blue-300 mr-2">›</span> Rice</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center"><span className="text-blue-300 mr-2">›</span> Fish</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center"><span className="text-blue-300 mr-2">›</span> Tomato</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center"><span className="text-blue-300 mr-2">›</span> Lentils</a></li>
            </ul>
          </div>
          
          {/* Recipe Platter Image */}
          <div className="hidden xl:block">
            <h3 className="font-heading font-semibold text-lg mb-4 bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text inline-block">Featured Recipes</h3>
            <div className="relative group overflow-hidden rounded-2xl border-2 border-blue-500/20 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Food platter with various dishes" 
                className="rounded-xl object-cover w-full h-48 transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="font-heading font-semibold text-sm">Discover new flavors every day!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">&copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Floating Recipe Platter on Right */}
      <div className="hidden lg:block absolute right-10 xl:right-20 top-1/2 transform -translate-y-1/2">
        <img 
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&bg=none" 
          alt="Beautiful food platter" 
          className="rounded-full border-2 border-primary object-cover w-64 h-64 animate-float-and-spin mix-blend-luminosity" 
          style={{
            filter: 'drop-shadow(0 20px 13px rgba(0, 0, 0, 0.4))'
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
