package com.weirdfood.weirdfood.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.weirdfood.weirdfood.Model.ComidasModel;
import com.weirdfood.weirdfood.Model.MenuModel;

public class ComidasServices {
    Connection conn;

    public ComidasServices() {
        conn = new ConexionServices().ConexionDB();
    }

    public List<ComidasModel> ObtenerComidas() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM comidas";

            List<ComidasModel> comidas = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                ComidasModel comidasModel = new ComidasModel(
                    result.getInt("idComidas"),
                    result.getString("nombreComida"),
                    result.getFloat("precioComida"),
                    result.getString("descriComida"),
                    result.getInt("categoria_id"),
                    result.getString("fotoUrl"),
                    result.getString("fechaPreparacion"),
                    result.getString("fechaExpiracion"),
                    result.getString("descriIngredient"),
                    result.getInt("publicada")
                );

                comidas.add(comidasModel);
            }

            result.close();
            stmt.close();
            return comidas;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }
    
    public List<ComidasModel> ObtenerPlatillo() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM comidas";

            List<ComidasModel> comidas = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                ComidasModel comida = new ComidasModel(
                    result.getInt("idComidas"),
                    result.getString("nombreComida"),
                    result.getFloat("precioComida"),
                    result.getString("descriComida"),
                    result.getInt("categoria_id"),
                    result.getString("fotoUrl"),
                    result.getString("fechaPreparacion"),
                    result.getString("fechaExpiracion"),
                    result.getString("descriIngredient"),
                    result.getInt("publicada")
                );

                comidas.add(comida);
            }

            result.close();
            stmt.close();
            return comidas;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public int GuardarComida(ComidasModel comidasModel) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "INSERT INTO comidas (nombreComida, precioComida, descriComida, categoria_id, fotoUrl,descriIngredient, publicada) VALUES ('"+comidasModel.getNombreComida()+"','"+comidasModel.getPrecioComida()+"','"+comidasModel.getDescriComida()+"','"+comidasModel.getCategoria_id()+"','"+comidasModel.getFotoUrl()+"','"+comidasModel.getDescriIngredient()+"',1)";

            resultado = stmt.executeUpdate(query);
            return resultado;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int ActualizarComida(ComidasModel comidasModel) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "UPDATE comidas SET nombreComida='"+comidasModel.getNombreComida()+"', precioComida='"+comidasModel.getPrecioComida()+"', descriIngredient='"+comidasModel.getDescriIngredient()+"', descriComida='"+comidasModel.getDescriComida()+"',categoria_id='"+comidasModel.getCategoria_id()+"', fotoUrl='"+comidasModel.getFotoUrl()+"' WHERE idComidas='"+comidasModel.getId()+"'";

            resultado = stmt.executeUpdate(query);
            return resultado;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int ActualizarMenu(MenuModel comidasModel) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "UPDATE menu SET nombre_comida='"+comidasModel.getNombre_comida()+"', fotoUrl='"+comidasModel.getFotoUrl()+"',id_categoria='"+comidasModel.getId()+"', fotoUrl='"+comidasModel.getFotoUrl()+"' WHERE idComidas='"+comidasModel.getId()+"'";

            resultado = stmt.executeUpdate(query);
            return resultado;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int EliminarPlatillo(int pid) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "DELETE FROM comidas WHERE idComidas='" + pid + "'";

            return stmt.executeUpdate(query);

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int PublicarPlatillo(MenuModel menuModel) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "INSERT INTO menu (nombre_comida, descrip_ingre, fotoUrl, id_categoria) VALUES ('"+menuModel.getNombre_comida()+"','"+menuModel.getDescrip_ingre()+"','"+menuModel.getFotoUrl()+"','"+menuModel.getId()+"')";

            resultado = stmt.executeUpdate(query);
            return resultado;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int ActualizarPublicado(ComidasModel comidasModel) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "UPDATE comidas SET publicada='"+comidasModel.getPublicada()+"' WHERE idComidas='"+comidasModel.getId()+"'";

            resultado = stmt.executeUpdate(query);
            return resultado;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }
}
