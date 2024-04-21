let btn = document.querySelector("#btn");
let para = document.querySelector("#para");
var icon = document.querySelector("i");
var like = document.querySelector("#like");
var card = document.querySelector("#card");
let flag = 0;
let click = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
         btn.innerText = "Friends now ";
    btn.style.color = "white";
    para.innerText = "Haribol! we are friends now";
    para.style.color = "green";
    flag = 1;
    }
    else{
        btn.innerText = "Add Friends";
    btn.style.color = "white";
    para.innerText = "Hare Krishna!";
    para.style.color = "rgb(255, 51, 0)";
    flag = 0;
    }

    like.addEventListener("click", function(){

  
    if(click == 0 )
    {
        
        icon.style.transform = 'translate(-50%, -50%) scale(1)';
icon.style.opacity = 1;
setTimeout(function(){
   icon.style.opacity = 0; 
}, 1000)

setTimeout(function(){
    icon.style.transform = 'translate(-50%, -50%) scale(0)';
}, 2000)
    like.innerHTML = "Liked";
        click = 1;
    }

    else{
        like.innerHTML = "Like";
        click = 0;
    }
})
})