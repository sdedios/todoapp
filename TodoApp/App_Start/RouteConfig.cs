using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace TodoApp
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // define ignore route
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // define catch-all route
            routes.MapRoute(
                "Default",
                "{*url}",
                new { controller = "App", action = "Index" });
        }
    }
}
