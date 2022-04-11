import React from "react";
import {Selector, Label } from "./../elementos/formularios";
class InputSelect extends React.Component {
    constructor(props) {
      super(props);
      this.actualizarState = this.actualizarState.bind(this);
      this.state = { activo: "" };
    }
    actualizarState(e) {
      const { name, value } = e.target;
      this.setState({ value });
      this.props.actualizarState({
        name, value, error: value === "" ? true : false
      })
    }
    render() {
      return (
        <div>
          <Label htmlFor={"id-"+this.props.name}>{this.props.label}</Label>
          <Selector
            id={"id-"+this.props.name}
            name={this.props.name}
            onChange={this.actualizarState}
          >
            {
              this.props.opciones.map((opcion, index)=>(
              <option key={index} value={opcion.value}>{opcion.texto}</option>  
              ))
            }
          </Selector>
        </div>
      )
    }
}
export default InputSelect;