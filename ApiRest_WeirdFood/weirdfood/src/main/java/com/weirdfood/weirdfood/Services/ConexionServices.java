package com.weirdfood.weirdfood.Services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionServices {
    public Connection ConexionDB() {
        try {
            Class.forName("org.mariadb.jdbc.Driver");
            return DriverManager.getConnection("jdbc:mariadb://localhost:3306/weirdfood", "root", "123456789");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (ClassNotFoundException cnfex) {
            System.out.println(cnfex.getMessage());
        }
        return null;
    }
}
