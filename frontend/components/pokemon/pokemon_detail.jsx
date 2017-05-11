import React from 'react';
import { Route } from 'react-router-dom'

import ItemDetailContainer from '../item/item_detail_container'
import ItemDetailItem from '../item/item_detail_item'

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

    let items = this.props.pokemonDetail.items
    if (items) {
      items = items.map((it, idx) => <li key={idx}><ItemDetailItem item={it} pokemonId={this.props.pokemonDetail.id}/></li>)
    }

    return (
      <div className="pokemon-detail">
        <div><img className="pkm-img" src={this.props.pokemonDetail.image_url}/></div>
        <div className="name">{this.props.pokemonDetail.name}</div>
        <div>Type: {this.props.pokemonDetail.poke_type}</div>
        <div>Attack: {this.props.pokemonDetail.attack}</div>
        <div>Defense: {this.props.pokemonDetail.attack}</div>
        <div>Moves: { moves }</div>

        <ul className="pokemon-items">
          {items}
        </ul>

        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </div>
    )
 }
}


export default PokemonDetail
