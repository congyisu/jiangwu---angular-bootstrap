angular.module("jiangwoo")

.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/products");	
	$stateProvider
		.state("products",{
			url:"/products",
			templateUrl: "./controllers/products/products.html",
			controller: "productsCtrl"
		})
		.state("shop",{
			url:"/shop",
			templateUrl: "./controllers/shop/shop.html",
			controller: "shopCtrl"
		})
		.state("spaces",{
			url:"/spaces",
			templateUrl: "./controllers/spaces/spaces.html",
			controller: "spacesCtrl"
		})
		.state("blog",{
			url:"/blog",
			templateUrl: "./controllers/blog/blog.html",
			controller: "blogCtrl"
		})
		.state("users",{
			url:"/users",
			templateUrl: "./controllers/users/users.html",
			controller: "usersCtrl"
		})
		

		

	
});


