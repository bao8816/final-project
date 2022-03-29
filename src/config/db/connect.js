const sql = require('mssql')
const config = {
    user: 'sa',
    password: '01239916133',
    database: 'WEB2',
    server: '4.tcp.ngrok.io',
    port: 18965,
    // server: '192.168.1.163',
    // port: 1433,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true
    }
    // driver: "msnodesqlv8"
}
// sql.connect(config).then(pool => {
//     if (pool.connecting) {
//       console.log('Connecting to the database...')
//     }
//     if (pool.connected) {
//       console.log('Connected to SQL Server')
//       let sqlRequest=new sql.Request();
//       let sqlQuery='select ID from INFO';
//       sqlRequest.query(sqlQuery,function(err,data){
//           if (err) console.log(err)
//           console.table(data.recordset);
//       })
//     }
//   })

const conn = new sql.ConnectionPool(config).connect().then(pool => {
  if (pool.connecting) {
    console.log('Connecting to the database...')
  }
  if (pool.connected) {
    console.log('Connected to SQL Server')
  }
  return pool;
})

module.exports = {
  conn: conn,
  sql: sql
}
