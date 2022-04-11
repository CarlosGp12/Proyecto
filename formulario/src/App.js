import React from "react";
import FormularioClientes from "./componentes/Formulario_Cliente";
import FormularioProductos from "./componentes/Formulario_Producto";

const App = () => {
    return (
    <main>
      <FormularioClientes/>
      
      <hr/>
      
      <FormularioProductos/>
    </main>
  );
}

export default App;