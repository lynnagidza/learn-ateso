import Button from "../../frameworks/components/Button";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blush px-4">
      <h1 className="text-5xl font-heading font-bold mb-8 text-cozyText drop-shadow-sm text-center">
        Ekitok, Friend!
      </h1>

      <input
        type="text"
        placeholder="Search for a word..."
        className="mb-10 p-4 border border-warmBrown rounded-md w-72 focus:ring-2 focus:ring-warmBrown focus:outline-none transition"
      />

      <div className="flex flex-col gap-5 w-full max-w-xs">
        <Button label="Greetings" onClick={() => navigate("/greetings")} variant="primary" />
        <Button label="Proverbs" onClick={() => navigate("/proverbs")} variant="secondary" />
        <Button label="Leave a Lesson" onClick={() => navigate("/submit")} variant="primary" />
      </div>

      <footer className="mt-10 text-xs text-cozyText opacity-70">
        Sweet Ateso • v0.1.0 • {new Date().getFullYear()}
      </footer>
    </div>
  );
}
