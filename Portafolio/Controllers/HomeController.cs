using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Portafolio.Models;
using Portafolio.servicios;

namespace Portafolio.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly RepositorioProjectos repositorioProjectos;

    public HomeController(ILogger<HomeController> logger, RepositorioProjectos repositorioProjectos)
    {
        _logger = logger;
        this.repositorioProjectos = repositorioProjectos;
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
        
        var proyectos = repositorioProjectos.ObtenerProyectos();
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
