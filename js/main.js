//prcenter
// 위로
let dTop = -230;

function moveTop(){

  $('.design_film> .des_film01').css('margin-top',dTop);
  dTop-=2; 

  if(dTop==-232){
  $('.design_film> .des_film01> li:first-child').insertAfter('.design_film> .des_film01 li:last-child');
  }else if(dTop==-460){
    dTop=-230;
  }
};

let Timer02 = setInterval(moveTop, 60);

//마우스 오버 시 멈추게 하고 아웃 시 시간을 생성하여 움직이기게
$('.design_film> .des_film01').hover(function(){
  clearInterval(Timer02);
},function(){
  clearInterval(Timer02);
  Timer02 = setInterval(moveTop,60);
});

//아래로 

let dBottom = -230;

function moveBottom(){

  $('.design_film> .des_film02').css('margin-bottom',dBottom);
  dBottom -= 2; 
  // console.log(dBottom);

  if(dBottom == -232){
  $('.design_film> .des_film02> li:last-child').insertBefore('.design_film> .des_film02 li:first-child');
  }else if(dBottom == -460){
    dBottom = -230;
  }
};

let Timer03 = setInterval(moveBottom, 60);

//마우스 오버 시 멈추게 하고 아웃 시 시간을 생성하여 움직이기게
$('.design_film> .des_film02').hover(function(){
  clearInterval(Timer03);
},function(){
  clearInterval(Timer03);
  Timer03 = setInterval(moveBottom,60);
});