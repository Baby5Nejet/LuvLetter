const Koa = require('koa')

const app = new Koa()


app.use((ctx,next)=>{
  console.log(1)
  next()
  console.log(2)
})
app.use(async (ctx,next)=>{
  // next()读文件，放http请求，操作数据库，都是异步
  console.log(3)
  await next()
  // const axios = require('axios')
  // const start = Date.now()
  // const res = await axios.get('http://www.baidu.com')
  // const end = Date.now()
  console.log(4)

})
app.use(async (ctx,next)=>{
  console.log(5)
  next()
  console.log(6)
})
app.listen(8081)
135624