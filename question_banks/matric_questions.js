const matricQuestions = {
    urdu: generateUrduQuestions(500),
    english: generateEnglishQuestions(500),
    mathematics: generateMathQuestions(500),
    physics: generatePhysicsQuestions(500),
    chemistry: generateChemistryQuestions(500),
    biology: generateBiologyQuestions(500),
    computer_science: generateComputerScienceQuestions(500),
    pakistan_studies: generatePakStudiesQuestions(500),
    islamiat: generateIslamiatQuestions(500)
};

// Generate Urdu questions with variations
function generateUrduQuestions(count) {
    const baseQuestions = [
        {
            id: "URD_001",
            question: "اردو زبان کس خانوادہ سے تعلق رکھتی ہے؟",
            options: [
                { text: "ہند آریائی", correct: true },
                { text: "سامی", correct: false },
                { text: "ترکی", correct: false },
                { text: "ایرانی", correct: false }
            ],
            difficulty: "Easy",
            topic: "Urdu Grammar"
        },
        // Add more base questions
    ];

    return generateVariations(baseQuestions, count, {
        prefixes: [
            "وضاحت کیجئے", "بیان کیجئے", "تشریح کیجئے",
            "تعریف کیجئے", "مثال دیجئے", "ثابت کیجئے"
        ],
        topics: ["Grammar", "Literature", "Poetry", "Prose", "Comprehension"]
    });
}

// Generate English questions with variations
function generateEnglishQuestions(count) {
    const baseQuestions = [
        {
            id: "ENG_001",
            question: "Choose the correct form of verb",
            options: [
                { text: "goes", correct: true },
                { text: "go", correct: false },
                { text: "going", correct: false },
                { text: "gone", correct: false }
            ],
            difficulty: "Easy",
            topic: "Grammar"
        },
        // Add more base questions
    ];

    return generateVariations(baseQuestions, count, {
        prefixes: [
            "What is", "Choose", "Identify", "Select",
            "Which of these is", "Define", "Explain"
        ],
        topics: ["Grammar", "Vocabulary", "Comprehension", "Writing", "Literature"]
    });
}

// Generate Mathematics questions with variations
function generateMathQuestions(count) {
    const baseQuestions = [
        {
            id: "MATH_001",
            question: "Solve the quadratic equation: x² + 5x + 6 = 0",
            options: [
                { text: "x = -2 or x = -3", correct: true },
                { text: "x = 2 or x = 3", correct: false },
                { text: "x = -2 or x = 3", correct: false },
                { text: "x = 2 or x = -3", correct: false }
            ],
            difficulty: "Medium",
            topic: "Algebra"
        },
        // Add more base questions
    ];

    return generateVariations(baseQuestions, count, {
        prefixes: [
            "Calculate", "Solve", "Find", "Determine",
            "Evaluate", "Compute", "What is"
        ],
        topics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics"]
    });
}

// Helper function to generate variations of questions
function generateVariations(baseQuestions, count, options) {
    const questions = [];
    const { prefixes, topics } = options;
    const difficulties = ["Easy", "Medium", "Hard"];

    for (let i = 0; i < count; i++) {
        const baseQuestion = baseQuestions[i % baseQuestions.length];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const topic = topics[Math.floor(Math.random() * topics.length)];
        const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

        questions.push({
            id: `${baseQuestion.id}_VAR_${i + 1}`,
            question: `${prefix}: ${baseQuestion.question}`,
            options: shuffleArray([...baseQuestion.options]),
            difficulty,
            topic
        });
    }

    return questions;
}

// Utility function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Similar generator functions for other subjects
function generatePhysicsQuestions(count) { /* Implementation */ }
function generateChemistryQuestions(count) { /* Implementation */ }
function generateBiologyQuestions(count) { /* Implementation */ }
function generateComputerScienceQuestions(count) { /* Implementation */ }
function generatePakStudiesQuestions(count) { /* Implementation */ }
function generateIslamiatQuestions(count) { /* Implementation */ }

export { matricQuestions };
