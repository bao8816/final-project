var sql = require('mssql')
const config = {
    user: 'sa',
    password: '01239916133',
    database: 'WEB2',
    server: '4.tcp.ngrok.io',
    port: 18965,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true
    }
}
sql.connect(config).then(pool => {
    if (pool.connecting) {
      console.log('Connecting to the database...')
    }
    if (pool.connected) {
      console.log('Connected to SQL Server')
      let sqlRequest=new sql.Request();
      let sqlQuery='select ID from INFO';
      sqlRequest.query(sqlQuery,function(err,data){
          if (err) console.log(err)
          console.table(data.recordset);
      })
    }
  })