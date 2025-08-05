import { recipes } from "@/lib/mock-data";
import Image from "next/image";

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={800}
        height={500}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-8">{recipe.description}</p>

      <div className="flex justify-end mb-4">
        <button className="bg-accent text-white px-4 py-2 rounded hover:bg-yellow-600">
          Save to Favorites
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-2">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
