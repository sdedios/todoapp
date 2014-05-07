/**
 * Project module, defining controller for project details view.
 */
define(

    // load dependencies
    [
        'app'
    ],

    // define module
    function (app)
    {
        // create controller
        app.controller('ProjectController',
            function ($scope, $location, $routeParams)
            {
                // resolve route parameters
                var projectId = $routeParams.projectId;

                // define page data
                $scope.page =
                {
                    projectId: projectId
                };

                // define page methods
            });
    });