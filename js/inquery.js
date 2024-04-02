$("#msgForm").validate({
    rules: {
        username:  {
            required: true,
            minlength: 2
        },
        useremail: {
            required: true,
            email: true
        },
        msg:{
            required: true,
            msg:true
        },
        inquery_title:{
            required: true,
            minlength: 2
        }
    },
    messages:{
        username:{
            required : '&#42;이름은 필수입니다.',
            minlength :'&#42;최소 두 글자 이상 입력해주세요.'
        },
        useremail: {
            required: '&#42;이메일은 필수입니다.',
            email: '&#42;이메일 형식에 맞춰 입력해주세요'
        },
        msg:{
            required: '&#42;문의내용은 필수입니다.',
            msg: '&#42;문의내용을 입력해주세요',
            minlength: '&#42;최소 열 글자 이상 입력해주세요.'
        },
        inquery_title:{
            required: '&#42;제목은 필수입니다.',
            minlength: '&#42;최소 두 글자 이상 입력해주세요.'
        }
    },
    errorClass:'bad-input',
    errorElement:'span'
});
// $('.legend_h2').click(function(){
//     $('.inquery_ul').toggle();
// });

$(document).ready(function(){
    // 초기화: 화면 너비가 768px 이하일 때 아코디언 내용 숨기기
    if ($(window).width() < 768) {
      $(".accordion-content").hide();
    }
  
    // 화면 크기가 변경될 때 아코디언 상태 업데이트
    $(window).resize(function(){
      if ($(window).width() > 768) {
        $(".inquery_ul").show();
      } else {
        $(".inquery_ul").hide();
      }
    });
  
    // // 아코디언 헤더 클릭 시 토글 동작
    // $(".legend_h2").click(function(){
    //   // 클릭된 헤더의 다음 형제 요소를 토글
    //   $(this).next(".inquery_ul").slideToggle();
    //   // 다른 헤더의 내용 닫기
    //   $(".inquery_ul").not($(this).next()).slideUp();
    // });

    $('.legend_h2').click(function()
     {$('inquery_ul').slideToggle();
    });


  });