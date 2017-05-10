import * as pokemonActions from '../actions/pokemon_actions'

const pokemonReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case pokemonActions.RECEIVE_ALL_POKEMON:
      return action.pokemon;

    default:
      return state;
  }
}

export default pokemonReducer
