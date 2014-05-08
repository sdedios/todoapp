using System.Web.Http.ModelBinding;


namespace TodoApp.Models
{
    public class DateTimeBinderAttribute : ModelBinderAttribute
    {
        public DateTimeBinderAttribute()
            : base(typeof(DateTimeBinder))
        {
        }
    }
}