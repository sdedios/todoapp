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
        app.controller('ProjectsController',
        [
            '$scope',

            function ($scope)
            {
                $scope.page =
                {
                    heading: 'Welcome',
                    username: 'Nascent'
                };
            }
        ]);
    });