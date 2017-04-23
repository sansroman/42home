var express = require('express');
var url = require('url');
var router = express.Router();
var FileClass = require('mylibs/class/fileclass.js');
var file = new FileClass;
router.get('/newsload.json',function(req,res,next) {
    src = "./data_json/news-"+req.query.page+"-"+req.query.num+".json"
    
    file.readfile(src,(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json"
        });
        res.end(data);
    });
});
router.get('/moviesload.json',function(req,res,next) {
    src = "./data_json/movies-"+req.query.page+"-"+req.query.num+".json"
    file.readfile(src,(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json"
        });
        res.end(data);
    });
});
router.get('/softsload.json',function(req,res,next) {
    src = "./data_json/softs-"+req.query.page+"-"+req.query.num+".json"
    file.readfile(src,(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json"
        });
        res.end(data);
    });
});

module.exports = router;