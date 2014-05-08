using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;


namespace TodoApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // perform basic mappings
            config.MapHttpAttributeRoutes();

            // register api routes
            config.Routes.MapHttpRoute(
               name: "CoopApi",
               routeTemplate: "api/{controller}/{action}/{id}",
               defaults: new
               {
                   action = RouteParameter.Optional,
                   id = RouteParameter.Optional
               }
           );

            // disable XML formatter (causes JSON to be default)
            MediaTypeHeaderValue xmlMediaType = config.Formatters.XmlFormatter
                .SupportedMediaTypes
                .FirstOrDefault(mt => mt.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(
                xmlMediaType);
        }
    }
}
