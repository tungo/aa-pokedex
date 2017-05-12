import * as pokemonActions from '../actions/pokemon_actions'
import _ from 'lodash'

const pokemonReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case pokemonActions.RECEIVE_ALL_POKEMON:
      return action.pokemon;

    case pokemonActions.RECEIVE_SINGLE_POKEMON:
      let newState = _.merge({}, state, { [action.pokemon.id]: action.pokemon})
      return newState;

    default:
      return state;
  }
}

export default pokemonReducer
