import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import FormularioClientes from "./Formulario_Cliente";



class ClienteTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8081/clientes")
            .then(response => response.data)
            .then((data => {
                this.setState({ cliente: data });
            }
            ));

    }

    render() {
        return (
            <>
                <div className="container">
                    <table className="table caption-top">
                        <caption>Clientes {"  "}
                            <button type="button" className="btn btn-success" onClick={() => this.MostrarModalInsertar()} ><FontAwesomeIcon icon={faPlus} /></button>
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Cedula</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cliente.map((cliente) => (
                                    <tr>
                                        <td>{cliente.cod_cliente}</td>
                                        <td>{cliente.cedula}</td>
                                        <td>{cliente.nombres}</td>
                                        <td>{cliente.apellidos}</td>
                                        <td>{cliente.telefono}</td>
                                        <td>{cliente.direccion}</td>
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
                <div className="modal" tabindex="-1" isOpen={this.state.ModalInsertar} >
                    <div className="modal-dialog">
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h5 className="modal-title">Ingrese usuario</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <FormularioClientes />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => this.OcultarModalInsertar()} data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    }

}

export default ClienteTable;