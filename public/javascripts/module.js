var dataList ={
    areaList : {
        newArea:{

        },
        movieArea:{

        },
        softArea:{

        }

    },
    getView:function(){
        getNews();
    },
    init:function(){
        getView();
        updata();
        updata();
        updata();    
    },
    updata:function(){
       
    },
    getNews:function(){
        var imgList = [];
        var imgObj = {};
        var body = document.querySelector(".news-images ul")
        for(var i=0;i<3;i++){
            var targer = body.querySelector("li")[i];
            imgObj.link = targer.querySelector("a");
            imgObj.imgSrc =  link.querySelector("img");
            imgObj.text = targer.querySelector("a h4");
            imgList.push(imgObj);
        }
    },
    geMovies:function(){
         var imgList = [];
         var imgObj ={};
         var body = document.querySelector(".movies ul");
    }
}
var ImgData = {
    linklist:[],
    imgList:[],
    text:[]
}
var textData ={
    
}

