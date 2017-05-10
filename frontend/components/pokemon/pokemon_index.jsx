import React from 'react'

class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon()
  }

  render(){
    return <ul>
      {
        Object.values(this.props.pokemon).map(pokemon => {
          return (
            <li key={pokemon.id}>{pokemon.name}</li>
          )
        })
      }
    </ul>
  }
}

export default PokemonIndex
