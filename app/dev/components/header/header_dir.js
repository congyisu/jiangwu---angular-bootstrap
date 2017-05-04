angular.module("jiangwoo")
	.directive("jwHeader",function(){
		 return {
		 	restrict: "E",
		 	replace: true,
		 	templateUrl: "./components/header/header.html",
		 	controller:function($scope,$http){
		 		$http.jsonp('http://localhost:8080/data?callback=JSON_CALLBACK')
				    .then(function(result){
				           //console.log(result.data.products)
				        $scope.data = result.data.products;  
				    });
		 	}
		 
		 }
	});