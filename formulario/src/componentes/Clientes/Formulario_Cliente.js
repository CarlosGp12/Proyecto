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
  }
  state = {
    clientes: [],
    form: {
      cod_cliente: '',
      cedula: '',
      nombres: '',
      apellidos: '',
      telefono: '',
      direccion: ''
    }
  };

  peiticionesGet = () => {
    axios.get(url)
      .then(response => {
        this.setState({ clientes: response.data });
      });
  }

  peticionesPost = async () => {
    //delete this.state.form.cod_cliente;
    await axios.post(url, this.state.form)
      .then(response => {
        this.peiticionesGet();
      });
  }

  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
    console.log(this.state.clientes.length+1)
  }

componentDidMount() {
    this.peiticionesGet();
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
    const {form} = this.state
    return (
      <main>
        <Encabezado>
          <h1 className="titulo">AGREGAR ClIENTE</h1>
        </Encabezado>
        <Navegador>
          <Enlace href="#"><FontAwesomeIcon icon={faI} /> Inicio</Enlace>

          <Enlace href="#"><FontAwesomeIcon icon={faCartShopping} /> Carrito</Enlace>
        </Navegador>
        <DivContenedor>
          <Formulario onSubmit={this.submit}>
            <input
              label="ID"
              name="cod_cliente"
              placeholder="ID"
             //readOnly
              value={this.state.form.cod_cliente}
              onChange={this.handleChange}
            />
            <input
              label="Cedula"
              name="cedula"
              placeholder="0923377972"
              value={this.state.form.cedula}
              validacion={esCedula}
              mensajeError="El campo no puede quedar vacio y debe ingresar 10 numeros"
              onChange={this.handleChange}
            // actualizarState={this.actualizarState}
            />
            <input
              label="Nombre"
              name="nombres"
              placeholder="nombre"
              value={this.state.form.nombres}
              validacion={esNombre}
              mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
              onChange={this.handleChange}
            //  actualizarState={this.actualizarState}
            />
            <input
              label="Apellido"
              name="apellidos"
              placeholder="apellido"
              value={this.state.form.apellidos}
              validacion={esNombre}
              mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
              onChange={this.handleChange}
            // actualizarState={this.actualizarState}
            />
            <input
              label="Telefono"
              name="telefono"
              placeholder="Telefono del cliente"
              value={this.state.form.telefono}
              validacion={esTelefono}
              mensajeError="El campo no puede quedar vacio"
              onChange={this.handleChange}
            // actualizarState={this.actualizarState}
            />
            <input
              label="Direccion"
              name="direccion"
              placeholder="Direccion del cliente"
              value={this.state.form.direccion}
              validacion={esDireccion}
              mensajeError="El campo no puede quedar vacio"
              onChange={this.handleChange}
            //actualizarState={this.actualizarState}
            />
            {/*
            this.state.nombres.error
            || this.state.cedula.error || this.state.direccion.error || this.state.telefono.error ? (
              <MensajeError>
                <p>
                  <b>Error:</b> Por favor rellene el formulario correctamente
                </p>
              </MensajeError>
            ) : ("")
            */  }

            <ContenedorBotonCentrado>
              <Boton type="submit" onClick={() => this.peticionesPost()}/*disabled={this.state.nombres.error
                || this.state.cedula.error || this.state.direccion.error || this.state.telefono.error}*/>
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
