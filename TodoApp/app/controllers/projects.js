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
            function ($scope)
            {
                // define page data
                $scope.page =
                {
                    heading: 'Welcome',
                    username: 'Nascent'
                };

                // TODO: define page methods
            });
    });