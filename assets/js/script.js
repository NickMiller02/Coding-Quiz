// Start Screen variables
var startScreen = document.querySelector(".start-scrn");
var startBtn = document.querySelector("#start-btn");

// Question Screen Variables
var questionScreen = document.querySelector(".question-scrn");
var optionBtns = document.querySelectorAll(".option");
var questionDisplay = document.querySelector(".questions")

//Score and Timer
var scoreDisplay = document.querySelector(".score");
var timerDisplay = document.querySelector("#timer");

//High Score form Screen
var hsFormScreen = document.querySelector(".form");
var input = document.querySelector(".user-input");
var submitBtn = document.querySelector(".submit");
var highscoreSection = document.querySelector(".high-scores");


//Logical variables
var currentIndex = 0;
var score = 0;
var timer = 60;
var maxHighScores = 10;
var highScores = 0;

//Setting up usable questions
var questions = [{

    question: 'What can be used to store data locally',
    options: ['Local Storage', 'A Function', 'A Variable', 'A String'],
    answer: "Local Storage"
    },
    {
    question: 'What language creates structure?',
    options: ['JavaScript', 'CSS', 'HTML', 'None'],
    answer: "HTML"
    },
    {
    question: 'Which language creates style?',
    options: ['JavaScript', 'CSS', 'HTML', 'Markdown'],
    answer: "CSS"
    },
    {
    question: 'Which languages can you connect to work together',
    options: ['JavaScript', 'CSS', 'HTML', 'All of the choices'],
    answer: 'All of the choices'
    },
    {
    question: 'What does CSS stand for?',
    options: ['Compact Style Script', 'Cascading Style Sheet', 'Computer Screen Sheet', 'Complex Screen Style'],
    answer: "Cascading Style Sheet" 
    },
];

//Start Button
startBtn.addEventListener('click', function() {
    //Switches Active Screen
    startScreen.classList.remove("active");
    questionScreen.classList.add("active");

    //Sets the score to 0
    scoreDisplay.textContent = score;

    //Starts the Questions
    startTimer();
    showQuestions();
});

function showQuestions() {
    //Displays the current question
    questionDisplay.textContent = questions[currentIndex].question;

    //Options ready for user input
    optionBtns.forEach((btn, index) => {
        btn.textContent = questions[currentIndex].options[index];

        btn.addEventListener('click', function() {
            if (btn.textContent === questions[currentIndex].answer) {
                score++;
                scoreDisplay.textContent = score;
                nextQuestion();
            } else {
                timer -= 15;
            };
        });
    });
};

function nextQuestion() {
    if (currentIndex === (questions.length -1)) {
        initialForm();
    } else {
        currentIndex++;

        questionDisplay.textContent = questions[currentIndex].question;

        optionBtns.forEach((btn, index) => {
            btn.textContent = questions[currentIndex].options[index];
        });
    };
};

function startTimer() {
    timerDisplay.textContent = timer;

    var timerCount = setInterval(function() {
        timer--;
        timerDisplay.textContent = timer;

        if (timer <= 0) {
            clearInterval(timerCount);
            initialForm();
        };
    },1000);
};
