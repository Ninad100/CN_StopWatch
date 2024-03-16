

//All the elements which are required to make responsive Stopwatch Web Design are fetched below.
const startbtn = document.getElementById('start-btn'); //Button for the start of stopwatch
const stopBtn = document.getElementById('stop-btn'); //Button for the end of stopwatch
const resetBtn = document.getElementById('reset-btn'); // Button to reset the stopwatch
const hourDiv = document.getElementById('hour'); //Div section which will update hours data
const minuteDiv = document.getElementById('minute'); //Div Section which will update minutes data
const secondDiv = document.getElementById('second'); //Div Section which will update second data

//This variable will keep the track of Current value of second
let CurrSeconds = 0; 
//This variable will keep the track of Current value of Minute
let currMin = 0;
//This variable will keep the track of Current value of hour
let currHour = 0;

//Initially the stopwatch counter is initialized to 0.
hourDiv.textContent = '00';
minuteDiv.textContent = '00';
secondDiv.textContent = '00';

//These three variables are temporary used to pad the extra zeros when the time is between 0-9.
let tempSecond,tempHour, tempMin;

//Event listener for start button. On clicking this the stopwatch will start
startbtn.addEventListener('click',()=>{

    //After writing code I found one bug that the multiple clicks on start button was initiating mulitple start session.
    //Hence, after clicking start button I have disabled it.

    startbtn.disabled = true;

    //Here the actually stopwatch function begins with the timer.
    const timer = setInterval(()=>{
        CurrSeconds++;

        //Once timer is started I added the event for stop button. On clicking stop button the timer function will be cleared.
        //Upon clicking stop, I have enabled the start button again.
        stopBtn.addEventListener('click',()=>{
            clearInterval(timer)
            startbtn.disabled = false;
            
        });

        //This event is related to the reset button. The counter is resetted and the start button enabled again.
        resetBtn.addEventListener('click',()=>{
            clearInterval(timer);
            startbtn.disabled = false;
            
            CurrSeconds = 0;
            currMin = 0;
            currHour = 0;

            hourDiv.textContent = '00';
            minuteDiv.textContent = '00';
            secondDiv.textContent = '00';
        })

        
        //This is for the updating seconds section of the clock.
        if (CurrSeconds < 10){
            //For number between 0-9 I have padded extra 0 to get nice look
            tempSecond = '0' + CurrSeconds.toString();
            secondDiv.textContent = tempSecond
        }
        if (CurrSeconds==60){
            //once timer reach 60 then minute will be increased and seconds counter will be reset to 0. Same logic is used for Minutes as well below.
            CurrSeconds = 0;
            secondDiv.textContent = '00';
            currMin++;
            if (currMin<10){
                tempMin = '0' + currMin.toString();
                minuteDiv.textContent = tempMin;

            }
            if (currMin==60){
                currMin = 0;
                minuteDiv.textContent = '00';
                currHour++;
                if (currHour<10){
                    tempHour = '0'+ currHour.toString();
                    hourDiv.textContent = tempHour;
                }
            }
            else if(currMin>9 && currMin<60){
                minuteDiv.textContent = currMin;
            }
            
        }
        else if(CurrSeconds>9 && CurrSeconds<60){
            secondDiv.textContent = CurrSeconds;
        }

    
    },1000)
});
