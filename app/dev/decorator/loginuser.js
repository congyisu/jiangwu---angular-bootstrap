angular.module("jiangwoo")
	.directive("loginUser",function(){
		 return {
		 	link:function(scope,ele,attrs,ctrl,trans){
		 		console.log(ele)
		 		  ele.bind('click',function(){
		                scope.$apply(function(){
		                 	//  console.log(111)
		                 	// var eclipse=angular.element("<div class='eclipse'></div>"),
		                 	// 	alertRill=angular.element(`<div class='alertRill'></div>`);
		                 	var eclipse=document.createElement("div");
		                 		eclipse.className="eclipse";
		                 	var loginBox=document.createElement("div");
		                 		loginBox.className="loginBox";
		                 	var left=document.createElement("div");
		                 		left.className="left hidden-xs";
		                 	var right=document.createElement("div");
		                 		right.className="right";		
		                	var img = document.createElement("img");
		                		img.src="https://open.weixin.qq.com/connect/qrcode/051RWRNFXTf-nawX";
		                		left.append(img);
		                	var form=$(`<div class='group'><input type="text" placeholder="手机号/邮箱" /><span>请输入密码</span></div>
		                				<div class='group'><input type="text" placeholder="密码" /></div>
										<div class='passUser'><p class='clearfix'><a href="javascript:;" class='fl'>新注册用户</a><a href="javascript:;" class='fr'>忘记密码？</a> 
											</p><button id='btn'>登录</button>
										 </div>`);

								loginBox.prepend( left );
								loginBox.append(right);
								
		                 		document.body.prepend(eclipse); 
		                 		document.body.prepend(loginBox); 
		                 		form.appendTo('.right');	


		                })
		            });
		          
		 	}
		 
		 }
	});