function generateBiologyQuestions(count, type = 'general') {
    const baseQuestions = [
        {
            id: "BIO_001",
            question: "What is the powerhouse of the cell?",
            options: [
                { text: "Mitochondria", correct: true },
                { text: "Nucleus", correct: false },
                { text: "Endoplasmic Reticulum", correct: false },
                { text: "Golgi Apparatus", correct: false }
            ],
            difficulty: "Easy",
            topic: "Cell Biology"
        },
        {
            id: "BIO_002",
            question: "Which of these is not a nucleotide base found in DNA?",
            options: [
                { text: "Uracil", correct: true },
                { text: "Adenine", correct: false },
                { text: "Guanine", correct: false },
                { text: "Cytosine", correct: false }
            ],
            difficulty: "Medium",
            topic: "Molecular Biology"
        },
        {
            id: "BIO_003",
            question: "What is the process by which plants convert light energy into chemical energy?",
            options: [
                { text: "Photosynthesis", correct: true },
                { text: "Respiration", correct: false },
                { text: "Fermentation", correct: false },
                { text: "Glycolysis", correct: false }
            ],
            difficulty: "Easy",
            topic: "Plant Biology"
        }
    ];

    const variations = {
        prefixes: [
            "Identify", "Explain", "Describe", "What is",
            "Define", "Compare", "Analyze", "Evaluate"
        ],
        topics: {
            general: [
                "Cell Biology", "Genetics", "Evolution",
                "Ecology", "Physiology", "Taxonomy"
            ],
            medical: [
                "Human Anatomy", "Physiology", "Pathology",
                "Immunology", "Neuroscience", "Pharmacology"
            ],
            biotechnology: [
                "Genetic Engineering", "Microbiology",
                "Molecular Biology", "Biochemistry"
            ]
        },
        concepts: {
            cellular: ["organelles", "membranes", "metabolism", "division"],
            molecular: ["DNA", "RNA", "proteins", "enzymes"],
            systems: ["nervous", "circulatory", "respiratory", "digestive"]
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
            question: `${prefix} ${baseQuestion.question.toLowerCase()} in relation to ${concept}?`,
            options: shuffleArray([...baseQuestion.options]),
            difficulty,
            topic,
            subject: "Biology",
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

export { generateBiologyQuestions };
