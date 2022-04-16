package com.Aplicacion.App.Services;

import com.Aplicacion.App.Model.ClienteModel;
import com.Aplicacion.App.Repository.ClienteRepository;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienterepository;

    public List<ClienteModel> listar() {
        return (List<ClienteModel>) clienterepository.findAll();
    }

    public ClienteModel insertar(ClienteModel cliente) {

        return clienterepository.save(cliente);

    }

    public ClienteModel actualizar(ClienteModel cliente) {

        ClienteModel existingCliente = clienterepository.findById(cliente.getCod_cliente()).orElse(null);
        existingCliente.setCedula(cliente.getCedula());
        existingCliente.setNombres(cliente.getNombres());
        existingCliente.setApellidos(cliente.getApellidos());
        existingCliente.setTelefono(cliente.getTelefono());
        existingCliente.setDireccion(cliente.getDireccion());
        return clienterepository.save(existingCliente);
    }

    public boolean eliminar(Long cod_cliente) {
        try {
            clienterepository.deleteById(cod_cliente);
            return true;
        } catch (Exception e) {
            return false;
        }

    }
}
