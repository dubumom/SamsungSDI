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
	$('.search_box').css({'right':'50px','opacity':'1'});
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
  
	let footerpagerbtn = footerPager.find('a');
  
	footerpagerbtn.click(function(e){
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
		footerslides.eq(footercurrentIdx).fadeOut();
		footerslides.eq(footernextIdx).fadeIn();
		footercurrentIdx = footernextIdx;
	}
	autoNews();
	footerslideWrapper.mouseenter(function(){
	  clearInterval(footertimer);
	});
	footerslideWrapper.mouseleave(function(){
	  autoNews()
	});
	/*
	let footerslideWrapper = $('.ft_customer'),
        footerslideContainer = footerslideWrapper.find('.ft_customer_ul'),
        footerslides = footerslideContainer.find('li'),
		footerpager = $('.inquery_pager'),
        footercurrentIdx = 0; 

	footerslideWidth = footerslideWrapper.outerWidth();
	footerslideContainer.css({width:footerslideWrapper.outerWidth()*footerslides.length + 'px'})

	footerslides.each(function(idx){
		footerpager.append(`<a href="#">${idx}</a>`)
	  });

	function moveSlide(num){
       let moveAmount = -num * footerslideWidth
       footerslideContainer.animate({transform:`translateX(${moveAmount})px`});
       footercurrentIdx = num;
       updateSlide();
    }
	function updateSlide(){
		//페이저 활성화
		footerpager.find('a').removeClass('inquery_pager_active');
		footerpager.find('a').eq(footercurrentIdx).addClass('inquery_pager_active');
		//슬라이드 활성화
		footerslides.removeClass('inquery_pager_active');
		footerslides.eq(footercurrentIdx).addClass('inquery_pager_active');
	}  
    footerpager.find('a').click(function(e){
	e.preventDefault();
	let targetIdx = $(this).index();
	moveSlide(targetIdx)
	});
	
	let timer6;
function autoSlide(){
  timer6 = setInterval(function(){
    let nextIdx = (footercurrentIdx +1) % footerslides.length;
    moveSlide(nextIdx);
  },3000)
};

footerslideWrapper.mouseenter(function(){
  clearInterval(timer6);
});
footerslideWrapper.mouseleave(function(){
  autoSlide();
});
autoSlide();
*/

}
