$(function () {
    $.getJSON("pull/load.json", function (result) {
       var $newsimg = $(".news-images ul li a img");
       var $newstitle = $(".news-images ul li a h4");
       var $newslists = $(".news-lists div ul li a");
       for(var i=0;i<$newsimg.length;i++){
            $newsimg.eq(i).attr("src",result.news_imgs[i].src);
            $newstitle.eq(i).text(result.news_imgs[i].title);
       }
       for(var i = 0;i<$newslists.length;i++){
            $newslists.eq(i).attr({
               href:result.news_school_list[i].src
            });
            $newslists.eq(i).text(result.news_school_list[i].title); 
       }
    });
});