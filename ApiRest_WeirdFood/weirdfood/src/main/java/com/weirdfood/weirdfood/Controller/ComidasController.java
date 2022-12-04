package com.weirdfood.weirdfood.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.weirdfood.weirdfood.Model.ComidasModel;
import com.weirdfood.weirdfood.Model.MenuModel;
import com.weirdfood.weirdfood.Services.ComidasServices;

@RestController
public class ComidasController {
    @GetMapping("/comidas/all")
    public List<ComidasModel> ObtenerComidas() {
        return new ComidasServices().ObtenerComidas();
    }

    @PostMapping("/anadircomida")
    public int GuardarComida(@RequestBody ComidasModel comidasModel) {
        return new ComidasServices().GuardarComida(comidasModel);
    }

    @PutMapping("/actualizarcomida")
    public int ActualizarComida(@RequestBody ComidasModel comidasModel) {
        return new ComidasServices().ActualizarComida(comidasModel);
    }

    @PutMapping("/actualizarmenu")
    public int ActualizarMenu(@RequestBody MenuModel menuModel) {
        return new ComidasServices().ActualizarMenu(menuModel);
    }

    @DeleteMapping("/eliminarplatillo/{idPlatillo}")
    public int Delete(@PathVariable("idPlatillo") int pid) {
        return new ComidasServices().EliminarPlatillo(pid);
    }

    @PostMapping("/publicarplatillo")
    public int PublicarPlatillo(@RequestBody MenuModel comidasModel) {
        return new ComidasServices().PublicarPlatillo(comidasModel);
    }

    @PutMapping("/actualizarpublicado")
    public int ActualizarPublicado(@RequestBody ComidasModel comidasModel) {
        return new ComidasServices().ActualizarPublicado(comidasModel);
    }
}
