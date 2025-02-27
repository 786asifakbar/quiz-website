// Quiz State Management
let currentQuiz = {
    subject: null,
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswers: {},
    difficulty: 'easy',
    totalQuestions: 10
};

let userStats = {
    questionsAttempted: 0,
    correctAnswers: 0,
    subjectStats: {}
};

// Cache for loaded questions
let questionCache = {};

// DOM Elements
const subjectGrid = document.getElementById('subjectGrid');
const quizSetup = document.getElementById('quizSetup');
const selectedSubjectTitle = document.getElementById('selectedSubject');
const difficultySelect = document.getElementById('difficultySelect');
const questionCountSelect = document.getElementById('questionCount');
const startQuizBtn = document.getElementById('startQuiz');
const quizContainer = document.getElementById('quizContainer');
const questionCounter = document.getElementById('questionCounter');
const quizProgress = document.getElementById('quizProgress');
const prevButton = document.getElementById('prevQuestion');
const nextButton = document.getElementById('nextQuestion');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

// Initialize Quiz
async function initializeQuiz() {
    try {
        const response = await fetch('data/categories.json');
        const data = await response.json();
        setupSubjectGrid(data.categories);
        loadUserStats();
        updateUserStats();
    } catch (error) {
        console.error('Error initializing quiz:', error);
        showError('Failed to initialize quiz. Please refresh the page.');
    }
}

// Setup Subject Grid
function setupSubjectGrid(categories) {
    // Skip the "All Categories" option
    const subjects = categories.filter(cat => cat.id !== 'all');
    
    subjectGrid.innerHTML = subjects.map(subject => `
        <div class="subject-card" data-subject="${subject.id}">
            <i class="${subject.icon}"></i>
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
        </div>
    `).join('');

    // Add click event listeners to subject cards
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', () => selectSubject(card.dataset.subject));
    });
}

// Select Subject
function selectSubject(subjectId) {
    currentQuiz.subject = subjectId;
    
    // Hide subject grid and show quiz setup
    document.querySelector('.quiz-header').classList.add('hide');
    quizSetup.classList.remove('hide');
    
    // Update selected subject title
    const subjectCard = document.querySelector(`[data-subject="${subjectId}"]`);
    selectedSubjectTitle.textContent = subjectCard.querySelector('h3').textContent;
}

// Start Quiz
async function startQuiz() {
    showLoading(true);
    currentQuiz.difficulty = difficultySelect.value;
    currentQuiz.totalQuestions = parseInt(questionCountSelect.value);
    currentQuiz.currentQuestionIndex = 0;
    currentQuiz.selectedAnswers = {};
    
    try {
        await loadQuestions();
        quizSetup.classList.add('hide');
        quizContainer.classList.remove('hide');
        resultsContainer.classList.add('hide');
        showQuestion();
        updateNavigation();
    } catch (error) {
        console.error('Error starting quiz:', error);
        showError('Failed to start quiz. Please try again.');
    } finally {
        showLoading(false);
    }
}

// Load Questions
async function loadQuestions() {
    try {
        if (!questionCache[currentQuiz.subject]) {
            const response = await fetch(`data/${currentQuiz.subject}.json`);
            questionCache[currentQuiz.subject] = await response.json();
        }

        const allQuestions = questionCache[currentQuiz.subject].questions
            .filter(q => q.difficulty === currentQuiz.difficulty);
        currentQuiz.questions = shuffleArray(allQuestions).slice(0, currentQuiz.totalQuestions);
    } catch (error) {
        console.error('Error loading questions:', error);
        showError('Failed to load questions. Please try again.');
    }
}

// Show Question
function showQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const questionHTML = `
        <div class="question">
            <div class="question-title">${currentQuiz.currentQuestionIndex + 1}. ${question.question}</div>
            <div class="answers">
                ${Object.entries(question.answers).map(([key, value]) => `
                    <label class="answer-option">
                        <input type="radio" name="question${currentQuiz.currentQuestionIndex}" value="${key}" 
                            ${currentQuiz.selectedAnswers[currentQuiz.currentQuestionIndex] === key ? 'checked' : ''}>
                        ${key.toUpperCase()}: ${value}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('quiz').innerHTML = questionHTML;
    questionCounter.textContent = `Question ${currentQuiz.currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    updateProgress();

    // Add event listeners for answer selection
    document.querySelectorAll('.answer-option input').forEach(input => {
        input.addEventListener('change', () => {
            currentQuiz.selectedAnswers[currentQuiz.currentQuestionIndex] = input.value;
            updateNavigation();
        });
    });
}

// Navigation Functions
function showPreviousQuestion() {
    if (currentQuiz.currentQuestionIndex > 0) {
        currentQuiz.currentQuestionIndex--;
        showQuestion();
        updateNavigation();
    }
}

function showNextQuestion() {
    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuiz.currentQuestionIndex++;
        showQuestion();
        updateNavigation();
    }
}

function updateNavigation() {
    prevButton.disabled = currentQuiz.currentQuestionIndex === 0;
    nextButton.classList.toggle('hide', currentQuiz.currentQuestionIndex === currentQuiz.questions.length - 1);
    submitButton.classList.toggle('hide', currentQuiz.currentQuestionIndex !== currentQuiz.questions.length - 1);

    if (!submitButton.classList.contains('hide')) {
        const allAnswered = currentQuiz.questions.every((_, index) => 
            currentQuiz.selectedAnswers[index] !== undefined
        );
        submitButton.disabled = !allAnswered;
    }
}

// Submit Quiz
function submitQuiz() {
    const results = calculateResults();
    displayResults(results);
    updateUserStats(results);
    saveUserStats();
}

// Calculate Results
function calculateResults() {
    let score = 0;
    let feedback = [];

    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = currentQuiz.selectedAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        if (isCorrect) score++;
        
        feedback.push({
            question: question.question,
            userAnswer: question.answers[userAnswer],
            correctAnswer: question.answers[question.correctAnswer],
            isCorrect: isCorrect,
            feedback: question.feedback
        });
    });

    return {
        score,
        total: currentQuiz.questions.length,
        feedback,
        subject: currentQuiz.subject,
        difficulty: currentQuiz.difficulty
    };
}

// Display Results
function displayResults(results) {
    quizContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');

    const percentage = ((results.score / results.total) * 100).toFixed(1);
    let resultsHTML = `
        <div class="results-summary">
            <h2>Quiz Complete!</h2>
            <p>Subject: ${document.querySelector(`[data-subject="${results.subject}"]`).querySelector('h3').textContent}</p>
            <p>Difficulty: ${results.difficulty.charAt(0).toUpperCase() + results.difficulty.slice(1)}</p>
            <p>Your Score: ${results.score} out of ${results.total} (${percentage}%)</p>
        </div>
        <div class="feedback-section">
            <h3>Question Review</h3>
            ${results.feedback.map((item, index) => `
                <div class="question-feedback ${item.isCorrect ? 'correct' : 'incorrect'}">
                    <p><strong>Question ${index + 1}:</strong> ${item.question}</p>
                    <p>Your Answer: ${item.userAnswer}</p>
                    ${!item.isCorrect ? `<p>Correct Answer: ${item.correctAnswer}</p>` : ''}
                    <p class="feedback-text">${item.feedback}</p>
                </div>
            `).join('')}
        </div>
        <div class="action-buttons">
            <button onclick="startNewQuiz()" class="new-quiz-btn">Take New Quiz</button>
        </div>
    `;

    resultsContainer.innerHTML = resultsHTML;
}

// User Stats Management
function loadUserStats() {
    const savedStats = localStorage.getItem('quizUserStats');
    if (savedStats) {
        userStats = JSON.parse(savedStats);
    }
}

function saveUserStats() {
    localStorage.setItem('quizUserStats', JSON.stringify(userStats));
}

function updateUserStats(results = null) {
    if (results) {
        userStats.questionsAttempted += results.total;
        userStats.correctAnswers += results.score;

        // Update subject stats
        if (!userStats.subjectStats[results.subject]) {
            userStats.subjectStats[results.subject] = { correct: 0, total: 0 };
        }
        userStats.subjectStats[results.subject].correct += results.score;
        userStats.subjectStats[results.subject].total += results.total;
    }

    // Update display
    document.getElementById('questionsAttempted').textContent = userStats.questionsAttempted;
    const averageScore = userStats.questionsAttempted > 0 
        ? ((userStats.correctAnswers / userStats.questionsAttempted) * 100).toFixed(1)
        : 0;
    document.getElementById('averageScore').textContent = `${averageScore}%`;
}

// Utility Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showError(message) {
    alert(message);
}

function showLoading(show) {
    startQuizBtn.disabled = show;
    startQuizBtn.textContent = show ? 'Loading...' : 'Start Quiz';
}

function startNewQuiz() {
    document.querySelector('.quiz-header').classList.remove('hide');
    quizSetup.classList.add('hide');
    resultsContainer.classList.add('hide');
    currentQuiz = {
        subject: null,
        questions: [],
        currentQuestionIndex: 0,
        selectedAnswers: {},
        difficulty: 'easy',
        totalQuestions: 10
    };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeQuiz);
startQuizBtn.addEventListener('click', startQuiz);
prevButton.addEventListener('click', showPreviousQuestion);
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', submitQuiz);
