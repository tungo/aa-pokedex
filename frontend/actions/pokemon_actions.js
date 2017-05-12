import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const requestPokemon = (id) => dispatch => (
  APIUtil.fetchPokemon(id).then(pokemon => dispatch(receivePokemon(pokemon)))
)

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
})

export const createPokemon = (pokemon) => dispatch => {
  return APIUtil.createPokemon(pokemon).then(pokemon => {
     dispatch(receiveSinglePokemon(pokemon))
     dispatch(clearErrors())
     return pokemon
   }).fail(errors => {
     return dispatch(receivePokemonErrors(JSON.parse(errors.responseText)))
   });
}

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
})

export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})
