// Updated subject categories structure
const subjectCategories = {
    languages: {
        name: 'Languages',
        icon: '',
        subcategories: {
            english: {
                name: 'English',
                subjects: ['Grammar', 'Literature']
            },
            urdu: {
                name: 'Urdu',
                subjects: ['Grammar', 'Literature']
            },
            sindhi: {
                name: 'Sindhi',
                subjects: ['Grammar', 'Literature']
            },
            regionalLanguages: {
                name: 'Regional Languages',
                subjects: ['Pashto', 'Punjabi', 'Balochi']
            }
        }
    },

    mathematicsAndLogic: {
        name: 'Mathematics & Logic',
        icon: '',
        subjects: ['Mathematics', 'Statistics', 'Applied Mathematics']
    },

    sciences: {
        name: 'Sciences',
        icon: '',
        subcategories: {
            naturalSciences: {
                name: 'Natural Sciences',
                subjects: ['Physics', 'Chemistry', 'Biology']
            },
            earthAndEnvironmentalSciences: {
                name: 'Earth & Environmental Sciences',
                subjects: ['Geography', 'Environmental Science']
            },
            generalScience: {
                name: 'General Science',
                subjects: ['General Science']
            }
        }
    },

    socialSciences: {
        name: 'Social Sciences',
        icon: '',
        subjects: ['History', 'Pakistan Studies', 'Sociology', 'Psychology', 'Political Science', 'Economics', 'Civics']
    },

    religiousStudies: {
        name: 'Religious Studies',
        icon: '',
        subjects: ['Islamiyat', 'Ethics', 'Quranic Studies']
    },

    computerScienceAndIT: {
        name: 'Computer Science & Information Technology',
        icon: '',
        subjects: ['Computer Science', 'Information Technology', 'Artificial Intelligence', 'Data Science', 'Programming Languages']
    },

    businessAndCommerce: {
        name: 'Business & Commerce',
        icon: '',
        subjects: ['Principles of Accounting', 'Business Studies', 'Economics', 'Finance', 'Marketing', 'Commerce']
    },

    artsAndHumanities: {
        name: 'Arts & Humanities',
        icon: '',
        subjects: ['Literature', 'Fine Arts', 'Drawing', 'Music', 'Philosophy', 'Cultural Studies']
    },

    engineeringAndTechnology: {
        name: 'Engineering & Technology',
        icon: '',
        subjects: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Software Engineering', 'Chemical Engineering', 'Biomedical Engineering']
    },

    medicalAndHealthSciences: {
        name: 'Medical & Health Sciences',
        icon: '',
        subjects: ['Medicine', 'Dentistry', 'Pharmacy', 'Nursing', 'Public Health', 'Biochemistry']
    },

    agricultureAndEnvironmentalSciences: {
        name: 'Agriculture & Environmental Sciences',
        icon: '',
        subjects: ['Agriculture', 'Horticulture', 'Environmental Science', 'Botany', 'Zoology']
    },

    law: {
        name: 'Law',
        icon: '',
        subjects: ['Law', 'Constitutional Law', 'Criminal Law', 'International Law']
    },

    education: {
        name: 'Education',
        icon: '',
        subjects: ['Education', 'Teaching Methods', 'Educational Psychology']
    },

    physicalEducationAndSports: {
        name: 'Physical Education & Sports',
        icon: '',
        subjects: ['Physical Education', 'Sports Science']
    },

    vocationalAndTechnicalSubjects: {
        name: 'Vocational & Technical Subjects',
        icon: '',
        subjects: ['Home Economics', 'Technical Drawing', 'Woodworking', 'Electrical Wiring', 'Carpentry']
    },

    miscellaneous: {
        name: 'Miscellaneous',
        icon: '',
        subjects: ['Library Science', 'Media Studies', 'Journalism', 'Gender Studies']
    }
};

// DOM Elements
const homeElement = document.getElementById('home');
const startButton = document.getElementById('start-btn');
const categorySelectionElement = document.getElementById('category-selection');
const subcategorySelectionElement = document.getElementById('subcategory-selection');
const subjectSelectionElement = document.getElementById('subject-selection');
const topicSelectionElement = document.getElementById('topic-selection');
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
let currentSubject = '';
let currentTopic = '';
let totalQuestionsAnswered = 0;
let correctAnswers = 0;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    setupEventListeners();
    setupCategories();
    
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

    nextButton.addEventListener('click', handleNextQuestion);
    continueButton.addEventListener('click', continueQuiz);
    restartButton.addEventListener('click', restartQuiz);
}

function setupCategories() {
    const categoryGrid = document.querySelector('.category-grid');
    categoryGrid.innerHTML = '';

    Object.entries(subjectCategories).forEach(([key, category]) => {
        const button = document.createElement('button');
        button.className = 'btn category-btn';
        button.setAttribute('data-category', key);
        button.innerHTML = `${category.icon} <span>${category.name}</span>`;
        button.addEventListener('click', () => selectCategory(key));
        categoryGrid.appendChild(button);
    });
}

function selectCategory(categoryKey) {
    currentCategory = categoryKey;
    const category = subjectCategories[categoryKey];
    
    if (category.subcategories) {
        const subcategoryGrid = document.querySelector('.subcategory-grid');
        subcategoryGrid.innerHTML = '';
        
        Object.entries(category.subcategories).forEach(([key, subcategory]) => {
            const button = document.createElement('button');
            button.className = 'btn subcategory-btn';
            button.textContent = subcategory.name;
            button.addEventListener('click', () => selectSubcategory(key));
            subcategoryGrid.appendChild(button);
        });
        
        categorySelectionElement.classList.add('hide');
        subcategorySelectionElement.classList.remove('hide');
    } else {
        const subjectGrid = document.querySelector('.subject-grid');
        subjectGrid.innerHTML = '';
        
        category.subjects.forEach(subject => {
            const button = document.createElement('button');
            button.className = 'btn subject-btn';
            button.textContent = subject;
            button.addEventListener('click', () => startQuiz(subject));
            subjectGrid.appendChild(button);
        });
        
        categorySelectionElement.classList.add('hide');
        subjectSelectionElement.classList.remove('hide');
    }
}

function selectSubcategory(subcategoryKey) {
    currentSubcategory = subcategoryKey;
    const subcategory = subjectCategories[currentCategory].subcategories[subcategoryKey];
    
    const subjectGrid = document.querySelector('.subject-grid');
    subjectGrid.innerHTML = '';
    
    subcategory.subjects.forEach(subject => {
        const button = document.createElement('button');
        button.className = 'btn subject-btn';
        button.textContent = subject;
        button.addEventListener('click', () => startQuiz(subject));
        subjectGrid.appendChild(button);
    });
    
    subcategorySelectionElement.classList.add('hide');
    subjectSelectionElement.classList.remove('hide');
}

function startQuiz(topic) {
    currentTopic = topic;
    questions = getQuestions(currentCategory, currentSubcategory, currentSubject, currentTopic);
    
    if (!questions || questions.length === 0) {
        alert('No questions available for this topic. Please try another one.');
        return;
    }
    
    subjectSelectionElement.classList.add('hide');
    quizElement.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsAnswered = 0;
    correctAnswers = 0;
    
    showQuestion();
    updateProgress();
}

// Rest of the quiz functionality remains the same
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
    
    const buttons = answerButtonsElement.children;
    Array.from(buttons).forEach((button, index) => {
        button.classList.add(question.answers[index].correct ? 'correct' : 'wrong');
        button.disabled = true;
    });
    
    nextButton.disabled = false;
}

function handleNextQuestion() {
    currentQuestionIndex++;
    
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
