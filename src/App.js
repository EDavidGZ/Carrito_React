import { Component } from 'react'
import './App.css';
import Layout from './componentes/Layout';
import Navbar from './componentes/Navbar';
import Productos from './componentes/Productos';
import Title from './componentes/Title';




class App extends Component {

  state = {
    productos: [
      {name: 'Papaloquelite', price: '1.5 xK', img: '/img/Papalo.jpg'},
      {name: 'Tomate', price: '20 xK', img: '/img/tomate.jpg'},
      {name: 'Aguacate', price: '40 xK', img: '/img/aguacate.jpg'},
      {name: 'Lechuga', price: '10 xK', img: '/img/lechuga.jpg'},
      {name: 'Zanahoria', price: '25 xK', img: '/img/Zanahoria.png'},
      {name: 'Piña', price: '20 pz', img: '/img/Piña.jfif'},
      {name: 'Calabacin', price: '22 xK', img: '/img/Calabacin.jpg'},
    ],
    carro: [],
    visible: false
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if ( carro.find(x => x.name === producto.name)){
        const newCarro = carro.map(x => x.name === producto.name 
          ? ({
            ...x,
            cantidad: x.cantidad + 1
          })
          : x)
          return this.setState( {carro: newCarro})
        }
    return this.setState({
    carro: this.state.carro.concat({
      ...producto,
      cantidad: 1
    })
  })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }

    this.setState({visible: !this.state.visible})

  }

  render() {
    const { visible } = this.state
   
    return (
      <div>
        <Navbar 
                carro={this.state.carro} 
                visible={visible}
                mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
        <Productos 
        agregarAlCarro={this.agregarAlCarro}
        productos={this.state.productos}
        
        />
        </Layout>
      </div>
    )
  }
}



export default App;
