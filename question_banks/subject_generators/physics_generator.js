function generatePhysicsQuestions(count, type = 'general') {
    const baseQuestions = [
        {
            id: "PHY_001",
            question: "What is the SI unit of force?",
            options: [
                { text: "Newton", correct: true },
                { text: "Joule", correct: false },
                { text: "Pascal", correct: false },
                { text: "Watt", correct: false }
            ],
            difficulty: "Easy",
            topic: "Units and Measurements"
        },
        {
            id: "PHY_002",
            question: "What is the acceleration due to gravity on Earth's surface?",
            options: [
                { text: "9.8 m/s²", correct: true },
                { text: "10 m/s²", correct: false },
                { text: "8.9 m/s²", correct: false },
                { text: "11.2 m/s²", correct: false }
            ],
            difficulty: "Easy",
            topic: "Gravitation"
        },
        {
            id: "PHY_003",
            question: "Which law states that for every action, there is an equal and opposite reaction?",
            options: [
                { text: "Newton's Third Law", correct: true },
                { text: "Newton's First Law", correct: false },
                { text: "Newton's Second Law", correct: false },
                { text: "Law of Conservation of Momentum", correct: false }
            ],
            difficulty: "Medium",
            topic: "Newton's Laws"
        }
    ];

    const variations = {
        prefixes: [
            "Calculate", "Determine", "Find", "What is",
            "Explain", "Describe", "State", "Define"
        ],
        topics: {
            general: [
                "Mechanics", "Waves", "Optics", "Thermodynamics",
                "Electricity", "Magnetism", "Modern Physics"
            ],
            engineering: [
                "Circuit Analysis", "Electromagnetic Theory",
                "Quantum Mechanics", "Solid State Physics"
            ],
            medical: [
                "Medical Imaging", "Radiation Physics",
                "Bioelectricity", "Fluid Dynamics"
            ]
        },
        concepts: {
            mechanics: ["velocity", "acceleration", "force", "momentum", "energy"],
            waves: ["frequency", "amplitude", "wavelength", "interference"],
            thermodynamics: ["temperature", "heat", "entropy", "pressure"],
            electricity: ["current", "voltage", "resistance", "power"]
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
            question: `${prefix} ${baseQuestion.question.toLowerCase()} in terms of ${concept}?`,
            options: shuffleArray([...baseQuestion.options]),
            difficulty,
            topic,
            subject: "Physics",
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

export { generatePhysicsQuestions };
