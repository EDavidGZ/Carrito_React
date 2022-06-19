import React, { Component } from "react";

const style = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 25px",
    borderBottom: "solid 1px #aaa",
  },
};

export default class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div style={style.detallesCarro}>
        <ul style={style.ul}>
          {carro.map((x) => (
            <li key={x.name} style={style.li}>
              <img alt={x.name} src={x.img} width="50" height="32px" />
              {x.name}
              <span> {x.cantidad} </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
