import React, { Component } from 'react'

const styles = {
  bubbleAlert: {
    backgroundColor: '#e9725a',
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 10px',
    fontZise: '0.9rem',
    width: '20px',
  },
}

export default class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return 0
    }

    return n > 9 ? '9+' : n
  }

  render() {
    const { value } = this.props

    return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>
  }
}
