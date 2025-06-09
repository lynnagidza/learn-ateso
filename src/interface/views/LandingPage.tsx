import Button from "../../frameworks/components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import words from "../../infrastructure/data/words.json";

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Eyai!";
  if (hour < 18) return "Ejai!";
  return "Ekop!";
}


export default function LandingPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
const [result, setResult] = useState<string | null>(null);

function handleSearch() {
  const found = words.find(
    (entry) => entry.word.toLowerCase() === query.toLowerCase()
  );
  setResult(found ? found.meaning : "Word not found.");
}

  return (
  <main className="flex flex-col items-center justify-center flex-grow px-4 bg-blush text-cozyText">
      <h1 className="text-5xl font-heading font-bold mb-8 text-cozyText drop-shadow-sm text-center">
  {getTimeGreeting()}, Friend!
</h1>


      <input
  type="text"
  placeholder="Search for a word..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="mb-4 p-4 border border-warmBrown rounded-md w-72 focus:ring-2 focus:ring-warmBrown focus:outline-none transition"
/>

<button
  onClick={handleSearch}
  className="mb-6 px-4 py-2 bg-warmBrown text-white rounded hover:bg-cozyText transition"
>
  Search
</button>

{result && (
  <p className="text-lg font-semibold text-cozyText mb-6">{result}</p>
)}

      <div className="flex flex-col gap-5 w-full max-w-xs">
        <Button label="Greetings" onClick={() => navigate("/greetings")} variant="primary" />
        <Button label="Proverbs" onClick={() => navigate("/proverbs")} variant="secondary" />
        <Button label="Leave a Lesson" onClick={() => navigate("/leave-lesson")} variant="primary" />
      </div>
    </main>
  );
}
