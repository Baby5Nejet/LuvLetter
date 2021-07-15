const { comprehensionExpression } = require('jscodeshift')
const Koa = require('koa')

const app = new Koa()
// app为应用程序对象  中间件
// 发送http koa 接受http
// 中间件--函数



// 要把函数注册到应用对象中，才能算中间件
app.use(async (ctx,next)=>{
  // ctx   上下文
  // next 下一个中间件函数
  // 要加async和await来确保异步调用顺序的正确性
  console.log('1','next')
  const a = next()
  console.log(a)
  console.log('halo word')
  // await next()   // next调用结果是promise
})

app.use(()=>{
  console.log('2','next')
  console.log('halo nejet')
  // return 'abc'
  // return new Promise() 也可以return promise
})

app.listen(8080)
