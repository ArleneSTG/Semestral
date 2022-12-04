package com.weirdfood.weirdfood.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.weirdfood.weirdfood.Model.UsuariosModel;
import com.weirdfood.weirdfood.Services.UsuarioServices;

@RestController
public class UsuarioController {
    @GetMapping("/usuario/all") //ENDPOINT
    public List<UsuariosModel> ObtenerUsuario() {
        return new UsuarioServices().ObtenerUsuario();
    }

    @PostMapping("/usuario")
    public int GuardarUsuario(@RequestBody UsuariosModel usuario) {
        return new UsuarioServices().GuardarUsuario(usuario);
    }

    @PutMapping("/usuarioupdate")
    public int ActualizarUsuario(@RequestBody UsuariosModel usuario) {
        return new UsuarioServices().ActualizarUsuario(usuario);
    }
}
