const recruitSev = require('../models/recruit')

module.exports = {
  'POST /api/auth/wechat/recruit/findBy': async (ctx, next) => {
    let examid = ctx.request.body['id0']
    let idcard = ctx.request.body['id1']

    if (new Date().getTime() <  new Date('2018-05-08 10:00:00')) {
      ctx.rest('QM0000', '系统暂未开放...', null)
      return
    }

    if (!examid || !idcard) {
      ctx.rest('QM0000', T.findMsgByCode('QM0000'), null)
    } else {
      let info = await Redis.getHm(ctx.authData.data)
      if ((Number(info.count)) > 5) ctx.rest('QM0000', '你已查询6次,请2小时后再来！', null)
      else {
        Redis.hmset(ctx.authData.data, "count", (Number(info.count)) + 1)
        let obj = await Redis.getHm((idcard + examid))
        if (!obj) {
          obj = await recruitSev.findBy(examid, idcard)
          if (obj) {
            Redis.hmset((idcard + examid), 'recruit', JSON.stringify(obj))
            ctx.rest('QM8888', T.findMsgByCode('QM8888'), obj)
          } else ctx.rest('QM4000', 'Sorry, 你未被录取~', null)
        } else ctx.rest('QM8888', T.findMsgByCode('QM8888'), JSON.parse(obj['recruit']))
      }
    }
  },
  'POST /api/recruit/create': async (ctx, next) => {
    let examid = ctx.request.body['id0']
    let idcard = ctx.request.body['id1']
    let name = ctx.request.body['id2']
    let college = ctx.request.body['id3']
    let admin = ctx.request.body['id4']
    if (admin === '' || admin != 'husiyu') {
      ctx.rest('QM0000', T.findMsgByCode('QM0000'), null)
    } else if (!examid || !idcard || !name || !college) {
      ctx.rest('QM0000', T.findMsgByCode('QM0000'), null)
    } else {
      let result = recruitSev.create(examid, idcard, name, college)
      if (result) ctx.rest('QM8888', '创建成功...', null)
      else ctx.rest('QM0000', '创建失败...', null)
    }
  }
}