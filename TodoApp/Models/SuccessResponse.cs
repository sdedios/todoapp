

namespace TodoApp.Models
{
    public class SuccessResponse : Response
    {
        #region properties

        public override string status
        {
            get { return "success"; }
        }

        public object data { get; set; }

        #endregion

    }  // class SuccessResponse

}  // namespace TodoApp.Models