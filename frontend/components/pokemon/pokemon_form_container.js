import { connect } from 'react-redux'

import { createPokemon } from '../../actions/pokemon_actions'
import PokemonForm from './pokemon_form'

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (pokemon) => dispatch(createPokemon(pokemon)),
})

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm)
