import React from 'react';

class PokemonDetail extends React.Component {

  componentWillReceiveProps(newProp){
    const id = this.props.match.params.pokemonId
    const newId = newProp.match.params.pokemonId
    console.log(id);
    console.log(newId);
    if (id !== newId) {
      this.props.requestPokemon(newId)
    }
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId)
  }

  render() {
    return (
      <div className="pokemon-detail">
        <div>{this.props.pokemonDetail.name}</div>
        <div><img className="pkm-img" src={this.props.pokemonDetail.image_url}/></div>
        <div>Attack: {this.props.pokemonDetail.attack}</div>
        <div>Defense: {this.props.pokemonDetail.attack}</div>
      </div>
    )
 }
}


export default PokemonDetail
