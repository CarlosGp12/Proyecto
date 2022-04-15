import React from "react";
import {Routes, Route} from "react-router-dom";
import  {Inicio}  from "./Inicio/Index";
import  {List_producto}  from "./Productos/index";
import ClienteTable from "./Clientes/ClienteTable";
import FormularioClientes from "./Clientes/Formulario_Cliente";

export const Paginas =()=>{
    return(
        <section>
            <Routes>
            <Route path="/" exact element={<Inicio/>} />
            <Route path="/productos" exact element={<List_producto/>} />
            <Route path="/clientes" exact element={<ClienteTable />} />
            <Route path="/clientes/Formulario_Cliente" exact element={<FormularioClientes />} />
            

            </Routes>
        </section>
    );
}