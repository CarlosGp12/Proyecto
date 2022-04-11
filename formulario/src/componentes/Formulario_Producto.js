import React from "react";
import { Formulario, ContenedorBotonCentrado, Boton, DivContenedor, Encabezado, Enlace, MensajeError,Navegador } from "./../elementos/formularios";
import './../estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faI } from '@fortawesome/free-solid-svg-icons';
// import Input from "./../componentes/Input";
import { esNombre, esPrecio, esStock, esMarca } from "./Validaciones";
import InputText from "./../componentes/Input";
import InputSelect from "./InputSelect";



class FormularioProductos extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.actualizarState = this.actualizarState.bind(this);
    this.state = {
      nombre: {
        value: "",
        error: true
      },
      precio: {
        value: "",
        error: true
      },
      opciones: {
        value: "",
        error: true
      },
      stock: {
        value: "",
        error: true
      },
      marca: {
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
          <h1 className="titulo">AGREGAR PRODUCTO</h1>
        </Encabezado>
        <Navegador>
          <Enlace href="#"><FontAwesomeIcon icon={faI} /> Inicio</Enlace>

          <Enlace href="#"><FontAwesomeIcon icon={faCartShopping} /> Carrito</Enlace>
        </Navegador>
        <DivContenedor>
          <Formulario onSubmit={this.submit}>
            <InputSelect
              name="opciones"
              label="Tipo de producto"
              actualizarState={this.actualizarState}
              opciones={[
                {value:"", texto:"Selecione una opcion"},
                {value:"1", texto:"Electrodomesticos"},
                {value:"2", texto:"Herramientas"},
                {value:"3", texto:"Decoracion"},
              ]}
            />
            <InputText
              label="Nombre"
              name="nombre"
              placeholder="nombre"
              validacion={esNombre}
              mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
              actualizarState={this.actualizarState}
            />
            <InputText
              label="Precio"
              name="precio"
              placeholder="#.##"
              validacion={esPrecio}
              mensajeError="El campo no debe estar vacio, solo puede ingresar numeros con decimales"
              actualizarState={this.actualizarState}
            />
            <InputText
              label="Stock"
              name="stock"
              placeholder="Cantidad del producto"
              validacion={esStock}
              mensajeError="El campo no debe estar vacio, solo puede ingresar numeros hasta 4 digitos"
              actualizarState={this.actualizarState}
            />
            <InputText
              label="Marca"
              name="marca"
              placeholder="Marca del producto"
              validacion={esMarca}
              mensajeError="El campo no puede quedar vacio"
              actualizarState={this.actualizarState}
            />
            {
            this.state.nombre.error
            || this.state.precio.error || this.state.opciones.error || this.state.stock.error || this.state.marca.error ? (
              <MensajeError>
                <p>
                  <b>Error:</b> Por favor rellene el formulario correctamente
                </p>
              </MensajeError>
            ) : ("")
            }
            <ContenedorBotonCentrado>
              <Boton type="submit" disabled={this.state.nombre.error
                || this.state.precio.error || this.state.opciones.error || this.state.stock.error || this.state.marca.error}>
                Enviar
              </Boton>
            </ContenedorBotonCentrado>
          </Formulario>
        </DivContenedor>
      </main>
    )
  }
}
export default FormularioProductos;
// const FormularioProductos = () => {
//   const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
//   const [precio, cambiarPrecio] = useState({ campo: '', valido: null });
//   const [stock, cambiarStock] = useState({ campo: '', valido: null });
//   const [idproducto, cambiarIdproducto] = useState({ campo: '', valido: null });
//   const [marca, cambiarMarca] = useState({ campo: '', valido: null });
//   const [formularioValido, cambiarFormularioValido] = useState(null);
//   const expresiones = {
//     // usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//     nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     // password: /^.{4,12}$/, // 4 a 12 digitos.
//     //correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     telefono: /^\d{7,14}$/, // 7 a 14 numeros.
//     precio: /^[\d{1,4}]+.[\d{1,2}]+$/,
//     stock: /^\d{1,4}$/,
//     idproducto: /^\d{1,4}$/
//   }
//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (
//       nombre.valido === 'true' &&
//       precio.valido === 'true' &&
//       stock.valido === 'true' &&
//       //idproducto.valido === 'true' &&
//       marca.valido === 'true'
//     ) {
//       cambiarFormularioValido(true);
//       cambiarNombre({ campo: '', valido: null });
//       cambiarPrecio({ campo: '', valido: null });
//       cambiarStock({ campo: '', valido: null });
//       cambiarIdproducto({ campo: '', valido: null });
//       cambiarMarca({ campo: '', valido: null });


//     } else {
//       cambiarFormularioValido(false);
//     }

//   }

//   return (
//     <main>
//       <Encabezado className="containerHeader">
//         <h1 className="titulo">AGREGAR PRODUCTO</h1>
//       </Encabezado>
//       <Navegador>
//         <Enlace href="#"><FontAwesomeIcon icon={faI} /> Inicio</Enlace>

//         <Enlace href="#"><FontAwesomeIcon icon={faCartShopping} /> Carrito</Enlace>
//       </Navegador>
//       <DivContenedor>
//         <Formulario action="" onSubmit={onSubmit}>
//           {/* <InputSelect
//             estado={idproducto}
//             cambiarEstado={cambiarIdproducto}
//             label="Tipo de producto:"
//             name="idproducto"
//             leyendaError="El campo no puede quedar vacio, solo puede ingresar numeros entero"
//             expresionRegular={expresiones.nombre}
//           /> */}
//           <Input
//             estado={nombre}
//             cambiarEstado={cambiarNombre}
//             tipo="text"
//             label="Nombre:"
//             placeholder="Nombre"
//             name="nombre"
//             leyendaError="El nombre no puede estar vacio ni tener caracteres especiales como: !@#$%^*(){}"
//             expresionRegular={expresiones.nombre}
//           />
//           <Input
//             estado={precio}
//             cambiarEstado={cambiarPrecio}
//             tipo="text"
//             label="Precio:"
//             placeholder="Valor del producto: #.##"
//             name="precio"
//             leyendaError="El campo no debe estar vacio, solo puede ingresar numeros con decimales"
//             expresionRegular={expresiones.precio}
//           />
//           <Input
//             estado={stock}
//             cambiarEstado={cambiarStock}
//             tipo="text"
//             label="Stock:"
//             placeholder="Cantidad de stock"
//             name="Stock"
//             leyendaError="El campo no debe estar vacio, solo puede ingresar numeros hasta 4 digitos"
//             expresionRegular={expresiones.stock}
//           />

//           <Input
//             estado={marca}
//             cambiarEstado={cambiarMarca}
//             tipo="text"
//             label="Marca:"
//             placeholder="Marca del producto"
//             name="marca"
//             leyendaError="El campo no puede quedar vacio"
//             expresionRegular={expresiones.nombre}
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

