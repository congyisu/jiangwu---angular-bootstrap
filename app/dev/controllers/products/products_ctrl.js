
App.controller("productsCtrl",function($scope,$http,$rootScope){
	//回调 callback=JSON_CALLBACK
	
	$scope.data = [];
   $http.get('http://localhost:8080/space?page=3')
    .then(function(result){
           //console.log(result.data.products) 
        
           $scope.data = result.data.products;
          console.log($scope.data)
          
			$scope.goPage=function(){
				 $scope.$emit("place",$scope.data);
			}
         

    })
  
 
});