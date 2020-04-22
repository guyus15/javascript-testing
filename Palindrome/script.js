const timerContainer = document.querySelector('#container');

const timerText = document.querySelector("#timer");

const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector("#pause-btn");
const stopBtn = document.querySelector("#stop-btn");

const leftBtn = document.querySelector('#left-arrow');
const rightBtn = document.querySelector('#right-arrow');

let now = new Date();

let defaultTimerVal = 20;
let initialTimerVal = defaultTimerVal;
let timeRemainVal = 0;
let timeElapsedVal = 0;

let hasStarted = false;
let paused = false;
let timerFinished = false;

startBtn.addEventListener('click',() =>{
    now = new Date();
    hasStarted = true;
    timerFinished = false;
    startBtn.style = "color:darkgray;";
});

pauseBtn.addEventListener('click',() =>{
    if(!paused && hasStarted){
        paused = true;
        if(timerFinished ==false)
            pauseBtn.textContent ="RESUME";
        else{
            paused = false;
        }
    }
    else if(paused && !timerFinished){
        now = new Date();
        initialTimerVal = ((initialTimerVal*60) - Math.round(timeElapsedVal/1000))/60;
        paused = false;
        pauseBtn.textContent ="PAUSE";
    }
});

leftBtn.addEventListener('click',() => {
    if(!hasStarted)
        changeTimerVal(-5);
});
rightBtn.addEventListener('click', () => {
    if(!hasStarted)
        changeTimerVal(5);
});

stopBtn.addEventListener('click', ()=>{
    paused = false;
    pauseBtn.textContent = "PAUSE";
    hasStarted = false;
    timerFinished = false;
    timerContainer.style.backgroundColor = "gray";
    startBtn.style.color = "white";
    pauseBtn.style.color = "white";
    initialTimerVal = defaultTimerVal;
    timeElapsedVal = 0;
});

function changeTimerVal(changeVal){
    if(!((initialTimerVal + changeVal) < 0))
        initialTimerVal += changeVal;
}

function updateTime(){
    if(!paused && hasStarted && timeRemainVal > 1)
        timeElapsedVal = (new Date()).getTime() - now.getTime();
    else if (!hasStarted){
        let minsRemaining = Math.floor(timeRemainVal / 60);
        let secsRemaining = Math.floor(timeRemainVal % 60);
        minsRemaining = (minsRemaining<10) ? "0" + Math.floor(timeRemainVal / 60): minsRemaining;
        secsRemaining = (secsRemaining<10) ? "0" + Math.floor(timeRemainVal % 60): secsRemaining;
        timerText.textContent = `${minsRemaining}:${secsRemaining}`;
    }
    
    if(hasStarted && timeRemainVal <= 1){
        timerFinished = true;
        pauseBtn.style.color = "darkgray";
        timerContainer.style.backgroundColor = "red";
    }
    
    timeRemainVal = Math.floor((initialTimerVal*60*1000) - timeElapsedVal)/1000;
    let minsRemaining = Math.floor(timeRemainVal / 60);
    let secsRemaining = Math.floor(timeRemainVal % 60);
    minsRemaining = (minsRemaining<10) ? "0" + Math.floor(timeRemainVal / 60): minsRemaining;
    secsRemaining = (secsRemaining<10) ? "0" + Math.floor(timeRemainVal % 60): secsRemaining;
    timerText.textContent = `${minsRemaining}:${secsRemaining}`;
}

setInterval(updateTime, 1000);