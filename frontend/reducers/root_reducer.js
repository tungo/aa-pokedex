import { combineReducers } from 'redux'

import pokemonReducer from './pokemon_reducer'
import pokemonDetailReducer from './pokemon_detail_reducer'
import errorReducer from './error_reducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: pokemonDetailReducer,
  errors: errorReducer
})

export default rootReducer
