import values from 'lodash/values'

export const selectAllPokemon = state => (
  values(state.pokemon)
)

export const selectPokemonItem = (state, itemId) => {
  const items = state.pokemonDetail.items ? state.pokemonDetail.items : []

  for (let i = 0; i < items.length; i++) {
    if (items[i].id === parseInt(itemId)) {
      return items[i]
    }
  }
  return {}
}
