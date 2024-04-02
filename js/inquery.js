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
            required : '이름은 필수입니다.',
            minlength :'최소 두 글자 이상 입력해주세요.'
        },
        useremail: {
            required: '이메일은 필수입니다.',
            email: '이메일 형식에 맞춰 입력해주세요'
        },
        msg:{
            required: '문의내용은 필수입니다.',
            msg: '문의내용을 입력해주세요',
            minlength: '최소 열 글자 이상 입력해주세요.'
        },
        inquery_title:{
            required: '제목은 필수입니다.',
            minlength: '최소 두 글자 이상 입력해주세요.'
        }
    },
    errorClass:'bad-input',
    errorElement:'span'
});
