import { Component } from 'react'
import Producto from './Producto'

const style = {
  productos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    
    
  }
}



export default class Productos extends Component {
  render() {

    const { productos, agregarAlCarro } = this.props

    return (
        <div style={style.productos}>
            {productos.map(producto => 
            <Producto 
                agregarAlCarro={agregarAlCarro}
                key={producto.name}
                producto={producto}
            />)}
        </div>
    )
  }
}