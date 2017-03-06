var comnutil = function ajax(subUrl){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open(get,subUrl+Math.random(),true);
    xmlhttp.send();
}
