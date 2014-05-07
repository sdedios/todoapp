using System.Web;
using System.Web.Optimization;


namespace TodoApp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // define script bundles
            bundles.Add(new ScriptBundle("~/app/scripts/angular")
                .Include("~/app/lib/angular.js"));

            // define style bundles
            bundles.Add(new StyleBundle("~/app/styles")
                .Include
                (
                    "~/css/bootstrap.css",
                    "~/css/site.css"
                ));
        }
    }
}
