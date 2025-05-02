import { Link } from "wouter";
import { Facebook, Twitter, Instagram, AtSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-14 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg
                className="w-10 h-10"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bowl base with gradient */}
                <path
                  d="M10 24C10 24 4 34 4 44C4 54 14 56 32 56C50 56 60 54 60 44C60 34 54 24 54 24H10Z"
                  fill="url(#footer-bowl-gradient)"
                />

                {/* Steam paths with animation */}
                <path
                  className="steam steam-1"
                  d="M24 10C24 10 20 14 24 18C28 22 24 26 24 26"
                  stroke="#9C44DC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  className="steam steam-2"
                  d="M32 6C32 6 28 10 32 14C36 18 32 22 32 22"
                  stroke="#0078FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  className="steam steam-3"
                  d="M40 10C40 10 36 14 40 18C44 22 40 26 40 26"
                  stroke="#FF9933"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Spoon */}
                <path
                  d="M46 22C46 18 50 16 52 14C54 12 54 8 50 6C46 4 44 8 44 10C44 12 42 16 46 22Z"
                  fill="#E0E0E0"
                  stroke="#CCCCCC"
                  strokeWidth="1"
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient
                    id="footer-bowl-gradient"
                    x1="4"
                    y1="24"
                    x2="60"
                    y2="56"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#0078FF" />
                    <stop offset="1" stopColor="#9C44DC" />
                  </linearGradient>

                  {/* Animation for steam */}
                  <style>{`
                    .steam {
                      opacity: 0.8;
                      animation-name: steam-animation;
                      animation-duration: 3s;
                      animation-timing-function: ease-in-out;
                      animation-iteration-count: infinite;
                    }
                    .steam-1 {
                      animation-delay: 0.1s;
                    }
                    .steam-2 {
                      animation-delay: 0.5s;
                    }
                    .steam-3 {
                      animation-delay: 0.9s;
                    }
                    @keyframes steam-animation {
                      0% { transform: translateY(0) scale(1); opacity: 0.8; }
                      50% { transform: translateY(-5px) scale(1.1); opacity: 0.6; }
                      100% { transform: translateY(0) scale(1); opacity: 0.8; }
                    }
                  `}</style>
                </defs>
              </svg>
              <span className="font-heading font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ml-1">
                Recipe Finder
              </span>
            </div>
            <p className="text-blue-100 mb-4">
              Discover delicious recipes with ingredients you already have in
              your kitchen.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600/30 p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-500 transition-all social-icon"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600/30 p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-500 transition-all social-icon"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600/30 p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-500 transition-all social-icon"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600/30 p-2 rounded-full text-blue-100 hover:text-white hover:bg-blue-500 transition-all social-icon"
              >
                <AtSign className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <div
                  onClick={() => (window.location.href = "/")}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Home
                </div>
              </li>
              <li>
                <div
                  onClick={() => (window.location.href = "/about")}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> About Us
                </div>
              </li>
              <li>
                <div
                  onClick={() => (window.location.href = "/contact")}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Contact
                </div>
              </li>
              <li>
                <div
                  onClick={() => (window.location.href = "/favorites")}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Favorites
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Meal Planner
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text inline-block">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Chicken
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Beef
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Rice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Fish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Tomato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="text-blue-300 mr-2">›</span> Lentils
                </a>
              </li>
            </ul>
          </div>

          {/* Recipe Platter Image */}
          <div className="hidden xl:block">
            <h3 className="font-heading font-semibold text-lg mb-4 bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text inline-block">
              Featured Recipes
            </h3>
            <div className="relative group overflow-hidden rounded-2xl border-2 border-blue-500/20 transition-all">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Food platter with various dishes"
                className="rounded-xl object-cover w-full h-48 transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="font-heading font-semibold text-sm">
                  Discover new flavors every day!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            &copy; {new Date().getFullYear()} Recipe Finder. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-blue-200 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-blue-200 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-blue-200 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Floating Recipe Platter on Right */}
      {/* <div className="hidden lg:block absolute right-10 xl:right-20 top-1/2 transform -translate-y-1/2">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&bg=none"
          alt="Beautiful food platter"
          className="rounded-full border-2 border-primary object-cover w-64 h-64 animate-float-and-spin mix-blend-luminosity"
          style={{
            filter: "drop-shadow(0 20px 13px rgba(0, 0, 0, 0.4))",
          }}
        />
      </div> */}
    </footer>
  );
};

export default Footer;
