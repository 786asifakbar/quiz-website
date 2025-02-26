// Import all question banks
const quizData = {};

// Function to generate variations of questions
function generateQuestionVariations(baseQuestions, count) {
    const questions = [];
    const variations = [
        "Explain", "Describe", "What is", "Define", "Identify",
        "Choose", "Select", "Which of these is", "Which one is",
        "In terms of", "With respect to", "Regarding", "Concerning"
    ];

    for (let i = 0; i < count; i++) {
        const baseQuestion = baseQuestions[i % baseQuestions.length];
        const variation = variations[Math.floor(Math.random() * variations.length)];
        
        questions.push({
            question: `${variation}: ${baseQuestion.question}`,
            answers: shuffleArray([...baseQuestion.answers])
        });
    }

    return questions;
}

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Define question banks
const programmingQuestions = {
    html: [
        {
            question: "What does HTML stand for?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "High Tech Modern Language", correct: false },
                { text: "Hyper Transfer Markup Language", correct: false },
                { text: "Home Tool Markup Language", correct: false }
            ]
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            answers: [
                { text: "<link>", correct: false },
                { text: "<a>", correct: true },
                { text: "<href>", correct: false },
                { text: "<url>", correct: false }
            ]
        }
    ],
    css: [
        {
            question: "What does CSS stand for?",
            answers: [
                { text: "Creative Style Sheets", correct: false },
                { text: "Computer Style Sheets", correct: false },
                { text: "Cascading Style Sheets", correct: true },
                { text: "Colorful Style Sheets", correct: false }
            ]
        },
        {
            question: "Which property is used to change the background color?",
            answers: [
                { text: "color", correct: false },
                { text: "bgcolor", correct: false },
                { text: "background-color", correct: true },
                { text: "background", correct: false }
            ]
        }
    ],
    javascript: [
        {
            question: "Which operator is used for strict equality comparison?",
            answers: [
                { text: "==", correct: false },
                { text: "===", correct: true },
                { text: "=", correct: false },
                { text: "!=", correct: false }
            ]
        },
        {
            question: "What is the correct way to declare a JavaScript variable?",
            answers: [
                { text: "variable name;", correct: false },
                { text: "v name;", correct: false },
                { text: "let name;", correct: true },
                { text: "var = name;", correct: false }
            ]
        }
    ],
    reactjs: [
        {
            question: "What is React?",
            answers: [
                { text: "A JavaScript library for building user interfaces", correct: true },
                { text: "A programming language", correct: false },
                { text: "A database management system", correct: false },
                { text: "An operating system", correct: false }
            ]
        },
        {
            question: "What hook is used for side effects in React?",
            answers: [
                { text: "useState", correct: false },
                { text: "useEffect", correct: true },
                { text: "useContext", correct: false },
                { text: "useReducer", correct: false }
            ]
        }
    ],
    nodejs: [
        {
            question: "What is Node.js?",
            answers: [
                { text: "A browser", correct: false },
                { text: "A JavaScript runtime environment", correct: true },
                { text: "A programming language", correct: false },
                { text: "A database", correct: false }
            ]
        },
        {
            question: "Which module is used to create a server in Node.js?",
            answers: [
                { text: "fs", correct: false },
                { text: "http", correct: true },
                { text: "path", correct: false },
                { text: "os", correct: false }
            ]
        }
    ],
    express: [
        {
            question: "What is Express.js?",
            answers: [
                { text: "A web framework for Node.js", correct: true },
                { text: "A database", correct: false },
                { text: "A programming language", correct: false },
                { text: "A browser", correct: false }
            ]
        },
        {
            question: "Which method is used to handle GET requests in Express?",
            answers: [
                { text: "app.post()", correct: false },
                { text: "app.get()", correct: true },
                { text: "app.request()", correct: false },
                { text: "app.handle()", correct: false }
            ]
        }
    ]
};

const englishQuestions = {};
const mathematicsQuestions = {};
const historyQuestions = {};
const scienceQuestions = {};
const generalQuestions = {
    general: [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "London", correct: false },
                { text: "Paris", correct: true },
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false }
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Jupiter", correct: false },
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Saturn", correct: false }
            ]
        },
        {
            question: "What is 2 + 2 × 2?",
            answers: [
                { text: "6", correct: true },
                { text: "8", correct: false },
                { text: "4", correct: false },
                { text: "2", correct: false }
            ]
        },
        {
            question: "Which programming language is known as the 'language of the web'?",
            answers: [
                { text: "Python", correct: false },
                { text: "Java", correct: false },
                { text: "JavaScript", correct: true },
                { text: "C++", correct: false }
            ]
        },
        {
            question: "What year did World War II end?",
            answers: [
                { text: "1943", correct: false },
                { text: "1944", correct: false },
                { text: "1945", correct: true },
                { text: "1946", correct: false }
            ]
        }
    ]
};

// Generate questions for each category and subject
Object.keys(programmingQuestions).forEach(subject => {
    if (!quizData.programming) quizData.programming = {};
    quizData.programming[subject] = generateQuestionVariations(programmingQuestions[subject], 1000);
});

Object.keys(englishQuestions).forEach(subject => {
    if (!quizData.english) quizData.english = {};
    quizData.english[subject] = generateQuestionVariations(englishQuestions[subject], 1000);
});

Object.keys(mathematicsQuestions).forEach(subject => {
    if (!quizData.mathematics) quizData.mathematics = {};
    quizData.mathematics[subject] = generateQuestionVariations(mathematicsQuestions[subject], 1000);
});

Object.keys(historyQuestions).forEach(subject => {
    if (!quizData.history) quizData.history = {};
    quizData.history[subject] = generateQuestionVariations(historyQuestions[subject], 1000);
});

Object.keys(scienceQuestions).forEach(subject => {
    if (!quizData.science) quizData.science = {};
    quizData.science[subject] = generateQuestionVariations(scienceQuestions[subject], 1000);
});

Object.keys(generalQuestions).forEach(subject => {
    if (!quizData.general) quizData.general = {};
    quizData.general[subject] = generateQuestionVariations(generalQuestions[subject], 1000);
});
