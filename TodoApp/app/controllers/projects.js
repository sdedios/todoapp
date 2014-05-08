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
            function ($scope, ProjectApi)
            {
                // define page data
                $scope.page =
                {
                    heading: 'Welcome',
                    username: 'Nascent'
                };

                // query projects
                $scope.projects = ProjectApi.query();
            });
    });