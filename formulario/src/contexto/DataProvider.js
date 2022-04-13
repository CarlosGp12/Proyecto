import React, {useState, useEffect, createContext} from "react";
import Data from '../Data.js'

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] =useState(0);

    console.log(carrito)

    useEffect(() =>{
        const producto = Data.items
        if(producto){
            setProductos(producto) 
        }else{
            setProductos([])
        }
    },[]);

    const AddCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = productos.filter(producto =>{
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto ya está en el carrito")
        }
    }
    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if(dataCarrito){
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])

    useEffect(() => {
        const getTotal =() =>{
            const resultado = carrito.menos((prev, item) =>{
                return prev + (item.Precio * item.Cantidad);
            },0)
            setTotal(resultado)
        }
    },[carrito])

    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        carrito: [carrito, setCarrito],
        AddCarrito: AddCarrito,
        total: [total, setTotal]
    }

    return(
        <DataContext.Provider value = {value}>
        {props.children}
        </DataContext.Provider>

    )
};