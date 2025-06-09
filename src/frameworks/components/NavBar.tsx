import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="bg-yellow-300 p-4 flex items-center justify-between shadow-md" aria-label="Main navigation">
        <h1 className="font-bold text-xl">Learn Ateso 🌸</h1>
        <div className="flex gap-6">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/greetings">Greetings</Link>
          <Link className="hover:underline" to="/proverbs">Proverbs</Link>
          <Link className="hover:underline" to="/leave-lesson">Leave a Lesson</Link>
          <Link className="hover:underline" to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
