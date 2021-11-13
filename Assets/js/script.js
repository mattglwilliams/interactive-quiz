// setting the quiz questions as objects within an array
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

// setting the DOM elements
const timer = document.getElementById('timer');
const questionContainer = document.getElementById('questions-container');
const questionsElement = document.getElementById('questions');
const startBtn = document.getElementById('start-btn');

// setting the global variables
// this is to store the users score. They get 1 point per correct answer
let userScore = 0;
// this is the starting time
let timeLeft = 50;
// this is the amount of time knocked off for an incorrect answer
let timePenalty = 5;
// this is the index the questions will start on
let currentQuestionIndex = 0;

// event listener on the start button
startBtn.addEventListener("click", function runTimer() {
    // function to start the timer, to reduce it by 1000 miliseconds
    let timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = timeLeft + " seconds remaning";
        } else {
            clearInterval(timerInterval);
            timer.textContent = "Times up"
            // once the time is up, run the endOfGame function
            endOfGame();
        }
    }, 1000);
    // when the start button is clicked, clear the questions container inner HTML and ...
    questionsElement.innerHTML = "";
    // ... run the getQuestions function
    getQuestions();
});

// this function will get and display the relevent question
function getQuestions() {
    for (let i = 0; i < questions.length; i++) {
        // variable to hold the question of the current index in the array
        let displayQuestion = questions[currentQuestionIndex].question;
        // variable to hold the choices of the current index in the array
        let displayChoices = questions[currentQuestionIndex].choices;
        // adding the current question to the question container
        questionsElement.textContent = displayQuestion;
        // creating a ul to hold the choices list
        let choicesUl = document.createElement('ul');
        // a for each function to create an li for each choice
        displayChoices.forEach(function (choice) {
            let choicesLi = document.createElement('li')
            choicesLi.textContent = choice;
            // appending each li to the ul
            choicesUl.appendChild(choicesLi)
            // adding an event listener on each li, which on click, will run the checkAnswer function
            choicesLi.addEventListener('click', checkAnswer)
        })
        // appending the ul that holds the choices list to the questions container
        questionsElement.appendChild(choicesUl)
    }
}

// function to check the choice and if it is correct or incorrect
function checkAnswer(event) {
    let selectedAnswer = event.target
    // creating a new p tag that will tell the user if their chosen answer is correct or incorrect
    let answerMessage = document.createElement("p")
    // giving the new p tag a class so we can style it
    answerMessage.setAttribute("class", "answer-message")
    // if the answer they selected is correct then...
    if (selectedAnswer.textContent === questions[currentQuestionIndex].answer) {
        console.log("Correct");
        // add a point to their socre and ...
        userScore++;
        // ... let them know it was correct
        answerMessage.textContent = "Correct!"
        // however, if it was wrong then...
    } else {
        console.log("Incorrect")
        // reduce the time left by 5 seconds and ...
        timeLeft = timeLeft - timePenalty;
        // ... let them know it was incorrect
        answerMessage.textContent = "Incorrect!"
    }

    // once they have selected a choice, move onto the next object(question) in the array
    currentQuestionIndex++

    // if we have no more questions left, run the endOfGameFunction, however ...
    if (currentQuestionIndex >= questions.length) {
        endOfGame();
        // ... if we do still have questions left, get the next question
    } else {
        getQuestions();
    }
    // appending the message that tells them if their choice was correct or incorrect, to the questions container
    questionsElement.appendChild(answerMessage)
}

// function to run when either they have answered all questions or the time is up
function endOfGame() {
    // firstly, clear the questions container elements
    questionsElement.innerHTML = ""
    timeLeft = 0;
    // creating all the new elements needed to let them know the game has ended, what score theyy got, and
    // allow them to log their highscore
    let gameOverHeading = document.createElement("h1")
    let gameOverContent = document.createElement("p")
    let initialsLabel = document.createElement("label")
    let initialsInput = document.createElement("input")
    let initialsSubmitButton = document.createElement("button")

    // setting the text of the newly created elements
    gameOverHeading.textContent = "Game Over!"
    gameOverContent.textContent = "You scored " + userScore + "."
    initialsLabel.textContent = " Enter your initials to save your score: "
    initialsInput.textContent = ""
    initialsSubmitButton.textContent = "Save your score"

    // appending the new elements to the questions container
    questionsElement.appendChild(gameOverHeading);
    questionsElement.appendChild(gameOverContent);
    questionsElement.appendChild(initialsLabel);
    questionsElement.appendChild(initialsInput);
    questionsElement.appendChild(initialsSubmitButton);

    // event listener on the submit button
    initialsSubmitButton.addEventListener("click", function (event) {
        // ffirstly, prevent the default behaivour
        event.preventDefault();
        // variable to get the initials that the user entered into the initials input
        let initials = initialsInput.value;

        // an object to store both their initials and their score
        let initialsAndScore = {
            user: initials,
            score: userScore
        }

        // setting the local array that will hold each entry
        if (localStorage.getItem('scores') === null) {
            localStorage.setItem('scores', '[]');
        }

        // converting the json string into a js object the browser can read
        let overallScore = JSON.parse(localStorage.getItem('scores'));

        // pushing the objects to the overallScore variable
        overallScore.push(initialsAndScore);

        // setting the loca storage item
        localStorage.setItem('scores', JSON.stringify(overallScore));

        // once they have submitted, they're taken to the highscores page
        window.location.replace("./HighScores.html");
    });
};