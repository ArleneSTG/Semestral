package com.weirdfood.weirdfood.Model;

public class ContactanosModel {
    private int id;
    private String nombre;
    private String correo;
    private String mensaje;
    private String respondida;
    

    public ContactanosModel(int id, String nombre, String correo, String mensaje, String respondida) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.mensaje = mensaje;
        this.respondida = respondida;
    }

    public int getId() {
        return id;
    }



    public void setId(int id) {
        this.id = id;
    }



    public String getNombre() {
        return nombre;
    }



    public void setNombre(String nombre) {
        this.nombre = nombre;
    }



    public String getCorreo() {
        return correo;
    }



    public void setCorreo(String correo) {
        this.correo = correo;
    }



    public String getMensaje() {
        return mensaje;
    }



    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }



    public String getRespondida() {
        return respondida;
    }



    public void setRespondida(String respondida) {
        this.respondida = respondida;
    }



    public ContactanosModel() {
    }
}
