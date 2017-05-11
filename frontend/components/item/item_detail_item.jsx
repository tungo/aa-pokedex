import React from 'react'

import { Link } from 'react-router-dom'

export default (props) => (
  <Link to={`/pokemon/${props.pokemonId}/item/${props.item.id}`}>
    <img src={props.item.image_url}/>
  </Link>
)
