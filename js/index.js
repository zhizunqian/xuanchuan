$(function(){
	var diyi=function(index){
		var hb=new Hongbao();
	}
	var disi=function(index){
		var coin=new Coin();
	}
	var tgId;
	var registUrl = '';
	var url = window.location.href;
	var tgIdIndex = url.indexOf('?id=');
	if(tgIdIndex == -1){
		tgId = '';
	$("#zuihou5").text("请注册帐号在[vip中心]获取您的专属链接哦（众客雇主均可）。")
	}else{
		tgId = url.substring(tgIdIndex+4,url.length);
		registUrl = '?id='+tgId;
	$("#zuihou5").text("此链接由用户"+tgId+"发出，请注册帐号在[vip中心]获取您的专属链接哦（众客雇主均可）。")
	}
	document.getElementById('r01').href = 'http://www.wanggezhongtui.com/zkRegist.jsp'+registUrl;
	document.getElementById('r02').href = 'http://www.wanggezhongtui.com/zkRegist.jsp'+registUrl;
	document.getElementById('r03').href = 'http://www.wanggezhongtui.com/zkRegist.jsp'+registUrl;
	document.getElementById('r04').href = 'http://www.wanggezhongtui.com/zkRegist.jsp'+registUrl;
	document.getElementById('r05').href = 'http://www.wanggezhongtui.com/zkRegist.jsp'+registUrl;
	document.getElementById('r011').href = 'http://www.wanggezhongtui.com/zkRegist.jsp'+registUrl;
	document.getElementById('r012').href = 'http://www.wanggezhongtui.com/vipShow.jsp'+registUrl;
	document.getElementById('r013').href = 'http://www.wanggezhongtui.com/zkRegist.jsp'+registUrl;
	document.getElementById('r014').href = 'http://www.wanggezhongtui.com/regist.jsp'+registUrl;
	document.getElementById('r015').href = 'http://www.wanggezhongtui.com/zkRegist.jsp'+registUrl;

	$(".tg1").css({display:"block"})
	$(".tg2").css({display:"none"})
	$(".tg3").css({display:"none"})

	$(".lx1").hover(function(){
		$(".lx11").css({display:"block"})
		$(".tg1").css({display:"block"})
	},function(){
		$(".lx11").css({display:"none"})
	})
	$(".lx2").hover(function(){
		$(".lx22").css({display:"block"})
		$(".tg1").css({display:"none"})
		$(".tg2").css({display:"block"})
	},function(){
		$(".tg2").css({display:"none"})
		$(".lx22").css({display:"none"})
		$(".tg1").css({display:"block"})
	})
	$(".lx3").hover(function(){
		$(".lx33").css({display:"block"})
		$(".tg1").css({display:"none"})
		$(".tg3").css({display:"block"})
	},function(){
		$(".lx33").css({display:"none"})
		$(".tg3").css({display:"none"})
		$(".tg1").css({display:"block"})
	})
	var dier=function(index){
		move(".bm1").set("height","100%").duration("0.3s").end();
		move(".bm2").delay("0.3s").set("height","100%").duration("0.3s").end();
		move(".bm3").delay("0.6s").set("height","100%").duration("0.3s").end();
		move(".bm4").delay("0.9s").set("height","100%").duration("0.3s").end();
	}
	var dierlikai=function(index){
		move(".bm1").set("height","0%").duration("0.03s").end();
		move(".bm2").set("height","0%").duration("0.03s").end();
		move(".bm3").set("height","0%").duration("0.03s").end();
		move(".bm4").set("height","0%").duration("0.03s").end();
	}
	var disan=function(index){
		move(".section:nth-child(3) h1").set("transform","scale(1.5,1.5)").duration("0.3s").then().set("transform","scale(1,1)").duration("0.2s").pop().end();
	}
	
	$("#fp").fullpage({
		controlArrows:true,
		verticalCentered:true,
		scrollOverflow:true,
		anchors:["p1","p2","p3","p4","p5"],
		easing:"linear",
		scrollingSpeed:1000,
		paddingTop:5,
		navigation:true,
		navigationPosition:"right",
		afterLoad:function(link,index){
			switch(link){
				case "p1":diyi(index);break;
				case "p2":dier(index);break;
				case "p4":disi(index);break;
				case "p3":disan(index);break;
			}
		},
		onLeave:function(index,toindex){
			if(index==2){
				dierlikai(index);
			}
		}

	})
})