/*jshint sub:true*/
// Inspirationa and support was found in the Youtube tutorials created by 
// Brian Design and Web Dev Simplified. Some changes have been made to ensure
// that the code is suitable for my project's needs.

// Declare const variables for DOM elements
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScores = 5;

finalScore.innerText = mostRecentScore;

/**
 * Ensure that the user cannot 'save' their details
 * without inputting a value in the form box
 */
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
});

/**
 * Saves the user's final score locally and pushes this
 * through to be displayed on the highscores.html page
 */
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('https://nickdevc.github.io/Film_Quiz/index.html');
};