import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints for recipes
  
  // Get recipes by ingredient
  app.get('/api/recipes/ingredient/:ingredient', async (req, res) => {
    try {
      const ingredient = req.params.ingredient;
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`);
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          message: `TheMealDB API error: ${response.statusText}` 
        });
      }
      
      const data = await response.json();
      return res.json(data);
    } catch (error) {
      console.error('Error fetching recipes by ingredient:', error);
      return res.status(500).json({ 
        message: 'Failed to fetch recipes from TheMealDB API' 
      });
    }
  });

  // Get recipe details by ID
  app.get('/api/recipes/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          message: `TheMealDB API error: ${response.statusText}` 
        });
      }
      
      const data = await response.json();
      return res.json(data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      return res.status(500).json({ 
        message: 'Failed to fetch recipe details from TheMealDB API' 
      });
    }
  });

  // Get random recipe
  app.get('/api/recipes/random', async (req, res) => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          message: `TheMealDB API error: ${response.statusText}` 
        });
      }
      
      const data = await response.json();
      return res.json(data);
    } catch (error) {
      console.error('Error fetching random recipe:', error);
      return res.status(500).json({ 
        message: 'Failed to fetch random recipe from TheMealDB API' 
      });
    }
  });

  // Get recipes by category
  app.get('/api/recipes/category/:category', async (req, res) => {
    try {
      const category = req.params.category;
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`);
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          message: `TheMealDB API error: ${response.statusText}` 
        });
      }
      
      const data = await response.json();
      return res.json(data);
    } catch (error) {
      console.error('Error fetching recipes by category:', error);
      return res.status(500).json({ 
        message: 'Failed to fetch recipes from TheMealDB API' 
      });
    }
  });

  // Get all categories
  app.get('/api/categories', async (req, res) => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          message: `TheMealDB API error: ${response.statusText}` 
        });
      }
      
      const data = await response.json();
      return res.json(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      return res.status(500).json({ 
        message: 'Failed to fetch categories from TheMealDB API' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
