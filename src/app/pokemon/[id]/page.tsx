import { Suspense } from "react";
import Link from "next/link";

import Loading from "../../loading.tsx";
import PokemonName from "./pokemon.tsx";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Pokemon",
  description: "My Pokemon App",
};

async function getPokemonData(id: string) {
  const data = await fetch("http://localhost:3000/api/" + id, {
    next: {
      revalidate: 0,
    },
  });

  // console.log("getPokemonData");
  // console.log(data);

  if (!data.ok) {
    notFound();
  }

  return data.json();
}

export default async function Page(props: { params: { id: string } }) {
  const id: string = props.params.id;

  const data = await getPokemonData(id);

  // console.log("Page.tsx");
  // console.log(data);

  // let pokemonInfo = data.rows;

  return (
    <main>
      <Link href="/pokemon">Go Back</Link>
      <Suspense fallback={<Loading />}>
        <PokemonName data={data} />
      </Suspense>
    </main>
  );
}
