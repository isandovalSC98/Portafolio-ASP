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

    public IActionResult Index(string nombre, int edad)
    {
        Persona persona = new Persona();
        //persona.Nombre = "Ignacio Sandoval Cañete";
        //persona.Edad = 26;
        //persona.datos("Ignacio Sandoval C", 26);
        persona.Nombre = "Ignacio Sandoval Cañete";
        persona.Edad = 26;

        return View("Index", persona);
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
