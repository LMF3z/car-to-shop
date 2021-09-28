import { computeHeadingLevel } from '@testing-library/dom'
import React, { Component } from 'react'
import Navegacion from './components/Navegacion'
import Layout from './components/Layout'
import Title from './components/Title'
import Productos from './components/Productos'

export default class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Lechuga', price: 2500, img: '/productos/lechuga.jpg' },
      { name: 'Arbejas', price: 500, img: '/productos/arbejas.jpg' },
    ],
    carro: [],
    isCarVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state

    if (carro.find((car) => car.name === producto.name)) {
      const newCarro = carro.map((car) =>
        car.name === producto.name
          ? {
              ...car,
              cantidad: car.cantidad + 1,
            }
          : car
      )

      return this.setState({
        carro: newCarro,
      })
    }

    return this.setState({
      carro: [...this.state.carro, { ...producto, cantidad: 1 }],
    })
  }

  mostrarCarro = () => {
    if (this.state.carro.length > 0) {
      this.setState({
        isCarVisible: !this.state.isCarVisible,
      })
    } else {
      return
    }
  }

  render() {
    return (
      <div>
        <Navegacion
          carro={this.state.carro}
          isCarVisible={this.state.isCarVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}
