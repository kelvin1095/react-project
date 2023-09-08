"use client";

import React, { useState, Suspense } from "react";

import TypeOption from "./type.tsx";
import SearchResults from "./typeQuery.tsx";

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

async function testPostgres(type1: string, type2: string) {
  const url = `/api/pokemonList`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type1, type2 }),
  });

  console.log(response);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch data from the server");
  }
}

export default function TypeForm() {
  console.log("TypeForm");
  const [primaryType, setPrimaryValue] = useState<string>("");
  const [secondaryType, setSecondaryValue] = useState<string>("");
  // const [searchResults, setSearchResults] = useState([]);

  const primaryDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrimaryValue(event.target.value);
  };
  const secondaryDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSecondaryValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Selected value:", primaryType, secondaryType);
    try {
      const data = await testPostgres(primaryType, secondaryType);
      console.log(data);
    } catch (error) {
      // Handle the error, e.g., show an error message to the user
      console.error(error);
    }
  };

  return (
    <div>
      <form id="selectType" onSubmit={handleSubmit}>
        <label>
          Type 1:
          <select name="primaryType" onChange={primaryDropdownChange}>
            <TypeOption types={types} />
          </select>
        </label>
        <label>
          Type 2:
          <select name="secondaryType" onChange={secondaryDropdownChange}>
            <TypeOption types={types} />
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* <SearchResults type1={primaryType} type2={secondaryType} /> */}
    </div>
  );
}
