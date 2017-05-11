import React from 'react';
import { Route } from 'react-router-dom'

import ItemDetailContainer from '../item/item_detail_container'

class PokemonDetail extends React.Component {

  componentWillReceiveProps(newProp){
    const id = this.props.match.params.pokemonId
    const newId = newProp.match.params.pokemonId
    if (id !== newId) {
      this.props.requestPokemon(newId)
    }
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId)
  }

  render() {
    const moves = this.props.pokemonDetail.moves ? this.props.pokemonDetail.moves.join(', ') : ''
    const items = this.props.pokemonDetail.items ? JSON.stringify(this.props.pokemonDetail.items) : ''
    return (
      <div className="pokemon-detail">
        <div><img className="pkm-img" src={this.props.pokemonDetail.image_url}/></div>
        <div>{this.props.pokemonDetail.name}</div>
        <div>Type: {this.props.pokemonDetail.poke_type}</div>
        <div>Attack: {this.props.pokemonDetail.attack}</div>
        <div>Defense: {this.props.pokemonDetail.attack}</div>
        <div>Moves: { moves }</div>
        <div>Items: { items }</div>

        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </div>
    )
 }
}


export default PokemonDetail
