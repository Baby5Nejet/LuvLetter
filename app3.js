const Koa = require('koa')

const app = new Koa()


app.use(async (ctx,next)=>{
  console.log(1)
  next()
  const r = ctx.r
  console.log(2,r)
})

app.use(async (ctx,next)=>{
  // next()读文件，放http请求，操作数据库，都是异步
  // ctx是上下文，每个中间件都会有ctx,可以利用ctx.r实现相互之间的传参
  console.log('3','next')
  ctx.r = 'xxxxxxx'
  const axios = require('axios')
  const res = await axios.get('http://www.baidu.com')
  
  await next()
  console.log('4')

  // return 'abc'
  // return new Promise() 也可以return promise
})

app.listen(8082)
135624