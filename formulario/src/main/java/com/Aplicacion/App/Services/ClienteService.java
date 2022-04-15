package com.Aplicacion.App.Services;

import com.Aplicacion.App.Model.ClienteModel;
import com.Aplicacion.App.Repository.ClienteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienterepository;

    public ClienteModel insertar(ClienteModel cliente) {

        return clienterepository.save(cliente);

    }

    public ClienteModel actualizar(ClienteModel cliente) {

        return clienterepository.save(cliente);
    }

    public List<ClienteModel> listar() {
        return clienterepository.findAll();
    }

    public void eliminar(ClienteModel cliente) {
        clienterepository.delete(cliente);
    }

}
