import React from "react";
import {Routes, Route} from "react-router-dom";
import  {List_producto}  from "./Productos/index";
import ClienteTable from "./Clientes/ClienteTable";
import ProductoTable from "./Productos/ProductoTable";

export const Paginas =()=>{
    return(
        <section>
            <Routes>
            <Route path="/" exact element={<List_producto/>} />
            <Route path="/productos" exact element={<ProductoTable/>} />
            <Route path="/clientes" exact element={<ClienteTable />} />
            </Routes>
        </section>
    );
}