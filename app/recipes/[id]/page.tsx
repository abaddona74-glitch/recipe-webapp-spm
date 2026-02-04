import { getRecipe } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

interface RecipePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <Link href="/recipes" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Recipes
      </Link>
      
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        {recipe.image && (
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-64 object-cover"
          />
        )}
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
              {recipe.ingredients}
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
              {recipe.instructions}
            </p>
          </div>
          
          <div className="mt-8 flex gap-4 border-t pt-4">
            <Link
              href={`/recipes/${recipe.id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit Recipe
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
