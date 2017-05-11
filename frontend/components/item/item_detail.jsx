import React from 'react'

class ItemDetail extends React.Component {
  render() {
    console.log(this.props.item);
    return (
      <div>
        {JSON.stringify(this.props.item)}
      </div>
    )
  }
}

export default ItemDetail
