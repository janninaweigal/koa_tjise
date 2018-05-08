let jwt = require('../lib/jwt')
let axios = require('axios')

function getAuth (appid, secret, js_code) {
  return axios.get('https://api.weixin.qq.com/sns/jscode2session', {
    params: {
      appid,
      secret,
      js_code,
      grant_type: 'authorization_code'
    }
  })
}

module.exports = {
  'POST /api/wechat/login': async (ctx, next) => {
    let jscode = ctx.request.body['jscode']

    if (!jscode) ctx.rest('QM0000', T.findMsgByCode('QM0000'), null)
    else {
      let res = await getAuth(C.wechat.appid, C.wechat.secret, jscode)
      if (res.data['errcode']) ctx.rest('QM0000', T.findMsgByCode('QM0000'), null)
      else {
        let oldInfo = await Redis.getHm(res.data['openid'])
        if (!oldInfo) {
          let token = await jwt.signJwt(res.data['openid'])
          Redis.hmset(res.data['openid'], "count", 0)
          Redis.hmset(res.data['openid'], "token", token)
          Redis.hmset(res.data['openid'], "time", (await jwt.verifyJwt(token)).exp)
          ctx.rest('QM8888', T.findMsgByCode('QM8888'), { token: token })
        } else {
          try {
            let oldToken = await jwt.verifyJwt(oldInfo.token)
            ctx.rest('QM8888', T.findMsgByCode('QM8888'), { token: oldInfo.token })
          } catch (e) {
            let token = await jwt.signJwt(res.data['openid'])
            Redis.hmset(res.data['openid'], "count", 0)
            Redis.hmset(res.data['openid'], "token", token)
            Redis.hmset(res.data['openid'], "time", (await jwt.verifyJwt(token)).exp)
            ctx.rest('QM8888', T.findMsgByCode('QM8888'), { token: token })
          }
        }
      }
    }
  }
}