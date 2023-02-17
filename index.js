var time = new Date();
function settime(){
    time = new Date();
    var he = document.querySelector(".hours");
    if(time.getHours()<10)
    he.innerHTML="0"+time.getHours();
    else 
    he.innerHTML=time.getHours();
    var me = document.querySelector(".minutes");
    if(time.getMinutes()<10)
    me.innerHTML="0"+time.getMinutes();
    else 
    me.innerHTML=time.getMinutes();
    var se = document.querySelector(".seconds");
    if(time.getSeconds()<10)
    se.innerHTML="0"+time.getSeconds();
    else 
    se.innerHTML=time.getSeconds();
    setTimeout( function(){
        settime();}
    ,1000);
}
settime();