
// configure require.js
require.config(
{
    // module paths
    paths:
    {
        'jquery': 'lib/jquery',
        'angular': 'lib/angular',
        'angular-route': 'lib/angular-route',
        'angular-resource': 'lib/angular-resource'
    },

    // module dependencies
    shim:
    {
        'angular-route':
        {
            deps:
            [
                'angular'
            ]
        },
        'angular-resource':
        {
            deps:
            [
                'angular'
            ]
        },
        'app':
        {
            deps:
            [
                'jquery',
                'angular',
                'angular-route',
                'angular-resource'
            ]
        }
    }
});

// initiate app bootstrapping
require(

    // define app dependencies
    [
        'app'
    ],

    // manually bootstrap document w/ angular
    function (app)
    {
        angular.bootstrap(document, ['app']);
    }
);