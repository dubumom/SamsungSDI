//quickmenu
$(document).ready(function(){
  var currentPosition = parseInt($(".quick").css("top"));
  $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    $(".quick").stop().animate({"top":position+currentPosition+"px"},1000);
  });
});

$(document).ready(function() {
  // mapbtn을 클릭했을 때
  $('#mapbtn').click(function(e) 
  { e.preventDefault(); // 링크 이벤트를 방지하여 페이지 이동을 막음
    $('.mapmodal').fadeIn(); // mapmodal을 나타나게 함
  });

  // mapmodal_close 버튼을 클릭했을 때
  $('.mapmodal_close').click(function() {
    $('.mapmodal').fadeOut(); // mapmodal을 사라지게 함
  });
});