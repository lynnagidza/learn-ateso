import NavBar from "../../frameworks/components/NavBar";

export default function GreetingsPage() {
  return (
    <>
      <NavBar />
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Greetings in Ateso</h1>
      <p className="text-lg">This page will showcase common Ateso greetings.</p>
    </main>
    </>
  );
}
