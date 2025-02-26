// DOM Elements
const homeElement = document.getElementById('home');
const categorySelectionElement = document.getElementById('category-selection');
const subjectSelectionElement = document.getElementById('subject-selection');
const quizElement = document.getElementById('quiz');
const endElement = document.getElementById('end');
const highscoresElement = document.getElementById('highscores');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const startButton = document.getElementById('start-btn');
const backToCategoriesButton = document.getElementById('back-to-categories');
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
const feedbackElement = document.getElementById('feedback');

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;
let answers = [];
let currentCategory = '';
let currentSubject = '';
let questions = [];

// Event Listeners
startButton.addEventListener('click', showCategorySelection);
backToCategoriesButton.addEventListener('click', showCategorySelection);

// Category selection
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => selectCategory(button.dataset.category));
});

// Subject selection
document.querySelectorAll('.subject-btn').forEach(button => {
    button.addEventListener('click', () => startQuiz(button.dataset.subject));
});

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
playAgainButton.addEventListener('click', showCategorySelection);
goHomeButton.addEventListener('click', goHome);
homeButton.addEventListener('click', goHome);

function showCategorySelection() {
    homeElement.classList.add('hide');
    categorySelectionElement.classList.remove('hide');
    subjectSelectionElement.classList.add('hide');
    quizElement.classList.add('hide');
    endElement.classList.add('hide');
    highscoresElement.classList.add('hide');
    
    // Hide all subject grids
    document.querySelectorAll('.category-subjects').forEach(grid => {
        grid.classList.add('hide');
    });
}

function selectCategory(category) {
    currentCategory = category;
    categorySelectionElement.classList.add('hide');
    subjectSelectionElement.classList.remove('hide');
    
    // Hide all subject grids and show the selected category's subjects
    document.querySelectorAll('.category-subjects').forEach(grid => {
        grid.classList.add('hide');
    });
    document.getElementById(`${category}-subjects`).classList.remove('hide');
}

function showSubjectSelection() {
    subjectSelectionElement.classList.remove('hide');
    quizElement.classList.add('hide');
    endElement.classList.add('hide');
    highscoresElement.classList.add('hide');
}

function startQuiz(subject) {
    currentSubject = subject;
    questions = quizData[currentCategory][subject];
    subjectSelectionElement.classList.add('hide');
    quizElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    answers = questions.map(() => null);
    updateScore();
    startTimer();
    setNextQuestion();
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    feedbackElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answers[answerIndex].correct;
    
    // Show feedback
    feedbackElement.classList.remove('hide', 'correct', 'incorrect');
    feedbackElement.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedbackElement.textContent = isCorrect ? 'Correct!' : 'Wrong answer!';
    
    // Update score if this is the first attempt
    if (answers[currentQuestionIndex] === null && isCorrect) {
        score++;
        updateScore();
    }
    
    answers[currentQuestionIndex] = answerIndex;
    
    // Disable all buttons
    const buttons = answerButtonsElement.children;
    for (let button of buttons) {
        button.disabled = true;
    }
    
    // Show correct answer
    buttons[answerIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
    if (!isCorrect) {
        const correctIndex = currentQuestion.answers.findIndex(answer => answer.correct);
        buttons[correctIndex].classList.add('correct');
    }
    
    // Automatically move to next question after 1.5 seconds
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            setNextQuestion();
        } else {
            endQuiz();
        }
    }, 1500);
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    updateNavigationButtons();
    updateQuestionCounter();
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function updateNavigationButtons() {
    prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
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
