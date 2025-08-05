import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/lib/mock-data"; // Using mock data for now

export default function FavoritesPage() {
  // In a real app, you would fetch the user's favorite recipes
  const favoriteRecipes = recipes.slice(0, 2); // Mocking favorites

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Favorites</h1>
      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>You have no favorite recipes yet.</p>
      )}
    </div>
  );
}
