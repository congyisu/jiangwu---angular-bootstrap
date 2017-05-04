App
	.directive("fixedTop",function(){
		return {
		
		controller: function( $scope,$window ){
		
			var contentView = angular.element( $window );
			

			contentView.on( "scroll",function(){
				var headerH = document.querySelector(".index-header");
				if(!headerH) return false;
				var nav = document.querySelector(".cont-nav"),
					navTop = nav.offsetHeight;
				var minHeight = headerH.offsetHeight + navTop;

				if( this.scrollY > minHeight){
					angular.element(nav).css({"position":"fixed","top":"44px","left":"0px","z-index":"9999"})
				}else{
					angular.element(nav).css({"position":"initial","top":"0px","left":"0px","z-index":"9999"})
				}
			} )
		}
		}
	});