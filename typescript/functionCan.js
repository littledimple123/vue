function add(x, y) {
    console.log(x + y);
}
add(1, 2);
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(buildName('herry', 'marry'));
//console.log(buildName('herry'));   //报错
//console.log(buildName('herry','marry','herry'));   //报错
//可选参数 使用？标识
function buildName1(firstName, lastName) {
    return firstName + "" + lastName;
}
console.log(buildName1('herry', 'marry'));
console.log(buildName1('herry'));
//console.log(buildName1('herry','marry','herry'));  //报错
//默认参数
function disCount(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    var total = price * rate;
    console.log("合计：" + total);
}
disCount(5);
disCount(5, 0.3);
//剩余参数
function addNumber() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    console.log("总数为：" + total);
}
addNumber(1, 2, 3, 4, 5);
addNumber(10, 20, 30);
//匿名函数
var res = function () {
    return 'hello world';
};
console.log(res());
//匿名函数自调
(function () {
    var a = 'hello typeScript';
    console.log(a);
})();
//构造函数
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
//Lambda函数 （箭头函数）
var func00 = function (x) {
    if (typeof x == 'number') {
        console.log(x + '是一个数字类型');
    }
    else if (typeof x == 'string') {
        console.log(x + '是一个字符串类型');
    }
};
func00(5);
func00("hello");
