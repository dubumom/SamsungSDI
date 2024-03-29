$("#msgForm").validate({
    rules: {
        // simple rule, converted to {required:true}
        username:  {
            required: true,
            minlength: 2
        },
        useremail: {
            required: true,
            email: true
        }
    },
    messages:{
        username:{
            required : '이름은 필수!',
            minlength :'최소 2글자 이상 입력'
        },
        useremail: {
            required: '이메일도 필수!',
            email: '이메일 형식에 맞춰 입력'
        }
    },
    errorClass:'bad-input',
    errorElement:'span'
});
