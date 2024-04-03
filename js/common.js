$('#header').load('header.html', headerJs);
$('#footer').load('footer.html', footerJs);

// 헤더 제이쿼리 작동 함수
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
	if($(window).width() > 768){
		console.log('mainmenu hover');
		
		let openedMenuHeight = 0;
		mainMenu.find('ul').filter(function(){
			if(this.style.display == 'block'){
				openedMenuHeight = this.offsetHeight;
				console.log(openedMenuHeight);
			}
		});
		header.stop().animate({height:`${headerHeight + openedMenuHeight}px`});
	}
})

header.mouseleave(function(){
	if($(window).width() >= 768){
	header.stop().animate({height:`${initHeight}px`});
	$('.depth_3').hide();
	}
});

header.mouseleave(function(){
	if($(window).width() <= 768){
	header.stop().animate({height:`${initHeight}px`});
	$('.depth_3').hide();
	}
});

$(".main_menu .depth_2 > li").on("click", function(e) {
	e.stopPropagation();
	console.log((this))

if($(window).width() > 768){
		let submenu = $(this).find(".depth_3");

		let submenuHeight = submenu.outerHeight();
		if (submenu.length) { 
			submenu.slideToggle();
			$(this).siblings().find('> ul').slideUp();
		}
		header.stop().animate({height:`${headerHeight + submenuHeight}px`});

		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');

		if ($(this).hasClass('active')) {
			$(this).find(".material-symbols-outlined").text("arrow_drop_up");
		}else {
			$(this).find(".material-symbols-outlined").text("arrow_drop_down");
		}

	} else{

		let submenu = $(this).find(".depth_3");

		let submenuHeight = submenu.outerHeight();
		if (submenu.length > 0) { 
			submenu.slideToggle();
			$(this).siblings().find('> ul').slideUp();
		}
		header.stop().animate({height:`${headerHeight + submenuHeight}px`});
	}

});





	$(".main_menu > li").on("click", function() {

		if($(window).width() < 768){		

			let submenu = $(this).find(".depth_2");

			let submenuHeight = submenu.outerHeight();
			if (submenu.length > 0) { 
					submenu.slideToggle();
					$(this).siblings().find('> ul').slideUp();
			}

		}
  });

 $(".depth_2").click(function (event) {
	if($(window).width() < 768){	
	 event.preventDefault();
	 if ($(this).parent().hasClass("active")) {
	 $(this).find(".material-symbols-outlined").text("arrow_drop_up");
	 } else {
	 $(this).find(".material-symbols-outlined").text("arrow_drop_down");
	 }
	 $('.depth_2').hide();
	}
 }); 
}



$(window).resize(function(){
	if($(this).width() > 768){
		$('.depth_2').show();
	}
});

$(window).resize(function(){
	if($(this).width() < 768){
		$('.depth_2').hide();
	}
});

$(window).resize(function(){
	if($(this).width() > 768){
		$('nav').removeClass('open');
	}
});

// 검색 기능
$('header').on('click','.searchformToggle', function(){

	$('.right_menu').addClass('search');
 });

 
// 모바일 토글 
let mobileToggle = $('.mobileToggle');
let mainMenu = $('.main_menu > li');

$(document).on('click','.mobileToggle',function(){
	if($(window).width() < 768){
	$('header').toggleClass("open");
	$('.search-bar').toggleClass("open");
}
});




//푸터 제이쿼리 작동 함수
function footerJs(){

	let footerslideWrapper = $('.ft_customer_ul');
	let footerslides = footerslideWrapper.find('li');
	let footerslideCount = footerslides.length;
	let footercurrentIdx = 0;
	let footerPager = $('.inquery_pager');
	let footertimer ;
	
	footerslides.each(function(idx){
		footerPager.append(`<a href="">${idx}</a>`);
	});
  
	let footerpagerbtn = $('.inquery_pager > ul > li');
	footerpagerbtn.click(function(e){
	  e.preventDefault();
	//   fadeSlide($(this).index());
	let idx = $(this).index();
    fadeSlide(idx);
    footerpagerbtn.removeClass('inquery_pager_active');
    $(this).addClass('inquery_pager_active');
	});

  
	footerslides.eq(0).fadeIn();
  
	function autoNews(){
		footertimer = setInterval(()=>{
		let footernextIdx = (footercurrentIdx + 1) % footerslideCount;
		fadeSlide(footernextIdx);
		footercurrentIdx = footernextIdx;
		footerpagerbtn.removeClass('inquery_pager_active');
		footerpagerbtn.eq(footercurrentIdx).addClass('inquery_pager_active');
	  }, 4000);
	}
  
	function fadeSlide(footernextIdx){
		footerslides.eq(footercurrentIdx).animate({opacity:0});
		footerslides.eq(footernextIdx).animate({opacity:1});
		footercurrentIdx = footernextIdx;
	}
	footerslides.css({opacity:0});
	footerslides.eq(0).css({opacity:1});
	autoNews();
	footerslideWrapper.mouseenter(function(){
	  clearInterval(footertimer);
	});
	footerslideWrapper.mouseleave(function(){
	  autoNews()
	});

}
//quickmenu

// let threshold = $(window).height() -150;
// let mapbtnOST = mapbtn.offset().top;
// let mapbtn =$("#mapbtn");

// $(window).scroll(function() {
// 	var scrollAmt = $(window).scrollTop(); 
// 	let newTop = mapbtnOST + (scrollAmt/10);
	
// 	if(newTop < threshold ){
// 		mapbtn.stop().animate({top:newTop+"px"}, 600);
// 	}
	
// });

let mapbtn = $("#mappbtn");
let upbtn = $("#upbtn");
let xbtn = $("#xbtn");

mapbtn.click(function(e) 
{ e.preventDefault();
	$('.quickbtn_map').fadeIn(); 
});          
$('.mapmodal_close').click(function() {
	$('.quickbtn_map').fadeOut();
});

// let rotated = false;

// xbtn.click(function() {
// 	if (!rotated) {
// 		upbtn.css('bottom', '90px');
// 		mapbtn.css('bottom', '180px').animate({
// 			height: 'toggle'
// 		});
// 		xbtn.css('transform', 'rotate(45deg)');
// 		rotated = true;
// 	} else {
// 		upbtn.css('bottom', '');
// 		mapbtn.css('bottom', '').animate({
// 			height: 'toggle'
// 		});
// 		xbtn.css('transform', '');
// 		rotated = false;
// 	}
// });
let rotated = false;
    xbtn.click(function() {
        if (!rotated) {
            upbtn.stop().animate({bottom: '80px'}, 'slow');
            mapbtn.stop().animate({bottom: '150px',height: '60px'}, 'slow');
            xbtn.css({ transform: 'rotate(45deg)',transition: 'transform 0.5s ease'});
            rotated = true;
        } else {
            upbtn.stop().animate({bottom: '10px'}, 'slow');
            mapbtn.stop().animate({ bottom: '10px', height: '60px'}, 'slow');
            xbtn.css({transform: 'rotate(0deg)',transition: 'transform 0.5s ease'});
            rotated = false;
        }
    });

	upbtn.click(function() {$('html, body').stop().animate({scrollTop: 0}, 'slow');
    });