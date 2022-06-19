import React, { Component } from 'react'
import Bubble from './Bubble'
import DetallesCarro from './DetallesCarro';

const style = {
    carro: {
        backgroundColor: '#ffa500',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20

    }
}

export default class Carro extends Component {
  render() {
    const {carro, visible, mostrarCarro} = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0 )
    return (
      <div>
        <span style={style.bubble} >
            {cantidad !== 0 ? 
            <Bubble value={cantidad} />
            : null
            }
        </span>
            <button  onClick={mostrarCarro} style={style.carro} >
                 Carro
            </button>
            {visible ? <DetallesCarro carro={carro}/> : null}
            
       </div>
    )
  }
}
