import { updateRecipeAction } from "@/app/actions";
import RecipeForm from "@/components/RecipeForm";
import { getRecipe } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function EditRecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  if (!recipe) {
    notFound();
  }

  const bindedUpdateAction = async (data: any) => {
    "use server";
    await updateRecipeAction(id, data);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Recipe</h1>
      <RecipeForm recipe={recipe} onSubmit={bindedUpdateAction} />
    </main>
  );
}
