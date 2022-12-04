package com.weirdfood.weirdfood.Model;

public class UsuariosModel {
    private int idusuarios;
    private String nombre;
    private String nombreUsuario;
    private String correo;
    private String contrasena;
    private int tipo_usuario;

    public int getTipo_usuario() {
        return tipo_usuario;
    }

    public void setTipo_usuario(int tipo_usuario) {
        this.tipo_usuario = tipo_usuario;
    }

    public UsuariosModel(String correo, String contrasena) {
        this.correo = correo;
        this.contrasena = contrasena;
    }

    private String genero;
    private String telefono;
    private int estado_de_cuenta;

    public UsuariosModel() {
    }

    public UsuariosModel(int idusuarios, String nombreUsuario, String correo, String contrasena, String genero,
            String telefono, int estado_de_cuenta, int tipo_usuario) {
        this.idusuarios = idusuarios;
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.contrasena = contrasena;
        this.genero = genero;
        this.telefono = telefono;
        this.estado_de_cuenta = estado_de_cuenta;
        this.tipo_usuario = tipo_usuario;
    }

    public int getIdusuarios() {
        return idusuarios;
    }

    public void setIdusuarios(int idusuarios) {
        this.idusuarios = idusuarios;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getcontrasena() {
        return contrasena;
    }

    public void setcontrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public int getEstado_de_cuenta() {
        return estado_de_cuenta;
    }

    public void setEstado_de_cuenta(int estado_de_cuenta) {
        this.estado_de_cuenta = estado_de_cuenta;
    }
}
