import React, { useContext } from "react";
import axios from "axios";
// import { DataContext } from "../../contexto/DataProvider";

class ProductoItem extends React.Component {
    

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
                imagen: '',
                tipoModal: ''
            }
        }
        // const value = useContext(DataContext);
        // const AddCarrito = value.AddCarrito;
    


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
                <br />
                <br />
                <br />
                <br />
                <div className="productos ">


                    {this.state.producto.map(producto => (

                        <div className="producto">
                            <div className="producto_Img">
                                <img src={producto.imagen} alt="{nombre}" />
                            </div>
                            <div className="producto_Datos">
                                <h1>{producto.nombre}</h1>
                                <p>{producto.categoria}</p>
                                <p className="price">${producto.precio}</p>
                                <p>Cantidad: {producto.stock}</p>
                            </div>
                            <div className="button">
                                <button className="btn">
                                    Añadir al carro
                                </button>
                            </div>
                        </div>
                    ))
                    }


                </div>
            </>
        );
    }
}

export default ProductoItem;
