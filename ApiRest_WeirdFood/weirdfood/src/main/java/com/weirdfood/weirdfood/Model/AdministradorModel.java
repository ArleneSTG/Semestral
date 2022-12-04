package com.weirdfood.weirdfood.Model;

public class AdministradorModel {
    private int id;
    private String nombre;
    private int estado;
    private String password;
    private String correo;
    private String cedula;

    public AdministradorModel() {
    }

    public AdministradorModel(int id, String nombre, int estado, String password, String correo, String cedula) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.password = password;
        this.correo = correo;
        this.cedula = cedula;
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

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }
}
