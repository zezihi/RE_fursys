$(function(){
	$('#gnb').on('mouseenter',function(){
		$('#gnb > ul').find('ul').stop().slideDown();
	})
	$('#gnb').on('mouseleave',function(){
		$('#gnb > ul ul').stop().slideUp();
	})
	
})
