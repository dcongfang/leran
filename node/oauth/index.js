const path = require('path');
const Koa = require('koa'); //node 开发框架
// 静态资源  动态资源(数据库)
const server = require('koa-static');
const axios = require('axios');
const clientID ='026a085333282cf4bc3c';
const clientSecret = 'd365c5d32afecf92354e51dcad387586cd14518b';
// 从前端思维切到后端思维
const oauth = async ctx => {
  // 可以await 数据库
  // await 请求
  // console.log(ctx.request.query.code, '----------------------');
  // const str = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('等了三秒钟');
  //   }, 3000)
  // });
  // console.log(str)
  const requestToken = ctx.request.query.code;
  const token_url = 'https://github.com/login/oauth/access_token?' +
  `client_id=${clientID}&` +
  `client_secret=${clientSecret}&` +
  `code=${requestToken}`
  const tokenResponse = await axios({
    method: 'post',
    url: token_url,
    headers: {
      accept: 'application/json'
    }
  });
  const accessToken = tokenResponse.data.access_token;
  console.log(accessToken);
  const result = await axios({
    method: 'get',
    url: 'https://api.github.com/user',
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  })
  const avatar_url = result.data.avatar_url;
  
  ctx.response.redirect(`/welcome.html?avatar_url=${avatar_url}`);
}
const route = require('koa-route');
const main = server(path.join(__dirname, '/public'));
//public 让用户可以访问到
// 路由 网站是提供资源的, 
const app = new Koa();  //后端应用
app.use(main);
app.use(route.get('/oauth/redirect', oauth));
app.listen(8080);