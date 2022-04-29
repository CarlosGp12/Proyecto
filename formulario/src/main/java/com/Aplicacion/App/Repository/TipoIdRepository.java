package com.Aplicacion.App.Repository;

import java.util.ArrayList;

import com.Aplicacion.App.Model.TipoIdModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoIdRepository extends CrudRepository<TipoIdModel, Long> {

}
