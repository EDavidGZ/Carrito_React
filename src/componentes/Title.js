import React, { Component } from 'react'

const style = {
    title: {
        marginBottom: '50px'

    }
}

export default class Title extends Component {
  render() {
    return (
      <h1 style={style.title}>Store</h1>
    )
  }
}
