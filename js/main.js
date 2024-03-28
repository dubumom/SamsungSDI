// banner slide

let bannerWrapper = $('.bannerWrapper'),
    slideContainer = bannerWrapper.find('.slidecontainer'),
    slides = slideContainer.find('li'),
    pager = bannerWrapper.find('.pager'),
    currentIdx = 0;

//slideContainer의 너비 지정
slideWidth = bannerWrapper.outerWidth();
slideContainer.css({width:bannerWrapper.outerWidth()*slides.length + 'px'})

//pager 생성 / slide 마다 할일 pager의 내용의 뒤에 추가
// slides.each(function(idx){
//   pager.append(`<a href="#">${idx}</a>`)
// });

//slideContainer.animate({transform:`translateX(-${slideWidth})px`}) -> 슬라이드 움직이기

function moveSlide(num){
  let moveAmount = -num * slideWidth
  slideContainer.animate({transform:`translateX(${moveAmount})px`});
  currentIdx = num;
  updateSlide();
}


function updateSlide(){
  //페이저 활성화
  pager.find('a').removeClass('bannerActive');
  pager.find('a').eq(currentIdx).addClass('bannerActive');
  //슬라이드 활성화
  slides.removeClass('bannerActive');
  slides.eq(currentIdx).addClass('bannerActive');
}
updateSlide();

// //페이저를 클릭하면 순번으로 이동
pager.find('a').click(function(e){
  e.preventDefault();
  let targetIdx = $(this).index();
  moveSlide(targetIdx)
});

let timer;
function autoSlide(){
  timer = setInterval(function(){
    let nextIdx = (currentIdx +1) % slides.length;
    moveSlide(nextIdx);
  },3000)
};

bannerWrapper.mouseenter(function(){
  clearInterval(timer);
});
bannerWrapper.mouseleave(function(){
  autoSlide();
});
autoSlide();

// business

let business = $('.business');

$(window).scroll(function(){
  if($(this).scrollTop() > 500){
    business.addClass('lineActive');
  }else{
    business.removeClass('lineActive');
  }
});

// career
let prList = $('.pr_list > li');
const prImg = $('.pr_imges').find('img');
const carrer = $('.career_Recruitment');
const prLocation = $('.pr_location');
const period = $('.period');
const detail = $('.detail');

prList.click(function(e){
  e.preventDefault();
  let $this = $(this).find('a');
  let a = $this.attr('data-career');
  let b = $this.attr('data-location');
  let c = $this.attr('data-period');
  let d = $this.find('img').attr('src');
  let f = $this.attr('data-detail');
  carrer.text(a)
  prLocation.text(b)
  period.text(c)
  detail.text(f)
  prImg.attr('src',d);
  
  $(this).css({left:'320px', zIndex:6});
  let others = $(this).siblings();
  others.each(function(idx){
    let newLeft = idx * 80 + 'px';
    $(this).css({left:newLeft, zIndex:idx});
  });
  $('.pr_imges').removeClass('animate__zoomInLeft');
  $('.pr_imges').css({opacity:'0'});
  setTimeout(()=>{
    $('.pr_imges').addClass('animate__zoomInLeft');
    $('.pr_imges').css({opacity:'1'});
  },800)
});

//prcenter 자동슬라이드

function slide(targetEl, direction) {
  let target = $(targetEl);
  let slideHeight = target.find('li').eq(0).height() + 30;

  target.animate({top: direction === 'up' ? `-${slideHeight}px` : `${slideHeight}px`}, 6000, 'linear', function() {
    if (direction === 'up') {      
			$(this).find('li').eq(0).appendTo(this);
    } else {      
			$(this).find('li').last().prependTo(this);
    }
    $(this).css({top: 0});
    slide(targetEl, direction); // 재귀 호출로 애니메이션 반복
  });
}

slide('.slideDown', 'down'); 
slide('.slideUp', 'up');


//esg 텍스트 슬라이드

let esgTextCantain = $('.esgText ul');
setInterval(() => {
  let esgText = $('.esgText ul').find('li');
  esgTextCantain.append(esgText.eq(0));
}, 3000);

