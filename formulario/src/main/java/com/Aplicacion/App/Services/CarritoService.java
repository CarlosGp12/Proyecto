package com.Aplicacion.App.Services;

import com.Aplicacion.App.Model.CarritoModel;
import com.Aplicacion.App.Repository.CarritoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarritoService {

    @Autowired
    private CarritoRepository carritorepository;

    public CarritoModel insertar(CarritoModel carrito) {

        return carritorepository.save(carrito);
    }

    public List<CarritoModel> listar() {
        return carritorepository.findAll();
    }

    public CarritoModel actualizar(CarritoModel carrito) {

        CarritoModel existingCarrito = carritorepository.findById(carrito.getCod_carrito()).orElse(null);
        existingCarrito.setId_tipo_prod(carrito.getId_tipo_prod());
        existingCarrito.setNombre(carrito.getNombre());
        existingCarrito.setProducto(carrito.getProducto());
        existingCarrito.setPrecio(carrito.getPrecio());
        return carritorepository.save(existingCarrito);
    }

    public boolean eliminar(Long cod_carrito) {
        try {
            carritorepository.deleteById(cod_carrito);
            return true;
        } catch (Exception e) {
            return false;
        }

    }

}
