const indexModel = require('../model/indexModel')
const cityModel = require('../model/cityModel')
const detailModel = require('../model/detailModel')
class Qunaer {
  // 获取首页数据
  async findHome(ctx) {
    ctx.body = await indexModel.findOne({})
  }
  // 获取city
  async findCity(ctx) {
    ctx.body = await cityModel.findOne({})
  }
  // 获取详情
  async findDetail(ctx) {
    ctx.body = await detailModel.findOne({})
  }
}
module.exports = new Qunaer()