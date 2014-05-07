
// configure require.js
require.config(
{
    // module paths
    paths:
    {
        'jquery': 'lib/jquery',
        'angular': 'lib/angular',
        'angular-route': 'lib/angular-route'
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
        'app':
        {
            deps:
            [
                'jquery',
                'angular',
                'angular-route'
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