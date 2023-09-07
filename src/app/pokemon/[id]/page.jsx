import { Suspense } from "react";
import Loading from "../../loading.tsx";
import PokemonName from "./pokemon.jsx";

export const metadata = {
  title: "Pokemon",
  description: "My Pokemon App",
};

export default function Page(props) {
  const id = props.params.id;
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <PokemonName pokedexnumber={id} />
      </Suspense>
    </main>
  );
}
