// window.onload=function(){
//   var currentImg = 1;
//   var head_icon=document.getElementById("viewbox");
//   head_icon.addEventListener('click',function(e){
//      e = e || window.event;
//      target = e.target || e.srcElement;
//      var classN = target&&target.className.toUpperCase();
//      switch (classN) {
//        case 'PREV':
//          target.setAttribute('style','animation:disappear 1s')
//          classN = classN - 1||3;
//          document.getElementsByClassName('img-list')[classN].setAttribute('style','animation:appear 1s');
//          break;
//        case 'NEXT':
//          target.setAttribute('style','animation:disappear 1s')
//          classN = classN + 1 % 4||1;
//          document.getElementsByClassName('img-list')[classN].setAttribute('style','animation:appear 1s');
//          break;
//      }
//      },false);
// };

jQuery.ready(function($){
  $("#test").bind("click",function(){/*...*/});
});