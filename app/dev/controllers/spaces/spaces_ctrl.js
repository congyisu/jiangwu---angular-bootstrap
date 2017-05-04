
App.controller("spacesCtrl",function($scope,$http,$rootScope){
	$scope.spaceData=[];
    $http.jsonp('http://localhost:8080/dataSpace?callback=JSON_CALLBACK')
    	.then(function(result){

    		console.log(result.data.spaces)
    		$scope.spaceData=result.data.spaces;
    	})
});