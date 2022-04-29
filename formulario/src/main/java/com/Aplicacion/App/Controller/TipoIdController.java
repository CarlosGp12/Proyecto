package com.Aplicacion.App.Controller;

import com.Aplicacion.App.Model.TipoIdModel;
import com.Aplicacion.App.Services.TipoIdService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tipoId")
@CrossOrigin("*")
public class TipoIdController {

    @Autowired
    private TipoIdService tipoIdService;

    @GetMapping
    public List<TipoIdModel> listar() {
        return tipoIdService.listar();
    }

}
