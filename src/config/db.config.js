let config = {
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    database: 'tjise',
    username: 'root',
    password: 'Tjise@2018...',
    define: {
      freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库表名同步charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      timestamps: false
    }
  }
}

module.exports = config