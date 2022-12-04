package com.weirdfood.weirdfood.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.weirdfood.weirdfood.Model.ContactanosModel;
import com.weirdfood.weirdfood.Services.ContactanosServices;

@RestController
public class ContactanosController {
    @GetMapping("/mensajes/all")
    public List<ContactanosModel> ObtenerMensaje() {
        return new ContactanosServices().ObtenerMensajes();
    }

    @PostMapping("/enviar")
    public int EnviarMensaje(@RequestBody ContactanosModel contactanosModel) {
        return new ContactanosServices().EnviarMensaje(contactanosModel);
    }

    @PutMapping("/actualizarmensaje")
    public int ActualizarMensaje(@RequestBody ContactanosModel menuModel) {
        return new ContactanosServices().ActualizarMensaje(menuModel);
    }
}
