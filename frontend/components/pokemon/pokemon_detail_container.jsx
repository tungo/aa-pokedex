import { connect } from 'react-redux'
import PokemonDetail from './pokemon_detail'
import * as PokemonActions from '../../actions/pokemon_actions'

const mapStateToProps = (state) => ({
  pokemonDetail: state.pokemonDetail
})

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch(PokemonActions.requestPokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
