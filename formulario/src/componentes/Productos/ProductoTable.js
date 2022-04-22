import React from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import InputText from "../Input";


class ProductoTable extends React.Component {

    state = {
        producto: [],
        modalInsertar: false,
        modalEliminar: false,
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

    peticionGet = () => {
        axios.get("http://localhost:8080/productos").then(response => {
            this.setState({ producto: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost = async () => {
        await axios.post("http://localhost:8080/productos", this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPut = () => {
        axios.put("http://localhost:8080/productos/" + this.state.form.cod_producto, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        })
    }

    peticionDelete = () => {
        axios.delete("http://localhost:8080/productos/" + this.state.form.cod_producto).then(response => {
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
    }

    seleccionarProducto = (producto) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                cod_producto: producto.cod_producto,
                nombre: producto.nombre,
                precio: producto.precio,
                stock: producto.stock,
                categoria: producto.categoria,
                marca: producto.marca,
                imagen: producto.imagen
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
                        <caption>Productos {"  "}
                            <button type="button" className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }} ><FontAwesomeIcon icon={faPlus} /></button>
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.producto.map((producto) => (
                                    <tr>
                                        <td>{producto.cod_producto}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.precio}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.stock}</td>
                                        <td>{producto.marca}</td>
                                        <td className="tdimagen">{producto.imagen}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning" onClick={() => { this.seleccionarProducto(producto); this.modalInsertar() }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                            {" "}
                                            <button type="button" className="btn btn-danger" onClick={() => { this.seleccionarProducto(producto); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <Modal isOpen={this.state.modalInsertar}>
                        <ModalHeader style={{ display: 'block' }}>
                            <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                        </ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <div>

                                    <InputText
                                        label="ID"
                                        name="cod_producto"
                                        placeholder="ID"
                                        value={form ? form.cod_producto : ""}
                                        onChange={this.handleChange}
                                    />

                                </div>
                                <div>

                                    <InputText
                                        label="Nombre"
                                        name="nombre"
                                        placeholder="nombre"
                                        value={form ? form.nombre : ""}
                                        onChange={this.handleChange}
                                        mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
                                    // actualizarState={this.actualizarState}
                                    />
                                </div>
                                <div>

                                    <InputText
                                        label="Precio"
                                        name="precio"
                                        placeholder="13.00"
                                        value={form ? form.precio : ""}
                                        onChange={this.handleChange}
                                        mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
                                    // actualizarState={this.actualizarState}
                                    />
                                </div>
                                <div>

                                    <InputText
                                        label="Categoria"
                                        name="categoria"
                                        placeholder="categoria"
                                        value={form ? form.categoria : ""}
                                        onChange={this.handleChange}
                                        mensajeError="El campo no puede estar vacio, el texto no debe contener caracteres especiales como: !@#$%^*(){}"
                                    // actualizarState={this.actualizarState}
                                    />
                                </div>
                                <div>

                                    <InputText
                                        label="Stock"
                                        name="stock"
                                        placeholder="cantidad"
                                        value={form ? form.stock : ""}
                                        onChange={this.handleChange}
                                        mensajeError="El campo no puede quedar vacio y debe ingresar 10 numeros"
                                    //  actualizarState={this.actualizarState}
                                    />
                                </div>
                                <div>

                                    <InputText
                                        label="Marca"
                                        name="marca"
                                        placeholder="marca"
                                        value={form ? form.marca : ""}
                                        onChange={this.handleChange}
                                        mensajeError="El campo no puede quedar vacio"
                                    //actualizarState={this.actualizarState}
                                    />
                                </div>
                                <div>

                                    <InputText
                                        label="URL de la imagen"
                                        name="imagen"
                                        placeholder="imagen"
                                        value={form ? form.imagen : ""}
                                        onChange={this.handleChange}
                                        mensajeError="El campo no puede quedar vacio"
                                    //actualizarState={this.actualizarState}
                                    />
                                </div>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            {this.state.tipoModal == 'insertar' ?
                                <button className="btn btn-success" onClick={() => this.peticionPost()}>
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
                            Estás seguro que deseas eliminar un producto {form && form.nombre}
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


export default ProductoTable;
