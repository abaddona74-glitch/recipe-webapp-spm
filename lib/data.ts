import { Recipe } from "./types";
import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "recipes.json");

const initialRecipes: Recipe[] = [
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

async function getRecipesFromFile(): Promise<Recipe[]> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, create it with initial recipes
    await fs.writeFile(DB_PATH, JSON.stringify(initialRecipes, null, 2));
    return initialRecipes;
  }
}

async function saveRecipesToFile(recipes: Recipe[]) {
  await fs.writeFile(DB_PATH, JSON.stringify(recipes, null, 2));
}

export const getRecipes = async (): Promise<Recipe[]> => {
  return await getRecipesFromFile();
};

export const getRecipe = async (id: string): Promise<Recipe | undefined> => {
  const recipes = await getRecipesFromFile();
  return recipes.find((recipe) => recipe.id === id);
};

export const addRecipe = async (recipe: Omit<Recipe, "id">): Promise<Recipe> => {
  const recipes = await getRecipesFromFile();
  const newRecipe = { ...recipe, id: Math.random().toString(36).substring(7) };
  recipes.push(newRecipe);
  await saveRecipesToFile(recipes);
  return newRecipe;
};

export const updateRecipe = async (id: string, updatedRecipe: Omit<Recipe, "id">): Promise<Recipe | null> => {
  const recipes = await getRecipesFromFile();
  const index = recipes.findIndex((r) => r.id === id);
  if (index === -1) return null;
  recipes[index] = { ...updatedRecipe, id };
  await saveRecipesToFile(recipes);
  return recipes[index];
};

export const deleteRecipe = async (id: string): Promise<boolean> => {
  let recipes = await getRecipesFromFile();
  const initialLength = recipes.length;
  recipes = recipes.filter((r) => r.id !== id);
  if (recipes.length !== initialLength) {
    await saveRecipesToFile(recipes);
    return true;
  }
  return false;
};
