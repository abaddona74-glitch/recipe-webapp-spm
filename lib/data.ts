import { Recipe } from "./types";

let recipes: Recipe[] = [
  {
    id: "1",
    title: "Pasta Carbonara",
    ingredients: "Spaghetti, Eggs, Pecorino Cheese, Guanciale, Black Pepper",
    instructions: "1. Boil pasta. 2. Fry guanciale. 3. Mix eggs and cheese. 4. Combine all.",
  },
  {
    id: "2",
    title: "Tomato Soup",
    ingredients: "Tomatoes, Onion, Garlic, Vegetable Broth, Basil",
    instructions: "1. Sauté onions and garlic. 2. Add tomatoes and broth. 3. Simmer. 4. Blend.",
  },
];

export const getRecipes = async (): Promise<Recipe[]> => {
  return recipes;
};

export const getRecipe = async (id: string): Promise<Recipe | undefined> => {
  return recipes.find((recipe) => recipe.id === id);
};

export const addRecipe = async (recipe: Omit<Recipe, "id">): Promise<Recipe> => {
  const newRecipe = { ...recipe, id: Math.random().toString(36).substring(7) };
  recipes.push(newRecipe);
  return newRecipe;
};

export const updateRecipe = async (id: string, updatedRecipe: Omit<Recipe, "id">): Promise<Recipe | null> => {
  const index = recipes.findIndex((r) => r.id === id);
  if (index === -1) return null;
  recipes[index] = { ...updatedRecipe, id };
  return recipes[index];
};

export const deleteRecipe = async (id: string): Promise<boolean> => {
  const initialLength = recipes.length;
  recipes = recipes.filter((r) => r.id !== id);
  return recipes.length !== initialLength;
};
