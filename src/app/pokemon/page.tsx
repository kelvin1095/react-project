import TypeOption from "./type.tsx";

let types = [
  {
    id: 0,
    type: "",
  },
  {
    id: 1,
    type: "Normal",
  },
  {
    id: 2,
    type: "Fighting",
  },
  {
    id: 3,
    type: "Flying",
  },
  {
    id: 4,
    type: "Poison",
  },
  {
    id: 5,
    type: "Ground",
  },
  {
    id: 6,
    type: "Rock",
  },
  {
    id: 7,
    type: "Bug",
  },
  {
    id: 8,
    type: "Ghost",
  },
  {
    id: 9,
    type: "Steel",
  },
  {
    id: 10,
    type: "Fire",
  },
  {
    id: 11,
    type: "Water",
  },
  {
    id: 12,
    type: "Grass",
  },
  {
    id: 13,
    type: "Electric",
  },
  {
    id: 14,
    type: "Psychic",
  },
  {
    id: 15,
    type: "Ice",
  },
  {
    id: 16,
    type: "Dragon",
  },
  {
    id: 17,
    type: "Dark",
  },
  {
    id: 18,
    type: "Fairy",
  },
];

export const metadata = {
  title: "Pokemon",
  description: "My Pokemon App",
};

export default function Page() {
  return (
    <main>
      <h1>My Pokemon Page!</h1>
      <div id="mainPokemon">
        <div id="pokemonSelector">
          <h2>Select Pokemon Type</h2>

          <form id="selectType">
            <label>Type 1:</label>
            <select name="Type" id="type-select-primary">
              <TypeOption types={types} />
            </select>
            <label>Type 2:</label>
            <select name="Type" id="type-select-secondary">
              <TypeOption types={types} />
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
