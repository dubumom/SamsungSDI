const mainMenu = $('.main_menu');
const header = $('header');
const initHeight = header.outerHeight();
let tallestHeight = 0;

$('.depth_2').each(function(){ 
	if($(this).outerHeight() > tallestHeight){
		tallestHeight = $(this).outerHeight();
	}	
});

$(document).ready(function () {
	$(".main_menu .depth_2 > li > a").click(function (e) {
	  e.preventDefault(); 
	  var $depth3 = $(this).next('.depth_3');
	  $(".main_menu .depth_3").not($depth3).hide(); 
	  $(".main_menu .depth_2 > li").removeClass("active"); 
	  $(this).parent().toggleClass("active");
	  $depth3.toggle(); 
	});
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

