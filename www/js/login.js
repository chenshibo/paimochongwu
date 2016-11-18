

var app = angular.module("loginApp",[]);


app.controller("loginctrl",["$scope",function($scope){
		
		
		$scope.login = function (e) {
			console.log(11)
			var data = $('#login').serialize();
			
			$.post("/login",data,function (resData) {
				
				alert(resData.msg);
				if (resData.err == 0) {
					location.href = 'index.html';
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

