var mysql = require('mysql');
var conf = require('../conf/db')

function check(password, Rpassword) {
    console.log("password:" + password + "\nRpassword:" + Rpassword)
    return password == Rpassword
}
var sql = {
    query: 'SELECT password,power FROM user WHERE username=?'
}
var pool = mysql.createPool(conf.mysql);
module.exports = {
    Oauth(req, res) {
        pool.getConnection((err, connection) => {
            connection.query({
                sql: sql.query,
                timeout: 4000,
                values: [req.body.username]
            }, (error, results, fields) => {
                if (results.length!==0) {
                    if (check(req.body.password, results[0].password)) {
                        req.session.Oauth = results[0].power;
                        res.json({
                            err: false,
                            info:'sussess'
                        })
                    } else {
                        res.json({
                            err: '403',
                            info: 'Account password error'
                        })
                    }
                } else {
                    res.json({
                        err: '403',
                        info:'The account does not exist'
                    })
                }

                connection.release();
            })
        });

    }
}