var startScreen = document.getElementById('start-scrn');
var startButton = document.getElementById('start-btn');
var scoreButton = document.getElementById('score-btn');
var answerBox = document.getElementById('answer-box');
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

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
      }, 1000);
}

startButton.addEventListener('click', startGame);

function startGame(event) {
    setTime()

    console.log('started');
    startScreen.classList.add('hidden')
    questionScreen.classList.remove('hidden');
    setQuestion1();

    answerBox.addEventListener('click', function({
        if(true) {
            setQuestion2();
        }
    }));
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

    if (answer1El.addEventListener('click') === true) {
        score++;
    } else {
        secondsLeft = secondsLeft - 15;
    }
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



