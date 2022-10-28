var startScreen = document.getElementById('start-scrn');
var startButton = document.getElementById('start-btn');
var scoreButton = document.getElementById('score-btn');
var questionScreen = document.getElementById('question-box');
var questionEl = document.getElementById('question');
var answer1El = document.getElementById('answer1');
var answer2El = document.getElementById('answer2');
var answer3El = document.getElementById('answer3');
var answer4El = document.getElementById('answer4');
var timeEl = document.querySelector('.time');
var scoreEl = document.querySelector('.score');

var secondsLeft = 60;
var score = 0;
var question1 = 'What can be used to store data locally';
var question2 = 'What language creates structure?';
var question3 = 'Which language creates style?';
var question4 = 'Which languages can you connect to work together';
var questions = [
    {
        question: 'What can be used to store data locally',
        answer1: 'Local Storage',
        answer2: 'A Function',
        answer3: 'A Variable',
        answer4: 'A String',
        correct: 1,
    },
    {
        question: 'What language creates structure?',
        answer1: 'JavaScript',
        answer2: 'CSS',
        answer3: 'HTML',
        answer4: 'None',
        correct: 3,
    },
    {
        question: 'Which language creates style?',
        answer1: 'Markdown',
        answer2: 'HTML',
        answer3: 'JavaScript',
        answer4: 'CSS',
        correct: 4,
    },
    {
        question: 'Which languages can you connect to work together',
        answer1: 'JavaScript',
        answer2: 'HTML',
        answer3: 'CSS',
        answer4: 'All of The Above',
        correct: 4,
    }
]

startButton.addEventListener('click', startGame);

function startGame(event) {
    setTime()

    console.log('started');
    startScreen.classList.add('hidden')
    questionScreen.classList.remove('hidden');
    setQuestion1();

    if(secondsLeft = 0) {
        return
    }
}



function setQuestion1() {
    questionEl.textContent = question1;
    answer1El.textContent = 'Local Storage';
    answer2El.textContent =  'A Function';
    answer3El.textContent = 'A Variable';
    answer4El.textContent = 'A String';
    answer1El = true;
    answer2El = false;
    answer3El = false;
    answer4El = false;
}

function setQuestion2() {
    questionEl.textContent = question2;
    answer1El.textContent = 'JavaScript';
    answer2El.textContent = 'CSS';
    answer3El.textContent = 'HTML';
    answer4El.textContent = 'None';
    answer1El = false;
    answer2El = false;
    answer3El = true;
    answer4El = false;
}

function setQuestion3() {
    questionEl.textContent = question3;
    answer1El.textContent = 'Markdown';
    answer2El.textContent =  'HTML';
    answer3El.textContent = 'JavaScript';
    answer4El.textContent = 'CSS';
    answer1El = false;
    answer2El = false;
    answer3El = true;
    answer4El = false;
}

function setQuestion4() {
    questionEl.textContent = question4;
    answer1El.textContent = 'JavaScript';
    answer2El.textContent =  'HTML';
    answer3El.textContent = 'CSS';
    answer4El.textContent = 'All of the Above';
    answer1El = false;
    answer2El = false;
    answer3El = true;
    answer4El = false;
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
      }, 1000);
}

