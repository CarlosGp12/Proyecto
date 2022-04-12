import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import FormularioClientes from "./Formulario_Cliente";

const datos = [
    { cod_cliente: 1, Nombre: "Carlos", Apellido: "Gonzalez", Cedula: "0923377972", Direccion: "Guasmo sur", Telefono: "0960786567" },
    { cod_cliente: 2, Nombre: "Cesar", Apellido: "Moreno", Cedula: "0984787911", Direccion: "Guasmo sur", Telefono: "0967889642" },
    { cod_cliente: 3, Nombre: "Jeremy", Apellido: "Gonzalez", Cedula: "0924552322", Direccion: "Guasmo sur", Telefono: "0967774417" },
    { cod_cliente: 4, Nombre: "Aaron", Apellido: "Mendoza", Cedula: "0978555123", Direccion: "Guasmo sur", Telefono: "0978899233" },
    { cod_cliente: 5, Nombre: "Gabriel", Apellido: "Montesdeoca", Cedula: "0975552234", Direccion: "Guasmo central", Telefono: "0907778512" },
    { cod_cliente: 6, Nombre: "Scooby", Apellido: "doo", Cedula: "0928885546", Direccion: "Warne's Brother", Telefono: "0933266149" }
];

export class ClienteTable extends React.Component {
    state = {
        datos: datos,
        form:{
            cod_cliente: '',
            Nombre: '', 
            Apellido: '', 
            Cedula: '',
            Direccion: '',
            Telefono: ''
        },
        ModalInsertar: false
    };
    

    MostrarModalInsertar=()=> {
        this.setState({ModalInsertar: true});
    }
    OcultarModalInsertar=()=> {
        this.setState({ModalInsertar: false});
    }
    render() {
        return (
            <>
                <div className="container">
                    <table className="table caption-top">
                        <caption>Clientes {"  "}
                            <button type="button" className="btn btn-success" onClick={()=>this.MostrarModalInsertar()} ><FontAwesomeIcon icon={faPlus} /></button>
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
                            {this.state.datos.map((elemento) => (
                                <tr>
                                    <td>{elemento.cod_cliente}</td>
                                    <td>{elemento.Nombre}</td>
                                    <td>{elemento.Apellido}</td>
                                    <td>{elemento.Cedula}</td>
                                    <td>{elemento.Direccion}</td>
                                    <td>{elemento.Telefono}</td>
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
                                <FormularioClientes/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={()=>this.OcultarModalInsertar()} data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    }

}

export default  ClienteTable;