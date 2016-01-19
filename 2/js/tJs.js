// JavaScript Document
$(function(){
	var iNow=3;
	$('#js-tom ul li').mouseover(function(){
		//alert(1)
		
		startMove($('#js-tom ul li:last'),$(this).position().left);
	});
	$('#js-tom ul li').mouseout(function(){
		//alert(1)
		startMove($('#js-tom ul li:last'),iNow*$('#js-tom ul li:first').outerWidth()+iNow*20);
	});
	$('#js-tom ul li').click(function(){
		iNow=$(this).index();
	});
	var oDate=new Date();
	var year=oDate.getFullYear();
	var month=oDate.getMonth();
	$('#calendar span:first').html(year+'年'+toDub(month+1)+'月')
	// 创建空格
	var oDate=new Date();
	oDate.setDate(1);
	var week=oDate.getDay();
	(week==0) && (week=7);
	for (var i=0; i<week-1; i++)
	{
		
		$('#calendar ul:first').append('<li></li>');
	}
	// 创建真正日期
	var oDate=new Date(); // ?
	oDate.setMonth(oDate.getMonth()+1, 1);
	oDate.setDate(0);
	var total=oDate.getDate();
	//alert(total)
	for (var i=0; i<total; i++)
	{
		
		
		
		$('#calendar ul:first').append('<li></li>');
		$('#calendar ul:first li:eq('+i+')').html(i+1);
	}
	// 周末
	$('#calendar ul:first li').each(function(index, element) {
		if(index%7==5 || index%7==6){
			$('#calendar ul:first li:eq('+index+')').addClass('week');
		}
	});
	// 处理今天
	var oDate=new Date();
	var today=oDate.getDate();
	$('#calendar ul:first li').each(function(index, element) {
		if ($('#calendar ul:first li:eq('+index+')').html() == today)
		{
			$('#calendar ul:first li:eq('+index+')').html('今天');
			$('#calendar ul:first li:eq('+index+')').addClass('today');
		}
		else if ($('#calendar ul:first li:eq('+index+')').html()< today)
		{
			$('#calendar ul:first li:eq('+index+')').addClass('past');
		}
	});
	function toDub(n)
	{
		return n<10 ? '0'+n : ''+n;
	}
});