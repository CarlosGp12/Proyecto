import React from "react";
import  {Header}  from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import  {Paginas}  from "./componentes/Paginas";
import {DataProvider} from "./contexto/DataProvider"
import { Carrito } from "./componentes/Carrito/Index";
import ProductoTable from "./componentes/Productos/ProductoTable";
import FormularioClientes from "./componentes/Clientes/Formulario_Cliente";


function App() {
  return (
    
    <DataProvider>
    <div className="App">
      
      <Router>
        <Header />
        <Carrito />

        <Paginas />
      </Router>
  
    </div>
    </DataProvider>
    

  );
}

export default App;
