console.log("this is our clock")

clock();
function clock(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMin = currentTime.getMinutes();
    let currentSec = currentTime.getSeconds();

    currentMin=(currentMin<10?"0":"")+currentMin;
    currentSec=(currentSec<10?"0":"")+currentSec;
    
    currentHour=(currentHour>12)? currentHour-12:currentHour;
    currentHour=(currentHour==0)?12:currentHour;
    let timeOfDay = (currentHour < 11 ) ? "AM" : "PM" ;
    
    let date=document.getElementById('clock');
    let clockStr=currentHour + ":" + currentMin + ":"+currentSec+","+timeOfDay;
    date.innerHTML=clockStr;
    
}
setInterval(clock,1000);