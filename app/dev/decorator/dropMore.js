App
	.directive("onDropdown",function(){
		return {
			scope : {
			infiniterLoad : "&",
			infiniterFlg : "="
		},
		controller : function( $scope,$window ){
		
			var contentView = angular.element( $window );
			console.log(contentView)
			
			function getScrollBottom( scrollY ){
		
				var bodyHeight = document.body.offsetHeight,
					winHeight = window.innerHeight,
					ifBottom = false;
				console.log(bodyHeight+","+winHeight)	

				if( bodyHeight-scrollY <= winHeight+50 ){
					ifBottom = true;
				}else{
					ifBottom = false;
				}

				return ifBottom;


			}
			
		
			contentView.on( "scroll",function(){
				if( !$scope.infiniterFlg ) return false;
				if( getScrollBottom( this.scrollY ) ){
					$scope.infiniterLoad();
				}
			} )
		}
		}
	})