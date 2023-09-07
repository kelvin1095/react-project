import { Suspense } from "react";
import Loading from "../../loading.tsx";
import PokemonName from "./pokemon.tsx";

export const metadata = {
  title: "Pokemon",
  description: "My Pokemon App",
};

export default function Page(props: { params: { id: string } }) {
  const id: string = props.params.id;
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <PokemonName pokedexnumber={id} />
      </Suspense>
    </main>
  );
}
