package com.weirdfood.weirdfood.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.weirdfood.weirdfood.Model.MenuModel;

public class MenuServices {
    Connection conn;

    public MenuServices() {
        conn = new ConexionServices().ConexionDB();
    }

    public List<MenuModel> ObtenerMenus() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM menu AS m JOIN categorias_comida as cc ON m.id_categoria = cc.idcategorias_comida;";

            List<MenuModel> menu = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                MenuModel menuModel = new MenuModel(
                    result.getInt("id_categoria"),
                    result.getString("nombre_categoria"),
                    result.getString("nombre_comida"),
                    result.getString("descrip_ingre"),
                    result.getString("fotoUrl")
                );

                menu.add(menuModel);
            }

            result.close();
            stmt.close();
            return menu;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }
}
