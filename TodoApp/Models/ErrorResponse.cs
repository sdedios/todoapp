

namespace TodoApp.Models
{
    public class ErrorResponse : Response
    {
        #region properties

        public override string status
        {
            get { return "error"; }
        }

        public string message { get; set; }

        #endregion

    }  // class ErrorResponse

}  // namespace TodoApp.Models