
var news_imgs_elearry=[".news-images ul li a img",".news-lists div ul li a"];
var news_src = "pull/load.json";


var Load = new Class();
Load.include({
    src:'',
    $elearray:[],
    getEle:function(elearray){
        for(var i=0;i<elearray.length;i++){
            this.$elearray.push($(elearray[i]));
        }
        return this.$elearray;
    },
    getData:function($elearray,attrarray,callback){
        var self = this;
        $.getJSON(this.src,function(result){
            if(result.err != "null") console.error(result.err);
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
    sendAjax:function(src,elearray,attrarray){
        this.src = src;
        this.getEle(elearray);
        this.getData(this.$elearray,attrarray,this.loading);
    }
});
var loadnews = new Load();

$(function () {
    loadnews.sendAjax(news_src,news_imgs_elearry,["img","a"]);
});
