const http = require('http')
    //这个核心模块，能够帮我们解析 url地址，从而拿到 pathname, query
const urlmodel = require('url')
console.log(urlmodel)
const server = http.createServer()
server.on('request', function(req, res) {
    const { pathname: url, query } = urlmodel.parse(req.url, true)
        //方法调用时也可以传参
    var data = {
        name: '张三',
        age: 15,
        gender: '男'
    }
    if (url === '/getscript') {
        //拼接一个合法的js脚本，这里拼接一个方法的调用
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

server.listen(3000, function() {
    console.log('server listen at http://127.0.0.1:3000')
})