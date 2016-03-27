var myApp = angular.module('myApp', []);

myApp.controller('MyController', function myController($scope){

	$scope.author = {
		'name' : 'KBob',
		'title' : 'King',
		'company' : 'World'

	}
});