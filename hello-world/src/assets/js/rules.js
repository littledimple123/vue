//验证手机号
var validatePhone = (value) => {    //手机号验证规则
    if (value.length ==0 || value==undefined) {
        return new Error('请输入手机号');
    } else if (!(/^1[345789]\d{9}$/.test(value))) {
        return new Error('请输入正确的手机号');
    } else {
        return true
    }
};

//验证身份证
var validateCode = (value) => {    //身份证验证规则
    var phoneReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (value === '') {
        return new Error('请输入身份证号');
    } else if (!phoneReg.test(value)) {
        return new Error('请输入正确的身份证号!');
    } else {
       return true
    }
};

//邮箱验证

var validMail = (value)=>{
    //邮箱正则表达式
    var regexMail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(value == ''){
        return new Error('请输入邮箱')
    }else if(!regexMail.test(value)){
        return new Error('请输入正确的邮箱!');
    }else{
        return true
    }
}

