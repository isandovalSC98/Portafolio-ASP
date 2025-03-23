using Portafolio.Models;

namespace Portafolio.servicios
{
    public class RepositorioProjectos
    {
        public List<DTO> ObtenerProyectos()
        {
            return new List<DTO>()
        {
            new DTO
            {
                Titulo = "Projecto 1",
                Descripcion = "descripcion de projecto 1",
                Link = "https://www.amazon.com/-/es/",
                ImagenURL = "/imagenes/asd.png"
            },
            new DTO
            {
                Titulo = "Projecto 2",
                Descripcion = "descripcion de projecto 2",
                Link = "https://www.amazon.com/-/es/",
                ImagenURL = "/imagenes/asd.png"
            },
            new DTO
            {
                Titulo = "Projecto 3",
                Descripcion = "descripcion de projecto 3",
                Link = "https://www.amazon.com/-/es/",
                ImagenURL = "/imagenes/asd.png"
            }

        };
        }
    }
}
