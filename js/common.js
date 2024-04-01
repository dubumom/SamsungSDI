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
		header.stop().animate({height:`${headerHeight}px`});
	}		
})

header.mouseleave(function(){
	if($(window).width() > 768){
	header.stop().animate({height:`${initHeight}px`});
	$('.depth_3').hide();
	}
});

header.mouseleave(function(){
	if($(window).width() < 768){
	header.stop().animate({height:`${initHeight}px`});
	$('.depth_3').hide();
	}
});

$(".main_menu .depth_2 > li").on("click", function() {
if($(window).width() > 768){
		let submenu = $(this).find(".depth_3");
		console.log(submenu);
		let submenuHeight = submenu.outerHeight();
		if (submenu.length) { 
			submenu.slideToggle();
		}
		header.stop().animate({height:`${headerHeight + submenuHeight}px`});
	}
});

$(".main_menu .depth_2 > li").on("click", function() {
	if($(window).width() < 768){
			let submenu = $(this).find(".depth_3");
			console.log(submenu);
			let submenuHeight = submenu.outerHeight();
			if (submenu.length) { 
				submenu.slideToggle();
			}
			header.stop().animate({height:`${headerHeight + submenuHeight}px`});
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

	$(".main_menu > li").on("click", function() {
		if($(window).width() < 768){		
			let submenu = $(this).find(".depth_2");
			console.log(submenu);
			let submenuHeight = submenu.outerHeight();
			if (submenu.length) { 
					submenu.slideToggle();
			}

		}
  });

  $(".main_menu > li > ul > li").on("click", function() {
	if($(window).width() < 768){		
		let submenu = $(this).find(".depth_3");
		console.log(submenu);
		let submenuHeight = submenu.outerHeight();
		if (submenu.length) { 
				submenu.slideToggle();
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
		$('open').remove();
	}
});

// 검색 기능
$('header').on('click','.searchformToggle', function(){
	console.log('검색');
	$('.right_menu').addClass('search');
 });

 
// 모바일 토글 
let mobileToggle = $('.mobileToggle');
let mainMenu = $('.main_menu');

$(document).on('click','.mobileToggle',function(){
	if($(window).width() < 768){
$('header').toggleClass("open");
$('.search-bar').toggleClass("open");
}
});

mainMenu.click(function(){
if($(window).width() <= 600){
	$(this).find('ul').slideToggle();
	$(this).siblings().find('ul').slideUp();
}

})


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
		console.log($(this));
	  e.preventDefault();
	  fadeSlide($(this).index());
	});
  
	footerslides.eq(0).fadeIn();
  
	function autoNews(){
		footertimer = setInterval(()=>{
		let footernextIdx = (footercurrentIdx + 1) % footerslideCount;
		fadeSlide(footernextIdx);
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

let threshold = $(window).height() -150;
let mapbtn =$("#mapbtn");
let mapbtnOST = mapbtn.offset().top;

$(window).scroll(function() {
   var scrollAmt = $(window).scrollTop(); 
   let newTop = mapbtnOST + (scrollAmt/10);

   if(newTop < threshold ){
      mapbtn.stop().animate({top:newTop+"px"}, 600);
   }

});


$('#mapbtn').click(function(e) 
{ e.preventDefault();
	$('.quickbtn_map').fadeIn(); 
});
$('.mapmodal_close').click(function() {
	$('.quickbtn_map').fadeOut();
});
