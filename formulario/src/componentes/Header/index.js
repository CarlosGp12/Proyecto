import React,{useContext} from "react";
import {Link} from "react-router-dom";
import { DataContext } from "../../contexto/DataProvider";

export const Header =()=>{
    const value = useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [carrito] = value.carrito;

    const toogleMenu =() =>{
        setMenu(!menu);
    }

    

    return(
        <header> 

           <Link to="/">
                <div className="logo">
                    <img src="" alt=""/>
                </div>
            </Link>

            <ul>
                <li>
                    <Link to={"/productos"}>INICIO</Link>
                </li>
                <li>
                    <Link to={"/"}>PRODUCTOS</Link>
                </li>
                <li>
                    <Link to={"/clientes"}>CLIENTES</Link>
                </li>   
                <li>
                    <Link to={"/clientes/Formulario_Cliente"}>Formulario</Link>
                </li>   
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name= "cart"></box-icon>
                <span className="item_total">{carrito.length}</span>
            </div>
        </header>
        
    );
}