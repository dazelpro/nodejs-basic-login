const config = require('../configs/database');

let mysql      = require('mysql');
let pool       = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    login(req,res){
        res.render("login",{
            // expressFlash: req.flash('message')
        });
    },
    loginAuth(req,res){
        // let username = req.body.username;
        // let password = req.body.password;
        // if (username && password) {
        //     pool.getConnection(function(err, connection) {
        //         if (err) throw err;
        //         connection.query(
        //             `SELECT * FROM table_user WHERE user_email = ? AND user_password = SHA2(?,224)`
        //         , [username, password],function (error, results) {
        //             if (error) throw error;  
        //             if (results.length > 0) {
        //                 if (results[0].user_status == 1) {
        //                     req.session.loggedin = true;
        //                     req.session.userid = results[0].user_id;
        //                     req.session.username = results[0].user_name;
        //                     res.redirect('/app');
        //                 } else {
        //                     req.flash('message', 'Your account is banned !');
        //                     res.redirect('/login');
        //                 }
        //             } else {
        //                 req.flash('message', 'Account not found');
        //                 res.redirect('/login');
        //             }
        //         });
        //         connection.release();
        //     })
        // } else {
        //     res.redirect('/login');
        //     res.end();
        // }
    }
}