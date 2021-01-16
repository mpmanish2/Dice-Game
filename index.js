


// imm1=document.querySelectorAll("img")[0].setAttribute("src", "Images/dice"+(Math.floor(Math.random() *6) +1) + ".png");
var rnum1=(Math.floor(Math.random() *6) +1);
var rnum2=(Math.floor(Math.random() *6) +1);
var num="Images/dice" + rnum1 +".png";
var  img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", num);
imm2=document.querySelectorAll("img")[1].setAttribute("src", "Images/dice"+ rnum2 + ".png");
if (rnum1 > rnum2){
  document.querySelector("h1").innerHTML="Player Wins The Match";
}
else if (rnum2>rnum1) {
  document.querySelector("h1").innerHTML="Computer Wins The Match";
}

else{
    document.querySelector("h1").innerHTML="Match Is Draw";
}
