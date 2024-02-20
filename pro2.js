let Counter = document.querySelector("#Count")
let incrementBtn = document.querySelector("#incrementBtn")
let decrementBtn = document.querySelector("#decrementBtn")
let resetBtn = document.querySelector("#resetBtn")
let body = document.querySelector("body")

let initialValue = 0
incrementBtn.addEventListener("click",function(){
    initialValue ++
    Counter.innerHTML = initialValue 
    if(initialValue ==1){
        body.style.backgroundColor="blue"
       
       }
       else if(initialValue==2){
        body.style.backgroundColor="yellow"
       
       }
       else if(initialValue==3){
        body.style.backgroundColor="green"
       
       }
       
       else if(initialValue==4){
        body.style.backgroundColor="cyan"
 
       }
       else if(initialValue ==5){
        body.style.backgroundColor="yellow"
       
       }
       
       else if(initialValue ==6){
        body.style.backgroundColor="black"
       
       }
       else if(initialValue ==7){
        body.style.backgroundColor="orange"
       
       }
       else if(initialValue ==8){
        body.style.backgroundColor="gray"
       
       }
       else if(initialValue ==9){
        body.style.backgroundColor="red"
       
       }
       else if(initialValue ==10){
        body.style.backgroundColor="pink"
       
       }
       else{
        body.style.backgroundColor="white"

       }
       
})


decrementBtn.addEventListener("click",function(){
    initialValue --
    Counter.innerHTML = initialValue 

if(initialValue ==1){
    body.style.backgroundColor="blue"
   
   }
   else if(initialValue==2){
    body.style.backgroundColor="yellow"
   
   }
   else if(initialValue==3){
    body.style.backgroundColor="green"
   
   }
   
   else if(initialValue==4){
    body.style.backgroundColor="cyan"

   }
   else if(initialValue ==5){
    body.style.backgroundColor="yellow"
   
   }
   
   else if(initialValue ==6){
    body.style.backgroundColor="black"
   
   }
   else if(initialValue ==7){
    body.style.backgroundColor="orange"
   
   }
   else if(initialValue ==8){
    body.style.backgroundColor="gray"
   
   }
   else if(initialValue ==9){
    body.style.backgroundColor="red"
   
   }
   else if(initialValue ==10){
    body.style.backgroundColor="pink"
   
   }
   else{
    body.style.backgroundColor="white"

   }
})