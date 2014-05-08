using System.Web.Mvc;


namespace TodoApp.Controllers
{
    public class AppController : Controller
    {
        public ActionResult Index()
        {
            return new FilePathResult("~/app/index.html", "text/html");
        }
    }
}
