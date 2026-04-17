const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const easyBtn = document.querySelector('#easyGame');
const hardBtn = document.querySelector('#hardGame');


const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster",
    "Technology has revolutionizes the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace.",
];


// Game State
let currentText = '';  // random statement from the above 3 statements
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;
let wpm = 0;


// Step-1 Dataload  and DisplayContent and one func to call both of them
webLoad();

function webLoad() {
    onLoad();
    displayContent();
}


function onLoad() {
    var temp = sessionStorage.getItem('getHighWpm');
    if(temp != null){
        bestWPM = parseInt(temp);
    }
    else{
        bestWPM = 0;
    }
}

function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}


//step-2 Start btn and time decrease and eventlistner 


function startGame(){
    timeLeft = 60;
    startBtn.disabled = true;
    // continueGame();



    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.setAttribute('placeholder','Now the Game is Started , Type Fasttt !!!');
    

    
    currentText = testTexts[Math.floor(Math.random()*testTexts.length)];
    textDisplay.textContent = currentText;

    timerInterval = setInterval(function(){
        timeLeft--;
        if(timeLeft <= 0){
           endGame();
        }
        displayContent();
    },1000);
}


function updateStatus() {
    var typed = typingArea.value;   //gives user input value
    const minute = Math.floor(Date.now()-startTime) /1000/60;
    const word = typed.trim().split(/\s+/).filter(w => w.length >0);
    wpm = minute > 0 ? Math.floor(word.length / minute): 0;   // ternary operator
    wpmDisplay.textContent = wpm;
    // console.log(wpm);
    
    var currentScore = 0;
    for(let i = 0; i < currentText.length; i++) {
        if(currentText[i]===typed[i])
        {
            currentScore++;
        }
    }
    const accuracy = (typed.length>0) ? Math.floor(currentScore / typed.length *100) : 0;
    accuracyDisplay.textContent = accuracy;


    if(typed === currentText && timeLeft > 10)
    {
    currentText = currentText+ " " + testTexts[Math.floor(Math.random()*testTexts.length)];
    textDisplay.textContent = currentText;
    }

}


function endGame() {
    clearInterval(timerInterval)
    timeLeft = 60;
    startBtn.disabled = false;
    typingArea.disabled = true;

    if(wpm > bestWPM)
    {
        bestWPM = wpm;
        sessionStorage.setItem('getHighWpm',bestWPM);
        // bestWPMDisplay.textContent = bestWPM;
        alert(`Scored high score than the previous one`);
    }
    else{
        alert("Your Score is :"+ wpm);
    }
    wpm = 0;
    wpmDisplay.textContent = wpm;
    typingArea.textContent = true;
    typingArea.value = "";
    displayContent();
}


function typeControl() {
    if(startTime == null)
    {
       startTime = Date.now();
    }
    updateStatus();
    Highlights();
    // console.log(startTime);
}


function Highlights() {
    var typed = typingArea.value;
    var highlightText = '';  // empty string to display color

    for (let i = 0; i < currentText.length; i++) {
        if(i < typed.length)    // we have to give color to those where user have typed only
        {
            if(currentText[i] === typed[i])
            {
                highlightText += `<span class="correct">${currentText[i]}</span>`  
            }
            else{
                highlightText += `<span class="incorrect">${currentText[i]}</span>`  
            }
        }
        else{
            highlightText += currentText[i]   // remaining to type by the user
        }
    }
    textDisplay.innerHTML = highlightText;
}





startBtn.addEventListener('click', startGame);
easyBtn.addEventListener('click', easyGame);
hardBtn.addEventListener('click', hardGame);

typingArea.addEventListener('input' , typeControl);