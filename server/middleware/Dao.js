var mysql = require('mysql');
var conf = require('../conf/db')
var os = require('os')


var sql = {
    query: 'SELECT password,power FROM user WHERE username=?'
}
var pool = mysql.createPool(conf.mysql);
module.exports = {
    Oauth(req, res, next) {
        pool.getConnection((err, connection) => {
            console.log(req.body)
            connection.query({
                sql: sql.query,
                timeout: 4000,
                values: [req.body.username]
            }, (error, results, fields) => {        
                if (results)
                    res.json(results)
                else
                    console.error(error);    
                connection.release();
            })
        })

    }
}