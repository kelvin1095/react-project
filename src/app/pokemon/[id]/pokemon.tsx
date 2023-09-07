const { Pool } = require("pg");
import { notFound } from "next/navigation";
import Image from "next/image";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

async function testPostgres(id: string) {
  let client;
  let result;

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    client = await pool.connect();
    result = await client.query("SELECT * FROM pokemon where pokedexnumber = $1;", [id]);
    console.log("Connected to PostgreSQL successfully!", result.rows[0].name);
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
    result = "ERROR";
  } finally {
    if (client) {
      client.release();
    }
    if (result === "ERROR") {
      notFound();
    } else {
      return result.rows;
    }
  }
}

export default async function PokemonData(props: { pokedexnumber: string }) {
  const data = await testPostgres(props.pokedexnumber);

  // console.log(data);

  return (
    <div id="pokemonDisplay" className="w-3/4 border-solid border-2 border-black p-1 mx-auto">
      <div id="pokemonTitle" className="text-center text-3xl font-serif">
        <h3>
          #{data[0].pokedexnumber.toString().padStart(4, "0")} {data[0].name}
        </h3>
      </div>
      <div id="pokemonImage">
        <Image src={"/PokemonHome/" + data[0].pokemonimagefilename} alt={data[0].name} height={512} width={512} />
      </div>
      <div id="pokemonType">
        <table className="w-full table-fixed text-center border-solid border-2 border-black mt-1">
          <thead>
            <tr>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  {data[0].type1} {data[0].type2 || ""}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="pokemonInfo">
        <table className="w-full table-fixed text-center border-solid border-2 border-black mt-1">
          <thead>
            <tr>
              <th>Height</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data[0].height} m</td>
              <td>{data[0].weight} kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="pokemonAbility">
        <table className="w-full table-fixed text-center border-solid border-2 border-black mt-1">
          <thead>
            <tr>
              <th>Ability 1</th>
              <th>Ability 2</th>
              <th>Hidden Ability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data[0].ability1}</td>
              <td>{data[0].ability2 || ""}</td>
              <td>{data[0].hiddenability || ""}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="pokemonStats">
        <table className="w-full table-fixed text-center border-solid border-2 border-black mt-1">
          <thead>
            <tr>
              <th>HP</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Sp. Atk</th>
              <th>Sp. Def</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data[0].hp}</td>
              <td>{data[0].att}</td>
              <td>{data[0].def}</td>
              <td>{data[0].spa}</td>
              <td>{data[0].spd}</td>
              <td>{data[0].spe}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
