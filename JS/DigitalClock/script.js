

let currentTime=(clockName)=>{
    let date = new Date()
    let hours, mins, secs, day 
    hours = date.getHours()
    mins = date.getMinutes()
    secs = date.getSeconds()
    day = date.getDay()
    let time = hours + ":" + mins + ":" + secs + `  ${clockName}  `+ day
    document.getElementById("clock").innerHTML = time
}
// currentTime

setInterval(()=>{
    currentTime("OurClock")
},1000)

// setInterval(function (){

// },1000)


// function (){
// }
//  ()=>{
// }




