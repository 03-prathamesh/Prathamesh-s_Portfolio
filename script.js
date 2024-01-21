const hams=document.getElementById("ham");
const chan=document.querySelector(".homes");

var click=false;
hams.addEventListener("click",()=>{
     
      
     if(click===false){ 
       chan.style.display="flex";
       click=true;
     }
     else{
        chan.style.display="none";
        click=false;
     }

});