var App = angular.module("jiangwoo",["ui.router"]);
	
	App.controller("pageCtrl",["$scope","$rootScope",function($scope,$rootScope){

		$scope.$on("place",function(event,data){
			$rootScope.data = data;
			$scope.$broadcast("givea",data)
				console.log(data);
		});
		
	}]);
