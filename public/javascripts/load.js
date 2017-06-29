
var news_elearray = [".news-images ul li a img", ".news-lists div ul li a", ".news-images ul li a h4"];
var news_src = "pull/newsLoad.json";
var movies_elearray = [".movies-lists ul li a img", ".movies-lists ul li a h4"];
var movies_src = "pull/moviesLoad.json";
var softs_elearray = [".softText", ".softSize span"];
var softs_src = "pull/softsLoad.json";

function View(elearray, requestSrc, attrarray) {
    this._init_(elearray, requestSrc, attrarray);
    this.currentArea = 0;
    this.end = false;
}

View.prototype = {
    constructor: View,
    _init_: function (e, a) {
        this.$elearray = this.getEle(e);
        this.attrarray = a;
    },
    getEle: function (elearray) {
        var elearr = [];
        for (var i = 0; i < elearray.length; i++) {
            elearr.push($(elearray[i]));
        }
        return elearr;
    },
    getData: function ($elearray, attrarray, callback) {
        var self = this;
        $.getJSON(this.requestSrc, function (result) {
            if (result.err != "end" && result.err != "null") {
                console.error(result.err);
                return;
            } else if (result.err == "end") {
                self.end = true;
                console.log("到头了");
            }
            data = result.data;
            callback(self, $elearray, data, attrarray);
        });
    },
    loading: function (self, $elearray, data, attrarray) {
        for (var i = 0; i < attrarray.length; i++) {
            switch (attrarray[i]) {
                case "img":
                    self.setImg($elearray[i], data[i]);
                    break;
                case "a":
                    self.setLink($elearray[i], data[i]);
                    break;
                case "text":
                    self.setText($elearray[i], data[i]);
                    break;
                case "onlyText":
                    self.setOnlyText($elearray[i], data[i]);
                    break;
            }
        }
    },
    setImg: function ($elelist, data) {
        if (!this.checkArgs(arguments, 2)) console.error("参数有误");
        for (var i = 0; i < $elelist.length; i++) {
            $elelist.eq(i).parent().attr("src", data[0][i]);
            $elelist.eq(i).attr("src", data[1][i]);
        }
    },
    setLink: function ($elelist, data) {
        if (!this.checkArgs(arguments, 2)) console.error("参数有误");
        for (var i = 0; i < $elelist.length; i++) {
            $elelist.eq(i).attr("src", data[0][i]);
            $elelist.eq(i).text(data[1][i]);
        }
    },
    setText: function ($elelist, data) {
        if (!this.checkArgs(arguments, 2)) console.error("参数有误");
        for (var i = 0; i < $elelist.length; i++) {
            $elelist.eq(i).text(data[1][i]);
            $elelist.eq(i).parent().attr("href", data[0][i]);
        }
    },
    setOnlyText: function ($elelist, data) {
        if (!this.checkArgs(arguments, 2)) console.error("参数有误");
        for (var i = 0; i < $elelist.length; i++) {
            $elelist.eq(i).text(data[i]);
        }
    },
    sendAjax: function (r) {
        this.requestSrc = r;
        this.getData(this.$elearray, this.attrarray, this.loading);
    },
    checkArgs: function (args, length) {
        return args.length === length ? true : false;
    }

}




// View.prototype.getEle = function (elearray) {

//     for (var i = 0; i < elearray.length; i++) {
//         var $elearray = [];
//         $elearray.push($(elearray[i]));
//         this.$elearray = $elearray;
//     }
// };
// View.prototype.getData = function ($elearray, attrarray, callback) {
//     var self = this;
//     $.getJSON(this.src, function (result) {
//         if (result.err != "null") {
//             console.error(result.err);
//             return;
//         }
//         data = result.data;
//         callback(self, $elearray, data, attrarray);
//     });
// };
// View.prototype.loading = function (self, $elearray, data, attrarray) {
//     for (var i = 0; i < attrarray.length; i++) {
//         switch (attrarray[i]) {
//             case "img":
//                 self.setImg($elearray[i], data[i]);
//                 break;
//             case "a":
//                 self.setLink($elearray[i], data[i]);
//                 break;
//             case "text":
//                 self.setText($elearray[i], data[i]);
//                 break;
//         }
//     }
// };
// View.prototype.setImg = function ($elelist, data) {
//     if (!checkArgs(args, 2)) return;
//     for (var i = 0; i < $elelist.length; i++) {
//         $elelist.eq(i).attr("src", data[i]);
//     }
// };
// View.prototype.setLink = function ($elelist, data) {
//     if (!checkArgs(args, 2)) return;
//     for (var i = 0; i < $elelist.length; i++) {
//         $elelist.eq(i).attr("src", data[0][i]);
//         $elelist.eq(i).text(data[1][i]);
//     }
// }
// View.prototype.setText = function ($elelist, data) {
//     if (!checkArgs(args, 2)) return;
//     for (var i = 0; i < $elelist.length; i++) {
//         $elelist.eq(i).text(data[i]);
//     }
// }
// View.prototype.sendAjax = function (src, elearray, attrarray) {
//     this.src = src;
//     this.getEle(elearray);
//     this.getData(this.$elearray, attrarray, this.loading);
// }

// View.checkArgs = function (args, length) {
//     console.error("调用方法出错，形参实参数量不一致")
//     return args.length == length ? true : false;
// }




// Load.include({
//     getEle:function(elearray){
//         for(var i=0;i<elearray.length;i++){
//             this.$elearray.push($(elearray[i]));
//         }
//     },
//     getData:function($elearray,attrarray,callback){
//         var self = this;
//         $.getJSON(this.src,function(result){
//             if(result.err != "null") {
//                 console.error(result.err);
//                 return;
//             }
//             data = result.data;
//             callback(self,$elearray,data,attrarray);
//         });
//     },
//     loading:function(self,$elearray,data,attrarray){
//         for(var i=0;i<attrarray.length;i++){
//             switch (attrarray[i]) {
//                 case "img":
//                     self.setImg($elearray[i],data[i]);
//                     break;
//                 case "a":
//                     self.setLink($elearray[i],data[i]);
//                     break;
//                 case "text":
//                     self.setText($elearray[i],data[i]);
//                     break;
//             }
//         }
//     },
//     setImg:function($elelist,data){
//         if(!$elelist) return;
//         if(!data) return;
//         for(var i=0;i<$elelist.length;i++){
//             $elelist.eq(i).attr("src",data[i]);
//         }
//     },
//     setLink:function($elelist,data){
//         if(!$elelist) return;
//         if(!data) return;
//         for(var i=0;i<$elelist.length;i++){
//             $elelist.eq(i).attr("src",data[0][i]);
//             $elelist.eq(i).text(data[1][i]);
//         }       
//     },
//     setText:function($elelist,data){
//         if(!$elelist) return;
//         if(!data) return;
//         for(var i=0;i<$elelist.length;i++){
//             $elelist.eq(i).text(data[i]);
//         }
//     },
//     sendAjax:function(src,elearray,attrarray){
//         this.src = src;
//         this.getEle(elearray);
//         this.getData(this.$elearray,attrarray,this.loading);
//     }
// });




$(function () {
    var newsLoad = new View(news_elearray, ["img", "a", "text"]);
    var moviesLoad = new View(movies_elearray, ["img", "text"]);
    var softsLoad = new View(softs_elearray, ["text", "onlyText"]);

    var makeCatalog = function (src, page, num) {
        return src + "?page=" + page + "&num=" + num;
    }
    var disenable = function (area, op) {
        selector = "#" + area + " .glyphicon-menu-" + op;
        document.querySelector(selector).className = "glyphicon glyphicon-menu-" + op + " disenable";
    }
    var enable = function (area, op) {
        selector = "#" + area + " .glyphicon-menu-" + op;
        document.querySelector(selector).className = "glyphicon glyphicon-menu-" + op;
    }

    newsLoad.sendAjax(makeCatalog(news_src, "notice", newsLoad.currentArea));
    moviesLoad.sendAjax(makeCatalog(movies_src, "lately", moviesLoad.currentArea));
    softsLoad.sendAjax(makeCatalog(softs_src, "hot", softsLoad.currentArea));

    $("span.glyphicon.glyphicon-menu-up").each(function (index, element) {
        element.onclick = function (e) {
            var area = $(e.target).parent().parent().data("area");
            switch (area) {
                case "news":
                    enable(area, "down");
                    newsLoad.end = false;
                    if (newsLoad.currentArea == 0) {
                        disenable(area, "up");
                        return false;
                    }
                    newsLoad.currentArea--;
                    console.log(makeCatalog(news_src, "notice", newsLoad.currentArea));
                    newsLoad.sendAjax(makeCatalog(news_src, "notice", newsLoad.currentArea));
                    break;
                case "movies":
                    enable(area, "down");
                    moviesLoad.end = false;
                    if (moviesLoad.currentArea == 0) {
                        disenable(area, "up");
                        return false;
                    }
                    moviesLoad.currentArea--;
                    moviesLoad.sendAjax(makeCatalog(movies_src, "lately", moviesLoad.currentArea));
                    break;
                case "softs":
                    enable(area, "down");
                    softsLoad.end = false;
                    if (softsLoad.currentArea == 0) {
                        disenable(area, "up");
                        return false;
                    }
                    softsLoad.currentArea--;
                    softsLoad.sendAjax(makeCatalog(softs_src, "hot", softsLoad.currentArea));
                    break;
            }
            return false;
        }
    });
    $("span.glyphicon.glyphicon-menu-down").each(function (index, element) {
        element.onclick = function (e) {
            var area = $(e.target).parent().parent().data("area");
            switch (area) {
                case "news":
                    enable(area, "up");
                    if (newsLoad.end) {
                        disenable(area, "down");
                        return false;
                    }
                    newsLoad.currentArea++;
                    newsLoad.sendAjax(makeCatalog(news_src, "notice", newsLoad.currentArea));
                    break;
                case "movies":
                    enable(area, "up");
                    if (moviesLoad.end) {
                        disenable(area, "down");
                        return false;
                    }
                    moviesLoad.currentArea++;
                    moviesLoad.sendAjax(makeCatalog(movies_src, "lately", moviesLoad.currentArea));
                    break;
                case "softs":
                    enable(area, "up");
                    if (softsLoad.end) {
                        disenable(area, "down");
                        return false;
                    }
                    softsLoad.currentArea++;
                    softsLoad.sendAjax(makeCatalog(softs_src, "hot", softsLoad.currentArea));
                    break;
            }
            return false;
        }
    });

    var data = new Date();
    var dataStr = "";
    dataStr += data.getFullYear() + " 年 ";
    dataStr += data.getMonth() + " 月 ";
    dataStr += data.getDate() + " 日 ";
    //从校内服务器获取教学周，暂时固定代替
    dataStr += "教学周:第9周"
    document.querySelector(".time").innerText = dataStr;

    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    var wechatImg = new Image();
    wechatImg.src = "images/wechat.jpg"

    $(".wechat")[0].onmousemove = function () {
        canvas.style.display = "block"
        context.drawImage(wechatImg, 0, 0, 200, 200);

    }
    $(".wechat")[0].onmouseout = function () {
        canvas.style.display = "none"
    }
    sessionStorage.setItem("42home","http://42.neusoft.edu.cn/nwww/");
    

});
