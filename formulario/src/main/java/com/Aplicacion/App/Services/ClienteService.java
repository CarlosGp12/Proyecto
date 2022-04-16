package com.Aplicacion.App.Services;

import com.Aplicacion.App.Model.ClienteModel;
import com.Aplicacion.App.Repository.ClienteRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienterepository;

    public List<ClienteModel> listar() {
        return clienterepository.findAll();
    }

    public ClienteModel insertar(ClienteModel cliente) {

        return clienterepository.save(cliente);

    }

    public Optional<ClienteModel> actualizar(Long cod_cliente) {

        return clienterepository.findById(cod_cliente);
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
