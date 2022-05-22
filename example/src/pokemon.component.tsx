import { createResource, Switch, Match } from 'solid-js';

const fetchPokemon = async (pokemon: string) =>
  (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json();

export const Pokemon = ({ pokemon }: { pokemon: string }) => {
  const [pokemonData] = createResource(pokemon, fetchPokemon);
  return (
    <div class="pokemon__container">
      <Switch fallback={<>Select a pokemon to see info</>}>
        <Match when={pokemonData.loading}>Loading...</Match>
        <Match when={pokemonData.error}>{pokemonData.error}</Match>
        <Match when={pokemonData()}>
          <img
            class="pokemon__image"
            src={pokemonData()?.sprites?.front_default}
            alt={pokemonData()?.name}
          />
          <p class="pokemon__info">
            <b>Name:</b> {pokemonData().name}
          </p>
          <p class="pokemon__info">
            <b>Number:</b> {pokemonData().id}
          </p>
        </Match>
      </Switch>
    </div>
  );
};
