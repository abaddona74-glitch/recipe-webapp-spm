import { getRecipes } from "@/lib/data";
import Link from "next/link";
import { deleteRecipeAction } from "../actions";

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Recipes</h1>
        <Link
          href="/recipes/create"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Recipe
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border p-4 rounded shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-800"
          >
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <Link
                href={`/recipes/${recipe.id}/edit`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <form action={deleteRecipeAction.bind(null, recipe.id)}>
                <button
                  type="submit"
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
      {recipes.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No recipes found. Create one!</p>
      )}
    </main>
  );
}
