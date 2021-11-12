var mainContainer = document.getElementById('questions')
var scoreLog = document.getElementById('score-log')
var clearButton = document.getElementById('clear-btn')
var backButton = document.getElementById('back-btn')



clearButton.addEventListener("click", function() {
    scoreLog.innerHTML = ""
})

backButton.addEventListener("click", function() {
    window.location.replace("./index.html");
})