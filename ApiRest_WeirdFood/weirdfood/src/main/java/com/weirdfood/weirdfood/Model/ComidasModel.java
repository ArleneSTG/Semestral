package com.weirdfood.weirdfood.Model;

public class ComidasModel {
    private int id;
    private String nombreComida;
    private float precioComida;
    private String descriComida;
    private int categoria_id;
    private String fotoUrl;
    private String fechaPreparacion;
    private String fechaExpiracion;
    private String descriIngredient;
    private int publicada;

    public ComidasModel(int id, String nombreComida, float precioComida, String descriComida, int categoria_id,
            String fotoUrl, String fechaPreparacion, String fechaExpiracion, String descriIngredient, int publicada) {
        this.id = id;
        this.nombreComida = nombreComida;
        this.precioComida = precioComida;
        this.descriComida = descriComida;
        this.categoria_id = categoria_id;
        this.fotoUrl = fotoUrl;
        this.fechaPreparacion = fechaPreparacion;
        this.fechaExpiracion = fechaExpiracion;
        this.descriIngredient = descriIngredient;
        this.publicada = publicada;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreComida() {
        return nombreComida;
    }

    public void setNombreComida(String nombreComida) {
        this.nombreComida = nombreComida;
    }

    public float getPrecioComida() {
        return precioComida;
    }

    public void setPrecioComida(float precioComida) {
        this.precioComida = precioComida;
    }

    public String getDescriComida() {
        return descriComida;
    }

    public void setDescriComida(String descriComida) {
        this.descriComida = descriComida;
    }

    public int getCategoria_id() {
        return categoria_id;
    }

    public void setCategoria_id(int categoria_id) {
        this.categoria_id = categoria_id;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }

    public String getFechaPreparacion() {
        return fechaPreparacion;
    }

    public void setFechaPreparacion(String fechaPreparacion) {
        this.fechaPreparacion = fechaPreparacion;
    }

    public String getFechaExpiracion() {
        return fechaExpiracion;
    }

    public void setFechaExpiracion(String fechaExpiracion) {
        this.fechaExpiracion = fechaExpiracion;
    }

    public String getDescriIngredient() {
        return descriIngredient;
    }

    public void setDescriIngredient(String descriIngredient) {
        this.descriIngredient = descriIngredient;
    }

    public int getPublicada() {
        return publicada;
    }

    public void setPublicada(int publicada) {
        this.publicada = publicada;
    }

    public ComidasModel() {
    }
}
