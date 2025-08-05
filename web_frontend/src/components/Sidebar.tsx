import Link from "next/link";

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snacks",
  "Vegetarian",
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <Link href={`/category/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
