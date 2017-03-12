var express = require('express');
var router = express.Router();
var FileClass = require('mylibs/class/fileclass.js');
var file = new FileClass;
router.get('/newsload.json',function(req,res,next) {
    file.readfile('./data_json/news.json',(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json"
        });
        res.end(data);
    });
});
router.get('/moviesload.json',function(req,res,next) {
    file.readfile('./data_json/movies.json',(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json"
        });
        res.end(data);
    });
});

module.exports = router;