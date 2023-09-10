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

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  let result;

  try {
    let queryString: string;
    const client = await pool.connect();
    if (type2 === "") {
      queryString =
        "SELECT pokedexnumber, name, form FROM pokemon WHERE type1 = $1 AND type2 IS NULL ORDER BY pokedexnumber;";
      result = await client.query(queryString, [type1]);
    } else {
      queryString =
        "SELECT pokedexnumber, name, form FROM pokemon WHERE (type1 = $1 AND type2 = $2) OR (type1 = $2 AND type2 = $1) ORDER BY pokedexnumber;";
      result = await client.query(queryString, [type1, type2]);
    }

    client.release();
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
  return NextResponse.json(result.rows);
}
