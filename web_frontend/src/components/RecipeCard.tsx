import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/recipes/${recipe.id}`}>
        <div>
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
