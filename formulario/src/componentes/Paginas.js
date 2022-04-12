import React from "react";
import {Routes, Route} from "react-router-dom";
import  {Inicio}  from "./Inicio/Index";
import  {List_producto}  from "./Productos/index";
import {ClienteTable} from "./ClienteTable";

export const Paginas =()=>{
    return(
        <section>
            <Routes>
            <Route path="/" exact element={<Inicio/>} />
            <Route path="/productos" exact element={<List_producto/>} />
            <Route path="/clientes" exact element={<ClienteTable />} />
            </Routes>
        </section>
    );
}