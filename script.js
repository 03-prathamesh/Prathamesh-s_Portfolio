const hams=document.getElementById("ham");
const chan=document.querySelector(".homes");
const t=document.getElementById("top");
var click=false;
const b=document.querySelector("body");
const home=document.querySelector(".hms");
hams.addEventListener("click",()=>{
     
      
     if(click==false){ 
       chan.style.display="flex";
       click=true;
     }
     else{
        chan.style.display="none";
        click=false;
     }

});



t.addEventListener("click",()=>{

      home.style.src="#hm";

});