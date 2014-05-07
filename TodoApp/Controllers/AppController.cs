using System.Web.Mvc;


namespace TodoApp.Controllers
{
    public class AppController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
