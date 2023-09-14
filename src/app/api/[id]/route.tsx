import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

let minPokedexNumber: number = 1;
let maxPokedexNumber: number = 1010;

export async function GET(request: Request, context: { params: { id: string } }, response: Response) {
  if (parseInt(context.params.id) >= minPokedexNumber && parseInt(context.params.id) <= maxPokedexNumber) {
    const id: string = context.params.id;

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    let result;
    let status;

    try {
      const client = await pool.connect();
      result = await client.query("SELECT * FROM pokemon WHERE pokedexnumber = $1;", [id]);
      // console.log(result);
      client.release();
      status = 200;
    } catch (error) {
      console.error("Error connecting to PostgreSQL:", error);
      status = 500;
    }

    return NextResponse.json(result.rows);
  } else {
    return undefined;
  }
}
