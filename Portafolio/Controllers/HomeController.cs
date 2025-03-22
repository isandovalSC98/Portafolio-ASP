using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Portafolio.Models;

namespace Portafolio.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;



    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    private List<DTO> ObtenerProyectos()
    {
        return new List<DTO>()
        {
            new DTO
            {
                Titulo = "Amazon",
                Descripcion = "E-commerce",
                Link = "https://www.amazon.com/-/es/",
                ImagenURL = "/imagenes/asd.png"
            },
            new DTO
            {
                Titulo = "Reddit",
                Descripcion = "Red social",
                Link = "https://www.amazon.com/-/es/",
                ImagenURL = "/imagenes/asd.png"
            },
            new DTO
            {
                Titulo = "Steam",
                Descripcion = "Tienda en linea de videojuegos",
                Link = "https://www.amazon.com/-/es/",
                ImagenURL = "/imagenes/asd.png"
            }

        };
    }

    public IActionResult Index(string nombre, int edad)
    {
        Persona persona = new Persona();
        //persona.Nombre = "Ignacio Sandoval Cañete";
        //persona.Edad = 26;
        //persona.datos("Ignacio Sandoval C", 26);
        //comentario de test git 
        //persona.Nombre = "Ignacio Sandoval Cañete..";
        //persona.Edad = 26;

        var proyectos = ObtenerProyectos().Take(3).ToList();
        var modelo = new HomeIndexViewModel() { DTO = proyectos };

        return View("index",modelo);
        //return View("index",persona);
    }

    public IActionResult Privacy()
    {
        
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    public string miFuncion() {
        return "Hola";
    }
}
