import React, { useContext } from "react";
import { DataContext } from "../../contexto/DataProvider";
import  ProductoItem  from "./ProductoItem";
import axios from "axios";


class List_producto extends React.Component {

    state = {
        producto: [],
        form: {
            cod_producto: '',
            id_tipo_prod: '',
            nombre: '',
            precio: '',
            stock: '',
            categoria: '',
            marca: '',
            tipoModal: ''
        }
    }

    peticionGet = () => {
        axios.get("http://localhost:8081/productos").then(response => {
            this.setState({ producto: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    componentDidMount() {
        this.peticionGet();
    }



render() {



    return (
        
        <>
            <h1 className="title">PRODUCTOS</h1>
            
            <div className="productos">
                {
                    this.state.producto.map(producto => (
                        <ProductoItem
                            key={producto.cod_producto}
                            id={producto.cod_producto}
                            Tipo={producto.nombre}
                            Nombre={producto.precio}
                            Precio={producto.categoria}
                            Imagen={producto.Imagen}
                            Cantidad={producto.stock}
                            Marca={producto.marca}
                        />
                    ))
                }
            </div>
        </>
    );
}
        }
export default List_producto;
