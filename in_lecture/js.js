console.log("file loaded")


const 
    container = document.querySelector("#container"),
    first = document.querySelector("#first"),
    second = document.querySelector("#second"); 


function tick (){

}

function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        timerSeconeds.innerHTML=sec--;
        if (sec < 0) sec=60; 
    }, 1000);
}