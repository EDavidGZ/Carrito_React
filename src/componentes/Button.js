import React, { Component } from 'react'

const style = {
    button: {
        
        backgroundColor: '#ffa500',
        color: 'white',
        padding: '15px 20px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px'
    }
}

export default class Button extends Component {
  render() {
    return (
      <button  style={style.button}  {...this.props}/>
    )
  }
}
