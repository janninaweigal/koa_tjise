let path = require('path')
let serverRoot = path.dirname(__dirname)
let config = {
  app: {
    name: 'koa-api',
    port: 8888,
    apiPath: '/api',
    authPath: '/api/auth',
    staticPath: '/static' 
  },
  wechat: {
    appid: 'wx19572f3cbfa41719',
    secret: '617468928c2f8eb14159bd10013f3457'
  },
  apiCode: {
    errCode: 'QM4004',
    notAuthCode: 'QM3000',
    normalCode: 'QM8888'
  },
  dir: {
    server: serverRoot,
    web: path.join('web'),
    controller: path.join(serverRoot, 'controllers'),
    schema: path.join(serverRoot, 'models/schema'),
  },
  // jwt 详细配置请点击 https://github.com/auth0/node-jsonwebtoken
  jwt: {
    secret: 'koa-api',
    options: {
      expiresIn:'2h'
    }
  }
}
module.exports = config