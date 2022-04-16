package com.Aplicacion.App.Controller;

import com.Aplicacion.App.Model.ClienteModel;
import com.Aplicacion.App.Services.ClienteService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clientes")
@CrossOrigin("http://localhost:3000")
public class ClienteController {

    @Autowired
    private ClienteService clienteservice;

    @GetMapping
    public List<ClienteModel> listar() {
        return clienteservice.listar();
    }

    @PostMapping
    public ClienteModel insertar(@RequestBody ClienteModel cliente) {
        return clienteservice.insertar(cliente);
    }

    @PutMapping(path = "{cod_cliente}")
    public Optional<ClienteModel> actualizar(@PathVariable("cod_cliente") Long cod_cliente) {
        return this.clienteservice.actualizar(cod_cliente);
    }

    @DeleteMapping(path = "{cod_cliente}")
    public String eliminar(@PathVariable("cod_cliente") Long cod_cliente) {
        boolean ok = this.clienteservice.eliminar(cod_cliente);
        if (ok) {
            return "Se elimino" + cod_cliente;
        } else {
            return "No pudo eliminar" + cod_cliente;
        }
    }
}
