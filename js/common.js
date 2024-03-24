
	$('#header').load('header.html', headerJs);
	$('#footer').load('footer.html', footerJs);

// 헤데 제이쿼리 작동 함수
function headerJs(){
	const mainMenu = $('.main_menu');
	const header = $('#header');
	const initHeight = header.outerHeight();
	let tallestHeight = 0;
	
	$('.depth_2').each(function(){
		if($(this).outerHeight() > tallestHeight){
			tallestHeight = $(this).outerHeight();
		}	
	});
	
	let headerHeight = tallestHeight + initHeight + 100;
	
	mainMenu.mouseover(function(){ 
		header.stop().animate({height:`${headerHeight}px`});
	})
	
	header.mouseout(function(){
		header.stop().animate({height:`${initHeight}px`});
	});
	
	$(".main_menu .depth_2").on("click", function() {
	
			let submenu = $(this).find(".depth_3");
			if (submenu.length) { 
					submenu.slideToggle();
			}
	});
	
	$(".depth_2 > li > a").click(function (event) {
		event.preventDefault();
		$(this).parent().toggleClass("active");
		if ($(this).parent().hasClass("active")) {
		$(this).find(".material-symbols-outlined").text("arrow_drop_up");
		} else {
		$(this).find(".material-symbols-outlined").text("arrow_drop_down");
		}
	});
	$(".depth_2").mouseenter(function() {
			$(this).children(".depth_3").show();
	});
	
	$(".depth_2").mouseleave(function() {
			$(this).children(".depth_3").hide();
	});
	
}

//푸터 제이쿼리 작동 함수
function footerJs(){

}