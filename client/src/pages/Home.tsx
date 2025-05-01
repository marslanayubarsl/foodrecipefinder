import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import RecipeCard from "@/components/RecipeCard";
import FilterButton from "@/components/FilterButton";
import CollectionCard from "@/components/CollectionCard";
import { useRecipes } from "@/hooks/useRecipes";
import { useFavorites } from "@/hooks/useFavorites";
import { Recipe } from "@/types";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Chicken"); // Default to Chicken filter
  const { recipes, setRecipes, loading, error, hasMore, searchRecipes, getRandomRecipes, getRecipesByCategory, loadMore } = useRecipes();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const filters = [
    "All Recipes",
    "Chicken",
    "Beef",
    "Rice",
    "Fish",
    "Tomato",
    "Lentils"
  ];

  const collections = [
    {
      title: "Quick & Easy Meals",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Ready in 30 minutes or less - perfect for busy weeknights.",
      recipeCount: 12
    },
    {
      title: "Healthy Meal Prep",
      image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Nutritious recipes perfect for planning your weekly meals.",
      recipeCount: 15
    },
    {
      title: "Comfort Food Classics",
      image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Hearty and satisfying dishes that everyone will love.",
      recipeCount: 10
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    searchRecipes(query);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    
    // Handle different filter options
    if (filter === "All Recipes") {
      // Always load random recipes when "All Recipes" is clicked
      // This resets any previous search or category filtering
      setSearchQuery(""); // Clear the search query state
      getRandomRecipes(8).then(randomRecipes => {
        setRecipes(randomRecipes);
      });
    } else if (filter === "Fish") {
      // Fish should use Seafood category
      getRecipesByCategory("Seafood");
    } else if (["Rice", "Tomato", "Lentils"].includes(filter)) {
      // These are ingredients, not categories
      searchRecipes(filter);
    } else {
      // For categories like Chicken and Beef
      getRecipesByCategory(filter);
    }
  };

  const handleViewCollection = () => {
    // Set active filter to "All Recipes"
    setActiveFilter("All Recipes");
    // Clear any search query
    setSearchQuery("");
    // Load random recipes
    getRandomRecipes(8).then(randomRecipes => {
      setRecipes(randomRecipes);
    });
    // Scroll to the recipes section
    document.querySelector('.py-12.px-4.container')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Initial load
  useEffect(() => {
    // Load Chicken recipes by default
    getRecipesByCategory("Chicken");
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <Hero onSearch={handleSearch} />
      
      {/* Recipe Results Section */}
      <section className="py-12 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Discover Recipes</h2>
          <p className="text-gray-600 mb-8">
            {searchQuery 
              ? `Showing results for "${searchQuery}"` 
              : "Explore our collection of delicious recipes"}
          </p>
        </motion.div>
        
        {/* Filters Section */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => handleFilterClick(filter)}
            />
          ))}
        </div>
        
        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            // Loading skeleton
            Array(8).fill(null).map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center py-8">
              <p className="text-red-500 mb-4">Error loading recipes. Please try again.</p>
              <button 
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => searchRecipes(searchQuery || "chicken")}
              >
                Retry
              </button>
            </div>
          ) : recipes.length > 0 ? (
            recipes.map((recipe: Recipe, index: number) => (
              <RecipeCard 
                key={`${recipe.idMeal}-${index}`} 
                recipe={recipe} 
                index={index}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite(recipe.idMeal)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No recipes found. Try another search term.</p>
            </div>
          )}
        </div>
        
        {/* Load More Button */}
        {recipes.length > 0 && hasMore && (
          <div className="mt-12 text-center">
            <motion.button 
              onClick={loadMore}
              disabled={loading}
              className="bg-white border border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={loading ? {} : { scale: 1.05 }}
              whileTap={loading ? {} : { scale: 0.95 }}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                'Load More Recipes'
              )}
            </motion.button>
          </div>
        )}
      </section>
      
      {/* Featured Collections */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 dark:text-white">Recipe Collections</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Curated collections for every occasion</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.title}
                title={collection.title}
                image={collection.image}
                description={collection.description}
                recipeCount={collection.recipeCount}
                onViewCollection={handleViewCollection}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
