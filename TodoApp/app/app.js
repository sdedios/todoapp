/**
 * App module, providing all top-level application configuration and services.
 */ 
define(

    // load dependencies
    [
        'routes'
    ],

    // define module
    function (config)
    {
        // define app module/dependencies
        var app = angular.module('app',
        [
            'ngRoute',
            'ngResource'
        ]);

        // configure app module
        app.config(
        [
            '$routeProvider',
            '$locationProvider',
            '$resourceProvider',
            '$controllerProvider',
            '$filterProvider',
            '$provide',

            function ($routeProvider, $locationProvider, $resourceProvider,
                $controllerProvider, $filterProvider, $provide)
            {
                // setup app module as a service locator
                app.resource = $resourceProvider.register;
                app.controller = $controllerProvider.register;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;

                // configure location provide to be html5 compliant
                $locationProvider.html5Mode(true);

                // bind explicit routes
                if (config.routes !== undefined)
                {
                    // define dependency resolver
                    var createResolver = function (dependencies)
                    {
                        // create angular resolver
                        var instance =
                        {
                            resolver: ['$q', '$rootScope',
                                function ($q, $rootScope)
                                {
                                    // create promise scope
                                    var deferred = $q.defer();

                                    // asynchronously load dependency using require.js
                                    require(dependencies, function ()
                                    {
                                        // signal promise after loading
                                        $rootScope.$apply(function ()
                                        {
                                            deferred.resolve();
                                        });
                                    });

                                    // return promise
                                    return deferred.promise;
                                }]
                        }

                        // return instance
                        return instance;
                    };

                    // load all routes
                    angular.forEach(config.routes,
                        function (route, path)
                        {
                            // add route to provider
                            $routeProvider.when(path,
                            {
                                templateUrl: route.templateUrl,
                                resolve: createResolver(route.dependencies)
                            });
                        });
                }

                // bind default route
                if (config.defaultRoutePaths !== undefined)
                {
                    $routeProvider.otherwise(
                    {
                        redirectTo: config.defaultRoutePaths
                    });
                }
            }
        ]);

        // return app module
        return app;
    });