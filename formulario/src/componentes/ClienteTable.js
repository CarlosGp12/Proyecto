import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

class ClienteTable extends React.Component {
    render() {
        return (
            <div>
                <table class="table caption-top">
                    <caption>List of users</caption>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>0923377972</td>
                            <td>Carlos</td>
                            <td>Gonzalez</td>
                            <td>Guasmo sur</td>
                            <td>0996778941</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>0923377972</td>
                            <td>Javier</td>
                            <td>Murillo</td>
                            <td>Guasmo sur</td>
                            <td>0996778941</td>
                            <td><a  href="./Formulario_Cliente" ><FontAwesomeIcon icon={faHouseChimney} /></a></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>0923377972</td>
                            <td>Carlos</td>
                            <td>Gonzalez</td>
                            <td>Guasmo sur</td>
                            <td>0996778941</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>0923377972</td>
                            <td>Carlos</td>
                            <td>Gonzalez</td>
                            <td>Guasmo sur</td>
                            <td>0996778941</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ClienteTable;