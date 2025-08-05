import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link href="/">Recipe Explorer</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
