const env = process.env.NODE_ENV || 'development'
console.log(process.env.NODE_ENV, 'env')
// 默认连接线上数据库
// var db_url = 'mongodb://qunaer_owner:1991112230li@127.0.0.1:27017/?authSource=qunaer&ext.ssh.server=47.96.137.151:22000&ext.ssh.username=node_admin&ext.ssh.password=123456789Li='
let db_url = 'mongodb://qunaer_owner:1991112230li@47.96.137.151:27017/qunaer?authSource=admin'
// 如果线上数据库不通process.env.NODE_ENV==undefided 就连接本地development开发模式的数据库。
if (env == 'development') {
  console.log('bbbbbbbbbbbb')
  db_url = 'mongodb://localhost:27017/qunaer'
}
module.exports = {
  DB_URL: db_url,
  jwt_key: 'qunaer_node_secret'
}