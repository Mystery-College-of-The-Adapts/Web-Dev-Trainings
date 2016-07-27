angular
			.module('myApp', [])
			.run(function($rootScope) {
				$rootScope.name = "world";
			})

			.controller('MyController', function($scope){
				$scope.name = "Anderson";
			});
