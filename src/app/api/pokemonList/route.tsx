import { NextResponse } from "next/server";

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

export async function POST(request: Request, response: Response) {
  const { type1, type2 } = await request.json();
  console.log("pokemonList/route.tsx", type1);

  let result;

  try {
    const client = await pool.connect();
    result = await client.query("SELECT * FROM pokemon WHERE type1 = $1 AND type2 = $2 ORDER BY pokedexnumber;", [
      type1,
      type2,
    ]);
    client.release();
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
  return NextResponse.json(result.rows);
}
