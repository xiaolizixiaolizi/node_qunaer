// 连接数据库
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const { DB_URL } = require('../params')
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

module.exports = new Promise((resolve, reject) => {
  // 连接数据库异步代码
  mongoose.set(`useFindAndModify`, false)
  mongoose.connect(DB_URL, options)
  mongoose.connection.on('open', err => {
    if (err) {
      return reject(err)
    }
    console.log('数据库连接成功')
    resolve()
  })
})
