/**
 * AppController
 */
define(

    // load dependencies
    [
        'app',
        'services/profileApi'
    ],

    // define module
    function (app)
    {
        // create controller
        app.controller('AppController',
            function ($scope, $location, $timeout, profileApi)
            {
                // define properties

                // define actions
                $scope.logout = function ()
                {
                    // TODO: unload a bunch of controllers

                    // logout
                    profileApi.authenticated = false;

                    // navigate to login
                    $timeout(function ()
                    {
                        $location.path('/');
                    });
                };

                // watch app state and bind to it
                $scope.$watch(
                    function ()
                    {
                        return profileApi.authenticated;
                    },
                    function (authenticated)
                    {
                        $scope.authenticated = authenticated;
                    });
            });
    });