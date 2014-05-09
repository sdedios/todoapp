/**
 * Profile API.
 */
define(

    // load dependencies
    [
        'app'
    ],

    // define module
    function (app)
    {
        // define singleton for profile service
        app.factory('profileApi', function ()
        {
            var profileApi =
            {
                authenticated: false
            };

            return profileApi;
        });
    });