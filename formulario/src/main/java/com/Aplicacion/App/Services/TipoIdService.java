package com.Aplicacion.App.Services;

import com.Aplicacion.App.Model.TipoIdModel;
import com.Aplicacion.App.Repository.TipoIdRepository;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TipoIdService {

    @Autowired
    private TipoIdRepository tipoIdRepository;

    public List<TipoIdModel> listar() {
        return (List<TipoIdModel>) tipoIdRepository.findAll();
    }

}
