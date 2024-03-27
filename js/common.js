
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
		if($(window).width() > 768){
			header.stop().animate({height:`${headerHeight}px`});
		}
		
	})
	
	header.mouseleave(function(){
		if($(window).width() > 768){
		header.stop().animate({height:`${initHeight}px`});
		}
	 });
	 
	 $(".main_menu .depth_2 > li").on("click", function() {
	 
		   let submenu = $(this).find(".depth_3");
		   console.log(submenu);
		   let submenuHeight = submenu.outerHeight();
		   if (submenu.length) { 
				 submenu.slideToggle();
		   }
		   header.stop().animate({height:`${headerHeight + submenuHeight}px`});
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

// 모바일 토글 
let mobileToggle = $('.mobileToggle');
let mainMenu = $('.main_menu');

$(document).on('click','.mobileToggle',function(){
    $('header').toggleClass("open");
});

mainMenu.click(function(){
    if($(window).width() <= 600){
        $(this).find('ul').slideToggle();
        $(this).siblings().find('ul').slideUp();
    }

})




//푸터 제이쿼리 작동 함수
function footerJs(){

}

/* ---------- modal : cookie ---------- */

const modal = document.querySelector('.modal');
const input = modal.querySelector('input[type="checkbox"]');
const modal_close =modal.querySelector('.modal_close');


modal_close.addEventListener('click',(e)=>{
  e.preventDefault();
  // console.log(in5660put.checked);
  if(input.checked){
    //쿠키생성
    setCookie('Portfolio','samsung', 1);
  }else{
    //쿠키삭제
    delCookie('Portfolio');
  }
  modal.classList.add('hide');
});
function setCookie(name, val, day){
    let date = new Date();
    date.setDate(date.getDate()+day);
    document.cookie = `${name}=${val};Expires=${date}`;
  }
  function delCookie(name){
    let date = new Date();
    date.setDate(date.getDate()-1);
    document.cookie = `${name}='';Expires=${date}`;
  }

  function checkCookie(name){
    let cookieArr = document.cookie.split(';');
    let visited = false;

    for(let cookie of cookieArr){
      if(cookie.indexOf(name) > -1) {
        visited = true;
      }
    }
    if(visited) {
      modal.classList.add('hide');
    } else {
      modal.classList.remove('hide');
    }
  }
  checkCookie('samsung');