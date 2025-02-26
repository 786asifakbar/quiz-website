// DOM Elements
const homeElement = document.getElementById('home');
const quizElement = document.getElementById('quiz');
const endElement = document.getElementById('end');
const highscoresElement = document.getElementById('highscores');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const startButton = document.getElementById('start-btn');
const questionCounterElement = document.getElementById('questionCounter');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const finalScoreElement = document.getElementById('final-score');
const usernameInput = document.getElementById('username');
const saveScoreButton = document.getElementById('save-score-btn');
const highscoresButton = document.getElementById('highscores-btn');
const highscoresList = document.getElementById('highscores-list');
const playAgainButton = document.getElementById('play-again');
const goHomeButton = document.getElementById('go-home');
const homeButton = document.getElementById('home-btn');

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;
let answers = [];

// Initialize answers array
questions.forEach(() => answers.push(null));

// Event Listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
prevButton.addEventListener('click', () => {
    currentQuestionIndex--;
    setNextQuestion();
});
highscoresButton.addEventListener('click', showHighscores);
usernameInput.addEventListener('input', () => {
    saveScoreButton.disabled = !usernameInput.value;
});
saveScoreButton.addEventListener('click', saveHighScore);
playAgainButton.addEventListener('click', startQuiz);
goHomeButton.addEventListener('click', goHome);
homeButton.addEventListener('click', goHome);

function startQuiz() {
    homeElement.classList.add('hide');
    quizElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    answers = questions.map(() => null);
    updateScore();
    startTimer();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    updateNavigationButtons();
    updateQuestionCounter();
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        button.addEventListener('click', () => selectAnswer(index));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answerIndex) {
    const buttons = answerButtonsElement.children;
    const currentQuestion = questions[currentQuestionIndex];
    
    // Remove previous selection classes
    for (let button of buttons) {
        button.classList.remove('selected', 'correct', 'incorrect');
    }
    
    // Add selected class to clicked button
    const selectedButton = buttons[answerIndex];
    selectedButton.classList.add('selected');
    
    // Check if answer is correct and show appropriate feedback
    if (currentQuestion.answers[answerIndex].correct) {
        selectedButton.classList.add('correct');
        if (answers[currentQuestionIndex] === null) {
            score++;
            updateScore();
        }
    } else {
        selectedButton.classList.add('incorrect');
        // Show the correct answer
        buttons.forEach((button, index) => {
            if (currentQuestion.answers[index].correct) {
                button.classList.add('correct');
            }
        });
    }
    
    answers[currentQuestionIndex] = answerIndex;
}

function updateNavigationButtons() {
    prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    nextButton.innerText = currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next';
    
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.removeEventListener('click', () => {
            currentQuestionIndex++;
            setNextQuestion();
        });
        nextButton.addEventListener('click', endQuiz);
    }
}

function updateQuestionCounter() {
    questionCounterElement.innerText = `${currentQuestionIndex + 1}/${questions.length}`;
}

function updateScore() {
    scoreElement.innerText = score;
}

function startTimer() {
    timeLeft = 60;
    updateTimer();
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function updateTimer() {
    timerElement.innerText = timeLeft;
}

function endQuiz() {
    clearInterval(timer);
    quizElement.classList.add('hide');
    endElement.classList.remove('hide');
    finalScoreElement.innerText = `Your score: ${score}`;
}

function saveHighScore(e) {
    e.preventDefault();
    
    const score = {
        score: this.score,
        name: usernameInput.value
    };
    
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores = highScores.slice(0, 5);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    showHighscores();
}

function showHighscores() {
    homeElement.classList.add('hide');
    quizElement.classList.add('hide');
    endElement.classList.add('hide');
    highscoresElement.classList.remove('hide');
    
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highscoresList.innerHTML = highScores
        .map(score => `<li>${score.name} - ${score.score}</li>`)
        .join('');
}

function goHome() {
    homeElement.classList.remove('hide');
    quizElement.classList.add('hide');
    endElement.classList.add('hide');
    highscoresElement.classList.add('hide');
}
