
	//轮播图
	
	var currentNum = 1;
	var left;
	var Timer = setInterval(function () {
		
		if (currentNum == 5) {
			currentNum = 0
			$(".smallslider ul").animate({left:0})
		}
		else{
			left = (-1208)*currentNum+"px"
			$(".smallslider ul").animate({left:left})
		}
		
		currentNum +=1;
	
	},4000)
	


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
];
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

app.controller("ctrl2",function ($scope) {

	//$scope.a = 4;
	
	$scope.imgArr = [
	{	
		src:"img/1b5f0aa9869c4154a6e7bc3197d7188a.jpg_180X180.jpg",
		title:"麦德氏IN-Kat高效营养化毛膏55g  【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体内容请查看活动详情】",
		price:"￥45.00"
	},
	{	
		src:"img/cb3b0df6989540df9cbed52c1c64de9f.jpg_180X180.jpg",
		title:"麦德氏IN-Kat L-Lysine 鼻支安10g 【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体内容请查看活动详情】",
		price:"￥45.00"
	},
	{	
		src:"img/98fc61c9fd294d539a31a4b3e4e9da1a.jpg_180X180.jpg",
		title:"麦德氏IN-Kat 猫用益生菌20g【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体内容请查看活动详情】",
		price:"￥50.00"
	},
	{	
		src:"img/3fbe191675c84b748c2ffaae9fcc04ff.jpg_180X180.jpg",
		title:"麦德氏IN-Kat母乳化猫用羊奶粉10g*20袋【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体查看活动详情】",
		price:"￥135.00"
	},
	{	
		src:"img/f4cefc274a544fcdb60f55f807d63b47.jpg_180X180.jpg",
		title:"麦德氏IN-Kat猫用磷虾卵磷脂250g 【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体内容请查看活动详情】",
		price:"￥100.00"
	}
	];
	
	$scope.foreArr = [
		{
			src:"img/e0ba71c531d34485aac6c57939b94a79.jpg",
			title:"立俪 宠物专用天然植物酵素水 500ml/瓶*15/件 绿  【11月活动  5送1（赠品为新品）】",
			detail:"日本天然植物酵素 快速补水 祛除异味 促消化抗衰老"
			
		},
		{
			src:"img/e1021731e2c54bad91c70092e716360c.jpg",
			title:"多格漫DoggyMan DMB-10肉罐包-低脂肪鸡肉 牛肉?地瓜(犬用）110g  Z0073【11月活动 3送1】",
			detail:"无添加天然食材 护肤美毛 保护关节 特添茶多酚消臭成分 除臭抑臭"
		}
	]
	
	
	//5层floorrepeat数组
	
	$scope.floorArr = [
		{
			floor:"1F",
			name:"宠物粮食",
			title:"大牌",
			nav:[
				{list:"合法进口"},
				{list:"国产犬粮"},
				{list:"优选猫粮"},
				{list:"发育宝犬粮"}
				],
			detailli:[
				{
					src:"img/69f0ab18f3754e08bfb2662f53b5e975.jpg_180X180.jpg",
					title:"发育宝 A系列小型犬幼奶糕粮10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥510.00"
					},
				{
					src:"img/2fc307e5584b46669da3ee7745fae148.jpg_180X180.jpg",
					title:"发育宝 A系列阶段幼猫成长配方3kg（适用于4月-12月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥240.00"
					},
				{
					src:"img/fa7583d858d443e29eefedfd244fdba0.jpg_180X180.jpg",
					title:"发育宝 A系列阶段幼猫奶糕3kg（适用于1月-4月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥240.00"
					},
				{
					src:"img/902b2144db484cfd975e2ef5cb5f4e3d.jpg_180X180.jpg",
					title:"发育宝 A系列室内成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥235.00"
					},
				{
					src:"img/2e86644387284bc9b85fe6f74ccdd1db.jpg_180X180.jpg",
					title:"发育宝 A系列挑嘴成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥235.00"
					},
				{
					src:"img/69737b92b17649098d04b83e8f99a122.jpg_180X180.jpg",
					title:"发育宝 A系列大型幼犬3kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥260.00"
					},
				{
					src:"img/5f4f1f0c19a54c1d9dfe98983da7148e.jpg_180X180.jpg",
					title:"发育宝 A系列小型幼犬10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥490.00"
					}
			],
			detailimg:[
				{src:"img/03d9e3cd47c4473a973af8a1abc97402.jpg"},
				{src:"img/53e0b001318042ddbf93a03faac54ec8.jpg"},
				{src:"img/754b245fb73d4b09af171c22426b7f9a.jpg"}
			],
			iconimg:[
				{src:"img/20160809171145.jpg"},
				{src:"img/20160727084118.jpg"},
				{src:"img/20160803162635.jpg"},
				{src:"img/20160809174914.jpg"},
				{src:"img/20160809174409.jpg"},
				{src:"img/20160803164005.jpg"},
				{src:"img/20160803162748.jpg"},
				{src:"img/20160809174514.jpg"},
				{src:"img/20160803162757.jpg"},
				{src:"img/20160809174329.jpg"}
			],
			admsrc:"img/4a7ef818831945949911e5d404084ab6.jpg",
			navsrc:"img/958ae43cb4d341908f3db8efd4dcb2ff.jpg"
		},
		{
			floor:"2F",
			name:"宠物零食",
			title:"精选",
			nav:[
				{list:"猫罐"},
				{list:"猫休闲零食"},
				{list:"磨牙品牌"},
				{list:"肉质零食"},
				{list:"路斯"},
				{list:"顽皮"},
				{list:"禾仕嘉"},
				{list:"Smartbones"}
				],
					detailli:[
				{
					src:"img/68ca09d32c7544278c356ab65ec2e174.jpg_180X180.jpg",
					title:"路斯 馋嘴猫Q弹肠吞拿鱼150g（15支）【11月活动 10送2】",
					price:"￥14.00"
					},
				{
					src:"img/67b19fe1e43144b5b0d6239c74ada3e1.jpg_180X180.jpg",
					title:"路斯 馋嘴猫Q弹肠三文鱼150g（15支）【11月活动 10送2】",
					price:"￥14.00"
					},
				{
					src:"img/0e9c0353694d4f84972871827e6d32f3.jpg_180X180.jpg",
					title:"路斯 馋嘴猫Q弹肠吞拿鱼+蟹肉150g（15根）【11月活动 10送2】",
					price:"￥14.00"
					},
				{
					src:"img/d91445d6562d4c749d8e380d929499ef.jpg_180X180.jpg",
					title:"路斯 馋嘴猫小鱼曲奇吞拿鱼+猫薄荷80g【11月活动 10送2】",
					price:"￥12.00"
					},
				{
					src:"img/895ef56b5b8a46638e7e56b198bd1dae.jpg_180X180.jpg",
					title:"路斯 馋嘴猫小鱼曲奇吞鳕鱼+猫薄荷80g【11月活动 10送2】",
					price:"￥12.00"
					},
				{
					src:"img/902c225ad0d8453cba4c43d89335dfa4.jpg_180X180.jpg",
					title:"路斯 馋嘴猫小鱼曲奇吞拿鱼+三文鱼80g【11月活动 10送2】",
					price:"￥12.00"
					},
				{
					src:"img/c6ec02ff679b467eadba17630994e8c8.jpg_180X180.jpg",
					title:"路斯 馋嘴猫小鱼曲奇吞拿鱼+鸡肉80g【11月活动 10送2】",
					price:"￥12.00"
					}
			],
			detailimg:[
				{src:"img/47ee59ebc71249778d97ed8b27a28566.jpg"},
				{src:"img/c4b51df6e4eb42ec8de9aa4edee2de72.jpg"},
				{src:"img/63b03ccf44e9479182d64a4f950b8a18.jpg"}
			],
			iconimg:[
				{src:"img/20160803165235.jpg"},
				{src:"img/20160803165502.jpg"},
				{src:"img/20160803165201.jpg"},
				{src:"img/20160803165117.jpg"},
				{src:"img/20160803165440.jpg"},
				{src:"img/20160803164832.jpg"},
				{src:"img/20160809171202.jpg"},
				{src:"img/20160803165056.jpg"},
				{src:"img/20160809174527.jpg"},
				{src:"img/20160803165327.jpg"}
			],
			admsrc:"img/50b1cbb1a8274e93bb76fd70bddae02d.jpg",
			navsrc:"img/0bc76271b5e246da8829b66f3a3ea318.jpg"
		},
		{
			floor:"3F",
			name:"宠物保健",
			title:"营养",
			nav:[
				{list:"热销品牌"},
				{list:"卫仕"},
				{list:"发育宝"},
				{list:"麦德氏"}
				],
					detailli:[
				{
					src:"img/69f0ab18f3754e08bfb2662f53b5e975.jpg_180X180.jpg",
					title:"发育宝 A系列小型犬幼奶糕粮10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥510.00"
					},
				{
					src:"img/2fc307e5584b46669da3ee7745fae148.jpg_180X180.jpg",
					title:"发育宝 A系列阶段幼猫成长配方3kg（适用于4月-12月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥240.00"
					},
				{
					src:"img/fa7583d858d443e29eefedfd244fdba0.jpg_180X180.jpg",
					title:"发育宝 A系列阶段幼猫奶糕3kg（适用于1月-4月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥240.00"
					},
				{
					src:"img/902b2144db484cfd975e2ef5cb5f4e3d.jpg_180X180.jpg",
					title:"发育宝 A系列室内成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥235.00"
					},
				{
					src:"img/2e86644387284bc9b85fe6f74ccdd1db.jpg_180X180.jpg",
					title:"发育宝 A系列挑嘴成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥235.00"
					},
				{
					src:"img/69737b92b17649098d04b83e8f99a122.jpg_180X180.jpg",
					title:"发育宝 A系列大型幼犬3kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥260.00"
					},
				{
					src:"img/5f4f1f0c19a54c1d9dfe98983da7148e.jpg_180X180.jpg",
					title:"发育宝 A系列小型幼犬10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥490.00"
					}
			],
			detailimg:[
				{src:"img/03d9e3cd47c4473a973af8a1abc97402.jpg"},
				{src:"img/53e0b001318042ddbf93a03faac54ec8.jpg"},
				{src:"img/754b245fb73d4b09af171c22426b7f9a.jpg"}
			],
			iconimg:[
				{src:"img/20160727084118.jpg"},
				{src:"img/20160803162635.jpg"},
				{src:"img/20160803162721.jpg"},
				{src:"img/20160803162748.jpg"},
				{src:"img/20160803162757.jpg"},
				{src:"img/20160803165350.jpg"},
				{src:"img/20160803164005.jpg"},
				{src:"img/20160803164204.jpg"},
				{src:"img/20160803165610.jpg"},
				{src:"img/20160803165702.jpg"}
			],
			admsrc:"img/bf9c817076b74f23b9f6dcb68377c05d.jpg",
			navsrc:"img/1f62400f3f114b28a7c7f56bf03300e0.jpg"
		},
		{
			floor:"1F",
			name:"宠物粮食",
			title:"大牌",
			nav:[
				{list:"合法进口"},
				{list:"国产犬粮"},
				{list:"优选猫粮"},
				{list:"发育宝犬粮"}
				],
					detailli:[
				{
					src:"img/69f0ab18f3754e08bfb2662f53b5e975.jpg_180X180.jpg",
					title:"发育宝 A系列小型犬幼奶糕粮10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥510.00"
					},
				{
					src:"img/2fc307e5584b46669da3ee7745fae148.jpg_180X180.jpg",
					title:"发育宝 A系列阶段幼猫成长配方3kg（适用于4月-12月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥240.00"
					},
				{
					src:"img/fa7583d858d443e29eefedfd244fdba0.jpg_180X180.jpg",
					title:"发育宝 A系列阶段幼猫奶糕3kg（适用于1月-4月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥240.00"
					},
				{
					src:"img/902b2144db484cfd975e2ef5cb5f4e3d.jpg_180X180.jpg",
					title:"发育宝 A系列室内成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥235.00"
					},
				{
					src:"img/2e86644387284bc9b85fe6f74ccdd1db.jpg_180X180.jpg",
					title:"发育宝 A系列挑嘴成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥235.00"
					},
				{
					src:"img/69737b92b17649098d04b83e8f99a122.jpg_180X180.jpg",
					title:"发育宝 A系列大型幼犬3kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥260.00"
					},
				{
					src:"img/5f4f1f0c19a54c1d9dfe98983da7148e.jpg_180X180.jpg",
					title:"发育宝 A系列小型幼犬10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥490.00"
					}
			],
			detailimg:[
				{src:"img/03d9e3cd47c4473a973af8a1abc97402.jpg"},
				{src:"img/53e0b001318042ddbf93a03faac54ec8.jpg"},
				{src:"img/754b245fb73d4b09af171c22426b7f9a.jpg"}
			],
			iconimg:[
				{src:"img/20160727084118.jpg"},
				{src:"img/20160803162635.jpg"},
				{src:"img/20160803162721.jpg"},
				{src:"img/20160803162748.jpg"},
				{src:"img/20160803162757.jpg"},
				{src:"img/20160803165350.jpg"},
				{src:"img/20160803164005.jpg"},
				{src:"img/20160803164204.jpg"},
				{src:"img/20160803165610.jpg"},
				{src:"img/20160803165702.jpg"}
			],
			admsrc:"img/4a7ef818831945949911e5d404084ab6.jpg",
			navsrc:"img/958ae43cb4d341908f3db8efd4dcb2ff.jpg"
		},
		{
			floor:"1F",
			name:"宠物粮食",
			title:"大牌",
			nav:[
				{list:"合法进口"},
				{list:"国产犬粮"},
				{list:"优选猫粮"},
				{list:"发育宝犬粮"}
				],
					detailli:[
				{
					src:"img/69f0ab18f3754e08bfb2662f53b5e975.jpg_180X180.jpg",
					title:"发育宝 A系列小型犬幼奶糕粮10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥510.00"
					},
				{
					src:"img/2fc307e5584b46669da3ee7745fae148.jpg_180X180.jpg",
					title:"发育宝 A系列阶段幼猫成长配方3kg（适用于4月-12月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥240.00"
					},
				{
					src:"img/fa7583d858d443e29eefedfd244fdba0.jpg_180X180.jpg",
					title:"发育宝 A系列阶段幼猫奶糕3kg（适用于1月-4月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥240.00"
					},
				{
					src:"img/902b2144db484cfd975e2ef5cb5f4e3d.jpg_180X180.jpg",
					title:"发育宝 A系列室内成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥235.00"
					},
				{
					src:"img/2e86644387284bc9b85fe6f74ccdd1db.jpg_180X180.jpg",
					title:"发育宝 A系列挑嘴成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥235.00"
					},
				{
					src:"img/69737b92b17649098d04b83e8f99a122.jpg_180X180.jpg",
					title:"发育宝 A系列大型幼犬3kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥260.00"
					},
				{
					src:"img/5f4f1f0c19a54c1d9dfe98983da7148e.jpg_180X180.jpg",
					title:"发育宝 A系列小型幼犬10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
					price:"￥490.00"
					}
			],
			detailimg:[
				{src:"img/03d9e3cd47c4473a973af8a1abc97402.jpg"},
				{src:"img/53e0b001318042ddbf93a03faac54ec8.jpg"},
				{src:"img/754b245fb73d4b09af171c22426b7f9a.jpg"}
			],
			iconimg:[
				{src:"img/20160727084118.jpg"},
				{src:"img/20160803162635.jpg"},
				{src:"img/20160803162721.jpg"},
				{src:"img/20160803162748.jpg"},
				{src:"img/20160803162757.jpg"},
				{src:"img/20160803165350.jpg"},
				{src:"img/20160803164005.jpg"},
				{src:"img/20160803164204.jpg"},
				{src:"img/20160803165610.jpg"},
				{src:"img/20160803165702.jpg"}
			],
			admsrc:"img/4a7ef818831945949911e5d404084ab6.jpg",
			navsrc:"img/958ae43cb4d341908f3db8efd4dcb2ff.jpg"
		}
	
	
	
	
	]
	

	
})









