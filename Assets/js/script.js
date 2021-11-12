let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['1. <javascript>', '2. <js>', '3. <link>', '4. <script>'],
        answer: '4. <script>'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        choices: ['1. The <head>', '2. The <body>', '3. In the stylesheet', '4. All of the above are fine'],
        answer: '2. The <body>'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: ['1. <script src="xxx.js">', '2. <script href="xxx.js">', '3. <script name="xxx.js">', '4. <script file="xxx.js">'],
        answer: '1. <script src="xxx.js">'
    },
    {
        question: 'How do you create a function in JavaScript?',
        choices: ['1. function : myFunction()', '2. function myFunction()', '3. function = myFunction()', '4. function ; myFunction()'],
        answer: '2. function myFunction()'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        choices: ['1. if i = 5 then', '2. if i === 5', '3. if i = 5', '4. if (i === 5)'],
        answer: '4. if (i === 5)'
    },
    {
        question: 'How does a FOR loop start?',
        choices: ['1. for (i = 0; i <= 5)', '2. for (i <= 5; i++)', '3. for i = 1 to 5', '4. for (i = 0; i <= 5; i++)'],
        answer: '4. for (i = 0; i <= 5; i++)'
    },
    {
        question: 'How can you add a comment in a JavaScript??',
        choices: ['1. <!--This is a comment-->', '2. "This is a comment"', '3. //This is a comment', '4. <//This is a comment//>'],
        answer: '3. //This is a comment'
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        choices: ['1. var colors = "red", "green", "blue"', '2. var colors = ["red, "green", "blue"]', '3. var colors = ("red, "green", "blue")', '4. var colors = ["red"], ["green"], ["blue"]'],
        answer: '2. var colors = ["red, "green", "blue"]'
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        choices: ['1. Math.round(7.25)', '2. round(7.25)', '3. Math.rnd(7.25)', '4. rnd(7.25)'],
        answer: '1. Math.round(7.25)'
    },
    {
        question: 'How do you declare a JavaScript variable?',
        choices: ['1. var = carName;', '2. var carName;', '3. variable = carName;', '4. var(carName);'],
        answer: '2. var carName;'
    },
];

const timer = document.getElementById('timer');
const questionWrapper = document.getElementById('questions-container');
const questionsElement = document.getElementById('questions');
const startBtn = document.getElementById('start-btn');

let userScore = 0;
let timeLeft = 50;
let timePenalty = 5;
let currentQuestionIndex = 0;
let scores = [];

startBtn.addEventListener("click", function runTimer () {
    var timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = timeLeft + " seconds remaning";
        } else {
            clearInterval(timerInterval);
            timer.textContent = "Times up"
            endOfGame();
        }
    }, 1000);
    getQuestions();
});

function getQuestions () {
    questionsElement.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var displayQuestion = questions[currentQuestionIndex].question;
        var displayChoices = questions[currentQuestionIndex].choices;
        questionsElement.textContent = displayQuestion;
        var choicesUl = document.createElement('ul');
    displayChoices.forEach(function (choice) {
            var choicesLi = document.createElement('li')
            choicesLi.textContent = choice;
            choicesUl.appendChild(choicesLi)
            choicesLi.addEventListener('click', checkAnswer)
        })
            questionsElement.appendChild(choicesUl)
    }
}