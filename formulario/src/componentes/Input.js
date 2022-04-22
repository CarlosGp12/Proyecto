import React from "react";
import { Input, Label } from "./../elementos/formularios";
class InputText extends React.Component {

  render() {

    return (
      <div>
        <Label htmlFor={"id-" + this.props.name}>{this.props.label}</Label>
        <Input
          id={"id-" + this.props.name}
          type="text"
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
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
