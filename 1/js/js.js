// JavaScript Document
window.onload=function(){
	(function(){
		var tiM=document.getElementById('js-tom');
		var toN=tiM.getElementsByTagName('ul')[0];
		var aLi=toN.getElementsByTagName('li');
		var eLi=toN.getElementsByTagName('li')[aLi.length-1];
		var iNow=1;
		for(var i=0;i<aLi.length-1;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				//alert(aLi[0].offsetLeft)
				 startMove(eLi,this.offsetLeft-20);
			};
			aLi[i].onmouseout=function(){
                    startMove(eLi,iNow*aLi[0].offsetWidth+iNow*20);
                };

             aLi[i].onclick=function(){
                    iNow=this.index;
                };
		}
	})()
	//轮播图
	;(function(win,doc){
		var oView=doc.getElementById('js-view');
		var oAll=oView.getElementsByTagName('ul')[0];
		var aWent=oAll.getElementsByTagName('li');
		var oToL=oView.getElementsByClassName('js-toL')[0];
		var oToR=oView.getElementsByClassName('js-toR')[0];
		var iNow=0;
		var timer=null;
		//oAll.innerHTML+=oAll.innerHTML;
		//oAll.style.width=aWent[0].offsetWidth*aWent.length+'px';
		timer=setInterval(toRight,3000)
		oView.onmouseenter=function(){
			clearInterval(timer)
			oToL.style.display='block';
			oToR.style.display='block';
			oToR.onclick=function(){
				toRight();
			};
			oToL.onclick=function(){
				toLeft();
				
			};
		};
		oView.onmouseleave=function(){
			oToL.style.display='none';
			oToR.style.display='none';
			timer=setInterval(toRight,3000);
		};
		var sUl=oView.getElementsByTagName('ul')[1];
		var sLi=sUl.getElementsByTagName('li');
		for(var i=0;i<sLi.length;i++){
			//alert(1)
			sLi[i].index=i;
			sLi[i].onmouseover=function(){
				clearInterval(timer);
				for(var i=0;i<sLi.length;i++){
					sLi[i].className='fl';
				}
				this.className='js-active fl';
				oAll.style.left=-[this.index]*aWent[0].offsetWidth+'px';
				iNow=this.index;
			};
		}
		function toLeft(){
			if(iNow==0){
					iNow=aWent.length;
				}
				iNow--;
				oAll.style.left=-iNow*aWent[0].offsetWidth+'px';
				
		}
		function toRight(){
			if(iNow==aWent.length-1){
					iNow=-1;
				}
			iNow++;
			oAll.style.left=-iNow*aWent[0].offsetWidth+'px';
			for(var i=0;i<sLi.length;i++){
					sLi[i].className='fl';
				}
			sLi[iNow].className='js-active fl';
		}
	})(window,document);
	//拽
	;(function(win,doc){
		var dragBox=doc.getElementById('js-dragBox');
		var dragU=dragBox.getElementsByTagName('ul')[0];
		var dragL=dragBox.getElementsByTagName('li');
		var dragImg=dragBox.getElementsByTagName('img');
		//只是看看
		/*for(var i=0; i<dragL.length; i++){
			var oSpan=document.createElement('span');
			oSpan.innerHTML=i;
			dragL[i].appendChild(oSpan);
		}
		var aSpan=dragU.getElementsByTagName('span');*/
	
		var divC=dragBox.offsetWidth/2;
		//计算ul的距离
		dragU.style.width=dragL[0].offsetWidth*dragL.length+'px';
		dragU.onmousedown=function(ev){
			var oEvent=ev||event;
			var disX=oEvent.clientX-dragU.offsetLeft;
			document.onmousemove=function(ev){
				var oEvent=ev || event;
				var left=oEvent.clientX-disX;	
				
				if(left>=divC-(1-0.5)*dragL[0].offsetWidth){
				left=divC-(1-0.5)*dragL[0].offsetWidth;	
				}
			if(left<=divC-(dragL.length-0.5)*dragL[0].offsetWidth){
				left=divC-(dragL.length-0.5)*dragL[0].offsetWidth;		
			}
			
			dragU.style.left=left+'px';
				//求距离
				chang();
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;	
			};
		return false;
		};
		dragU.style.left=divC-(2-0.5)*dragL[0].offsetWidth+'px';
		chang();
		function chang(){
			for(var i=0; i<dragL.length; i++){
					var l=Math.abs(dragL[i].offsetLeft+dragU.offsetLeft+dragL[i].offsetWidth/2-divC);
					var scale=1-l/500;
					scale<0.5 && (scale=0.5);
					//aSpan[i].innerHTML=scale.toFixed(2);
					dragImg[i].style.width=scale*400+'px';
					dragImg[i].style.height=scale*300+'px';
					dragImg[i].style.marginLeft=-(dragImg[i].offsetWidth-200)/2+'px';
					dragImg[i].style.marginTop=-(dragImg[i].offsetHeight-150)/2+'px';
					dragL[i].style.zIndex=scale*1000000;
					
			}
		}
	})(window,document)
};