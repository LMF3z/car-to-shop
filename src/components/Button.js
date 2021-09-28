import React, { Component } from 'react'

const styles = {
  botton: {
    backgroundColor: '#0a283e',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

export default class Button extends Component {
  render() {
    return <button {...this.props} style={styles.botton} />
  }
}
