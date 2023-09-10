"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

import TypeOption from "./type.tsx";

let types = [
  {
    id: 0,
    type: "",
  },
  {
    id: 1,
    type: "Normal",
  },
  {
    id: 2,
    type: "Fighting",
  },
  {
    id: 3,
    type: "Flying",
  },
  {
    id: 4,
    type: "Poison",
  },
  {
    id: 5,
    type: "Ground",
  },
  {
    id: 6,
    type: "Rock",
  },
  {
    id: 7,
    type: "Bug",
  },
  {
    id: 8,
    type: "Ghost",
  },
  {
    id: 9,
    type: "Steel",
  },
  {
    id: 10,
    type: "Fire",
  },
  {
    id: 11,
    type: "Water",
  },
  {
    id: 12,
    type: "Grass",
  },
  {
    id: 13,
    type: "Electric",
  },
  {
    id: 14,
    type: "Psychic",
  },
  {
    id: 15,
    type: "Ice",
  },
  {
    id: 16,
    type: "Dragon",
  },
  {
    id: 17,
    type: "Dark",
  },
  {
    id: 18,
    type: "Fairy",
  },
];

interface PokemonInfo {
  pokedexnumber: number;
  name: string;
  form: string;
}

async function fetchPokemonList(type1: string, type2: string) {
  const url = `/api/pokemonList`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type1, type2 }),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch data from the server");
  }
}

function formNameDisplay(form: string) {
  let formDisplay = "";
  if (form !== null) {
    formDisplay = "(" + form + ")";
  }
  return formDisplay;
}

export default function TypeForm() {
  const [primaryType, setPrimaryValue] = useState<string>("");
  const [secondaryType, setSecondaryValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const primaryDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrimaryValue(event.target.value);
  };
  const secondaryDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSecondaryValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await fetchPokemonList(primaryType, secondaryType);
      setSearchResults(data);
    } catch (error) {
      console.error(error);
      notFound();
    }
    setFormSubmitted(true);
  };

  return (
    <div>
      <form id="selectType" onSubmit={handleSubmit} className="text-center bg-s">
        <label className="p-3">
          Type 1:
          <select name="primaryType" onChange={primaryDropdownChange}>
            <TypeOption types={types} />
          </select>
        </label>
        <label className="p-3">
          Type 2:
          <select name="secondaryType" onChange={secondaryDropdownChange}>
            <TypeOption types={types} />
          </select>
        </label>
        <button type="submit" className="p-3">
          Submit
        </button>
      </form>

      <div className="pt-10">
        <h2 className="text-center text-2xl pb-5">Search Results</h2>
        {formSubmitted && searchResults.length === 0 ? (
          <h3 className="text-center text-xl mt-20">No Results</h3>
        ) : (
          <ul>
            {searchResults.map((result: PokemonInfo, index: number) => (
              <li key={index}>
                <Link href={"/pokemon/" + result.pokedexnumber.toString().padStart(4, "0")}>
                  #{result.pokedexnumber.toString().padStart(4, "0")} - {result.name} {formNameDisplay(result.form)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
