// button = document.querySelector("button")
// message = document.querySelector(".message")

// button.addEventListener("click",
//   ()=>{
//       message.innerHTML ="Hello"
//   }
// )

button = document.querySelectorAll("button")

let coinToss=(e)=>{
  
   let userChoice =  e.target.innerHTML
   let guessArray = ["Head", "Tails"]
   let guess = guessArray[parseInt(Math.random()*2)]
   if(guess == userChoice){
       
   }
}


for(b of button){
    b.addEventListener("click",coinToss)
}








