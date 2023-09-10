import { Suspense } from "react";

import Loading from "../../loading.tsx";
import PokemonName from "./pokemon.tsx";

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
  return data.json();
}

export default async function Page(props: { params: { id: string } }) {
  const id: string = props.params.id;

  const data = await getPokemonData(id);

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <PokemonName data={data} />
      </Suspense>
    </main>
  );
}
