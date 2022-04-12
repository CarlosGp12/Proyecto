import React, {useContext} from "react";
import { DataContext } from "../../contexto/DataProvider"; 
import { ProductoItem } from "./ProductoItem";

export const List_producto =()=>{

    const value = useContext(DataContext)
    const [productos] = value.productos
    
    console.log(productos)
    
    return(
        <>
            <h1 className="title">PRODUCTOS</h1>

            <div className="productos">
                {
                    productos.map(producto => (
                        <ProductoItem 
                        key={producto.id} 
                        id={producto.id}
                        Tipo={producto.Tipo}
                        Nombre={producto.Nombre}
                        Precio={producto.Precio}
                        Imagen={producto.Imagen}
                        Cantidad={producto.Cantidad}
                        Marca={producto.Marca}
                        />
                    ))
                }
            </div>
        </>
    );
};
