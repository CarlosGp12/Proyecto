import React from "react";
import { Formulario, ContenedorBotonCentrado, Boton, MensajeError, DivContenedor, Encabezado, Enlace, Navegador } from "../../elementos/formularios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faI } from '@fortawesome/free-solid-svg-icons';
// import Input from "./../componentes/Input";
import { esNombre, esCedula, esDireccion, esTelefono } from "../Validaciones";

import InputText from "../Input";


class FormularioClientes extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.actualizarState = this.actualizarState.bind(this);
    this.state = {
      nombre: {
        value: "",
        error: true
      },
      direccion: {
        value: "",
        error: true
      },
      cedula: {
        value: "",
        error: true
      },
      telefono: {
        value: "",
        error: true
      }
    }
  }




  actualizarState(input) {
    this.setState({
      ...this.state,
      [input.name]: {
        value: input.value,
        error: input.error
      }
    }, () => { console.log(this.state); });

  }

  submit(e) {

  }

  render() {
    return (
      <main>
        <Encabezado>
          <h1 className="titulo">EDITAR ClIENTE</h1>
        </Encabezado>
        <Navegador>
          <Enlace href="#"><FontAwesomeIcon icon={faI} /> Inicio</Enlace>

          <Enlace href="#"><FontAwesomeIcon icon={faCartShopping} /> Carrito</Enlace>
        </Navegador>
        <DivContenedor>
          <Formulario onSubmit={this.submit}>
            <InputText
              label="Nombre"
              name="nombre"
              placeholder="nombre"
              validacion={esNombre}
              mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
              actualizarState={this.actualizarState}
            />
            <InputText
              label="Apellido"
              name="apellido"
              placeholder="apellido"
              validacion={esNombre}
              mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
              actualizarState={this.actualizarState}
            />
            <InputText
              label="Cedula"
              name="cedula"
              placeholder="0923377972"
              validacion={esCedula}
              mensajeError="El campo no puede quedar vacio y debe ingresar 10 numeros"
              actualizarState={this.actualizarState}
            />
            <InputText
              label="Direccion"
              name="direccion"
              placeholder="Direccion del cliente"
              validacion={esDireccion}
              mensajeError="El campo no puede quedar vacio"
              actualizarState={this.actualizarState}
            />
            <InputText
              label="Telefono"
              name="telefono"
              placeholder="Telefono del cliente"
              validacion={esTelefono}
              mensajeError="El campo no puede quedar vacio"
              actualizarState={this.actualizarState}
            />
            {
            this.state.nombre.error
            || this.state.cedula.error || this.state.direccion.error || this.state.telefono.error ? (
              <MensajeError>
                <p>
                  <b>Error:</b> Por favor rellene el formulario correctamente
                </p>
              </MensajeError>
            ) : ("")
            }

            <ContenedorBotonCentrado>
              <Boton type="submit" disabled={this.state.nombre.error
                || this.state.cedula.error || this.state.direccion.error || this.state.telefono.error}>
                Enviar
              </Boton>
            </ContenedorBotonCentrado>
          </Formulario>
        </DivContenedor>
      </main>
    )
  }
}
export default FormularioClientes;
// import React, { useState } from "react";
// import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, DivContenedor, Encabezado, Enlace, Navegador } from "./../elementos/formularios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle, faCartShopping, faI } from '@fortawesome/free-solid-svg-icons';
// import Input from "./../componentes/Input";
// const FormularioCliente = () => {
//   const [cedula, cambiarCedula] = useState({ campo: '', valido: null });
//   const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
//   const [apellido, cambiarApellido] = useState({ campo: '', valido: null });
//   const [direccion, cambiarDireccion] = useState({ campo: '', valido: null });
//   const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
//   const [formularioValido, cambiarFormularioValido] = useState(null);
//   const expresiones = {
//     //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//     direccion: /^[a-zA-Z0-9\s]{4,16}$/,
//     nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//     // password: /^.{4,12}$/, // 4 a 12 digitos.
//     //correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     cedula: /^\d{10,10}$/,
//     telefono: /^\d{7,14}$/, // 7 a 14 numeros.
//     precio: /^[\d{1,4}]+.[\d{1,2}]+$/,
//     stock: /^\d{1,4}$/,
//     fecha: /^[a-zA-Z0-9_.+-]/
//   }
//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (
//       cedula.valido === 'true' &&
//       nombre.valido === 'true' &&
//       apellido.valido === 'true' &&
//       direccion.valido === 'true' &&
//       telefono.valido === 'true'
//     ) {
//       cambiarFormularioValido(true);
//       cambiarCedula({ campo: '', valido: null });
//       cambiarNombre({ campo: '', valido: null });
//       cambiarApellido({ campo: '', valido: null });
//       cambiarDireccion({ campo: '', valido: null });
//       cambiarTelefono({ campo: '', valido: null });


//     } else {
//       cambiarFormularioValido(false);
//     }

//   }

//   return (
//     <main>
//       <Encabezado>
//         <h1>AGREGAR CLIENTE</h1>
//       </Encabezado>
//       <Navegador>
//         <Enlace href="#"><FontAwesomeIcon icon={faI} /> Inicio</Enlace>

//         <Enlace href="#"><FontAwesomeIcon icon={faCartShopping} /> Carrito</Enlace>
//       </Navegador>
//       <DivContenedor>
//         <Formulario action="" onSubmit={onSubmit}>

//           <Input
//             estado={nombre}
//             cambiarEstado={cambiarNombre}
//             tipo="text"
//             label="Nombre:"
//             placeholder="Cesar"
//             name="nombre"
//             leyendaError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
//             expresionRegular={expresiones.nombre}
//           />
//           <Input
//             estado={apellido}
//             cambiarEstado={cambiarApellido}
//             tipo="text"
//             label="Apellido:"
//             placeholder="Moreno"
//             name="apellido"
//             leyendaError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
//             expresionRegular={expresiones.apellido}
//           />
//           <Input
//             estado={cedula}
//             cambiarEstado={cambiarCedula}
//             tipo="text"
//             label="Cedula:"
//             placeholder="0923377972"
//             name="cedula"
//             leyendaError="El campo no puede quedar vacio, solo puede ingresar numeros"
//             expresionRegular={expresiones.cedula}
//           />
//           <Input
//             estado={direccion}
//             cambiarEstado={cambiarDireccion}
//             tipo="text"
//             label="Direccion:"
//             placeholder="Direccion del envio"
//             name="direccion"
//             leyendaError="El campo no puede quedar vacio"
//             expresionRegular={expresiones.direccion}
//           />
//           <Input
//             estado={telefono}
//             cambiarEstado={cambiarTelefono}
//             tipo="text"
//             label="Telefono:"
//             placeholder="0919784316 o 0762456"
//             name="fecha"
//             leyendaError="El campo no puede quedar vacio, solo puede ingresar numeros"
//             expresionRegular={expresiones.telefono}
//           />
//           {formularioValido === false && <MensajeError>
//             <p>
//               <FontAwesomeIcon icon={faExclamationTriangle} />
//               <b>Error:</b> Por favor rellene el formulario correctamente
//             </p>
//           </MensajeError>}
//           <ContenedorBotonCentrado>
//             <Boton type="submit">Enviar</Boton>
//             {formularioValido === true && <MensajeExito>El formulario se envio correctamente!</MensajeExito>}
//           </ContenedorBotonCentrado>
//         </Formulario>
//       </DivContenedor>
//     </main>
//   );
// }

// export default FormularioCliente;