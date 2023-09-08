import { NextResponse } from "next/server";

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

export async function GET(request: Request, context: { params: { id: string } }, response: Response) {
  const id: string = context.params.id;
  console.log("route.tsx", id);

  let result;

  try {
    const client = await pool.connect();
    result = await client.query("SELECT * FROM pokemon WHERE pokedexnumber = $1;", [id]);
    client.release();
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
  return NextResponse.json(result.rows);
}
