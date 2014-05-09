/**
 * Projects module, defining controller for projects list view.
 */
define(

    // load dependencies
    [
        'app',
        'services/projectApi'
    ],

    // define module
    function (app)
    {
        // create controller
        app.controller('ProjectsController',
            function ($scope, projectApi)
            {
                // query projects
                $scope.projects = projectApi.query();
            });
    });