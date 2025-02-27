// Import statements
import { initializeLanguage, changeLanguage } from './js/language-utils.js';
import { allQuestions, getQuestions } from './questions.js';

// DOM Elements
const homeElement = document.getElementById('home');
const startButton = document.getElementById('start-btn');
const categorySelectionElement = document.getElementById('category-selection');
const subcategorySelectionElement = document.getElementById('subcategory-selection');
const quizElement = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const breakScreenElement = document.getElementById('break-screen');
const breakProgressElement = document.getElementById('break-progress');
const continueButton = document.getElementById('continue-btn');
const resultsElement = document.getElementById('results');
const totalAnsweredElement = document.getElementById('total-answered');
const finalScoreElement = document.getElementById('final-score');
const accuracyElement = document.getElementById('accuracy');
const restartButton = document.getElementById('restart-btn');
const progressFillElement = document.querySelector('.progress-fill');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let currentCategory = '';
let currentSubcategory = '';
let totalQuestionsAnswered = 0;
let correctAnswers = 0;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    setupEventListeners();
    
    // Redirect to language selection if language not set
    if (!localStorage.getItem('selectedLanguage')) {
        window.location.href = 'language-select.html';
    }
});

function setupEventListeners() {
    startButton.addEventListener('click', () => {
        homeElement.classList.add('hide');
        categorySelectionElement.classList.remove('hide');
    });

    // Category selection
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => selectCategory(button.dataset.category));
    });

    nextButton.addEventListener('click', handleNextQuestion);
    continueButton.addEventListener('click', continueQuiz);
    restartButton.addEventListener('click', restartQuiz);
}

function selectCategory(category) {
    currentCategory = category;
    categorySelectionElement.classList.add('hide');
    
    // Load subcategories based on category
    const subcategoryGrid = document.querySelector('.subcategory-grid');
    subcategoryGrid.innerHTML = '';
    
    const subcategories = getSubcategories(category);
    subcategories.forEach(sub => {
        const button = document.createElement('button');
        button.className = 'btn subcategory-btn';
        button.setAttribute('data-translate', sub);
        button.textContent = translations[getCurrentLanguage()][sub] || sub;
        button.addEventListener('click', () => startQuiz(sub));
        subcategoryGrid.appendChild(button);
    });
    
    subcategorySelectionElement.classList.remove('hide');
}

function getSubcategories(category) {
    switch(category) {
        case 'science':
            return ['physics', 'chemistry', 'biology'];
        case 'mathematics':
            return ['algebra', 'geometry', 'calculus'];
        case 'history':
            return ['ancient', 'medieval', 'modern'];
        case 'language':
            return ['grammar', 'literature', 'vocabulary'];
        default:
            return [];
    }
}

function startQuiz(subcategory) {
    currentSubcategory = subcategory;
    questions = getQuestions(currentCategory, subcategory, 1000); // Get all questions
    
    if (!questions || questions.length === 0) {
        alert('No questions available for this subject. Please try another one.');
        return;
    }
    
    subcategorySelectionElement.classList.add('hide');
    quizElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsAnswered = 0;
    correctAnswers = 0;
    
    showQuestion();
    updateProgress();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    
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
    
    nextButton.disabled = true;
    updateProgress();
}

function selectAnswer(answerIndex) {
    const question = questions[currentQuestionIndex];
    const correct = question.answers[answerIndex].correct;
    
    if (correct) {
        score++;
        correctAnswers++;
    }
    
    totalQuestionsAnswered++;
    
    // Highlight correct and wrong answers
    const buttons = answerButtonsElement.children;
    Array.from(buttons).forEach((button, index) => {
        button.classList.add(question.answers[index].correct ? 'correct' : 'wrong');
        button.disabled = true;
    });
    
    nextButton.disabled = false;
}

function handleNextQuestion() {
    currentQuestionIndex++;
    
    // Check if we need to show a break screen
    if (currentQuestionIndex % 10 === 0) {
        showBreakScreen();
    } else if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showBreakScreen() {
    const progress = Math.floor((totalQuestionsAnswered / questions.length) * 100);
    breakProgressElement.textContent = `Progress: ${progress}%`;
    breakScreenElement.style.display = 'flex';
}

function continueQuiz() {
    breakScreenElement.style.display = 'none';
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizElement.classList.add('hide');
    resultsElement.classList.remove('hide');
    
    totalAnsweredElement.textContent = totalQuestionsAnswered;
    finalScoreElement.textContent = score;
    accuracyElement.textContent = `${Math.round((correctAnswers / totalQuestionsAnswered) * 100)}%`;
}

function updateProgress() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressFillElement.style.width = `${progress}%`;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = questions.length;
}

function restartQuiz() {
    resultsElement.classList.add('hide');
    homeElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    questions = [];
}

// Make changeLanguage available globally
window.changeLanguage = changeLanguage;
