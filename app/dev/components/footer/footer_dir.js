angular.module("jiangwoo")
	.directive("jwFooter",function(){
		 return {
		 	restrict: "E",
		 	replace: true,
		 	templateUrl: "./components/footer/footer.html"
		 }
	});