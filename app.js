
const timerDiv = document.querySelector('.timer');
const startBtn = document.querySelector('.timer__controls--start');
const resetBtn = document.querySelector('.timer__controls--reset');
const controlsDiv = document.querySelector('.timer__controls')
const pauseBtn = document.createElement('button');
const setTimeBtn = controlsDiv.querySelector('.timer__controls--set');


console.log(timerDiv)
let seconds = 0;
let interval = null;
pauseBtn.innerHTML = `<span class="material-symbols-rounded">
pause
</span>`
pauseBtn.className = 'invisible';
resetBtn.before(pauseBtn);



function setTime(){
    let inputValue = prompt('Please enter minutes',0);
    if(inputValue <= 0){
        alert('The time can\'t be less than 1s' );
        inputValue = prompt('Please enter minutes',0);
        seconds = inputValue*60;
        updateInterface(seconds);
    }else{ 
       seconds = inputValue*60;
        updateInterface(seconds);
           
    }
 setTimeBtn.classList.add('invisible');
}
setTimeBtn.addEventListener('click', setTime);

function updateInterface(seconds){
    let secs = seconds % 60;
    let mins = Math.floor((seconds - secs) /60);
    let hours = Math.floor((seconds - (mins *60))/3600);
   

    if(hours < 10){hours = '0' + hours};
    if(mins < 10){mins = '0' + mins};
    if(secs < 10){secs = '0' + secs};

    timerDiv.innerHTML =  `
    ${hours} : ${mins} : ${secs}
    `
    if(seconds === 0 ){
        // alert('Time is up!');
        stopTimer();
    }
}


function startBtnHandler(){
    // if(seconds === 0){
    //     clearInterval(interval);
    // } 
    
    if (interval){
        return;
    }    
     interval = setInterval(timerHandler, 1000);
    
    pauseBtn.classList.remove('invisible');
    startBtn.classList.add('invisible')
};
startBtn.addEventListener('click', startBtnHandler);

function timerHandler(){
    seconds--;
    updateInterface(seconds);
}

function pauseBtnHandler(){
   stopTimer();
   pauseBtn.classList.add('invisible');
   startBtn.classList.remove('invisible'); 
   interval = null;   

 }
pauseBtn.addEventListener('click',pauseBtnHandler);

function stopTimer(){
    clearInterval(interval);
}

 function resetBtnHandler(){
    timerDiv.innerHTML = `00:00:00`;
     stopTimer(); 
    pauseBtn.classList.add('invisible');
    startBtn.classList.remove('invisible');
    setTimeBtn.classList.remove('invisible');
    interval = null;
 }
 resetBtn.addEventListener('click',resetBtnHandler)