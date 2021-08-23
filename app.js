const Koa = require ('koa')
const Router = require('koa-router') 
// koa-router在npm中有说明文档
const app = new Koa()
const router = new Router()

app.use(async(ctx,next)=>{
  // ctx -> request
  console.log(ctx.path)
  console.log(ctx.method)
  if(ctx.path === '/classic/latest' && ctx.method === 'GET'){
    // Koa不可以return，只可以放在ctx.body中处理
    // koa会自动吧response中的content-type设置成application/json
    // 这种路径path的if else就是一种最原始的路由
    ctx.body = {key:'classic'}
  }
})
app.listen(8081)