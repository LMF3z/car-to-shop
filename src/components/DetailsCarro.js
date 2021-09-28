import React, { Component } from 'react'

const styles = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaa',
  },
}

export default class DetailsCarro extends Component {
  render() {
    const { carro } = this.props

    console.log(carro)

    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((item) => (
            <li key={item.name} style={styles.producto}>
              <img src={item.img} alt={item.name} width="50" height="32" />
              {item.name} <span>{item.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
