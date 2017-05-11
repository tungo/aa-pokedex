import React from 'react'
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  render() {
    return (
      <li className="pokemon-index-item">
        <Link to={`/pokemon/${this.props.pokemon.id}` }>
          {this.props.pokemon.id}
          <img src={this.props.pokemon.image_url}/>
          {this.props.pokemon.name}
        </Link>
      </li>
    )
  }
}

export default PokemonIndexItem;
