import React, { Component } from 'react'

const style = {
    bubble:{
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px'
    }
}

export default class Bubble extends Component {
    getNumber(n){
        if(!n){return " "}
        return n > 9? "9+" : n
    }

  render() {
    const {value} = this.props
    return (
      <span style={style.bubble}>
        {this.getNumber(value)}
      </span>
    )
  }
}
