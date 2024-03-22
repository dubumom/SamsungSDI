const mainMenu = $('.main_menu');
const header = $('header');
const initHeight = header.outerHeight();
let tallestHeight = 0;

$('.depth_2').each(function(){  //서브메뉴들의 높이를 구한다. 
	if($(this).outerHeight() > tallestHeight){
		tallestHeight = $(this).outerHeight();
	}	
});

let headerHeight = tallestHeight + initHeight + 100;

mainMenu.mouseover(function(){ 
	header.stop().animate({height:`${headerHeight}px`});
})

header.mouseout(function(){ //메인메뉴와 서브메뉴 사이 공간이 있기 때문에 헤더에서 마우스가 나가면 사라지도록 
	header.stop().animate({height:`${initHeight}px`});
});

$(".main_menu .depth_2").on("click", function() {

		let submenu = $(this).find(".depth_3"); //.depth_3가 absolute로 잘못 설정되어 있어 css 수정
		if (submenu.length) { 
				submenu.slideToggle();
		}
});

