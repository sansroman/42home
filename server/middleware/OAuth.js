var OAuth = function (req,res,next) {
    var session_id = req.cookies;
    // if (session_id == "")
    //     res.status(403).send('Permission denied!');
    // else
        next();    
}
module.exports = OAuth;