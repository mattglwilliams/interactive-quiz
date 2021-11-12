var mainContainer = document.getElementById('questions')
var scoreLog = document.getElementById('score-log')
var clearButton = document.getElementById('clear-btn')
var backButton = document.getElementById('back-btn')

var finalScoreEntry = localStorage.getItem('scores')

if (finalScoreEntry !== null) {
    for (var i = 0; i < finalScoreEntry.length; i++) {
        var userEntryLi = document.createElement('li');
        userEntryLi.textContent = finalScoreEntry;
        scoreLog.appendChild(userEntryLi);
    }
}

clearButton.addEventListener("click", function() {
    scoreLog.innerHTML = ""
})

backButton.addEventListener("click", function() {
    window.location.replace("./index.html");
})