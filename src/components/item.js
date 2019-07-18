import React, { Component } from 'react';

class Item extends Component {
    state = {
      show: true
    }
    ocultarMostrar = () => {
      this.setState({show: !this.state.show})
    }
    render() {
      if (this.state.show) {
        return (
          <div id="mensaje">
            <h3>
              {this.props.title}
            </h3>
            {this.props.parametro}
            <br></br>
            <button className="btn-danger" onClick={this.ocultarMostrar}>
              Apagar...
            </button>
          </div>
        )
      } else {
        return (
          <div id="mensaje">
            <h3>------</h3>
            <button className="btn-success" onClick={this.ocultarMostrar}>
              Activar...
            </button>
          </div>
        )
      }
    }
  }

export default Item;