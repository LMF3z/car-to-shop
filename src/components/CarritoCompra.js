import React, { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetailsCarro from './DetailsCarro'

const styles = {
  carro: {
    backgroundColor: '#359a2c',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  },
}

export default class Logo extends Component {
  render() {
    const { carro, isCarVisible, mostrarCarro } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)

    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={cantidad > 0 ? cantidad : null} />
        </span>
        <button style={styles.carro} onClick={mostrarCarro}>
          Carro
        </button>

        {isCarVisible ? <DetailsCarro carro={carro} /> : null}
      </div>
    )
  }
}
