
var news_elearray=[".news-images ul li a img",".news-lists div ul li a",".news-images ul li a h4"];
var news_src = "pull/newsload.json";
var movies_elearray=[".movies-lists ul li a img",".movies-lists ul li a h4"];
var movies_src = "pull/moviesload.json"


var Load = new Class();

Load.include({
    getEle:function(elearray){
        for(var i=0;i<elearray.length;i++){
            this.$elearray.push($(elearray[i]));
        }
    },
    getData:function($elearray,attrarray,callback){
        var self = this;
        $.getJSON(this.src,function(result){
            if(result.err != "null") {
                console.error(result.err);
                return;
            }
            data = result.data;
            callback(self,$elearray,data,attrarray);
        });
    },
    loading:function(self,$elearray,data,attrarray){
        for(var i=0;i<attrarray.length;i++){
            switch (attrarray[i]) {
                case "img":
                    self.setImg($elearray[i],data[i]);
                    break;
                case "a":
                    self.setLink($elearray[i],data[i]);
                    break;
                case "text":
                    self.setText($elearray[i],data[i]);
                    break;
            }
        }
    },
    setImg:function($elelist,data){
        if(!$elelist) return;
        if(!data) return;
        for(var i=0;i<$elelist.length;i++){
            $elelist.eq(i).attr("src",data[i]);
        }
    },
    setLink:function($elelist,data){
        if(!$elelist) return;
        if(!data) return;
        for(var i=0;i<$elelist.length;i++){
            $elelist.eq(i).attr("src",data[0][i]);
            $elelist.eq(i).text(data[1][i]);
        }       
    },
    setText:function($elelist,data){
        if(!$elelist) return;
        if(!data) return;
        for(var i=0;i<$elelist.length;i++){
            $elelist.eq(i).text(data[i]);
        }
    },
    sendAjax:function(src,elearray,attrarray){
        this.src = src;
        this.getEle(elearray);
        this.getData(this.$elearray,attrarray,this.loading);
    }
});
var newsload = new Load();
var moviesload = new Load();

$(function () {
    newsload.sendAjax(news_src,news_elearray,["img","a","text"]);
    moviesload.sendAjax(movies_src,movies_elearray,["img","text"]);
});
