




var app = angular.module("registApp",[]);


app.controller("registctrl",["$scope",function($scope){
			
		$scope.regist = function (e) {
			var data = $('#regist').serialize();
			$.post("/regist",data,function (resData) {
				
				alert(resData.msg);
				if (resData.err == 0) {
					location.href = 'login.html'
				}
			})		
		}	
		
		$scope.showKF = function () {
			$("#server-box").css("display","block");
		}	
	
		$scope.closeKF = function () {
			$("#server-box").css("display","none");
		}
		
			
	}]);



//自定义标案验证指令，用于判断两个input中的内容是否一致
//	app.directive("qeualTo",[function() {
//		return{
//			restrict:'A',
//			require:"ngModel",
//			link:function ($scope,$el,attr,mod) {
//				//$validators表示input的验证对象中可以存放多个验证函数每当需要验证是angular会依次调用
//				//$validators中所验证函数，每个函数都验证通过时input就会变为可用状态；
//				mod.$validators.equalTo = function(value) {
//						  
//					return value == $scope[attr.equalTo]	
//						
//				}	
//			}
//		}
//	}])



