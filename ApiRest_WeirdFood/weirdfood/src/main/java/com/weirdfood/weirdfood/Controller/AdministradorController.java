package com.weirdfood.weirdfood.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weirdfood.weirdfood.Model.AdministradorModel;
import com.weirdfood.weirdfood.Services.AdministradorServices;

@RestController
public class AdministradorController {
    @GetMapping("/admin/all")
    public List<AdministradorModel> ObtenerAdmon() {
        return new AdministradorServices().ObtenerAdmon();
    }
}
