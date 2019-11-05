// 连接数据库
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const { DB_URL } = require('../params')
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
let maxConnectTimes = 0

module.exports= () => {
  return new Promise((resolve, reject) => {
    mongoose.set(`useFindAndModify`, false)
    mongoose.connect(DB_URL, options)
    mongoose.connection.on('disconnected', () => {
      maxConnectTimes++
      if (maxConnectTimes <= 5) {
        mongoose.connect(DB_URL, options)
      } else {
        reject()
        throw new Error('数据库尝试多次链接失败')
      }
    })
    mongoose.connection.on('err', err => {
      maxConnectTimes++
      if (maxConnectTimes <= 5) {
        mongoose.connect(DB_URL, options)
      } else {
        reject()
        throw new Error('数据库尝试多次链接失败')
      }
    })
    mongoose.connection.once('open', () => {
      resolve()
      console.log('mongoDB connected success')
    })
  })

}




// module.exports = new Promise((resolve, reject) => {
//   // 连接数据库异步代码
//   mongoose.set(`useFindAndModify`, false)
//   mongoose.connect(DB_URL, options)
//   mongoose.connection.on('open', err => {
//     if (err) {
//       return reject(err)
//     }
//     console.log('数据库连接成功')
//     resolve()
//   })
// })
