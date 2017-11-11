window.onload=function(){
    var allchoice=document.getElementsByClassName("choice");
    for(var i=0;i<allchoice.length;i++){
        allchoice[i].style.display="None";
    }            
}
var index = 1;
function Check() {
    if (!(index < 3 & index > 0)) {
        index = index + 2;
        index = index % 3;
    }
    document.getElementById(index).style.display = "block";
    if (index == 1) {
        document.getElementById(index + 1).style.display = "None";
    }
    else {
        document.getElementById(index - 1).style.display = "None";
    }
}
function add() {
    index++;
    Check();
}
function sub() {
    index--;
    Check();
}
function LOG() {
    document.getElementById("log").style.display = "block";
}
function QU() {
    document.getElementById("log").style.display = "none";
}
function change(e) {
    if (document.getElementById(e.id).value == "" || undefined || null) {
        if (e.id == "one") {
            document.getElementsByClassName("choice")[0].style.backgroundPosition = 0 + "px " + (-19) + "px";
        }
        else if (e.id == "two") {
            document.getElementsByClassName("choice")[1].style.backgroundPosition = 0 + "px " + (-19) + "px";
        }
        else if (e.id == "three") {
            document.getElementsByClassName("choice")[2].style.backgroundPosition = 0 + "px " + (-19) + "px";
        }
    }
    else {
        if (e.id == "one") {
            document.getElementsByClassName("choice")[0].style.display = "block";
            document.getElementsByClassName("choice")[0].style.backgroundPosition = 0 + "px " + 0 + "px";
        }
        else if (e.id == "two") {
            document.getElementsByClassName("choice")[1].style.display = "block";
            document.getElementsByClassName("choice")[1].style.backgroundPosition = 0 + "px " + 0 + "px";
        }
        else if (e.id == "three"){
            document.getElementsByClassName("choice")[2].style.display = "block";
            if (document.getElementById("two").value == document.getElementById("three").value) {
                document.getElementsByClassName("choice")[2].style.backgroundPosition = 0 + "px " + 0 + "px";
            }
        }
    }
}