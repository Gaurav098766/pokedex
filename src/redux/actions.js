export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE"

export const toggleFavourite = (pokemon) => ({
    type: TOGGLE_FAVOURITE,
    payload: pokemon
})