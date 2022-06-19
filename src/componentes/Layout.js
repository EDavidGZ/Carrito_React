import React, { Component } from 'react'

const style = {
  layout: {
    backgroundColor: 'white',
    color: '#ffa500',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  
}

export default class Layout extends Component {
  render() {
    return (
      <div style={style.layout} >
        <div >
          {this.props.children}
        
        </div>
        
      </div>
    )
  }
}
