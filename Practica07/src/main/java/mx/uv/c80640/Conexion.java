package mx.uv.c80640;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;

public class Conexion {
    private static String url = "jdbc:mysql://127.0.0.1:3306/";
    private static String DriverName="com.mysql.jdbc.Driver";
    private static String username ="root";
    private static String password = "";
    private static Connection connection = null;
//conexion base de datos 
    public static Connection getConnection(){
        try{
            Class.forName(DriverName);
            connection = DriverManager.getConnection(url, username, password);
        }catch(SQLException e){
            System.out.println(e);
        }catch(ClassNotFoundException e){
            System.out.println("no encontro el nombre");
        }
        return connection;
    }


}
