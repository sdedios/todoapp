/**
 * LoginController
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
        app.controller('LoginController',
            function ($scope, $location, $timeout, profileApi)
            {
                // define properties
                $scope.username = 'lcab@nascentdigital.com';
                $scope.password = '';

                // define actions
                $scope.login = function()
                {
                    if ($scope.username != 'lcab@nascentdigital.com'
                        || $scope.password != 'password')
                    {
                        return;
                    }

                    $timeout(function ()
                    {
                        profileApi.authenticated = true;
                        $location.path('/dashboard');
                    });
                };
            });
    });