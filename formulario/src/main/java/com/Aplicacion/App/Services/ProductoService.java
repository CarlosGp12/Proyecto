package com.Aplicacion.App.Services;

import com.Aplicacion.App.Repository.ProductoRepository;
import com.Aplicacion.App.Model.ProductoModel;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productorepository;

    public ProductoModel insertar(ProductoModel prod) {

        return productorepository.save(prod);

    }

    public ProductoModel actualizar(ProductoModel prod) {

        return productorepository.save(prod);
    }

    public List<ProductoModel> listar() {
        return productorepository.findAll();
    }

    public void eliminar(ProductoModel prod) {
        productorepository.delete(prod);
    }

}
