
package com.Aplicacion.App.Controller;

import com.Aplicacion.App.Model.CarritoModel;
import com.Aplicacion.App.Services.CarritoService;
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
@RequestMapping("/carrito")
@CrossOrigin("*")
public class CarritoController {
    
    @Autowired
    private CarritoService carritoservice;
    
    @GetMapping
    public List<CarritoModel> listar(){
        return carritoservice.listar();
    }
    
    @PostMapping
    public CarritoModel insertar(@RequestBody CarritoModel carrito){
        return carritoservice.insertar(carrito);
    }
    
    @PutMapping("/{cod_carrito}")
    public CarritoModel actualizar(@RequestBody CarritoModel carrito){
        return carritoservice.actualizar(carrito);
    }
    
    @DeleteMapping("/{cod_carrito}")
    public String eliminar(@PathVariable("cod_carrito") Long cod_carrito) {
        boolean ok = this.carritoservice.eliminar(cod_carrito);
        if (ok) {
            return "Se elimino" + cod_carrito;
        } else {
            return "No pudo eliminar" + cod_carrito;
        }
    }
    
}
