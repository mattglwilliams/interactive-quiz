var mainContainer = document.getElementById('questions')
var scoreLog = document.getElementById('score-log')
var clearButton = document.getElementById('clear-btn')
var backButton = document.getElementById('back-btn')

let overallScore = JSON.parse(localStorage.getItem('scores'));

if (overallScore !== null) {

    for (let i = 0; i < overallScore.length; i++) {
        var userEntryLi = document.createElement('li');
        userEntryLi.textContent = overallScore[i].user + " " + overallScore[i].score;
        scoreLog.appendChild(userEntryLi);
    }
}

clearButton.addEventListener("click", function() {
    scoreLog.innerHTML = ""
    localStorage.clear();
})

backButton.addEventListener("click", function() {
    window.location.replace("./index.html");
})