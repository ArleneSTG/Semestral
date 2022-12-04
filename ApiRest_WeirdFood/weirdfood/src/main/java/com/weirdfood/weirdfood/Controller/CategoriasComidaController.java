package com.weirdfood.weirdfood.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weirdfood.weirdfood.Model.CategoriasComidaModel;
import com.weirdfood.weirdfood.Model.InformacionComidaModel;
import com.weirdfood.weirdfood.Services.CategoriasComidaServices;

@RestController
public class CategoriasComidaController {
    @GetMapping("/categoriascomida/all")
    public List<CategoriasComidaModel> ObtenerCategoriasComida() {
        return new CategoriasComidaServices().ObtenerCategoriasComida();
    }

    @GetMapping("/infcomida/all")
    public List<InformacionComidaModel> ObtenerInfoComida() {
        return new CategoriasComidaServices().ObtenerInfoComida();
    }

    @GetMapping("/distinctcomida/all")
    public List<InformacionComidaModel> ObtenerDistinctComida() {
        return new CategoriasComidaServices().ObtenerDistinctComida();
    }
}
