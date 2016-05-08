angular.module('app', ['ngRoute', 'ClassicTales'])
.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/home', {
        templateUrl: 'partials/home.html'
    });
    $routeProvider.otherwise({
    	redirectTo: '/home'
    });
});
angular.module('ClassicTales', []);