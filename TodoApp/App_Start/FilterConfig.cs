using System.Web;
using System.Web.Mvc;

namespace TodoApp
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            // define application filters
            filters.Add(new HandleErrorAttribute());
        }
    }
}
