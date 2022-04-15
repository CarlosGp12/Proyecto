import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import FormularioProducto from "./Formulario_Producto";



class ProductoTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            producto: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8081/productos")
            .then(response => response.data)
            .then((data => {
                this.setState({ producto: data });
            }
            ));

    }

    render() {
        return (
            <>
                <div className="container">
                    <table className="table caption-top">
                        <caption>Productos {"  "}
                            <button type="button" className="btn btn-success" onClick={() => this.MostrarModalInsertar()} ><FontAwesomeIcon icon={faPlus} /></button>
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">ID Tipo</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.producto.map((producto) => (
                                    <tr>
                                        <td>{producto.cod_producto}</td>
                                        <td>{producto.id_tipo_prod}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.precio}</td>
                                        <td>{producto.stock}</td>
                                        <td>{producto.marca}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                            {" "}
                                            <button type="button" className="btn btn-danger"><FontAwesomeIcon icon={faTrashCan} /></button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                
            </>
        );

    }

}

export default ProductoTable;