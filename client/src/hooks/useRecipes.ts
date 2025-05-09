import { useState } from "react";
import { Recipe, ApiResponse } from "@/types";
import { fetchMealsByIngredient, fetchMealById, fetchRandomMeal, fetchMealsByCategory } from "@/lib/api";

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentQuery, setCurrentQuery] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const searchRecipes = async (ingredient: string, append: boolean = false) => {
    setLoading(true);
    setError(null);
    setCurrentQuery(ingredient);
    setCurrentCategory(null);
    
    try {
      const data = await fetchMealsByIngredient(ingredient);
      if (data && data.meals) {
        const mealData = data.meals || [];
        if (append) {
          setRecipes(prevRecipes => [...prevRecipes, ...mealData]);
          // If we didn't get any new recipes, there are no more to load
          setHasMore(mealData.length > 0);
        } else {
          setRecipes(mealData);
          setHasMore(mealData.length > 0);
        }
      } else if (!append) {
        setRecipes([]);
        setHasMore(false);
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
      console.error("Error fetching recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  const getRecipeById = async (id: string): Promise<Recipe | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchMealById(id);
      if (data && data.meals && data.meals.length > 0) {
        return data.meals[0];
      }
      return null;
    } catch (err) {
      setError("Failed to fetch recipe details. Please try again.");
      console.error("Error fetching recipe details:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getRandomRecipes = async (count: number = 4): Promise<Recipe[]> => {
    const randomRecipes: Recipe[] = [];
    setLoading(true);
    setError(null);
    
    try {
      // Make multiple requests in parallel to get random recipes
      const promises = Array(count).fill(null).map(() => fetchRandomMeal());
      const results = await Promise.all(promises);
      
      results.forEach(data => {
        if (data && data.meals && data.meals.length > 0) {
          randomRecipes.push(data.meals[0]);
        }
      });
      
      return randomRecipes;
    } catch (err) {
      setError("Failed to fetch random recipes. Please try again.");
      console.error("Error fetching random recipes:", err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Get recipes by category (e.g., beef, chicken)
  const getRecipesByCategory = async (category: string, append: boolean = false) => {
    setLoading(true);
    setError(null);
    setCurrentCategory(category);
    setCurrentQuery(null);
    
    try {
      const data = await fetchMealsByCategory(category);
      if (data && data.meals) {
        const mealData = data.meals || [];
        if (append) {
          setRecipes(prevRecipes => [...prevRecipes, ...mealData]);
          // If we didn't get any new recipes, there are no more to load
          setHasMore(mealData.length > 0);
        } else {
          setRecipes(mealData);
          setHasMore(mealData.length > 0);
        }
      } else if (!append) {
        setRecipes([]);
        setHasMore(false);
      }
    } catch (err) {
      setError("Failed to fetch category recipes. Please try again.");
      console.error("Error fetching category recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to load more recipes based on current query/category
  const loadMore = async () => {
    if (loading || !hasMore) return;
    
    if (currentQuery) {
      await searchRecipes(currentQuery, true);
    } else if (currentCategory) {
      await getRecipesByCategory(currentCategory, true);
    }
  };

  return {
    recipes,
    setRecipes,
    loading,
    error,
    hasMore,
    currentQuery,
    currentCategory,
    searchRecipes,
    getRecipeById,
    getRandomRecipes,
    getRecipesByCategory,
    loadMore
  };
};
