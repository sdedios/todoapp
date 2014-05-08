using System.Net;
using System.Net.Http;
using System.Web.Http;
using TodoApp.Models;


namespace TodoApp.Controllers
{
    public class ProjectController : ApiController
    {
        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK,
                new object[]
                {
                    new 
                    {
                        id = 1,
                        name = "TELUS Beta",
                        owner = "Edward Sit"
                    },
                    new 
                    {
                        id = 2,
                        name = "Zynga",
                        owner = "Andrew Hinton"
                    },
                    new 
                    {
                        id = 3,
                        name = "LCAB",
                        owner = "Camille Lawrence"
                    }
                });
        }
    }
}
