const Koa = require ('koa')
// const Router = require('koa-router') 
// koa-router在npm中有说明文档
// app作为顶节点的文件，尽量是他去引用别人，不是别人去引用他
// 上层调用下层，下层不适合调用上层

const app = new Koa()
// const router = new Router()
const book = require('./api/v1/book')
const classic = require('./api/v1/classic')

// router.get方法，两个par，第一个是指明路由对应地址，第二个是传入函数，当koarouter监听到用户访问的是par中地址时候，自动调用这个函数,实际上第二个函数是中间件，也有ctx和next
// 路由-主题-拆分-文件、
// 数据类型-主题划分

// eg:
// router.get('/classic/latest',(ctx,next)=>{
//   ctx.body = 'halo word'
// })

// get查询数据
// post新增一个数据的操作
// put更新数据的操作
// delete删除数据的操作




// app.use(router.routes())
app.use(book.routes())
app.use(classic.routes())

// module.exports = {
//   router
// }

app.listen(8081)