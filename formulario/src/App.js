import React from "react";
import FormularioClientes from "./componentes/Formulario_Cliente";
import FormularioProductos from "./componentes/Formulario_Producto";
import ClienteTable from "./componentes/ClienteTable";
 
const App = () => {
    return (
    <main>
      {/* <FormularioProductos></FormularioProductos>
      <FormularioClientes></FormularioClientes> */}
      <ClienteTable/>
    </main>
  );
}

export default App;