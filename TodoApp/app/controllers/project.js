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
        app.controller('ProjectController',
        [
            '$scope',

            function ($scope)
            {
                $scope.page =
                {
                    heading: 'Welcome'
                };
            }
        ]);
    });