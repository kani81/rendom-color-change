var boxColor=document.getElementById("box-color");
console.log(boxColor);

function colorChange(){
    var value=boxColor.value;
    console.log(value);
   

    boxColor.style.backgroundcolor=value;
    boxColor.style.fontsize="50px";

}
//random color change//
var para=document.getElementsByClassName("para");
console.log(para);
var a=["red","green","yellow","orange","blue"];
var number=(Math.floor(Math.random()*a.length));
console.log(number);
document.body.style.backgroundColor=a[number];