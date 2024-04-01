// banner slide

let bannerWrapper = $('.bannerWrapper'),
    slideContainer = bannerWrapper.find('.slidecontainer'),
    slides = slideContainer.find('li'),
    pager = bannerWrapper.find('.pager'),
    currentIdx = 0;
let slideWidth = bannerWrapper.outerWidth();
slideContainer.css({width:bannerWrapper.outerWidth()*slides.length + 'px'})

function moveSlide(num){
  let moveAmount = -num * slideWidth;  
  slideContainer.animate({transform:`translateX(${moveAmount})px`});
  currentIdx = num;
  updateSlide();
}

function updateSlide(){
  pager.find('a').removeClass('bannerActive');
  pager.find('a').eq(currentIdx).addClass('bannerActive').animate([{wdith:'100%'},3000]);

  slides.removeClass('bannerActive');
  slides.eq(currentIdx).addClass('bannerActive');
}
updateSlide();

pager.find('a').click(function(e){
  e.preventDefault();
  let targetIdx = $(this).index();
  moveSlide(targetIdx)
});

$(window).resize(function(){
  slideWidth = bannerWrapper.outerWidth();
  slideContainer.css({width:slideWidth*slides.length + 'px'});
  moveSlide(currentIdx);
});

let timer = undefined;
function autoSlide(){
  if(timer == undefined){
    timer = setInterval(function(){
      let nextIdx = (currentIdx +1) % slides.length;
      moveSlide(nextIdx);
    },5000)
  }
};

$('.bannerPause').click(function(){
  clearInterval(timer);
  timer = undefined;
  $(this).css({display:'none'});
  $('.bannerPlay').css({display:'block'});
});

$('.bannerPlay').click(function(){
  $(this).css({display:'none'});
  $('.bannerPause').css({display:'block'});
  autoSlide();
});
autoSlide();

// business animation

let business = $('.business').offset().top;

$(window).scroll(function(){
  if($(this).scrollTop() > business - 500){
    $('.business').addClass('lineActive');
  }else{
    $('.business').removeClass('lineActive');
  }
  if(business == 0) {
    clearInterval(timer);
  }
});

// career click event
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

//prcenter
function slide(targetEl, direction) {
  console.log(direction);
  let target = $(targetEl);
  let slideHeight = target.find('li').eq(0).height() + 30;

  if(direction == 'up' || direction =='down'){
    target.stop().animate({top: direction === 'up' ? `-${slideHeight}px` : `${slideHeight}px`}, 6000, 'linear', function() {
      if (direction === 'up') {      
        $(this).find('li').eq(0).appendTo(this);
      } else {      
        $(this).find('li').last().prependTo(this);
      }
      $(this).css({top: 0});
      slide(targetEl, direction);
    });
  } else if(direction == 'left' || direction =='right'){
    target.stop().animate({left: direction === 'left' ? `-${slideHeight}px` : `${slideHeight}px`}, 6000, 'linear', function() {
      if (direction === 'left') {      
        $(this).find('li').eq(0).appendTo(this);
      } else {      
        $(this).find('li').last().prependTo(this);
      }
      $(this).css({left: 0});
      slide(targetEl, direction);
    });
  }
}

$(window).on('resize', function() {
  if ($(window).width() <= 768) {
    slide('.slideDown', 'right'); 
    slide('.slideUp', 'left'); 
  } else {
    slide('.slideDown', 'down'); 
    slide('.slideUp', 'up'); 
  }
});
$(window).trigger('resize');

for (let i = 1; i <= 8; i++) {
  $('.pr_img' + i).click(function(e) {
      e.preventDefault();
      $('.prcenter_txt').find('div').removeClass('prcenterActive');
      $('.txt' + i).addClass('prcenterActive');
  });
}

//esg text slide

let esgTextCantain = $('.esgText ul');
setInterval(() => {
  let esgText = $('.esgText ul').find('li');
  esgTextCantain.append(esgText.eq(0));
}, 3000);
