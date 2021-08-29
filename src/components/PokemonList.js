import { useState } from "react";
import pokemonData from "../data.json";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemon, setPokemon] = useState(pokemonData.pokemon);

  return (
    <>
      <h1 id="pokemon-list">Select Your Pokemon</h1>
      <ul aria-labelledby="pokemon-list" className="grid:responsive">
        {pokemon.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} />;
        })}
      </ul>
    </>
  );
}

export default PokemonList;
