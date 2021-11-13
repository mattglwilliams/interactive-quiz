// setting the DOM elements
var mainContainer = document.getElementById('questions')
var scoreLog = document.getElementById('score-log')
var clearButton = document.getElementById('clear-btn')
var backButton = document.getElementById('back-btn')

// getting the initials and scores from local storage
let overallScore = JSON.parse(localStorage.getItem('scores'));

// if there are initials and scores stored locally, then...
if (overallScore !== null) {

    // looping through the locally stores initials and scores and creating a list item for each
    for (let i = 0; i < overallScore.length; i++) {
        var userEntryLi = document.createElement('li');
        userEntryLi.textContent = overallScore[i].user + " " + overallScore[i].score;
        // appenging the newly created list items to the scores UL
        scoreLog.appendChild(userEntryLi);
    }
}

// event listener button to reset the highscores
clearButton.addEventListener("click", function() {
    // clears all the HTML in the scores UL
    scoreLog.innerHTML = ""
    // clears the local storage
    localStorage.clear();
})

// event listener button to take the user back to the quiz
backButton.addEventListener("click", function() {
    window.location.replace("./index.html");
})