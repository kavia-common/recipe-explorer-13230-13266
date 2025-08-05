import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/lib/mock-data";

export async function generateStaticParams() {
  const categories = [...new Set(recipes.map((recipe) => recipe.category.toLowerCase()))];
  return categories.map((slug) => ({
    slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category.toLowerCase() === params.slug.toLowerCase()
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Category: {categoryName}</h1>
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>No recipes found in this category.</p>
      )}
    </div>
  );
}
