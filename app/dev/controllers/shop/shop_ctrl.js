angular.module("jiangwoo")
	.controller("shopCtrl",function($scope,$rootScope,$http){
	//回调 callback=JSON_CALLBACK
	$scope.shopData=[];
	$http.get("http://localhost:8080/space?page=1")
		.then(function(result){
			console.log(result)
			if(result.statusText == "OK"){
				$scope.shopData = result.data.products;
				console.log($scope.shopData)
			};
		
	});
	//滑动加载更多
	var loadList = function(){
		var pageIndex = 6;
		var flg = true;
		var that =this;
		this.flg = true;

		this.load= function(){
			if( !flg ) return false;
			flg = false;
			//"http://m.lotour.com/xingqu/ajaxlist?tagId=" +pageIndex+ "&page=1&callback=JSON_CALLBACK"
			$http.get("http://localhost:8080/space?page="+pageIndex)
			.then(function(data){
				console.log(data)
				if( data.statusText == "OK" ){
					if( !data.data.products ){
						that.flg = false;
					}
					$scope.shopData = $scope.shopData.concat( data.data.products );
					console.log($scope.shopData);
					pageIndex--;
					flg = true;
				}
			})
		}
	}

	$scope.loadList = new loadList();	

	$http.jsonp("http://localhost:8080/shopxsbar?callback=JSON_CALLBACK")
		.then(function(result){
			console.log(result.data)
			
		
	});
		

  
 		
 
});