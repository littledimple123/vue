function msg():string{
    return 'hello world'
}

function caller(){
    var a = msg()
    console.log(a);
    
}
caller()