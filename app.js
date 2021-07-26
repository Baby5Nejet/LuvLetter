const Koa = require('koa')

const app = new Koa()
// app为应用程序对象  中间件
// 发送http koa 接受http
// 中间件--函数



// 要把函数注册到应用对象中，才能算中间件
// app.use(async (ctx,next)=>{
//   // ctx   上下文
//   // next 下一个中间件函数
//   // 要加async和await来确保异步调用顺序的正确性
//   console.log('1','next')
//   const a = await next()
//   // await 是求值关键字
//   // await后面可以接任何表达式，不止是promise
//   // await会阻塞当时线程
// async 在函数前面加async，其中的所有的返回值，都会被包装成promise
//   console.log(a)
//   console.log('halo word')
//   // await next()   // next调用结果是promise
// })

app.use(async (ctx,next)=>{
  // next()读文件，放http请求，操作数据库，都是异步
  console.log('2','next')
  
  const axios = require('axios')
  const start = Date.now()
  const res = await axios.get('http://www.baidu.com')
  const end = Date.now()
  console.log('halo nejet',end-start)

  // return 'abc'
  // return new Promise() 也可以return promise
})

app.listen(8080)
