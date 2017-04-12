// var http = require('http');
// http.get('http://www.wapage.com/site-58db8825b41f98027ced4a69/index.html',(res)=> {
//     console.log('success');
// }).on('error',(e)=>{
//     console.error('got error : ${e.message}');
// })
var http = require('http');
var uuid = require('node-uuid');
var sha1 = require('sha1');
var options = {
    port:80,
    hostname:'www.wapage.com',
    method:'GET',
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, sdch",
        "Accept-Language": "zh-CN,zh;q=0.8,en-GB;q=0.6,en;q=0.4"

    }
}   
var count = 0; // 刷了多少次
setInterval(function () {
    var datenum = (Math.random()*90+1000)*10;
    console.log(datenum);
    setTimeout(flashpage(),datenum);

}, 100000);

function flashpage(){
    count = count + 1;
    var now = new Date();
    var newTS = Math.round(now.getTime() / 1000);
    var sid = uuid.v4();
    var useragent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36";
    var platform ="Win32";
    var mineType = ["application/x-ppapi-widevine-cdm","application/x-shockwave-flash","application/futuresplash","application/pdf"];
    var H = sha1(useragent+platform+"['application/x-ppapi-widevine-cdm','application/x-shockwave-flash','application/futuresplash','application/pdf']"+newTS).slice(0,16);
    console.log(H+" | "+newTS);
    options.path = '/tracker/i?e=pv&page=%E7%88%B8%E5%A6%88%E5%A5%BD%E5%90%96&dtm='+newTS+'&tid=184247&vp=1918x613&ds=1901x4090&vid=1&duid='+H+'&p=web&tv=js-0.11.2&fp=2765629517&aid=site-58eb87bd61e7c8d118b47a81%3Aindex&lang=zh-CN&cs=UTF-8&tz=Asia%2FShanghai&refr=http%3A%2F%2Fwww.wapage.com%2Fcms%2F&f_pdf=1&f_qt=0&f_realp=0&f_wma=0&f_dir=0&f_fla=1&f_java=0&f_gears=0&f_ag=0&res=1920x1080&cd=24&cookie=1&url=http%3A%2F%2Fwww.wapage.com%2Fsite-58eb87bd61e7c8d118b47a81%2Findex.html';
    var req = http.request(options,(res)=>{
        res.setEncoding('utf8');
        res.on('data',(data)=>{
        });
        console.log(res.headers);
    });
    req.on('error',(e)=>{
        console.error(e.message);
    });
    req.end(function(){
            console.log(count);

    });
}