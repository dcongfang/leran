const Koa = require('./lib/application.js')
const app = new Koa();

app.listen(3000, () => {
  console.log('server is running 3000')
})