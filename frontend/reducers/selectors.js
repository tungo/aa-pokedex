import values from 'lodash/values'

export const selectAllPokemon = state => (
  values(state.pokemon)
)

export const selectPokemonItem = (state, itemId) => {
  if (!state.pokemonDetail.items) {
    return {};
  }
  return state.pokemonDetail.items.find(item => `${item.id}` === itemId)
}
