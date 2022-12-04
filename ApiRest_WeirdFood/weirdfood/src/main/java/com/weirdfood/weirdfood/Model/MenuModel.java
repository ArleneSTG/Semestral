package com.weirdfood.weirdfood.Model;

public class MenuModel {
    private int id;
    private String nombre_categoria;

    public String getNombre_categoria() {
        return nombre_categoria;
    }

    public void setNombre_categoria(String nombre_categoria) {
        this.nombre_categoria = nombre_categoria;
    }

    private String nombre_comida;
    private String descrip_ingre;
    private String fotoUrl;

    public MenuModel() {
    }

    public MenuModel(int id, String nombre_categoria, String nombre_comida, String descrip_ingre, String fotoUrl) {
        this.id = id;
        this.nombre_categoria = nombre_categoria;
        this.nombre_comida = nombre_comida;
        this.descrip_ingre = descrip_ingre;
        this.fotoUrl = fotoUrl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre_comida() {
        return nombre_comida;
    }

    public void setNombre_comida(String nombre_comida) {
        this.nombre_comida = nombre_comida;
    }

    public String getDescrip_ingre() {
        return descrip_ingre;
    }

    public void setDescrip_ingre(String descrip_ingre) {
        this.descrip_ingre = descrip_ingre;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }

}
