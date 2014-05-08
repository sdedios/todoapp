using System;
using System.Globalization;
using System.Web.Http.Controllers;
using System.Web.Http.ModelBinding;


namespace TodoApp.Models
{
    public class DateTimeBinder : IModelBinder
    {
        #region overridden methods

        public bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            string value = bindingContext.ValueProvider.GetValue(bindingContext.ModelName)
                .AttemptedValue;
            DateTime timestamp;
            if (DateTime.TryParseExact(value, @"yyyy-MM-dd HH:mm:ss",
                CultureInfo.InvariantCulture, DateTimeStyles.None,
                out timestamp))
            {
                bindingContext.Model = timestamp;
                return true;
            }
            else
            {
                return false;
            }
        }

        #endregion

    }
}