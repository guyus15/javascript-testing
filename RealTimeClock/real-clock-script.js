const h1 = document.querySelector("h1");

const realClockBtn = document.querySelector("#real-clock-btn");
const timerBtn = document.querySelector("#timer-btn");

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function tick(){
    const now = new Date();

    h1.textContent = now.getHours().toString() + ":" + 
    now.getMinutes().toString() + ":" + now.getSeconds().toString();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style = "transform:rotate("+secondsDegrees.toString()+"deg);";

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minuteHand.style = "transform:rotate("+minutesDegrees.toString()+"deg);";
    minuteHand.firstChild.textContent = minutes + " mins";
    minuteHand.firstChild.style = "font-family:Arial; font-size:11px; text-align:center;";

    let hours = now.getHours();
    let hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style = "transform:rotate("+hoursDegrees.toString()+"deg);";;
    hourHand.firstChild.textContent = hours + " hour";
    hourHand.firstChild.style= "font-family:Arial; font-size:11px; text-align:center;";
}



setInterval(tick,1000);
