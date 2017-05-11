import { connect } from 'react-redux'
import { selectPokemonItem } from '../../reducers/selectors'

import ItemDetail from './item_detail'

function mapStateToProps(state, ownProps){
  return {
    item: selectPokemonItem(state, ownProps.match.params.itemId)
  }
}

function mapDispatchToProps(){
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
