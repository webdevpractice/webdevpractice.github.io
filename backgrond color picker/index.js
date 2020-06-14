
var btn=document.getElementById("button");
var span=document.getElementById("span");
var s=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
var randomString="";

function generateRandomString(){
    randomString="#";
    for(var i=0;i<6;i++){
        var randomNumber=Math.floor(Math.random()*16);
        randomString+=s[randomNumber];
    }
}

btn.addEventListener("click",function(){
  generateRandomString();
  span.innerText=randomString;
  document.body.style.backgroundColor=randomString;
});