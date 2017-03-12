var express = require('express');
var router = express.Router();
var FileClass = require('mylibs/class/fileclass.js');
var file = new FileClass;
router.get('/load.json',function(req,res,next) {
    file.readfile('./data.json',(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json"
        });
        res.end(data);
    });
});
module.exports = router;