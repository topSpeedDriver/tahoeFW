/*js判断设备的基本信息*/
var browserInfo = {
	versions: function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
			qq: u.match(/\sQQ/i) == " qq" //是否QQ
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
/*js 判断 IOS还是Android */
function isIOS(){
	
    	alert('是否是Android：'+isAndroid);
    	alert('是否是iOS：'+isiOS);	
}
function IOSorAndroid(){
	var u = navigator.userAgent;
    	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    	if(isAndroid){
    		return "android"
    	}else if(isIOS){
    		return "IOS"
    	}else{
    		return false;
    	}
}

/*<th width="23%" class="triangleTH">主题
	<div class="triangleIcon">
		<span class="iTop" onclick="toggleTriangle(this)"></span>
		<span class="iBot" onclick="toggleTriangle(this)"></span>
	</div>
</th>*/
//点击切换排序的小三角；
function toggleTriangle(obj){
	var thisNode=$(obj);
	var siblingNode=thisNode.siblings("span");
	var flag=thisNode.hasClass("checked");
	if(flag){
		thisNode.removeClass("checked");
		siblingNode.addClass("checked");
	}else if(!flag){
		thisNode.addClass("checked");		
		siblingNode.removeClass("checked");
	}
}

////处理左侧高度；
//function handleSiderBarH() {
//  var rightH = $(".rightMain").css("height");
//  var siderBarH=parseInt(rightH)-10;
//  $(".leftFloat .siderBarPanel").css("height", siderBarH);
//};
////左侧边栏折叠；
//function closeLeftBar(){
//	var isIE=browserInfo.versions.trident;
//	if(isIE){
//		$(".leftFloat").css({"width":"1px","padding-left":0});
//		$(".leftLinkUl").addClass("none");
//		$(".rightMain").css("padding-left","20px");					
//	}else{
//		$(".leftFloat").css({"width":0,"padding-left":0});
//		$(".leftLinkUl").addClass("none");
//		$(".rightMain").css("padding-left","20px");
//	}
//}
////左侧边栏打开；
//function openLeftBar(){
//	$(".leftFloat").css("width","240px");
//	$(".leftLinkUl").removeClass("none");
//	$(".rightMain").css("padding-left","260px");
//}


//处理左侧高度；
function handleSiderBarH() {
	var rightH = $(".rightMain").css("height");
	var siderBarH=parseInt(rightH)-10;
	$(".leftFloat .siderBarPanel").css("height", siderBarH);
};
//左侧边栏折叠；
function closeLeftBar(){
	var isIE=browserInfo.versions.trident;
	if(isIE){
		$(".leftFloat").css({"width":"1px","padding-left":0});
		$(".leftLinkUl").addClass("none");
		$(".rightMain").css("width","99%");					
	}else{
		$(".leftFloat").css({"width":0,"padding-left":0});
		$(".leftLinkUl").addClass("none");
		$(".rightMain").css("width","100%");
	}
}
//左侧边栏打开；
function openLeftBar(){
	$(".leftFloat").css("width","240px");
	$(".leftLinkUl").removeClass("none");
	var rightWidth=$(".wrapper").css("width");
	$(".rightMain").css("width",parseInt(rightWidth)-240);
}