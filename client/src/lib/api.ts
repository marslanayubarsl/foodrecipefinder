import { ApiResponse } from "@/types";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Fetch meals by ingredient
export const fetchMealsByIngredient = async (ingredient: string): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return response.json();
};

// Fetch meal details by ID
export const fetchMealById = async (id: string): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return response.json();
};

// Fetch a random meal
export const fetchRandomMeal = async (): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/random.php`);
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return response.json();
};

// Fetch meals by category
export const fetchMealsByCategory = async (category: string): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/filter.php?c=${encodeURIComponent(category)}`);
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return response.json();
};

// Fetch meal categories
export const fetchCategories = async (): Promise<{ categories: { strCategory: string }[] }> => {
  const response = await fetch(`${API_BASE_URL}/categories.php`);
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return response.json();
};

// Fetch areas (cuisines)
export const fetchAreas = async (): Promise<{ meals: { strArea: string }[] }> => {
  const response = await fetch(`${API_BASE_URL}/list.php?a=list`);
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return response.json();
};
