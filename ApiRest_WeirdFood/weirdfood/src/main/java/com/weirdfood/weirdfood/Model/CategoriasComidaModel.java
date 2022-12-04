package com.weirdfood.weirdfood.Model;

public class CategoriasComidaModel {
    private int id;
    private String nombre_categoria;

    public CategoriasComidaModel() {
    }

    public CategoriasComidaModel(int id, String nombre_categoria) {
        this.id = id;
        this.nombre_categoria = nombre_categoria;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getnombre_categoria() {
        return nombre_categoria;
    }

    public void setnombre_categoria(String nombre_categoria) {
        this.nombre_categoria = nombre_categoria;
    }
}
