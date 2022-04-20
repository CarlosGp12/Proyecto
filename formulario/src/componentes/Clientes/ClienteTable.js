import React from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import InputText from "../Input";

class ClienteTable extends React.Component {
    state = {
        cliente: [],
        modalInsertar: false,
        modalEliminar: false,
        form: {
            cod_cliente: '',
            cedula: '',
            nombres: '',
            apellidos: '',
            telefono: '',
            direccion: '',
            tipoModal: ''
        }
    }

    peticionGet = () => {
        axios.get("http://localhost:8080/clientes").then(response => {
            this.setState({ cliente: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost = async () => {
        await axios.post("http://localhost:8080/clientes", this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPut = () => {
        axios.put("http://localhost:8080/clientes/" + this.state.form.cod_cliente, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        })
    }

    peticionDelete = () => {
        axios.delete("http://localhost:8080/clientes/" + this.state.form.cod_cliente).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    seleccionarCliente = (cliente) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                cod_cliente: cliente.cod_cliente,
                cedula: cliente.cedula,
                nombres: cliente.nombres,
                apellidos: cliente.apellidos,
                telefono: cliente.telefono,
                direccion: cliente.direccion
            }
        })
    }

    componentDidMount() {
        this.peticionGet();
    }

    render() {

        const { form } = this.state;

        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <div className="container">
                    <table className="table caption-top">
                        <caption>Clientes {"  "}
                            <button type="button" className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}><FontAwesomeIcon icon={faPlus} /></button>
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
                                this.state.cliente.map(cliente => {
                                    return (
                                        <tr>
                                            <td>{cliente.cod_cliente}</td>
                                            <td>{cliente.cedula}</td>
                                            <td>{cliente.nombres}</td>
                                            <td>{cliente.apellidos}</td>
                                            <td>{cliente.direccion}</td>
                                            <td>{cliente.telefono}</td>
                                            <td>
                                                <button type="button" className="btn btn-warning" onClick={() => { this.seleccionarCliente(cliente); this.modalInsertar() }}><FontAwesomeIcon icon={faPenToSquare} /> </button>
                                                {" "}
                                                <button type="button" className="btn btn-danger" onClick={() => { this.seleccionarCliente(cliente); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>

                    <Modal isOpen={this.state.modalInsertar}>
                        <ModalHeader style={{ display: 'block' }}>
                            <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                        </ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <form id="formulario">
                                    <div>
                                        {/* <label>Id</label> */}
                                        <InputText
                                            label="ID"
                                            name="cod_cliente"
                                            placeholder="ID"
                                            value={form ? form.cod_cliente : ""}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div>
                                        {/* <label>Nombres</label> */}
                                        <InputText
                                            label="Nombre"
                                            name="nombres"
                                            id="nombres"
                                            placeholder="nombre"
                                            value={form ? form.nombres : ""}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div>
                                        {/* <label>Apellido</label> */}
                                        <span id="error" class="help-block"></span>
                                        <InputText
                                            label="Apellido"
                                            name="apellidos"
                                            placeholder="apellido"
                                            value={form ? form.apellidos : ""}
                                            onChange={this.handleChange}
                                            mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
                                        // actualizarState={this.actualizarState}
                                        />
                                    </div>
                                    <div>
                                        {/* <label>Cedula</label> */}
                                        <InputText
                                            label="Cedula"
                                            name="cedula"
                                            placeholder="0923377972"
                                            value={form ? form.cedula : ""}
                                            onChange={this.handleChange}
                                            mensajeError="El campo no puede quedar vacio y debe ingresar 10 numeros"
                                        //  actualizarState={this.actualizarState}
                                        />
                                    </div>
                                    <div>
                                        {/* <label>Direccion</label> */}
                                        <InputText
                                            label="Direccion"
                                            name="direccion"
                                            placeholder="Direccion del cliente"
                                            value={form ? form.direccion : ""}
                                            onChange={this.handleChange}
                                            mensajeError="El campo no puede quedar vacio"
                                        //actualizarState={this.actualizarState}
                                        />
                                    </div>
                                    <div>
                                        {/* <label>Telefono</label>  */}
                                        <InputText
                                            label="Telefono"
                                            name="telefono"
                                            placeholder="Telefono del cliente"
                                            value={form ? form.telefono : ""}
                                            onChange={this.handleChange}
                                            mensajeError="El campo no puede quedar vacio"
                                        // actualizarState={this.actualizarState}
                                        />
                                    </div>
                                </form>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            {this.state.tipoModal == 'insertar' ?
                                <button className="btn btn-success" type="submit" onClick={() => this.peticionPost()}>
                                    Insertar
                                </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                                    Actualizar
                                </button>
                            }
                            <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalEliminar}>
                        <ModalBody>
                            Estás seguro que deseas eliminar el cliente {form && form.nombres}
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
                            <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>
        );

    }

}

export default ClienteTable;
