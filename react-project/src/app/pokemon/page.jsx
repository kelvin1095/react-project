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
              <option value=""></option>
              <option value="Normal">Normal</option>
              <option value="Fighting">Fighting</option>
              <option value="Flying">Flying</option>
              <option value="Poison">Poison</option>
              <option value="Ground">Ground</option>
              <option value="Rock">Rock</option>
              <option value="Bug">Bug</option>
              <option value="Ghost">Ghost</option>
              <option value="Steel">Steel</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Grass">Grass</option>
              <option value="Electric">Electric</option>
              <option value="Psychic">Psychic</option>
              <option value="Ice">Ice</option>
              <option value="Dragon">Dragon</option>
              <option value="Dark">Dark</option>
              <option value="Fairy">Fairy</option>
            </select>
            <label>Type 2:</label>
            <select name="Type" id="type-select-secondary">
              <option value=""></option>
              <option value="Normal">Normal</option>
              <option value="Fighting">Fighting</option>
              <option value="Flying">Flying</option>
              <option value="Poison">Poison</option>
              <option value="Ground">Ground</option>
              <option value="Rock">Rock</option>
              <option value="Bug">Bug</option>
              <option value="Ghost">Ghost</option>
              <option value="Steel">Steel</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Grass">Grass</option>
              <option value="Electric">Electric</option>
              <option value="Psychic">Psychic</option>
              <option value="Ice">Ice</option>
              <option value="Dragon">Dragon</option>
              <option value="Dark">Dark</option>
              <option value="Fairy">Fairy</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div id="pokemonDisplay">
          <h2>Pokemon Info</h2>
          <form id="selectPokemon">
            <label>Pokemon Name:</label>
            <input type="text" id="pokemon-select" placeholder="Type Name Here" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
