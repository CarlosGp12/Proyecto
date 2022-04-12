import React, {useContext} from "react";
import { DataContext } from "../../contexto/DataProvider";
import { Link } from "react-router-dom";


export const ProductoItem = ({id,Tipo,Nombre,Precio,Imagen,Cantidad,Marca}) =>{
    
    const value = useContext(DataContext);
    const AddCarrito = value.AddCarrito;

    return(
            <div  className="producto">
                <Link to="#">
                    <div className="producto_Img">
                        <img src={Imagen} alt={Nombre} />
                    </div>
                </Link>
                <div className="producto_Datos">
                    <h1>{Nombre}</h1>
                    <p>{Tipo}</p>
                    <p className="price">${Precio}</p>
                    <p>Cantidad: {Cantidad}</p>
                </div>
                <div className="button">
                    <button onClick={() => AddCarrito(id)} className="btn" >
                        Añadir al carro
                    </button>
                </div>
                <div className="buttonV">
                    <button className="btn">
                        Vista
                    </button>
                </div>
            </div>
    );
};