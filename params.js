const env = process.env.NODE_ENV || 'development'
// 默认连接线上数据库
let db_url = 'mongodb://qunaer_owner:1991112230li@127.0.0.1:27017/qunaer'
// 如果线上数据库不通process.env.NODE_ENV==undefided 就连接本地development开发模式的数据库。
if (env == 'development') {
  db_url = 'mongodb://localhost:27017/qunaer'
}
module.exports = {
  DB_URL: db_url,
  jwt_key: 'qunaer_node_secret'
}