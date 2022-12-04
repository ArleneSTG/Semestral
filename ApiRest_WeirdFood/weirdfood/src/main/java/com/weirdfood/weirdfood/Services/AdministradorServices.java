package com.weirdfood.weirdfood.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.weirdfood.weirdfood.Model.AdministradorModel;

public class AdministradorServices {
    Connection conn;

    public AdministradorServices() {
        conn = new ConexionServices().ConexionDB();
    }

    public List<AdministradorModel> ObtenerAdmon() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM administrador";

            List<AdministradorModel> admon = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                AdministradorModel administradorModel = new AdministradorModel(
                    result.getInt("idadministrador"),
                    result.getString("nombre"),
                    result.getInt("estado"),
                    result.getString("contrasena"),
                    result.getString("correo"),
                    result.getString("cedula")
                );

                admon.add(administradorModel);
            }

            result.close();
            stmt.close();
            return admon;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }
}
