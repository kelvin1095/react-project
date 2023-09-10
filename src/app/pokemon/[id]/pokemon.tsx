"use client";

import Image from "next/image";
import React from "react";

import FormButton from "./forms.tsx";

interface PokemonInfo {
  pokedexnumber: number;
  name: string;
  form: string;
  pokemonimagefilename: string;
  type1: string;
  type2?: string;
  height: string;
  weight: string;
  ability1: string;
  ability2?: string;
  hiddenability?: string;
  hp: number;
  att: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
}

function formNameDisplay(form: string) {
  let formDisplay = "";
  if (form !== null) {
    formDisplay = "(" + form + ")";
  }
  return formDisplay;
}

export default function PokemonData(props: { data: PokemonInfo[] }) {
  const data = props.data;
  const [index, setIndex] = React.useState<number>(0);

  return (
    <div id="pokemonDisplay" className="w-3/4 border-solid border-2 border-black p-1 mx-auto">
      <div id="pokemonTitle" className="text-center text-3xl font-serif">
        <h3>
          #{data[index].pokedexnumber.toString().padStart(4, "0")} {data[index].name}{" "}
          {formNameDisplay(data[index].form)}
        </h3>
      </div>
      <div id="pokemonImage">
        <Image
          src={"/PokemonHome/" + data[index].pokemonimagefilename}
          alt={data[index].name}
          height={512}
          width={512}
        />
      </div>
      <div id="buttonContainer" className="text-center">
        <FormButton forms={data.length} setIndex={setIndex} />
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
                  {data[index].type1} {data[index].type2 || ""}
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
              <td>{data[index].height} m</td>
              <td>{data[index].weight} kg</td>
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
              <td>{data[index].ability1}</td>
              <td>{data[index].ability2 || ""}</td>
              <td>{data[index].hiddenability || ""}</td>
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
              <td>{data[index].hp}</td>
              <td>{data[index].att}</td>
              <td>{data[index].def}</td>
              <td>{data[index].spa}</td>
              <td>{data[index].spd}</td>
              <td>{data[index].spe}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
