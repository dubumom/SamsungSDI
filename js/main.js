
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
let prList = $('.pr_list > li').find('a');
const prImg = $('.pr_imges');
const carrer = $('.career_Recruitment');
const prLocation = $('.pr_location');
const period = $('.period');
const detail = $('.detail');


  prList.click(function(e){
    e.preventDefault();
    let a = $(this).attr('data-career');
    let b = $(this).attr('data-location');
    let c = $(this).attr('data-period');
    let d = $(this).find('img').attr('src');
    let f = $(this).attr('data-detail');
    
    console.log(d)
    carrer.text(a)
    prLocation.text(b)
    period.text(c)
    detail.text(f)

    detail.append(`<img src="${d}">`);
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