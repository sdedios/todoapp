/**
 * Project API service.
 */
define(

    // load dependencies
    [
        'app'
    ],

    // define module
    function (app)
    {
        // define singleton for service client
        app.factory('ProjectApi', function ($resource)
        {
            // TODO: configure project api instance
            var projectApi = $resource('api/project/:projectId',
            {
                projectId: '@id'
            });
            return projectApi
        });
    });