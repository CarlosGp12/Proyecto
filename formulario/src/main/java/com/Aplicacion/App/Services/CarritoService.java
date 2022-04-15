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

    public CarritoModel actualizar(CarritoModel carrito) {

        return carritorepository.save(carrito);
    }

    public List<CarritoModel> listar() {
        return carritorepository.findAll();
    }

    public void eliminar(CarritoModel carrito) {
        carritorepository.delete(carrito);
    }

}
