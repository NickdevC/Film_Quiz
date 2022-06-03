
// Declare const variables for DOM elements
const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const questionText = document.getElementById('questionText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

// Declare key variables for running game
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionsCounter = 0;
let availableQuestions = [];

// Declare array of questions and answers
let questions = [
    {
        question: "In which film did Ellen Ripley first appear?",
        choice1: 'Casino Royale',
        choice2: 'Alien',
        choice3: 'Titanic',
        choice4: 'Forest Gump',
        answer: 2,
    },
    {
        question: "Finish the famous movie line: 'We\'re gonna need a bigger _____'!",
        choice1: 'boat',
        choice2: 'mortgage',
        choice3: 'car',
        choice4: 'gun',
        answer: 1,
    },
    {
        question: "In Toy Story, what is the name of Andy's twisted neighbour?",
        choice1: 'Jim',
        choice2: 'Mark',
        choice3: 'Sid',
        choice4: 'Zac',
        answer: 3,
    },
    {
        question: "'No luck catching them swans then?' is a quote from what film?",
        choice1: 'Bridget Jones',
        choice2: 'Hot Fuzz',
        choice3: 'Austin Powers',
        choice4: 'American Pie',
        answer: 2,
    },
    {
        question: "In Harry Potter, what is the name of the street where the Dursleys live?",
        choice1: 'Privet Drive',
        choice2: 'Privet Road',
        choice3: 'Privet Street',
        choice4: 'Privet Avenue',
        answer: 1,
    },
    {
        question: "In The Lion King, what is the name of Simba's uncle?",
        choice1: 'Jafar',
        choice2: 'Mufassa',
        choice3: 'Scratch',
        choice4: 'Scar',
        answer: 4,
    },
    {
        question: "Willy Wonka gave out ___ tickets hidden in choclate bars.",
        choice1: '4',
        choice2: '8',
        choice3: '5',
        choice4: '6',
        answer: 3,
    },
    {
        question: "Where does Paddington keep his marmalade sandwiches?",
        choice1: 'In his coat',
        choice2: 'Under his hat',
        choice3: 'In his suitcase',
        choice4: 'Under his arm',
        answer: 2,
    },
    {
        question: "Will Smith and Martin Lawrence play cops in which film?",
        choice1: 'Independence Day',
        choice2: 'Men In Black',
        choice3: 'Bad Boys',
        choice4: "Big Momma's House",
        answer: 3,
    },
    {
        question: "In the film 'The Ring', what item is cursed with the an evil spirit?",
        choice1: 'A book',
        choice2: 'A videotape',
        choice3: 'A videogame',
        choice4: 'A house',
        answer: 2,
    }
]

// Declare scoring values
const scorePoints = 1;
const maxQuestions = 10;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    if(availableQuestions.length === 0 || questionsCounter > maxQuestions) {
        localStorage.getItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
    questionsCounter++
    questionText.innerText = `Question ${questionsCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionsCounter/maxQuestions) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    options.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
}

options.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore('scorePoints');
        }

        selectedOption.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
    })
})