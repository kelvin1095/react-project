// const { Pool } = require("pg");

interface TypeFormProps {
  type1: string;
  type2: string;
}

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "password",
//   port: 5432,
// });

export default async function TypeForm(props: TypeFormProps) {
  // const data = await testPostgres(props.type1, props.type2);
  console.log("help", props);
  return (
    <div>
      <h1>Help</h1>
    </div>
  );
}
