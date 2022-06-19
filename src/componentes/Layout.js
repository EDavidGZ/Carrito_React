import React, { Component } from 'react'

const style = {
  layout: {
    backgroundColor: 'white',
    color: '#ffa500',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
   
  }
}

export default class Layout extends Component {
  render() {
    return (
      <div style={style.layout} >
        <div style={style.container}>
          {this.props.children}
        
        </div>
        
      </div>
    )
  }
}
