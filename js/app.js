angular.module('app', ['ngRoute', 'ClassicTales'])
.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/home', {
        templateUrl: 'partials/home.html'
    });
    $routeProvider.when('/story', {
        templateUrl: 'partials/story.html'
    });
    $routeProvider.when('/about', {
        templateUrl: 'partials/about.html'
    });
    $routeProvider.otherwise({
    	redirectTo: '/home'
    });
});
angular.module('ClassicTales', []);