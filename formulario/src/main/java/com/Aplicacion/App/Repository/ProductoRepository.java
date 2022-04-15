package com.Aplicacion.App.Repository;

import com.Aplicacion.App.Model.ProductoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<ProductoModel, Integer> {

}
