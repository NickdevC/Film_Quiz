/*jshint sub:true*/
// Inspirationa and support was found in the Youtube tutorials created by 
// Brian Design and Web Dev Simplified. Some changes have been made to ensure
// that the code is suitable for my project's needs.

// Declare const variables for high score elements
const highScoresList = document.getElementById('highScoresList');
const highScoresFinal = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML =
highScoresFinal.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('');