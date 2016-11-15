var app = angular.module("myApp",[]);

app.controller('ctrl',function ($scope) {
	
	$scope.arr = [
	{list:"宠物粮食"},
	{list:"宠物零食"},
	{list:"宠物保健"},
	{list:"宠物医疗"},
	{list:"清洁洗护"},
	{list:"宠物美容"},
	{list:"宠物玩具"},
	{list:"服装牵引"},
	{list:"宠物家用"},
	{list:"户外训练"},
	{list:"多格漫"},
	{list:"周边服务"}
]
	
	
	$scope.linkArr = [
	{link:"首页"},
	{link:"上新区"},
	{link:"汪星人"},
	{link:"瞄星人"},
	{link:"活动促销"},
	{link:"控价专区"},
	{link:"产品图库"}
	]
})


	//轮播图
	var Timer = setInterval(function () {
		var currentleft = $(".smallslider ul").offset().left*1 - 123.5 
		
		if (currentleft == (-4832)) {
			$('.smallslider ul').animate({left:0})
		} else{
			currentleft -=1208
			$('.smallslider ul').animate({left:currentleft+"px"})
		}
	},4000)
	
	Timer;


		
	
	
	
	

	
	
	

