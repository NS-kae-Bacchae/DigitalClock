

let currentTime=(clockName)=>{
    let date = new Date()
    let hours, mins, secs, day, time
    hours = updateTime(date.getHours())
    mins = updateTime(date.getMinutes())
    secs = updateTime(date.getSeconds())
    day = date.getDay() // 0-6
    dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    day = dayArr[day]

    if(hours < 12 && hours!=0){
        time = hours + ":" + mins + ":" + secs + `  ${clockName}  `+ day + " AM "
    }
    else if(hours > 12){
        time = updateTime(hours-12) + ":" + mins + ":" + secs + `  ${clockName}  `+ day + " PM "
    }
    else if(hours == 12){
        time = hours + ":" + mins + ":" + secs + `  ${clockName}  `+ day + " PM "
    }
    else if(hours == 0){
        hours = 12
        time = hours + ":" + mins + ":" + secs + `  ${clockName}  `+ day + " AM "
    }
    
     
    document.getElementById("clock").innerHTML = time

}
// currentTime


setInterval(()=>{
    currentTime("OurClock")
},1000)

function updateTime(k){
  if(k < 10){
    return ("0"+k)
  }
  return (k)
  
}


// function convertDay(d){
//     switch(d){
//         case 0:
//               return "Sunday"
//         case 1:
//               return "Monday"
//         case 2:
//               return "Tuesday"
//         case 3:
//               return "Wednesday"
//         case 4:
//               return "Thrushday"
//         case 5:
//               return "Friday"
//         case 6:
//               return "Saturday"
//     }
// }























// setInterval(function (){

// },1000)


// function (){
// }
//  ()=>{
// }




