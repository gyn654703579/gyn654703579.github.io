window.onload = function(){
  randomPosition();
  //简介开始
  var oBlin=document.getElementById('blingk');
  var oKop=document.getElementById('kop');
  var timer=null;
  var oShow=document.getElementById('oShow');
  var oE=oShow.getElementsByTagName('em');
  var aLi=oShow.getElementsByTagName('li');
  for (var i=0; i<aLi.length; i++)
	{
		enter(aLi[i]);
		leave(aLi[i]);
	}
	//enter函数
	function enter(obj)
	{
		obj.onmouseenter=function (ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			var oMv=obj.children[1];
			
			switch (n)
			{
				case 0: // right
					oMv.style.left='133px';
					oMv.style.top=0;
					break;
					
				case 1: // bottom
					oMv.style.left=0;
					oMv.style.top='100px';
					break;
				
				case 2: // left
					oMv.style.left='-133px';
					oMv.style.top=0;
					break;
					
				case 3: // top
					oMv.style.left=0;
					oMv.style.top='-100px';
					break;
			}
			move(oMv, {top:0, left:0});
		};
	}
	
	//leave函数
	function leave(obj)
	{
		obj.onmouseleave=function (ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			var oMv=obj.children[1];
			
			switch (n)
			{
				case 0: // right
					move(oMv, {left:133, top:0});
					break;
					
				case 1: // bottom
					move(oMv, {top:100, left:0});
					break;
				
				case 2: // left
					move(oMv, {top:0, left:-133});
					break;
					
				case 3: // top
					move(oMv, {top:-100, left:0});
					break;
			}
		};
	}
	
	function getN(obj, ev)
	{
		var x=obj.offsetLeft+obj.offsetParent.offsetLeft+obj.offsetWidth/2-ev.clientX;
		//alert(obj.offsetWidth)
		var y=obj.offsetTop+obj.offsetParent.offsetTop+obj.offsetHeight/2-ev.clientY;
		
		var n=Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
		return n;
	}

	function d2a(d)
	{
		return d*180/Math.PI;
	}
var aPos=[];

	for(var i=0;i<oE.length;i++){
		var left=oE[i].offsetLeft;
		var top=oE[i].offsetTop;
		
		aPos.push({
			left:left, top:top
		});

		oE[i].style.left=left+'px';
		oE[i].style.top=top+'px';
	}
	for(var i=0;i<oE.length;i++){
		oE[i].style.position='absolute';	
		oE[i].style.margin='0';
	}
// 时钟
		var tDate=document.getElementById('tDate');
		var tLi=tDate.getElementsByTagName('li');
		var tImg=tDate.getElementsByTagName('img');
			var row=10;
			var col=1;
			var W=120;
			var H=150;
			var width=W/col;
			var height=H/row;
			var Arry=[];
		for(var i=0;i<tLi.length;i++){
			timer3(tLi[i])
		}
		//alert(Arry.length)
datechang();

setInterval(function(){
	datechang();
	
},1000)

function datechang(){
	var oDate=new Date();
	var h=oDate.getHours();
	var m=oDate.getMinutes();
	var s=oDate.getSeconds();
	var str=toT(h)+toT(m)+toT(s);
	/*for(var i=0;i<str.length;i++){
		chang(Arry[str.charAt(i)],tImg[i],str.charAt(i))
	}*/
	for(var i=0;i<tImg.length;i++){
		chang(Arry[i],tImg[i],str.charAt(i))
		//tImg[i].src='imges/t'+str.charAt(i)+'.png';
		
	}
}
function timer3(obj1){
		var aSpan=[];
		for (var r=0; r<row; r++)
		{
		for (var c=0; c<col; c++)
		{
			var oSpan=document.createElement('span');
			oSpan.style.width=width+'px';
			oSpan.style.height=height+'px';
			var left=c*width;
			var top=r*height;
			oSpan.style.left=left+'px';
			oSpan.style.top=top+'px';
			oSpan.style.backgroundPosition='-'+left+'px -'+top+'px';
			obj1.appendChild(oSpan);
			aSpan.push(oSpan);
		}
	}
		Arry.push(aSpan);
}
	//var now=0;
	//chang(now);
	function chang(obj1,obj2,now){
		var aPath=['imges/t0.png','imges/t1.png', 'imges/t2.png', 'imges/t3.png','imges/t4.png', 'imges/t5.png', 'imges/t6.png','imges/t7.png', 'imges/t8.png', 'imges/t9.png'];
		var url='url('+aPath[now%aPath.length]+')';
		for (var i=0; i<obj1.length; i++)
		{
			obj1[i].style.opacity=0;
			obj1[i].style.backgroundImage=url;
		}
	var n=0; // 第几个
	var timer=setInterval(function (){
			(function (index,obj1,obj2){
				move(obj1[n], {opacity:1}, {
					complete:function (){
						if (index == obj1.length-1)
						{
							obj2.src=aPath[now%aPath.length];
							//alert(1)
						}
					}
				});
			})(n,obj1,obj2);
			
			n++;
			if (n == obj1.length)
			{
				clearInterval(timer);
			}
		}, 40);
	
}


function toT(str){
	return str<10? '0'+str :''+str;
}	
//时钟结束
function end(){
	for (var i=0; i<oE.length; i++)
		{
			oE[i].style.background='url(imges/nav_bg_new.png)';
			//oE[i].innerHTML='';
		}
	var n=oE.length-1;
		var timer=setInterval(function (){
			(function(pars){
			move(oE[n], {width:133, height:100, left:aPos[n].left, top:aPos[n].top},{
					complete:function(){
						if (pars == 0)
						{
							toDub();
						}
					}
				});
			})(n)
			n--;
			if (n == -1)
			{
				clearInterval(timer);
			}
		}, 300);
		
}
//按钮
oKop.onmouseover=function(){
	  //alert(timer)
	  clearInterval(timer);
	  
	  
	};
var bFlag=false;
oKop.onclick=function(){
	var n=0;
	if(bFlag==true){
		return;
	}
	bFlag=true;
		var timer=setInterval(function (){
			(function (index){
				move(oE[n], {left:0, top:0, width:0, height:0,}, {
					complete:function (){
						oE[index].innerHTML='';
						if (index == oE.length-1)
						{
							end();
						}
					}	
				});
			})(n);
			n++;
			if (n == oE.length)
			{
				clearInterval(timer);
			}
		}, 300);
};

 oKop.onmouseout=function(){
	  //alert(timer)
	 blingk()
	};
  function blingk(){
	var n=0;
	timer=setInterval(function(){
		if(n%2){
			oBlin.style.background='#3FF';
		}
		else{
			oBlin.style.background='#C6F';
		}
		n++;
		
	},500)
}
//按钮结束
function toDub(){
	var sArr=['姓名 高英娜','职位 前端工程师','电话 15210548389','QQ 654703479','工作经验 3年']
//var str='姓名高英娜';
	for(var i=0;i<sArr.length;i++){
	//alert(1)
	//setInterval(function(){},300)
		(function(number){
		var aPrev=[];
			for(var j=0;j<sArr[number].length;j++){
				//alert(1)
				var oSpan=document.createElement('span');
				oSpan.innerHTML=sArr[number].charAt(j);
				aPrev.push(oSpan);
				oE[number].appendChild(oSpan);
			}
	//alert(aPrev)
	
	//alert(oE[i]);
		(function(index){
			var n=0;
			oE[index].timer=setInterval(function (){
			move(aPrev[n], {opacity:1});
			
			n++;
			if (n == aPrev.length)
			{	//alert(oE[index])
				clearInterval(oE[index].timer);
			}
		}, 300);
		var oB=document.createElement('br');
		oE[index].insertBefore(oB,aPrev[2])
			})(number)
		})(i)	
	}
	
}
//导航
function randomPosition () {
  var oNav=document.getElementById('t-nav');
  var aSpan=oNav.getElementsByTagName('span');
  var aImg=oNav.getElementsByTagName('img');
  var aFont=oNav.getElementsByTagName('em');
  for(var i=0;i<aSpan.length;i++){
    var position =  getRandomPosition(200, 20);
    var allWidth;
    if (i === 0) {
      allWidth = 0;
    } else {
      allWidth = i * 125;
    }
	
    aSpan[i].style.left = position.left + allWidth +'px';
    aSpan[i].style.top =position.top +'px';
    aSpan[i].style.display = 'block';
	
	
    fade.show(aSpan[i], 200);
	aSpan[i].index=i;
	aSpan[i].onmouseenter=function(ev){
		var oEvent=ev||event;
		var oBig=document.createElement('i');
		oBig.style.zIndex=3;
		
		//oBig.style.position='relative';
		oBig.style.overflow='hidden';
		aSpan[this.index].appendChild(oBig);
		
		aImg[this.index].src='imges/waterb.png';
		aImg[this.index].className='active protoImg';
		
		//aImg[this.index].style.opacity=0;
		//fade.hide(aImg[this.index], 0.33);
		aFont[this.index].style.zIndex=3;
		aFont[this.index].style.fontSize='50px';
		aFont[this.index].style.marginLeft='-45px';
		var mtob=document.createElement('strong');
		mtob.style.position='absolute';
		mtob.innerHTML=aFont[this.index].innerHTML;
		mtob.className='mTob';
		//mImg.style.zIndex=3;
		//mImg.src='imges/watermb.png';
		//alert(mImg.offsetWidth)
		oBig.appendChild(mtob);
		var json=getPos(aSpan[this.index]);
		var disX=json.left;
		var disY=json.top;
		var maxL=aSpan[this.index].offsetWidth-oBig.offsetWidth;
		var maxT=aSpan[this.index].offsetHeight-oBig.offsetHeight;
	var maxImgL=mtob.offsetWidth-oBig.offsetWidth;
		var maxImgT=mtob.offsetHeight-oBig.offsetHeight;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			
				var left=oEvent.clientX-disX-oBig.offsetWidth/2;
			var top=oEvent.clientY-disY-oBig.offsetHeight/2;
		
				if(left<-50){
				left=-50;
		}
			else if(left>maxL-30){
				left=maxL-30;
			}
				if(top<-50){
				top=-50;
		}
			else if(top>maxT-30){
				top=maxT-30;
			}
			//alert(oEvent.clientX-disX)
			oBig.style.left=left+'px';
			oBig.style.top=top+'px';
			mtob.style.left=(-left/maxL*maxImgL)/2+'px';
			mtob.style.top=(-top/maxT*maxImgT)/2+8+'px';
		};
		
		
	};
	aSpan[i].onmouseleave=function(){
			
		aSpan[this.index].onmousemove=null;
		//alert(this.index)
		var oBig=aSpan[this.index].getElementsByTagName('i')[0];
		
		aImg[this.index].src='imges/water2.png';
		aImg[this.index].className='protoImg';
		aFont[this.index].style.zIndex='';
		
		aFont[this.index].style.fontSize='16px';
		aFont[this.index].style.marginLeft='';
		aSpan[this.index].removeChild(oBig);
		
	};
  }
}
//照片墙
var oShield=document.getElementById('js-shield');
var oShUl=oShield.getElementsByTagName('ul')[0];
var oShLi=oShield.getElementsByTagName('li');
var zIndex=1000;
	//布局转换
	var oShPos=[];
	for(var i=0;i<oShLi.length;i++){
		oShPos[i]={
			left:oShLi[i].offsetLeft,
			top:oShLi[i].offsetTop,
		}
	}
	for(var i=0;i<oShPos.length;i++){
		oShLi[i].style.left=oShPos[i].left+'px';
		oShLi[i].style.top=oShPos[i].top+'px';
		oShLi[i].style.position='absolute';
		oShLi[i].style.margin=0;
	}
	//测试拖拽
	for(var i=0;i<oShLi.length;i++){
		oShDrag(oShLi[i])
		oShLi[i].index=i;
	}
	//拖拽函数
		function oShDrag(obj){
			obj.onmousedown=function(ev){
				var oEvent=ev||event;
				var disX=oEvent.clientX-obj.offsetLeft;
				var disY=oEvent.clientY-obj.offsetTop;
				obj.style.zIndex=zIndex++;
			document.onmousemove=function(ev){
				var oEvent=ev||event;
				var left=oEvent.clientX-disX;
				var top=oEvent.clientY-disY;
				obj.style.left=left+'px';
				obj.style.top=top+'px';
				//检测碰撞
				for(var i=0;i<oShLi.length;i++){
					oShLi[i].className='';
				}
				var oNear=findNearest(obj);
				if(oNear){
					oNear.className='oNearSh';
					
				}
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				//换位置
				var oNear=findNearest(obj);
				if(oNear){
					move(obj,oShPos[oNear.index]);
					move(oNear,oShPos[obj.index]);
					oNear.className='';
					var tmp;
                     tmp=obj.index;
                     obj.index=oNear.index;
                     oNear.index=tmp;
				}
				else{
					 move(obj,oShPos[obj.index]);
					}
				
			};
			return false;
		};
	}
	//找最近
	function findNearest(obj){
		var iMin=999999999999;
		 var iMinIndex=-1;
		for(var i=0;i<oShLi.length;i++){
			if(obj==oShLi[i])continue; 
			if(collTest(obj,oShLi[i])){
				var dis=getDis(obj,oShLi[i]);
				if(dis<iMin){
                    iMin=dis;
                    iMinIndex=i;
                 }
			}
		}
		if(iMinIndex==-1){
                    return null;
                }else{
                    return oShLi[iMinIndex];
                }
	}
	
	//碰撞检测
	function collTest(obj,obj2){
		var l1=obj.offsetLeft;
		var r1=l1+obj.offsetWidth;
		var t1=obj.offsetTop;
		var b1=t1+obj.offsetHeight;
		var l2=obj2.offsetLeft;
		var r2=l2+obj2.offsetWidth;
		var t2=obj2.offsetTop;
		var b2=t2+obj2.offsetHeight;
		if(r1<l2||r2<l1||b1<t2||b2<t1){
			return false;
		}
		else{
			return true;
		}
	}
	//求距离
	function getDis(obj,obj2){
		var l1=obj.offsetLeft+obj.offsetWidth/2;
        var l2=obj2.offsetLeft+obj2.offsetWidth/2;

        var t1=obj.offsetTop+obj.offsetHeight/2;
        var t2=obj2.offsetTop+obj2.offsetHeight/2;

        var a=l1-l2;
        var b=t1-t2;

        return Math.sqrt(a*a+b*b);
	}
};
//导航结束
/**
 * [getRandomPosition 获取随机的高 右]
 * @param  {[type]} top   [上的区域]
 * @param  {[type]} right [右的区域]
 * @return {[type]}       [description]
 */
function getPos(obj)
	{
		var left=0;
		var top=0;
		
		// obj=body
		while (obj)
		{
			// left=0 body
			left+=obj.offsetLeft;
			top+=obj.offsetTop;
			
			// obj=null
			obj=obj.offsetParent;
		}
		
		return {left:left, top:top};
	}
function getRandomPosition (top, right) {
  var randomTop =  Math.floor(Math.random() * top);
  var randomRight = Math.floor(Math.random() * right);
  var position = {};
  position.top = randomTop;
  position.left = randomRight;
  return position;
}
