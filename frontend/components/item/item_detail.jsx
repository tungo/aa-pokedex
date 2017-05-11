import React from 'react'

class ItemDetail extends React.Component {
  render() {
    return (
      <div className="item-detail">
        <div className="item-name">{this.props.item.name} </div>
        <div>Happiness: {this.props.item.happiness} </div>
        <div>Price: {this.props.item.price} </div>
      </div>
    )
  }
}

export default ItemDetail
