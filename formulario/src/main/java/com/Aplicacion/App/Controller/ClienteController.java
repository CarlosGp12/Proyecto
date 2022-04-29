package com.Aplicacion.App.Controller;

import com.Aplicacion.App.Model.ClienteModel;
import com.Aplicacion.App.Services.ClienteService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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

    @PutMapping("/{cod_cliente}")
    public ClienteModel actualizar(@RequestBody ClienteModel cliente) {
        return clienteservice.actualizar(cliente);
    }

    @DeleteMapping("/{cod_cliente}")
    public String eliminar(@PathVariable("cod_cliente") Long cod_cliente) {
        boolean ok = this.clienteservice.eliminar(cod_cliente);
        if (ok) {
            return "Se elimino" + cod_cliente;
        } else {
            return "No pudo eliminar" + cod_cliente;
        }
    }
}
