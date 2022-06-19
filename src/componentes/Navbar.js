import React, { Component } from 'react'
import Carro from './Carro'
import Logo from './Logo'

const style = {
    nav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
    }
}

export default class Navbar extends Component {
  render() {
    const {carro, visible, mostrarCarro} = this.props
    return (
        <nav style={style.nav} >
              <Logo />
              <Carro 
                    carro={carro}
                    visible={visible}
                    mostrarCarro={mostrarCarro}
               />
        </nav>
      
    )
  }
}
