using System;


namespace TodoApp.Models
{
    [Serializable]
    public abstract class Response
    {
        #region properties

        public abstract string status { get; }

        #endregion

    }  // class Response

}  // namespace Coop.Mobile.Services.Models