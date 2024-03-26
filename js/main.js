
// business

let notepad = $('.notepads');

$(window).scroll(function(){
  if($(this).scrollTop() > 300){
    notepad.addClass('active');
  }else{
    notepad.removeClass('active');
  }
});


//prcenter
let slideUpwrapper = $('.slideUp');
let slideCount = slideUpwrapper.find('li').length;
let slideHeight = slideUpwrapper.find('li').eq(0).height() + 30;

let slideUpwrapper2 = $('.slideDown');

function slideUp(){
  slideUpwrapper.animate({top: `-${slideHeight}px`}, 5000, 'linear', function(){
    $(this).find('li').eq(0).appendTo(this); // 첫 번째 슬라이드를 마지막으로 이동합니다.
    $(this).css({top: 0}); // top 위치를 초기화합니다.
    slideUp(); // 다음 슬라이드 애니메이션을 자동으로 시작합니다.
  });
}

slideUp(); // 최초 실행

function slideDown(){
  slideUpwrapper2.animate({top: `${slideHeight}px`}, 5000, 'linear', function(){
    $(this).find('li').eq(slideCount-1).prependTo(this); // 첫 번째 슬라이드를 마지막으로 이동합니다.
    $(this).css({top: 0}); // top 위치를 초기화합니다.
    slideDown(); // 다음 슬라이드 애니메이션을 자동으로 시작합니다.
  });
}

slideDown(); // 최초 실행


//esg 텍스트 슬라이드
/*
let wrapper = $('.slidewrapper'),
  slideContainer = wrapper.find('.slide-container'),
  slideWidth = 200,
  slideGap = 20,
  controlBtn = $('.controls button'),
  currentIdx = 0;

  controlBtn.click((e)=>{
    let slides = slideContainer.find('.slide');
    e.target.matches('.next') && slideContainer.append(slides.eq(0));
    
  
  })
*/