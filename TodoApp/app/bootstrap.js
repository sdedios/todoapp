
// configure require.js
require.config(
{
    // module paths
    paths:
    {
        'jquery': 'lib/jquery',
        'bootstrap': '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js',
        'angular': 'lib/angular',
        'angular-route': 'lib/angular-route',
        'angular-resource': 'lib/angular-resource'
    },

    // module dependencies
    shim:
    {
        'bootstrap':
        {
            deps:
            [
                'jquery'
            ]
        },
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
                'bootstrap',
                'angular',
                'angular-route',
                'angular-resource'
            ]
        },
        'controllers/app':
        {
            deps:
            [
                'app'
            ]
        }
    }
});

// initiate app bootstrapping
require(

    // define app dependencies
    [
        'controllers/app'
    ],

    // manually bootstrap document w/ angular
    function ()
    {
        angular.bootstrap(document, ['app']);
    }
);