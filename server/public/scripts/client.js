var app = angular.module('HouseApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<h2>add new one!</h2>'
        })
        .when('/sale', {
            templateUrl: 'views/sale.html',
            controller: 'SaleController as vm'
        })
        .when('/rent', {
            templateUrl: 'views/rent.html',
            controller: 'RentController as vm'
        })
        .otherwise({
            template: '<h1>404</h1>'
        });
}]);