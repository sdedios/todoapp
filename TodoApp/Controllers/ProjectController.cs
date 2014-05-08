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
                new SuccessResponse
                {
                    data = new object[]
                    {
                        new 
                        {
                            name = "TELUS Beta",
                            owner = "Edward Sit"
                        },
                        new 
                        {
                            name = "Zynga",
                            owner = "Andrew Hinton"
                        },
                        new 
                        {
                            name = "LCAB",
                            owner = "Camille Lawrence"
                        }
                    }                    
                });
        }
    }
}
