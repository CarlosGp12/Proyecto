package com.Aplicacion.App.Controller;

import com.Aplicacion.App.Services.ProductoService;
import com.Aplicacion.App.Model.ProductoModel;
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
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/productos")
@CrossOrigin("*")
public class ProductoController {

    @Autowired
    private ProductoService productoservice;

    @GetMapping
    public List<ProductoModel> listar() {
        return productoservice.listar();
    }

    @PostMapping
    public ProductoModel insertar(@RequestBody ProductoModel prod) {
        return productoservice.insertar(prod);
    }

    @PutMapping("/{cod_producto}")
    public ProductoModel actualizar(@RequestBody ProductoModel prod) {
        return productoservice.actualizar(prod);
    }

    @DeleteMapping("/{cod_producto}")
    public String eliminar(@PathVariable("cod_producto") Long cod_producto) {
        boolean ok = this.productoservice.eliminar(cod_producto);
        if (ok) {
            return "Se elimino" + cod_producto;
        } else {
            return "No pudo eliminar" + cod_producto;
        }
    }

}
