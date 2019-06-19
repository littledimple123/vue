 function validatePhone(value){
   
    if (value.length ==0 || value==undefined || value=='') {
        //return new Error('请输入手机号');
        console.log('请输入手机号')
    } else if (!(/^1[345789]\d{9}$/.test(value))) {
       // return new Error('请输入正确的手机号');
        console.log('请输入正确的手机号')
    } else {
       // return true
        console.log('成功')
    }
}


export default validatePhone