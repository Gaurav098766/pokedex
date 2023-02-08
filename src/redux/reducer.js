import { TOGGLE_FAVOURITE } from "./actions";

const initialData = {
  favourites: [],
};

const pokemonReducer = (state = initialData, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      let pokemon = action.payload;
      let pokemonFromFavourite = state.favourites.find(
        (favPokemon) => pokemon.id === favPokemon.id
      );
      return {
        ...state,
        favourites: pokemonFromFavourite
          ? [
              ...state.favourites.filter(
                (pokemon) => pokemon.id !== pokemonFromFavourite.id
              ),
            ]
          : [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};
export default pokemonReducer;
