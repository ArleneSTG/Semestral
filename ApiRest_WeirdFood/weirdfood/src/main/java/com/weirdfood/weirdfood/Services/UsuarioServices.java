package com.weirdfood.weirdfood.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.weirdfood.weirdfood.Model.UsuariosModel;

public class UsuarioServices {
    Connection conn;

    public UsuarioServices() {
        conn = new ConexionServices().ConexionDB();
    }

    public List<UsuariosModel> ObtenerUsuario() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM usuarios";

            List<UsuariosModel> usuario = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                UsuariosModel usuariosModel = new UsuariosModel(
                        result.getInt("idusuarios"),
                        result.getString("nombreUsuario"),
                        result.getString("correo"),
                        result.getString("contrasena"),
                        result.getString("genero"),
                        result.getString("telefono"),
                        result.getInt("estado_de_cuenta"),
                        result.getInt("tipo_usuario"));

                usuario.add(usuariosModel);
            }

            result.close();
            stmt.close();
            return usuario;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public int GuardarUsuario(UsuariosModel usuariorequest) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "INSERT INTO usuarios (nombreUsuario, correo, contrasena, genero, telefono, estado_de_cuenta, tipo_usuario) VALUES ('"+usuariorequest.getNombreUsuario()+"','"+usuariorequest.getCorreo()+"','"+usuariorequest.getcontrasena()+"','"+usuariorequest.getGenero()+"','"+usuariorequest.getTelefono()+"',0,0);";

            resultado = stmt.executeUpdate(query);
            return resultado;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int ActualizarUsuario(UsuariosModel usuariorequest) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "UPDATE usuarios SET nombreUsuario='"+usuariorequest.getNombreUsuario()+"', correo='"+usuariorequest.getCorreo()+"', contrasena='"+usuariorequest.getcontrasena()+"', telefono='"+usuariorequest.getTelefono()+"' WHERE idusuarios='"+usuariorequest.getIdusuarios()+"' ";

            resultado = stmt.executeUpdate(query);
            return resultado;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }
}
