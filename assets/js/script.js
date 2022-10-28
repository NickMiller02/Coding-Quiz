var startScreen = document.getElementById('start-scrn');
var startButton = document.getElementById('start-btn');
var scoreButton = document.getElementById('score-btn');
var questionScreen = document.getElementById('question-box');
var questionEl = document.getElementById('question');
var timeEl = document.querySelector('.time');
var scoreEl = document.querySelector('.score');

var secondsLeft = 60;

var score = 0;

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

function startGame() {
    setTime()

    console.log('started');
    startScreen.classList.add('hidden')
    questionScreen.classList.remove('hidden');
}

function getNextQuestion() {

}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
      }, 1000);
}

