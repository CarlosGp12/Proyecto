import React from "react";
import {  LeyendaError, Input, Label } from "./../elementos/formularios";
class InputText extends React.Component {
    constructor(props) {
      super(props);
      this.actualizarState = this.actualizarState.bind(this);
      this.state = {
        value: "",
        error: false,
        mensajeError: ""
      };
    }
  
    actualizarState(e) {
      const { name, value } = e.target;
      console.log(this.props.validacion(value));
  
      if (this.props.validacion(value)) {
        this.setState({
          value,
          error: false,
          mensajeError: ""
        });
        this.props.actualizarState({
          name, value, error: false
        });
      } else {
        this.setState({
          value,
          error: true,
          mensajeError: this.props.mensajeError
        });
        this.props.actualizarState({
          name, value, error: true
        });
      }
    }
  
  
    render() {
  
      return (
        <div>
          <Label htmlFor={"id-" + this.props.name}>{this.props.label}</Label>
          <Input
            id={"id-" + this.props.name}
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.actualizarState}
          />
          {
            this.state.error ? (
              <LeyendaError>{this.state.mensajeError}</LeyendaError>
            ) : ("")
          }
        </div>
      )
    }
  }

  export default InputText;
// import React from "react";
// import {Label, GrupoInput, LeyendaError, IconoValidacion, Input} from './../elementos/formularios';
// import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular}) => {
//     const onChange = (e) => {
//         cambiarEstado({...estado, campo: e.target.value });
//     }

//     const validacion = () => {
//         if(expresionRegular){
//             if (expresionRegular.test(estado.campo)) {
//                 cambiarEstado({...estado,  valido: 'true'});
//             }else {
//                 cambiarEstado({...estado,  valido: 'false'});
//             }
//         }
//     }

//     return (
//         <div>
//             <Label htmlFor={name} valido={estado.valido} >{label}</Label>
//             <GrupoInput>
//                 <Input 
//                     type={tipo} 
//                     placeholder={placeholder} 
//                     id={name} 
//                     value={estado.campo}
//                     onChange={onChange}
//                     onKeyUp={validacion}
//                     onBlur={validacion}
//                     valido={estado.valido}
//                 />
//                 <IconoValidacion 
//                     icon={estado.valido=== 'true' ? faCircleCheck: faTimesCircle} 
//                     valido={estado.valido}

//                 />
//             </GrupoInput>
//             <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
//         </div>
//     );
// }
// export default ComponenteInput;