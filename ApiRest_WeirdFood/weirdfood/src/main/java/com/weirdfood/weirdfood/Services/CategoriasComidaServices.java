package com.weirdfood.weirdfood.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.weirdfood.weirdfood.Model.CategoriasComidaModel;
import com.weirdfood.weirdfood.Model.InformacionComidaModel;

public class CategoriasComidaServices {
    Connection conn;

    public CategoriasComidaServices() {
        conn = new ConexionServices().ConexionDB();
    }

    public List<CategoriasComidaModel> ObtenerCategoriasComida() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM categorias_comida";

            List<CategoriasComidaModel> catecomidas = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                CategoriasComidaModel categoriasComidaModel = new CategoriasComidaModel(
                    result.getInt("idcategorias_comida"),
                    result.getString("nombre_categoria")
                );

                catecomidas.add(categoriasComidaModel);
            }

            result.close();
            stmt.close();
            return catecomidas;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public List<InformacionComidaModel> ObtenerInfoComida() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM menu AS m JOIN categorias_comida as cc ON m.id_categoria = cc.idcategorias_comida JOIN comidas as c on m.nombre_comida = c.nombreComida";

            List<InformacionComidaModel> catecomidas = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                InformacionComidaModel InformacionComidaModel = new InformacionComidaModel(
                    result.getInt("id"),
                    result.getInt("id_categoria"),
                    result.getInt("idcategorias_comida"),
                    result.getString("descriComida"),
                    result.getString("nombre_comida"),
                    result.getString("descrip_ingre"),
                    result.getString("fotoUrl"),
                    result.getInt("publicada"),
                    result.getString("precioComida")
                );

                catecomidas.add(InformacionComidaModel);
            }

            result.close();
            stmt.close();
            return catecomidas;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public List<InformacionComidaModel> ObtenerDistinctComida() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM menu AS m JOIN categorias_comida as cc ON m.id_categoria = cc.idcategorias_comida GROUP BY nombre_categoria";

            List<InformacionComidaModel> catecomidas = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                InformacionComidaModel InformacionComidaModel = new InformacionComidaModel(
                    result.getInt("id"),
                    result.getInt("id_categoria"),
                    result.getInt("idcategorias_comida"),
                    result.getString("nombre_categoria"),
                    result.getString("nombre_comida"),
                    result.getString("descrip_ingre"),
                    result.getString("fotoUrl"),
                    result.getInt("publicada"),
                    result.getString("precioComida")
                );

                catecomidas.add(InformacionComidaModel);
            }

            result.close();
            stmt.close();
            return catecomidas;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }
}
