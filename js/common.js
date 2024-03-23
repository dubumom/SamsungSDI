const mainMenu = $('.main_menu');
const header = $('header');
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

$(document).ready(function () {
	$(".depth_2 > li > a").click(function (event) {
	  event.preventDefault();
	  $(this).parent().toggleClass("active");
	  if ($(this).parent().hasClass("active")) {
		$(this).find(".material-symbols-outlined").text("arrow_drop_up");
	  } else {
		$(this).find(".material-symbols-outlined").text("arrow_drop_down");
	  }
	});
  });
  $(document).ready(function() {
    // depth_2에 마우스가 들어갔을 때 이벤트 핸들러 추가
    $(".depth_2").mouseenter(function() {
        // 해당 .depth_2의 하위 .depth_3를 표시
        $(this).children(".depth_3").show();
    });

    // depth_2에서 마우스가 빠져나갔을 때 이벤트 핸들러 추가
    $(".depth_2").mouseleave(function() {
        // 해당 .depth_2의 하위 .depth_3를 숨김
        $(this).children(".depth_3").hide();
    });
});
$(document).ready(function() {
    // 햄버거 아이콘을 클릭했을 때 메뉴를 토글하는 기능 추가
    $(".navbar__toggleBtn").click(function() {
        $(".main_menu").slideToggle();
    });

    // depth_2에 마우스가 들어갔을 때 이벤트 핸들러 추가
    $(".depth_2").mouseenter(function() {
        // 해당 .depth_2의 하위 .depth_3를 표시
        $(this).children(".depth_3").show();
    });

    // depth_2에서 마우스가 빠져나갔을 때 이벤트 핸들러 추가
    $(".depth_2").mouseleave(function() {
        // 해당 .depth_2의 하위 .depth_3를 숨김
        $(this).children(".depth_3").hide();
    });

    // depth_2의 화살표 아이콘 클릭 시 하위 메뉴를 토글하는 기능 추가
    $(".depth_2 > li > a").click(function(event) {
        event.preventDefault();
        $(this).parent().toggleClass("active");
        if ($(this).parent().hasClass("active")) {
            $(this).find(".material-symbols-outlined").text("arrow_drop_up");
        } else {
            $(this).find(".material-symbols-outlined").text("arrow_drop_down");
        }
    });

});
