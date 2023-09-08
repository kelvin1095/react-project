import TypeForm from "./typeForm.tsx";

export const metadata = {
  title: "Pokemon",
  description: "My Pokemon App",
};

export default function Page() {
  console.log("Page");

  return (
    <main>
      <h1 className="text-center text-4xl p-4">My Pokemon Page!</h1>
      <h2 className="text-center text-2xl p-3">Select Pokemon Type</h2>

      <div id="pokemonSelector" className="text-center p-5"></div>
      <TypeForm />
    </main>
  );
}
