// Quiz State Management
let currentQuiz = {
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswers: {},
    category: 'all',
    difficulty: 'easy',
    totalQuestions: 10
};

let userStats = {
    questionsAttempted: 0,
    correctAnswers: 0,
    categoryStats: {}
};

// Cache for loaded questions
let questionCache = {};

// DOM Elements
const categoryList = document.getElementById('categoryList');
const difficultySelect = document.getElementById('difficultySelect');
const startQuizBtn = document.getElementById('startQuiz');
const quizContainer = document.getElementById('quizContainer');
const questionCounter = document.getElementById('questionCounter');
const quizProgress = document.getElementById('quizProgress');
const prevButton = document.getElementById('prevQuestion');
const nextButton = document.getElementById('nextQuestion');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const questionsAttemptedElement = document.getElementById('questionsAttempted');
const averageScoreElement = document.getElementById('averageScore');

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeQuiz);
categoryList.addEventListener('click', handleCategorySelection);
startQuizBtn.addEventListener('click', startQuiz);
prevButton.addEventListener('click', showPreviousQuestion);
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', submitQuiz);

// Initialize Quiz
async function initializeQuiz() {
    try {
        const response = await fetch('data/categories.json');
        const data = await response.json();
        setupCategories(data.categories);
        loadUserStats();
        updateUserStats();
    } catch (error) {
        console.error('Error initializing quiz:', error);
        showError('Failed to initialize quiz. Please refresh the page.');
    }
}

// Setup Categories
function setupCategories(categories) {
    categoryList.innerHTML = ''; // Clear existing categories
    categories.forEach(category => {
        const li = document.createElement('li');
        li.dataset.category = category.id;
        li.innerHTML = `<i class="${category.icon}"></i> ${category.name}`;
        if (category.id === 'all') li.classList.add('active');
        categoryList.appendChild(li);
    });
}

// Handle Category Selection
function handleCategorySelection(event) {
    const li = event.target.closest('li');
    if (!li) return;

    document.querySelectorAll('#categoryList li').forEach(item => item.classList.remove('active'));
    li.classList.add('active');
    currentQuiz.category = li.dataset.category;
}

// Load Questions
async function loadQuestions() {
    try {
        if (currentQuiz.category === 'all') {
            // Load questions from all categories
            const categories = ['history', 'geography', 'culture', 'sports'];
            let allQuestions = [];
            
            for (const category of categories) {
                if (!questionCache[category]) {
                    const response = await fetch(`data/${category}.json`);
                    questionCache[category] = await response.json();
                }
                allQuestions = allQuestions.concat(questionCache[category].questions);
            }

            // Shuffle and filter by difficulty
            allQuestions = shuffleArray(allQuestions.filter(q => q.difficulty === currentQuiz.difficulty));
            currentQuiz.questions = allQuestions.slice(0, currentQuiz.totalQuestions);
        } else {
            // Load questions from specific category
            if (!questionCache[currentQuiz.category]) {
                const response = await fetch(`data/${currentQuiz.category}.json`);
                questionCache[currentQuiz.category] = await response.json();
            }

            const categoryQuestions = questionCache[currentQuiz.category].questions
                .filter(q => q.difficulty === currentQuiz.difficulty);
            currentQuiz.questions = shuffleArray(categoryQuestions).slice(0, currentQuiz.totalQuestions);
        }
    } catch (error) {
        console.error('Error loading questions:', error);
        showError('Failed to load questions. Please try again.');
    }
}

// Shuffle Array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start Quiz
async function startQuiz() {
    showLoading(true);
    currentQuiz.difficulty = difficultySelect.value;
    currentQuiz.currentQuestionIndex = 0;
    currentQuiz.selectedAnswers = {};
    
    try {
        await loadQuestions();
        document.querySelector('.quiz-header').classList.add('hide');
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

// Update Progress Bar
function updateProgress() {
    const progress = ((currentQuiz.currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    quizProgress.style.width = `${progress}%`;
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

    // Enable submit only if all questions are answered
    if (submitButton.classList.contains('hide')) return;
    
    const allAnswered = currentQuiz.questions.every((_, index) => 
        currentQuiz.selectedAnswers[index] !== undefined
    );
    submitButton.disabled = !allAnswered;
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
    let categoryScores = {};

    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = currentQuiz.selectedAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        if (isCorrect) score++;
        
        if (!categoryScores[question.category]) {
            categoryScores[question.category] = { correct: 0, total: 0 };
        }
        categoryScores[question.category].total++;
        if (isCorrect) categoryScores[question.category].correct++;
    });

    return {
        score,
        total: currentQuiz.questions.length,
        categoryScores
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
            <p>Your Score: ${results.score} out of ${results.total} (${percentage}%)</p>
        </div>
        <div class="category-breakdown">
    `;

    // Add category breakdown
    for (const [category, scores] of Object.entries(results.categoryScores)) {
        const categoryPercentage = ((scores.correct / scores.total) * 100).toFixed(1);
        resultsHTML += `
            <div class="category-score">
                <h3>${category}</h3>
                <p>${scores.correct}/${scores.total} (${categoryPercentage}%)</p>
            </div>
        `;
    }

    resultsHTML += `
        </div>
        <div class="action-buttons">
            <button onclick="reviewAnswers()" class="review-btn">Review Answers</button>
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

        // Update category stats
        Object.entries(results.categoryScores).forEach(([category, scores]) => {
            if (!userStats.categoryStats[category]) {
                userStats.categoryStats[category] = { correct: 0, total: 0 };
            }
            userStats.categoryStats[category].correct += scores.correct;
            userStats.categoryStats[category].total += scores.total;
        });
    }

    questionsAttemptedElement.textContent = userStats.questionsAttempted;
    const averageScore = userStats.questionsAttempted > 0 
        ? ((userStats.correctAnswers / userStats.questionsAttempted) * 100).toFixed(1)
        : 0;
    averageScoreElement.textContent = `${averageScore}%`;
}

// Utility Functions
function showError(message) {
    // Implement error display
    alert(message);
}

function showLoading(show) {
    // Implement loading indicator
    startQuizBtn.disabled = show;
    startQuizBtn.textContent = show ? 'Loading...' : 'Start Quiz';
}

// Review Answers
function reviewAnswers() {
    quizContainer.classList.remove('hide');
    resultsContainer.classList.add('hide');
    showQuestion();
}

// Start New Quiz
function startNewQuiz() {
    document.querySelector('.quiz-header').classList.remove('hide');
    resultsContainer.classList.add('hide');
    currentQuiz = {
        questions: [],
        currentQuestionIndex: 0,
        selectedAnswers: {},
        category: 'all',
        difficulty: 'easy',
        totalQuestions: 10
    };
}
