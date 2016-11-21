var currentNum = 1;
var left;

var app = angular.module("myApp", []);

app.factory("lbimg", [function() {

	var Timer = setInterval(function() {

		for(var i = 0; i < 5; i++) {
			$($("#delayload .smallslider-btns span")[i]).css("background", "#FFFFFF")
				.css("border", "none").css("color", "#9f9f9f")
				.css("font-weight", "normal")
		}

		if(currentNum == 5) {
			currentNum = 0
			$(".smallslider ul").animate({
				left: 0
			})
		} else {
			left = (-1208) * currentNum + "px"
			$(".smallslider ul").animate({
				left: left
			})
		}
		currentNum += 1;

		$($("#delayload .smallslider-btns span")[currentNum - 1]).css("background", '#C00100')
			.css("border", "1px solid #C00100").css("color", "#FFFFFF")
			.css("font-weight", "700")

	}, 4000)
	return Timer;
}])

//轮播图点击切换图片
app.factory("lbimgClick", [function() {
	return function() {
		for(var i = 0; i < 5; i++) {
			$("#delayload .smallslider-btns span")[i].onmouseenter = function(e) {

				setTimeout(function () {
					for(var j = 0; j < 5; j++) {
						$($("#delayload .smallslider-btns span")[j]).css("background", "#FFFFFF")
							.css("border", "none").css("color", "#9f9f9f")
							.css("font-weight", "normal")
					}
					$(e.target).css("background", '#C00100')
						.css("border", "1px solid #C00100").css("color", "#FFFFFF")
						.css("font-weight", "700");
					currentNum = $(e.target).attr("date-num") - 1;
					left = (-1208) * currentNum + "px";
					$(".smallslider ul").animate({
						left: left
					})
				}, 100)
			}
		}
		for(var i = 0; i < 5; i++) {
			$("#delayload .smallslider-btns span")[i].onmouseleave = function(e) {
				clearTimeout();
			}
		}
	}
}])

//我的账户下拉列表
app.factory("mycenter", [function() {

	return function() {
		console.log(111)
		$("#search .my-center").mouseenter(function(e) {
			console.log(111)
			$("#search .my-center .set-dt").css("background", "white")
				.css("border-bottom", "none")
			$("#search .my-center dd").slideDown();
			$("#search .my-center dl a").css("text-decoration", "underline")
				.css("color", "#C00100")
		})
		$("#search .my-center").mouseleave(function() {
			$("#search .my-center .set-dt").css("border", "1px solid #EFEFEF;")
				.css("background", "#F7F7F7")
			$("#search .my-center dd").css("display", "none");
			$("#search .my-center dl a").css("text-decoration", "none")
				.css("color", "#666")
		})
	}
}])

//购物车收藏夹动画

app.factory("changeIcon", [function() {

	return function() {

		$("#log-sys ul .changeIcon").mouseenter(function(e) {
			$(e.target).css("background-color", "#FFFFFF");
			$(e.target.querySelectorAll("a")[0]).css("text-decoration", "underline")
				.css("color", "#C00100");
			$(e.target.querySelectorAll("s")[0]).animate({
				backgroundPositionY: "-14px"
			})
		})

		$("#log-sys ul .changeIcon").mouseleave(function(e) {
			$(e.target).css("background-color", "#EEEEEE");
			$(e.target.querySelectorAll("a")[0]).css("text-decoration", "none")
				.css("color", "#666")
			$(e.target.querySelectorAll("s")[0]).animate({
				backgroundPositionY: "0"
			})
		})
	}

}])

app.controller("viewctrl", ["$scope", "reload", function($scope, reload) {

	$scope.showKF = function() {
		$("#server-box").show();
	}
	$scope.closeKF = function() {
		$("#server-box").hide();
	}
	reload();
	$scope.username = $.cookie().username;
	//退出登录
	
	$scope.logout = function() {
		$.removeCookie("token");
		$.removeCookie("username");
		$("#login-username").hide();
		$("#prompt-username").hide();
		$('#log-link').show();
		$("#prompt-login").show();
	}
	
	
}]);

//当页面加载时
app.factory("reload", [ function() {
	return function() {
		console.log($.cookie().username);
		if(document.cookie){
			$("#login-username").show();
			$("#prompt-username").show();
			$('#log-link').hide();
			$("#prompt-login").hide()
		} 
	}
}])

app.controller("navctrl", ["changeIcon", function(changeIcon) {
	changeIcon();
}])

app.controller("loginctrl", ["$scope", "mycenter", function($scope, mycenter) {
	mycenter();
}])

app.controller('ctrl', ["$scope", function($scope) {

	$scope.arr = [{
		list: "宠物粮食",
		contents: [{
			navname: "发育宝犬",
			navlist: [{
				name: "A系列犬粮"
			}, {
				name: "B系列犬粮"
			}, {
				name: "U系列犬粮"
			}, {
				name: "kt系列犬粮"
			}, {
				name: "G系列犬粮"
			}, {
				name: "宝岛E系列犬粮"
			}]
		}, {
			navname: "合法进口",
			navlist: [{
				name: "爱诺犬粮"
			}, {
				name: "贵族犬粮"
			}, ]
		}, {
			navname: "国产宝犬",
			navlist: [{
				name: "优基犬粮"
			}, {
				name: "艾尔犬粮"
			}, {
				name: "喜乐比犬粮"
			}, {
				name: "玫斯犬粮"
			}, {
				name: "康玛斯犬粮"
			}, {
				name: "奥博肉立方"
			}]
		}, {
			navname: "优选猫粮",
			navlist: [{
				name: "贵族猫粮"
			}, {
				name: "皇室猫粮"
			}, {
				name: "发育宝猫粮"
			}, {
				name: "优基猫粮"
			}, {
				name: "查尔斯猫粮"
			}, {
				name: "艾尔猫粮"
			}, {
				name: "喜乐比猫粮"
			}, {
				name: "康玛斯猫粮"
			}, {
				name: "玫斯猫粮"
			}]
		}],
		recomod: [{
			reconame: "艾尔Aier"
		}, {
			reconame: "爱诺Eminen"
		}, {
			reconame: "优基Organic"
		}, {
			reconame: "喜乐比Sharlovy"
		}, {
			reconame: "康玛斯Comest"
		}, {
			reconame: "查尔斯CHARLES"
		}, {
			reconame: "贵族NATURES GIFT"
		}, {
			reconame: "发育宝SINGEN"
		}, {
			reconame: "泰国皇室Sea Kingdom"
		}, {
			reconame: "玫斯METZ"
		}, {
			reconame: "澳博AOBO"
		}]
	}, {
		list: "宠物零食",
		contents: [{
			navname: "路斯",
			navlist: [{
				name: "优加系列"
			}, {
				name: "益智系列"
			}, {
				name: "磨牙洁齿"
			}, {
				name: "其他肉质零食"
			}, {
				name: "猫零食"
			}]
		}, {
			navname: "禾仕嘉",
			navlist: [{
				name: "磨牙系列"
			}, {
				name: "日记系列"
			}, {
				name: "问号系列"
			}, {
				name: "猫零食"
			}]
		}, {
			navname: "Smartbones",
			navlist: [{
				name: "磨牙洁齿棒"
			}]
		}, {
			navname: "顽皮",
			navlist: [{
				name: "顽皮湿粮"
			}, {
				name: "顽皮肉零食"
			}, {
				name: "饼干"
			}]
		}, {
			navname: "磨牙品牌",
			navlist: [{
				name: "贝帮"
			}, {
				name: "贝家"
			}, {
				name: "星记"
			}, {
				name: "风来客"
			}]
		}],
		recomod: [{
			reconame: "宜特EETOYS"
		}, {
			reconame: "贝帮beaphar"
		}, {
			reconame: "贵族洒洒咪"
		}, {
			reconame: "贝家"
		}, {
			reconame: "拍拖宝贝"
		}, {
			reconame: "吧嗒吧嗒simida"
		}, {
			reconame: "菲菲宝FREEPET"
		}, {
			reconame: "塞纳SEINE"
		}, {
			reconame: "禾仕嘉"
		}, {
			reconame: "SmartBones"
		}, {
			reconame: "风来客PHOENIX"
		}]
	}, {
		list: "宠物保健",
		contents: [{
			navname: "热销品牌",
			navlist: [{
				name: "贝帮"
			}, {
				name: "赐美乐Petag"
			}, {
				name: "美国世佳"
			}, {
				name: "先牧仕"
			}, {
				name: "牙口乐"
			}]
		}, {
			navname: "卫仕",
			navlist: [{
				name: "O系列"
			}, {
				name: "E系列"
			}, {
				name: "U系列"
			}, {
				name: "G零食"
			}]
		}, {
			navname: "发育宝",
			navlist: [{
				name: "新品系列"
			}, {
				name: "老品系列"
			}, {
				name: "Kitty系列"
			}]
		}, {
			navname: "麦德氏",
			navlist: [{
				name: "KAT系列"
			}, {
				name: "PLUS系列"
			}]
		}],
		recomod: [{
			reconame: "贝帮beaphar"
		}, {
			reconame: "卫仕Nourse"
		}, {
			reconame: "维卡Vigoo"
		}, {
			reconame: "赐美乐Petag"
		}, {
			reconame: "美国世佳Snausages"
		}, {
			reconame: "先牧仕PIOMOS"
		}, {
			reconame: "立俪Lily"
		}, {
			reconame: "发育宝SINGEN"
		}]
	}, {
		list: "宠物医疗",
		contents: [{
			navname: "唯宠仕",
			navlist: [{
				name: "特效喷剂"
			}]
		}, {
			navname: "热销品牌",
			navlist: [{
				name: "杜邦卫可"
			}, {
				name: "dooda蚤圈"
			}, {
				name: "西门斯"
			}, {
				name: "瑞必诊"
			}]
		}, {
			navname: "力荐品牌",
			navlist: [{
				name: "福来恩"
			}, {
				name: "犬心保"
			}, {
				name: "唯尔"
			}, {
				name: "pet_baby"
			}]
		}, {
			navname: "拜耳",
			navlist: [{
				name: "拜宠清"
			}, {
				name: "拜宠爽"
			}]
		}, {
			navname: "宠博士翩翩",
			navlist: [{
				name: "保护罩"
			}, {
				name: "除蚤圈"
			}]
		}],
		recomod: [{
				reconame: "杜邦卫可OU PONT"
			}, {
				reconame: "pet_baby"
			}, {
				reconame: "蜱虱消BIOCARE"
			}, {
				reconame: "福来恩FRONTLINE"
			},

		]
	}, {
		list: "清洁洗护",
		contents: [{
			navname: "亲宝舒",
			navlist: [{
				name: "清洁用品"
			}]
		}, {
			navname: "清洁用品",
			navlist: [{
				name: "日本Sigone"
			}, {
				name: "罗医生"
			}, {
				name: "千羽"
			}, {
				name: "mindup洁牙"
			}]
		}, {
			navname: "香波护理",
			navlist: [{
				name: "仟莉贝蒂斯"
			}, {
				name: "炭酸浴"
			}, {
				name: "爱犬岛"
			}]
		}, {
			navname: "顶尖",
			navlist: [{
				name: "洗护工具"
			}, {
				name: "护毛液"
			}]
		}],
		recomod: [{
			reconame: "亲宝舒"
		}, {
			reconame: "家朵JOYCE DOLLS"
		}, {
			reconame: "贝特爱思Petesthe"
		}]
	}, {
		list: "宠物美容",
		contents: [{
			navname: "梳子",
			navlist: [{
				name: "菲恩"
			}, {
				name: "顶尖"
			}, {
				name: "千羽"
			}, {
				name: "HelloPet"
			}, {
				name: "酷迪"
			}]
		}, {
			navname: "美容剪",
			navlist: [{
				name: "TAA"
			}, {
				name: "千羽"
			}]
		}, {
			navname: "电吹风",
			navlist: [{
				name: "欧玛尼"
			}, {
				name: "华健"
			}]
		}, {
			navname: "美容道具",
			navlist: [{
				name: "小尾巴"
			}, {
				name: "贝特爱思比比多"
			}]
		}],
		recomod: [{
			reconame: "鲨鱼SHARK TEETH"
		}, {
			reconame: "哈啰佩特HelloPet"
		}, {
			reconame: ">科德士Codos"
		}, {
			reconame: "欧玛尼Aomani"
		}]
	}, {
		list: "宠物玩具",
		contents: [{
			navname: "PioneerPet"
		}, {
			navname: "猫猫玩具",
			navlist: [{
				name: "阜宥丰鸣小迪"
			}, {
				name: "猫爬架"
			}]
		}, {
			navname: "狗狗玩具",
			navlist: [{
				name: "宠博士翩翩"
			}, {
				name: "阜宥丰鸣小笛"
			}, {
				name: "星记"
			}]
		}, {
			navname: "宜特",
			navlist: [{
				name: "互动训练系列"
			}, {
				name: "益智漏食"
			}, {
				name: "卡通毛绒洁齿"
			}, {
				name: "刺球系列"
			}, {
				name: "乳胶系列"
			}]
		}],
		recomod: [{
			reconame: "千羽SOLEIL"
		}, {
			reconame: "宜特EETOYS"
		}, {
			reconame: "星记TARMARK"
		}, {
			reconame: "宠博士翩翩"
		}]
	}, {
		list: "服装牵引",
		contents: [{
			navname: "福莱希",
			navlist: [{
				name: "外星人运动系列"
			}, {
				name: "火星人系列"
			}, {
				name: "马达加斯加系列"
			}, {
				name: "经典系列"
			}, {
				name: "草莓系"
			}]
		}, {
			navname: "ReddDingo",
			navlist: [{
				name: "犬用"
			}, {
				name: "猫用"
			}]
		}, {
			navname: "夏季选区",
			navlist: [{
				name: "Petkool"
			}, {
				name: "HAOCHONG"
			}, ]
		}],
		recomod: [{
			reconame: "哈啰佩特HelloPet"
		}, {
			reconame: "惠特莉whitliv"
		}, {
			reconame: "福莱希flexi"
		}, {
			reconame: "爱斯克ASUKU"
		}]
	}, {
		list: "宠物家用",
		contents: [{
			navname: "笼具",
			navlist: [{
				name: "贝帮"
			}, {
				name: "赐美乐Petag"
			}, {
				name: "美国世佳"
			}, {
				name: "先牧仕"
			}, {
				name: "牙口乐"
			}]
		}, {
			navname: "餐具",
			navlist: [{
				name: "O系列"
			}, {
				name: "E系列"
			}]
		}, {
			navname: "如厕专区",
			navlist: [{
				name: "澳大利亚砂"
			}, {
				name: "皇室猫砂"
			}, {
				name: "美卡厕所"
			}]
		}, {
			navname: "住所",
			navlist: [{
				name: "睡宝宝"
			}, {
				name: "PLUS系列"
			}]
		}],
		recomod: [{
			reconame: "睡宝宝"
		}, {
			reconame: "爱得宝"
		}, {
			reconame: "蓝钻EVER CLEAN"
		}, {
			reconame: "爱蓓诗IVPETS"
		}]
	}, {
		list: "户外训练",
		contents: [{
			navname: "贝帮",
			navlist: [{
				name: "训练辅助品"
			}]
		}, {
			navname: "智能管家",
			navlist: [{
				name: "千羽机器人"
			}, {
				name: "小玄"
			}]
		}, {
			navname: "户外餐具",
			navlist: [{
				name: "意潇"
			}]
		}, {
			navname: "星记训练",
			navlist: [{
				name: "训练床"
			}, {
				name: "训练颈圈"
			}]
		}],
		recomod: [{
			reconame: "爱斯克ASUKU"
		}]
	}, {
		list: "多格漫",
		contents: [{
			navname: "牵引",
			navlist: [{
				name: "狗狗牵引"
			}, {
				name: "猫猫牵引"
			}]
		}, {
			navname: "美容",
			navlist: [{
				name: "HS系列"
			}, {
				name: "NS系列"
			}, {
				name: "HB系列"
			}, {
				name: "PP系列"
			}]
		}, {
			navname: "发育宝",
			navlist: [{
				name: "新品系列"
			}, {
				name: "老品系列"
			}, {
				name: "Kitty系列"
			}]
		}, {
			navname: "零食",
			navlist: [{
				name: "磨牙零食"
			}, {
				name: "休闲零食"
			}]
		}, {
			navname: "用品",
			navlist: [{
				name: "驱蚊用品"
			}, {
				name: "清洁洗护"
			}]
		}],
		recomod: [{
			reconame: "多格漫DoggyMan"
		}]
	}, {
		list: "周边服务",
		contents: [{
			navname: "平台服务产品"
		}, {
			navname: "促销活动品",

		}],
		recomod: []
	}];

	$scope.linkArr = [{
		link: "首页"
	}, {
		link: "上新区"
	}, {
		link: "汪星人"
	}, {
		link: "瞄星人"
	}, {
		link: "活动促销"
	}, {
		link: "控价专区"
	}, {
		link: "产品图库"
	}]

}])

app.controller("ctrl2", ["$scope", "lbimg", "lbimgClick", function($scope, lbimg, lbimgClick) {

	lbimg;

	lbimgClick();

	$scope.imgArr = [{
		src: "img/1b5f0aa9869c4154a6e7bc3197d7188a.jpg_180X180.jpg",
		title: "麦德氏IN-Kat高效营养化毛膏55g  【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体内容请查看活动详情】",
		price: "￥45.00"
	}, {
		src: "img/cb3b0df6989540df9cbed52c1c64de9f.jpg_180X180.jpg",
		title: "麦德氏IN-Kat L-Lysine 鼻支安10g 【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体内容请查看活动详情】",
		price: "￥45.00"
	}, {
		src: "img/98fc61c9fd294d539a31a4b3e4e9da1a.jpg_180X180.jpg",
		title: "麦德氏IN-Kat 猫用益生菌20g【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体内容请查看活动详情】",
		price: "￥50.00"
	}, {
		src: "img/3fbe191675c84b748c2ffaae9fcc04ff.jpg_180X180.jpg",
		title: "麦德氏IN-Kat母乳化猫用羊奶粉10g*20袋【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体查看活动详情】",
		price: "￥135.00"
	}, {
		src: "img/f4cefc274a544fcdb60f55f807d63b47.jpg_180X180.jpg",
		title: "麦德氏IN-Kat猫用磷虾卵磷脂250g 【11月活动 8送1；12送2；或者满1011送200+货架；满5000送1500；满10000送3000，额外现扣10%；具体内容请查看活动详情】",
		price: "￥100.00"
	}];

	$scope.foreArr = [{
		src: "img/e0ba71c531d34485aac6c57939b94a79.jpg",
		title: "立俪 宠物专用天然植物酵素水 500ml/瓶*15/件 绿  【11月活动  5送1（赠品为新品）】",
		detail: "日本天然植物酵素 快速补水 祛除异味 促消化抗衰老"

	}, {
		src: "img/e1021731e2c54bad91c70092e716360c.jpg",
		title: "多格漫DoggyMan DMB-10肉罐包-低脂肪鸡肉 牛肉?地瓜(犬用）110g  Z0073【11月活动 3送1】",
		detail: "无添加天然食材 护肤美毛 保护关节 特添茶多酚消臭成分 除臭抑臭"
	}]

	//5层floorrepeat数组

	$scope.floorArr = [{
			floor: "1F",
			name: "宠物粮食",
			title: "大牌",
			nav: [{
				list: "合法进口"
			}, {
				list: "国产犬粮"
			}, {
				list: "优选猫粮"
			}, {
				list: "发育宝犬粮"
			}],
			detailli: [{
				src: "img/69f0ab18f3754e08bfb2662f53b5e975.jpg_180X180.jpg",
				title: "发育宝 A系列小型犬幼奶糕粮10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
				price: "￥510.00"
			}, {
				src: "img/2fc307e5584b46669da3ee7745fae148.jpg_180X180.jpg",
				title: "发育宝 A系列阶段幼猫成长配方3kg（适用于4月-12月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
				price: "￥240.00"
			}, {
				src: "img/fa7583d858d443e29eefedfd244fdba0.jpg_180X180.jpg",
				title: "发育宝 A系列阶段幼猫奶糕3kg（适用于1月-4月）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
				price: "￥240.00"
			}, {
				src: "img/902b2144db484cfd975e2ef5cb5f4e3d.jpg_180X180.jpg",
				title: "发育宝 A系列室内成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
				price: "￥235.00"
			}, {
				src: "img/2e86644387284bc9b85fe6f74ccdd1db.jpg_180X180.jpg",
				title: "发育宝 A系列挑嘴成猫3kg（适用于12月以上）【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
				price: "￥235.00"
			}, {
				src: "img/69737b92b17649098d04b83e8f99a122.jpg_180X180.jpg",
				title: "发育宝 A系列大型幼犬3kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
				price: "￥260.00"
			}, {
				src: "img/5f4f1f0c19a54c1d9dfe98983da7148e.jpg_180X180.jpg",
				title: "发育宝 A系列小型幼犬10kg【11月活动  满1000元享7.8折  ，与送手机活动不重复】",
				price: "￥490.00"
			}],
			detailimg: [{
				src: "img/03d9e3cd47c4473a973af8a1abc97402.jpg"
			}, {
				src: "img/53e0b001318042ddbf93a03faac54ec8.jpg"
			}, {
				src: "img/754b245fb73d4b09af171c22426b7f9a.jpg"
			}],
			iconimg: [{
				src: "img/20160809171145.jpg"
			}, {
				src: "img/20160727084118.jpg"
			}, {
				src: "img/20160803162635.jpg"
			}, {
				src: "img/20160809174914.jpg"
			}, {
				src: "img/20160809174409.jpg"
			}, {
				src: "img/20160803164005.jpg"
			}, {
				src: "img/20160803162748.jpg"
			}, {
				src: "img/20160809174514.jpg"
			}, {
				src: "img/20160803162757.jpg"
			}, {
				src: "img/20160809174329.jpg"
			}],
			admsrc: "img/4a7ef818831945949911e5d404084ab6.jpg",
			navsrc: "img/958ae43cb4d341908f3db8efd4dcb2ff.jpg"
		}, {
			floor: "2F",
			name: "宠物零食",
			title: "精选",
			nav: [{
				list: "猫罐"
			}, {
				list: "猫休闲零食"
			}, {
				list: "磨牙品牌"
			}, {
				list: "肉质零食"
			}, {
				list: "路斯"
			}, {
				list: "顽皮"
			}, {
				list: "禾仕嘉"
			}, {
				list: "Smartbones"
			}],
			detailli: [{
				src: "img/68ca09d32c7544278c356ab65ec2e174.jpg_180X180.jpg",
				title: "路斯 馋嘴猫Q弹肠吞拿鱼150g（15支）【11月活动 10送2】",
				price: "￥14.00"
			}, {
				src: "img/67b19fe1e43144b5b0d6239c74ada3e1.jpg_180X180.jpg",
				title: "路斯 馋嘴猫Q弹肠三文鱼150g（15支）【11月活动 10送2】",
				price: "￥14.00"
			}, {
				src: "img/0e9c0353694d4f84972871827e6d32f3.jpg_180X180.jpg",
				title: "路斯 馋嘴猫Q弹肠吞拿鱼+蟹肉150g（15根）【11月活动 10送2】",
				price: "￥14.00"
			}, {
				src: "img/d91445d6562d4c749d8e380d929499ef.jpg_180X180.jpg",
				title: "路斯 馋嘴猫小鱼曲奇吞拿鱼+猫薄荷80g【11月活动 10送2】",
				price: "￥12.00"
			}, {
				src: "img/895ef56b5b8a46638e7e56b198bd1dae.jpg_180X180.jpg",
				title: "路斯 馋嘴猫小鱼曲奇吞鳕鱼+猫薄荷80g【11月活动 10送2】",
				price: "￥12.00"
			}, {
				src: "img/902c225ad0d8453cba4c43d89335dfa4.jpg_180X180.jpg",
				title: "路斯 馋嘴猫小鱼曲奇吞拿鱼+三文鱼80g【11月活动 10送2】",
				price: "￥12.00"
			}, {
				src: "img/c6ec02ff679b467eadba17630994e8c8.jpg_180X180.jpg",
				title: "路斯 馋嘴猫小鱼曲奇吞拿鱼+鸡肉80g【11月活动 10送2】",
				price: "￥12.00"
			}],
			detailimg: [{
				src: "img/47ee59ebc71249778d97ed8b27a28566.jpg"
			}, {
				src: "img/c4b51df6e4eb42ec8de9aa4edee2de72.jpg"
			}, {
				src: "img/63b03ccf44e9479182d64a4f950b8a18.jpg"
			}],
			iconimg: [{
				src: "img/20160803165235.jpg"
			}, {
				src: "img/20160803165502.jpg"
			}, {
				src: "img/20160803165201.jpg"
			}, {
				src: "img/20160803165117.jpg"
			}, {
				src: "img/20160803165440.jpg"
			}, {
				src: "img/20160803164832.jpg"
			}, {
				src: "img/20160809171202.jpg"
			}, {
				src: "img/20160803165056.jpg"
			}, {
				src: "img/20160809174527.jpg"
			}, {
				src: "img/20160803165327.jpg"
			}],
			admsrc: "img/50b1cbb1a8274e93bb76fd70bddae02d.jpg",
			navsrc: "img/0bc76271b5e246da8829b66f3a3ea318.jpg"
		}, {
			floor: "3F",
			name: "宠物保健",
			title: "营养",
			nav: [{
				list: "热销品牌"
			}, {
				list: "卫仕"
			}, {
				list: "发育宝"
			}, {
				list: "麦德氏"
			}],
			detailli: [{
				src: "img/2310f45c23774530b5cec02d52c6df70.jpg_180X180.jpg",
				title: "【专供线下渠道】先牧仕 顶级宠物通用山羊奶粉340g【11月活动 ＜1000元8送1；≥1000元6送1；≥3000元5送1；≥6000元4送1；满1万元送3000元代金券】",
				price: "￥160.00"
			}, {
				src: "img/06385264546c40b7bc9ecf3013d87fe9.jpg_180X180.jpg",
				title: "【专供线下渠道】先牧仕 顶级猫专用山羊奶粉340g【11月活动 ＜1000元8送1；≥1000元6送1；≥3000元5送1；≥6000元4送1；满1万元送3000元代金券】",
				price: "￥180.00"
			}, {
				src: "img/a5c75b98037743d3abb3d4ba79c5ffb3.jpg_180X180.jpg",
				title: "【专供线下渠道】先牧仕 活菌发育素340g【11月活动 ＜1000元8送1；≥1000元6送1；≥3000元5送1；≥6000元4送1；满1万元送3000元代金券】",
				price: "￥160.00"
			}, {
				src: "img/159e13a174ae4deda8ff656d16181c66.jpg_180X180.jpg",
				title: "【专供线下渠道】先牧仕 炫靓美毛粉340g【11月活动 ＜1000元8送1；≥1000元6送1；≥3000元5送1；≥6000元4送1；满1万元送3000元代金券】",
				price: "￥148.00"
			}, {
				src: "img/dc96a3e0648d4386b2ca660b34da1a84.jpg_180X180.jpg",
				title: "【专供线下渠道】先牧仕 全效钙磷多340g【11月活动 ＜1000元8送1；≥1000元6送1；≥3000元5送1；≥6000元4送1；满1万元送3000元代金券】",
				price: "￥148.00"
			}, {
				src: "img/2310f45c23774530b5cec02d52c6df70.jpg_180X180.jpg",
				title: "【专供线下渠道】先牧仕 大桶装顶级宠物通用山羊奶粉2270g【11月活动 ＜1000元8送1；≥1000元6送1；≥3000元5送1；≥6000元4送1；满1万元送3000元代金券】",
				price: "￥660.00"
			}, {
				src: "img/a5c75b98037743d3abb3d4ba79c5ffb3.jpg_180X180.jpg",
				title: "【专供线下渠道】先牧仕 大桶装活菌发育素2270g【11月活动 ＜1000元8送1；≥1000元6送1；≥3000元5送1；≥6000元4送1；满1万元送3000元代金券】",
				price: "￥660.00"
			}],
			detailimg: [{
				src: "img/95f3005978d64294931d859b6810b817.jpg"
			}, {
				src: "img/b585b62763164ad6baffaa6af06617e0.jpg"
			}, {
				src: "img/5f8e34fa8ba4437797457f60f5ec9df9.jpg"
			}],
			iconimg: [{
				src: "img/20160803165638.jpg"
			}, {
				src: "img/20160803165610.jpg"
			}, {
				src: "img/20160803165702.jpg"
			}, {
				src: "img/20160803165908.jpg"
			}, {
				src: "img/20160803165737.jpg"
			}, {
				src: "img/20160803165810.jpg"
			}, {
				src: "img/20160803165842.jpg"
			}, {
				src: "img/20160809174426.jpg"
			}, {
				src: "img/20160809202148.jpg"
			}, {
				src: "img/20160809174440.jpg"
			}],
			admsrc: "img/bf9c817076b74f23b9f6dcb68377c05d.jpg",
			navsrc: "img/1f62400f3f114b28a7c7f56bf03300e0.jpg"
		}, {
			floor: "4F",
			name: "宠物家用",
			title: "必备",
			nav: [{
				list: "如厕专业"
			}, {
				list: "笼具"
			}, {
				list: "餐具"
			}, {
				list: "航空笼"
			}, {
				list: "生理裤"
			}, {
				list: "爱丽丝"
			}, {
				list: "住所"
			}, {
				list: "酷迪"
			}],
			detailli: [{
				src: "img/9e5c7cee1ef343d1b1c0d879ea2edc0a.jpg_180X180.jpg",
				title: "爱丽思 网状手提宠物笼MPC-450L茶",
				price: "￥152.00"
			}, {
				src: "img/2f0b4a1a14434ec4b54a98de700a125a.jpg_180X180.jpg",
				title: "爱丽思 网状手提宠物笼MPC-450L蓝",
				price: "￥152.00"
			}, {
				src: "img/c2816f1214d14a3f9613d655e94453c4.jpg_180X180.jpg",
				title: "爱丽思 网状手提宠物笼MPC-450M桃色",
				price: "￥152.00"
			}, {
				src: "img/8f16441b73b04192a454e9eac666e4ae.jpg_180X180.jpg",
				title: "美卡特大豪华封闭猫厕  MCX",
				price: "￥270.00"
			}, {
				src: "img/83a3c563998448db86ea2585953e42e9.jpg_180X180.jpg",
				title: "爱丽思 便携宠物笼ＰＨＣ４８０茶",
				price: "￥206.00"
			}, {
				src: "img/a2ebfff355184504a0a6d9408785db86.jpg_180X180.jpg",
				title: "爱丽思 便携宠物笼ＰＨＣ４８０白",
				price: "￥206.00"
			}, {
				src: "img/c5cca37b6e1f44848e46853b503b8de5.jpg_180X180.jpg",
				title: "美卡机器猫封闭猫厕",
				price: "￥238.00"
			}],
			detailimg: [{
				src: "img/45e03220b2c04780b9becc18bc2d7cff.jpg"
			}, {
				src: "img/a1cfeac2b1a5463bb7b4474d6128ea9d.jpg"
			}, {
				src: "img/b1e205d932d141f59e95e406066c5103.jpg"
			}],
			iconimg: [{
				src: "img/20160804162401.jpg"
			}, {
				src: "img/20160804162605.jpg"
			}, {
				src: "img/20160809202138.jpg"
			}, {
				src: "img/20160809182846.jpg"
			}, {
				src: "img/20160804162849.jpg"
			}, {
				src: "img/20160809202055.jpg"
			}, {
				src: "img/20160804162956.jpg"
			}, {
				src: "img/20160804162451.jpg"
			}, {
				src: "img/20160809182646.jpg"
			}, {
				src: "img/20160809182623.jpg"
			}],
			admsrc: "img/db96f864831048af8624506616a0aa5d.jpg",
			navsrc: "img/a9900abe1d714a01b15c2b9edde1e63d.jpg"
		}, {
			floor: "5F",
			name: "宠物美容",
			title: "造型",
			nav: [{
				list: "梳子"
			}, {
				list: "美容剪"
			}, {
				list: "电推剪"
			}, {
				list: "电吹风"
			}, {
				list: "美容道具"
			}, {
				list: "美容工具"
			}, {
				list: "止血粉"
			}],
			detailli: [{
				src: "img/699d3e9dc87840a99da8952ead702120.jpg_180X180.jpg",
				title: "蓝豚双电机四档调速吹水机LT-1090C-H",
				price: "￥152.00"
			}, {
				src: "img/a95e6e5e89c94f3c8a2fb2a2e0271bbb.jpg_180X180.jpg",
				title: "蓝豚双电机可调温 吹水机LT-1090D-H",
				price: "￥152.00"
			}, {
				src: "img/16d438a9982e4d8582947b01043d9145.jpg_180X180.jpg",
				title: "科德士电剪CP-8000",
				price: "￥152.00"
			}, {
				src: "img/7f89014e178b4709893909264d7f8f04.jpg_180X180.jpg",
				title: "科德士电剪CP-9600",
				price: "￥270.00"
			}, {
				src: "img/404d8096779d49eda621a230efb4a083.jpg_180X180.jpg",
				title: "科德士电剪CP-3000/KP-3000",
				price: "￥206.00"
			}, {
				src: "img/16d438a9982e4d8582947b01043d9145.jpg_180X180.jpg",
				title: "科德士CP-8000刀头",
				price: "￥206.00"
			}, {
				src: "img/0f423fcd24ad4a62ae09d4eac4405b76.jpg_180X180.jpg",
				title: "安蒂斯加强版专业电剪（主机带10号原装安蒂斯刀头 附鲨鱼15＃40＃7F 三个刀头）",
				price: "￥238.00"
			}],
			detailimg: [{
				src: "img/03d9e3cd47c4473a973af8a1abc97402.jpg"
			}, {
				src: "img/53e0b001318042ddbf93a03faac54ec8.jpg"
			}, {
				src: "img/754b245fb73d4b09af171c22426b7f9a.jpg"
			}],
			iconimg: [{
				src: "img/20160805140336.jpg"
			}, {
				src: "img/20160810093821.jpg"
			}, {
				src: "img/20160809182700.jpg"
			}, {
				src: "img/20160805140552.jpg"
			}, {
				src: "img/20160809182525.jpg"
			}, {
				src: "img/20160805135929.jpg"
			}, {
				src: "img/20160809182607.jpg"
			}, {
				src: "img/20160805140730.jpg"
			}, {
				src: "img/20160805140510.jpg"
			}, {
				src: "img/20160805140449.jpg"
			}],
			admsrc: "img/308912a6d3cd4144a504f82fd2d27829.jpg",
			navsrc: "img/85c8853d0d61472a8941ecaee9bd36e2.jpg"
		}

	]

}])

app.controller("footerCtrl", function($scope) {

	$scope.footerArr = [{
		title: "购物指南",
		contents: [{
			server: "购物流程"
		}, {
			server: "经销商中心"
		}, {
			server: "常见问题"
		}, {
			server: "品质保障"
		}, {
			server: "退换货政策 "
		}]
	}, {
		title: "支付方式",
		contents: [{
			server: "支付方式"
		}, {
			server: "退款说明"
		}]
	}, {
		title: "物流配送",
		contents: [{
			server: "出货说明"
		}, {
			server: "配送方式"
		}, {
			server: "货物验收"
		}]
	}, {
		title: "会员条款",
		contents: [{
			server: "注册会员"
		}, {
			server: "免责条款"
		}, {
			server: "服务条款"
		}, {
			server: "会员制度"
		}, {
			server: "隐私条款 "
		}]
	}, {
		title: "关于我们",
		contents: [{
			server: "关于我们"
		}, {
			server: "联系我们"
		}]
	}]
})