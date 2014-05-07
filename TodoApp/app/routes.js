
/**
 * Routing module, defining routing table and mapping to controllers and views.  
 */
define(

    // load dependencies
    [],

    // define module
    function ()
    {
        // return routes data structure
        return {
            defaultRoutePath : '/',
            routes:
            {
                '/': 
                {
                    templateUrl: 'app/views/projects.html',
                    dependencies:
                    [
                        'controllers/projects'
                    ]
                },
                '/projects/:projectId':
                {
                    templateUrl: 'app/views/project.html',
                    dependencies:
                    [
                        'controllers/project'
                    ]
                }
            }
        };
    });