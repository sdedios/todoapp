using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;


namespace TodoApp
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            // configure web api 
            GlobalConfiguration.Configure(WebApiConfig.Register);

            // register filters
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);

            // register routes
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            // register js bundles
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
