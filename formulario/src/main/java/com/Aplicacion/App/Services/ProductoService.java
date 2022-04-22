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

    public List<ProductoModel> listar() {
        return productorepository.findAll();
    }

    public ProductoModel actualizar(ProductoModel prod) {

        ProductoModel existingProducto = productorepository.findById(prod.getCod_producto()).orElse(null);
        existingProducto.setNombre(prod.getNombre());
        existingProducto.setPrecio(prod.getPrecio());
        existingProducto.setStock(prod.getStock());
        existingProducto.setCategoria(prod.getCategoria());
        existingProducto.setImagen(prod.getImagen());
        existingProducto.setMarca(prod.getMarca());
        return productorepository.save(existingProducto);
    }

    public boolean eliminar(Long cod_producto) {
        try {
            productorepository.deleteById(cod_producto);
            return true;
        } catch (Exception e) {
            return false;
        }

    }

}
