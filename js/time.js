window.onload=function(){var nowtime= new Date();
var showtimeYear =nowtime.getFullYear();
var showtimeMonth =nowtime.getMonth();
var showtimeDay =nowtime.getDate();
document.getElementById("times").innerHTML="今天是:"+showtimeYear+"年"+(showtimeMonth+1)+"月"+showtimeDay+"日";} 