package com.Aplicacion.App.Repository;

import java.util.ArrayList;

import com.Aplicacion.App.Model.ClienteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<ClienteModel, Long> {

}
