using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace TodoApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // perform basic mappings
            config.MapHttpAttributeRoutes();

            // define default route
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
