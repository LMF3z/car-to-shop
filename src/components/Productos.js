import React, { Component } from 'react'
import Producto from './Producto'

const style = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}

export default class Productos extends Component {
  render() {
    const { agregarAlCarro, productos } = this.props
    return (
      <div style={style.productos}>
        {productos.map((item) => (
          <Producto
            key={item.name}
            producto={item}
            agregarAlCarro={agregarAlCarro}
          />
        ))}
      </div>
    )
  }
}
