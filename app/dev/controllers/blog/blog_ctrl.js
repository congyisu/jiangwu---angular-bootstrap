
App.controller("blogCtrl",function($scope,$http,$rootScope){
  
   	$http.jsonp("http://localhost:8080/datablog?callback=JSON_CALLBACK")
   		.then(function(result){
           console.log(result.data.articles) 
        
           $scope.data = result.data.articles;
          console.log($scope.data)
          
			

    })
});