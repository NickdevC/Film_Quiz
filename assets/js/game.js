
// Declare const variables for DOM elements
const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const questionText = document.getElementById('questionText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

// Declare key variables for running game
let currentQuestion = {}