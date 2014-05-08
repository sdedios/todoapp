/**
 * Projects module, defining controller for projects list view.
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
        app.controller('ProjectsController',
            function ($scope, $q, $resource)
            {
                // define page data
                $scope.page =
                {
                    heading: 'Welcome',
                    username: 'Nascent'
                };
                var deferred = $q.defer();

                var Project = $resource('api/project/:projectId',
                {
                    projectId: '@id'
                });
                $scope.projects = Project.query();
            });
    });