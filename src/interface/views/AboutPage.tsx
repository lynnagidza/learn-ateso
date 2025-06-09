import NavBar from "../../frameworks/components/NavBar";

export default function AboutPage() {
  return (
    <>    
      <NavBar />
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg">
        This is where I'll introduce myself in Ateso and explain why I built this site.
      </p>
    </main>
    </>
  );
}
