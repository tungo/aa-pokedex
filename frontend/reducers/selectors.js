import values from 'lodash/values'

export const selectAllPokemon = state => (
  values(state.pokemon)
)
