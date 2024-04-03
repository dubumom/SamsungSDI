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

    // 초기화: 화면 너비가 768px 이하일 때 아코디언 내용 숨기기
    if ($(window).width() < 768) {
      $(".accordion-content").hide();
    }

let legend = $('.legend_inquery');
    iqcontent = $('.inquery_ul');
    legend.click(function(){
        legend.toggleClass('open');
        iqcontent.slideToggle();


    });