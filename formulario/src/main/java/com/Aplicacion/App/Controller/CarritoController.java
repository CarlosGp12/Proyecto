
package com.Aplicacion.App.Controller;

import com.Aplicacion.App.Model.CarritoModel;
import com.Aplicacion.App.Services.CarritoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class CarritoController {
    
    @Autowired
    private CarritoService carritoservice;
    
    @GetMapping(value = "/all")
    public List<CarritoModel> listar(){
        return carritoservice.listar();
    }
    
    @PostMapping
    public CarritoModel insertar(@RequestBody CarritoModel carrito){
        return carritoservice.insertar(carrito);
    }
    
    @PutMapping
    public CarritoModel actualizar(@RequestBody CarritoModel carrito){
        return carritoservice.actualizar(carrito);
    }
    
    @DeleteMapping
    public void eliminar(@RequestBody CarritoModel carrito){
        carritoservice.eliminar(carrito);
    }
    
}
