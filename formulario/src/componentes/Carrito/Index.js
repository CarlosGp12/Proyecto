
import React, { useContext } from "react";
import { DataContext } from "../../contexto/DataProvider";


export const Carrito = () =>{
    const value = useContext(DataContext)
    const[menu, setMenu]=value.menu
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse =() =>{
        setMenu(false);
    };

    const removeProducto = id =>{
        if(window.confirm("¿Quieres Eliminar el producto del carrito?")){
            carrito.forEach((item, index) => {
                if(item.id === id){
                    item.Cantidad = 1;
                    carrito.splice(index, 1)
                }
            })
        }
        setCarrito([...carrito])
    }
    const menos = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.Cantidad === 1 ? item.Cantidad = 1: item.Cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}

    const mas= id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.Cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}
    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";
    
   
    return(
        <div className={show1}>
            <div className={show2}>
                <div className="carrito_close" onClick={tooglefalse}> 
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Sus productos</h2>
                
                <div className="carrito_center">
                    {
                        carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> : <>
                        {
                        carrito.map((producto) =>(
                            <div className="carrito_Item" key={producto.id}>
                            <img src={producto.Imagen} alt=""/>
                            <div>
                                <h3>{producto.Nombre}</h3>
                                <p className="Price">${producto.Precio}</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid" onClick={() => mas(producto.id)}></box-icon>
                                
                                <p className="cantidad">{producto.Cantidad}</p>
                                
                                <box-icon name="down-arrow" type="solid" onClick={() => menos(producto.id)}></box-icon>
                            </div>
                            <div className="Remove_item" onClick={() => removeProducto(producto.id)}>
                                <box-icon name="trash"></box-icon>
                            </div>
                        </div>
                            )
                        )
                    };
                   </>
                }
                        <div className="Carrito_Producto">
                            <h3>Total: ${total}</h3>
                            <button className="btn">Enviar</button>
                        </div>
                </div>
            </div>
        </div>
    )
};
