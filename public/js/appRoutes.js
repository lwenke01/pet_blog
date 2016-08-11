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
     });

 $locationProvider.html5Mode(true);

}]);
