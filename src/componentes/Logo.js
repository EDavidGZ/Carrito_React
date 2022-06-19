import React, { Component } from 'react'

const style = {
    logo: {
        fontWeight: '700px',
        fontSize: '3rem',
        marginBottom: '50px',
        paddingTop: '20px'
    }
}

export default class Logo extends Component {
  render() {
    return (
      <div style={style.logo}><strong>Shop</strong></div>
    )
  }
}
