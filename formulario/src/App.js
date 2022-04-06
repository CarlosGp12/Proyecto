import React from "react";
import styled from 'styled-components';
const App = () => {
  return (
    <main>
      <header className="containerHeader">
        <h1 className="titulo">Productos</h1>
      </header>
      <div className="containerFormulario">
        <Formulario className="fomulario">
          <div className="containerCampos">
            <div className="campo">
              <label htmlFor="">Nombre: </label>
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="campo">
              <label htmlFor="">Precio: </label>
              <input type="text" placeholder="estado" />
            </div>
            <div className="campo">
              <label className="fecha" htmlFor="">Stock: </label>
              <input type="date" placeholder="Fecha" />
            </div>
            <div className="campo">
              <label htmlFor="">Fecha: </label>
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="campo">
              <label htmlFor="">Marca: </label>
              <input type="number" placeholder="SRI" />
            </div>
          </div>

        </Formulario>
      </div>
    </main>
  );
}
const Formulario = styled.form`
  background-color: #e5e5e5;
`;
export default App;