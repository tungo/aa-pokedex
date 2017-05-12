import React from 'react'
import { withRouter } from 'react-router-dom'

class PokemonForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      attack: 0,
      defense: 0,
      poke_type: "",
      moves: "",
      image_url: ""
    }
  }

  submit(e){
    e.preventDefault()
    let ajax =  this.props.createPokemon(this.state)

    // if(ajax){
      ajax.then((newPokemon) => {
        this.props.history.push(`/pokemon/${newPokemon.id}`);
      });
    // }
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <form method="post">
          <label>
            Name:
            <input type="text" value={this.state.name}
              onChange={(e)=>{this.setState({name: e.target.value})}}/>
          </label>

          <label>
            Attack
            <input type="text" value={this.state.attack}
              onChange={(e)=>{this.setState({attack: e.target.value})}}/>
          </label>

          <label>
            Defense
            <input type="text" value={this.state.defense}
              onChange={(e)=>{this.setState({defense: e.target.value})}}/>
          </label>

          <label>
            Poke Type
            <input type="text" value={this.state.poke_type}
              onChange={(e)=>{this.setState({poke_type: e.target.value})}}/>
          </label>

          <label>
            Moves
            <input type="text" value={this.state.moves}
              onChange={(e)=>{this.setState({moves: e.target.value})}}/>
          </label>

          <label>
            Image Url
            <input type="text" value={this.state.image_url}
              onChange={(e)=>{this.setState({image_url: e.target.value})}}/>
          </label>

          <input type="submit" value="submit" onClick={this.submit.bind(this)}></input>
        </form>
      </div>
    )
  }

}

export default withRouter(PokemonForm)
