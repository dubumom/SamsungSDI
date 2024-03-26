//prcenter
// 위로
let dTop = -280;

function moveTop(){

  $('.autoSlide > .slideUp').css('margin-top',dTop);
  dTop-=2; 

  if(dTop==-280){
  $('.autoSlide > .slideUp > li:first-child').insertAfter('.autoSlide > .slideUp li:last-child');
  }else if(dTop==-560){
    dTop=-280;
  }
};

let Timer02 = setInterval(moveTop, 60);

//마우스 오버 시 멈추게 하고 아웃 시 시간을 생성하여 움직이기게
$('.autoSlide > .slideUp').hover(function(){
  clearInterval(Timer02);
},function(){
  clearInterval(Timer02);
  Timer02 = setInterval(moveTop,60);
});

//아래로 
let dBottom = 280;
function moveBottom(){

  $('.autoSlide> .slideDown').css('margin-top',dBottom);
  dBottom += 2; 
  // console.log(dBottom);

  if(dBottom == 282){
  $('.autoSlide> .slideDown > li:last-child').insertBefore('.autoSlide > .slideDown li:first-child');
  }else if(dBottom == 560){
    dBottom = 280;
  }
};

let Timer03 = setInterval(moveBottom, 60);

//마우스 오버 시 멈추게 하고 아웃 시 시간을 생성하여 움직이기게
$('.autoSlide> .slideDown').hover(function(){
  clearInterval(Timer03);
},function(){
  clearInterval(Timer03);
  Timer03 = setInterval(moveBottom,60);
});