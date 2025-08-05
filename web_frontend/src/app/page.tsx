import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/lib/mock-data";

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
