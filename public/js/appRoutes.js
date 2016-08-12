angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

 $routeProvider

     // home page
     .when('/', {
         templateUrl: 'views/home.html',
         controller: 'MainController'
     })

     // blogss page that will use the BlogController
     .when('/admin', {
         templateUrl: 'views/blog.html',
         controller: 'BlogController'
     })

     .when('/:_id', {
           templateUrl: 'views/blog-id.html',
           controller: 'IdController'
         });

 $locationProvider.html5Mode(true);

}]);
