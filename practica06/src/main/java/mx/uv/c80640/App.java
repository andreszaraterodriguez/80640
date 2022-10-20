package mx.uv.c80640;
import static spark.Spark.*;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        get("/andy", (req, res) -> "Hola andy");
        get("/sara", (req, res) -> "Hola sara");
        get("/", (req, res) -> "<h1>Bienbenida</h1><img src='https://www.uv.mx/v2/images/logouv.jpg'> "
        
        );
    }
}
