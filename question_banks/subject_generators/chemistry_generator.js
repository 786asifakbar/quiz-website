function generateChemistryQuestions(count, type = 'general') {
    const baseQuestions = [
        {
            id: "CHEM_001",
            question: "What is the atomic number of Carbon?",
            options: [
                { text: "6", correct: true },
                { text: "12", correct: false },
                { text: "14", correct: false },
                { text: "8", correct: false }
            ],
            difficulty: "Easy",
            topic: "Atomic Structure"
        },
        {
            id: "CHEM_002",
            question: "What is the pH of a neutral solution?",
            options: [
                { text: "7", correct: true },
                { text: "0", correct: false },
                { text: "14", correct: false },
                { text: "1", correct: false }
            ],
            difficulty: "Easy",
            topic: "Acids and Bases"
        },
        {
            id: "CHEM_003",
            question: "What type of bond is formed between sodium and chlorine?",
            options: [
                { text: "Ionic bond", correct: true },
                { text: "Covalent bond", correct: false },
                { text: "Metallic bond", correct: false },
                { text: "Hydrogen bond", correct: false }
            ],
            difficulty: "Medium",
            topic: "Chemical Bonding"
        }
    ];

    const variations = {
        prefixes: [
            "Calculate", "Determine", "Identify", "What is",
            "Explain", "Describe", "State", "Define"
        ],
        topics: {
            general: [
                "Atomic Structure", "Chemical Bonding",
                "Periodic Table", "Acids and Bases",
                "Redox Reactions", "Chemical Equilibrium"
            ],
            organic: [
                "Alkanes", "Alkenes", "Alcohols",
                "Carboxylic Acids", "Aromatic Compounds"
            ],
            medical: [
                "Biochemistry", "Drug Chemistry",
                "Analytical Chemistry", "Medicinal Compounds"
            ]
        },
        concepts: {
            physical: ["temperature", "pressure", "concentration", "pH"],
            organic: ["isomers", "functional groups", "reactions", "mechanisms"],
            inorganic: ["elements", "compounds", "ions", "crystal structures"]
        }
    };

    const questions = [];
    const topics = variations.topics[type] || variations.topics.general;
    const difficulties = ["Easy", "Medium", "Hard"];

    for (let i = 0; i < count; i++) {
        const baseQuestion = baseQuestions[i % baseQuestions.length];
        const prefix = variations.prefixes[Math.floor(Math.random() * variations.prefixes.length)];
        const topic = topics[Math.floor(Math.random() * topics.length)];
        const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

        // Create variations by combining different concepts
        const concept = Object.values(variations.concepts)
            .flat()[Math.floor(Math.random() * Object.values(variations.concepts).flat().length)];

        questions.push({
            id: `${baseQuestion.id}_VAR_${i + 1}`,
            question: `${prefix} ${baseQuestion.question.toLowerCase()} considering ${concept}?`,
            options: shuffleArray([...baseQuestion.options]),
            difficulty,
            topic,
            subject: "Chemistry",
            examType: type
        });
    }

    return questions;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export { generateChemistryQuestions };
