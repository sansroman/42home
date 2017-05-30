var Dao = require('./Dao');
module.exports = function (req, res, next) {
	if (!req.session)
		res.redirect("/login");
	else {
		console.log("Oauth");	
	}
};