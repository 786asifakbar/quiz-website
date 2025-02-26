const competitiveQuestions = {
    css: {
        current_affairs: generateCurrentAffairsQuestions(1000),
        pakistan_affairs: generatePakistanAffairsQuestions(1000),
        islamic_studies: generateIslamicStudiesQuestions(500),
        international_relations: generateInternationalRelationsQuestions(500),
        economics: generateEconomicsQuestions(500),
        political_science: generatePoliticalScienceQuestions(500)
    },
    mdcat: {
        biology: generateMedicalBiologyQuestions(1000),
        chemistry: generateMedicalChemistryQuestions(1000),
        physics: generateMedicalPhysicsQuestions(500),
        english: generateMedicalEnglishQuestions(500)
    },
    ecat: {
        physics: generateEngineeringPhysicsQuestions(1000),
        mathematics: generateEngineeringMathQuestions(1000),
        chemistry: generateEngineeringChemistryQuestions(500),
        computer: generateComputerQuestions(500)
    },
    nts: {
        analytical: generateAnalyticalQuestions(500),
        quantitative: generateQuantitativeQuestions(500),
        verbal: generateVerbalQuestions(500),
        subject_specific: generateSubjectSpecificQuestions(500)
    }
};

// Generate Current Affairs questions with variations
function generateCurrentAffairsQuestions(count) {
    const baseQuestions = [
        {
            id: "CSS_CA_001",
            question: "Which country hosted the 2024 SAARC Summit?",
            options: [
                { text: "Pakistan", correct: true },
                { text: "India", correct: false },
                { text: "Bangladesh", correct: false },
                { text: "Nepal", correct: false }
            ],
            difficulty: "Medium",
            topic: "International Relations",
            year: "2024"
        },
        // Add more base questions
    ];

    return generateVariations(baseQuestions, count, {
        prefixes: [
            "Which country", "When did", "Who was", "What is",
            "Which organization", "How many", "Why did"
        ],
        topics: [
            "International Relations", "Economy", "Politics",
            "Science & Technology", "Sports", "Culture"
        ]
    });
}

// Generate Pakistan Affairs questions with variations
function generatePakistanAffairsQuestions(count) {
    const baseQuestions = [
        {
            id: "CSS_PA_001",
            question: "When was the First Five-Year Plan launched in Pakistan?",
            options: [
                { text: "1955", correct: true },
                { text: "1950", correct: false },
                { text: "1960", correct: false },
                { text: "1965", correct: false }
            ],
            difficulty: "Medium",
            topic: "Economic Planning"
        },
        // Add more base questions
    ];

    return generateVariations(baseQuestions, count, {
        prefixes: [
            "When was", "Who was", "What is", "Which policy",
            "How many", "Why was", "What led to"
        ],
        topics: [
            "Economic Planning", "Foreign Policy", "Constitution",
            "Military History", "Social Development", "Geography"
        ]
    });
}

// Helper function to generate variations of questions
function generateVariations(baseQuestions, count, options) {
    const questions = [];
    const { prefixes, topics } = options;
    const difficulties = ["Easy", "Medium", "Hard"];
    const years = Array.from({ length: 5 }, (_, i) => 2021 + i);

    for (let i = 0; i < count; i++) {
        const baseQuestion = baseQuestions[i % baseQuestions.length];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const topic = topics[Math.floor(Math.random() * topics.length)];
        const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
        const year = years[Math.floor(Math.random() * years.length)];

        questions.push({
            id: `${baseQuestion.id}_VAR_${i + 1}`,
            question: `${prefix}: ${baseQuestion.question}`,
            options: shuffleArray([...baseQuestion.options]),
            difficulty,
            topic,
            year: year.toString()
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
function generateIslamicStudiesQuestions(count) { /* Implementation */ }
function generateInternationalRelationsQuestions(count) { /* Implementation */ }
function generateEconomicsQuestions(count) { /* Implementation */ }
function generatePoliticalScienceQuestions(count) { /* Implementation */ }
function generateMedicalBiologyQuestions(count) { /* Implementation */ }
function generateMedicalChemistryQuestions(count) { /* Implementation */ }
function generateMedicalPhysicsQuestions(count) { /* Implementation */ }
function generateMedicalEnglishQuestions(count) { /* Implementation */ }
function generateEngineeringPhysicsQuestions(count) { /* Implementation */ }
function generateEngineeringMathQuestions(count) { /* Implementation */ }
function generateEngineeringChemistryQuestions(count) { /* Implementation */ }
function generateComputerQuestions(count) { /* Implementation */ }
function generateAnalyticalQuestions(count) { /* Implementation */ }
function generateQuantitativeQuestions(count) { /* Implementation */ }
function generateVerbalQuestions(count) { /* Implementation */ }
function generateSubjectSpecificQuestions(count) { /* Implementation */ }

export { competitiveQuestions };
