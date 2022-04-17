package com.Aplicacion.App.Repository;

import com.Aplicacion.App.Model.CarritoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarritoRepository extends JpaRepository<CarritoModel, Long> {

}
