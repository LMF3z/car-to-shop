import React, { Component } from 'react'
import Logo from './Logo'
import CarritoCompra from './CarritoCompra'

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
  },
}

export default class Navegacion extends Component {
  render() {
    const { carro, isCarVisible, mostrarCarro } = this.props

    return (
      <nav style={styles.navbar}>
        <Logo />
        <CarritoCompra
          carro={carro}
          isCarVisible={isCarVisible}
          mostrarCarro={mostrarCarro}
        />
      </nav>
    )
  }
}
