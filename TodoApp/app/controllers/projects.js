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
            function ($scope, $q)
            {
                // define page data
                $scope.page =
                {
                    heading: 'Welcome',
                    username: 'Nascent'
                };
                var deferred = $q.defer();

                // query project data                
                $.ajax(
                    {
                        type: 'GET',
                        url: 'api/project',
                        dataType: 'json'
                    })

                    // transform
                    .done(function (json)
                    {
                        // bind to project data on success
                        if (json.status === 'success')
                        {
                            deferred.resolve(json.data);
                        }

                            // or handle error
                        else
                        {
                            deferred.reject([]);
                        }
                    })

                    // error handler
                    .fail(function ()
                    {
                        alert("error");
                        deferred.reject([]);
                    });

                // defer handling of response
                deferred.promise.then(
                    function (projects)
                    {
                        $scope.projects = projects;
                    },
                    function ()
                    {
                        $scope.projects = undefined;
                    });


                // TODO: define page methods
            });
    });