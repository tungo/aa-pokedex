import React from 'react'
import { connect } from 'react-redux'
import PokemonIndex from './pokemon_index'
import * as PokemonActions from '../../actions/pokemon_actions'

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
})

const mapDispatchToProps = (dispatch) => ({
  requestAllPokemon: () => dispatch(PokemonActions.requestAllPokemon())
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex)
