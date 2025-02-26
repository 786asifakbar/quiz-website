const professionalQuestions = {
    civil_eng: [
        {
            question: "What is the minimum grade of concrete recommended for RCC work?",
            answers: [
                { text: "M20", correct: true },
                { text: "M15", correct: false },
                { text: "M25", correct: false },
                { text: "M30", correct: false }
            ]
        },
        {
            question: "Which test is used to determine the workability of concrete?",
            answers: [
                { text: "Slump test", correct: true },
                { text: "Compression test", correct: false },
                { text: "Tensile test", correct: false },
                { text: "Impact test", correct: false }
            ]
        }
    ],
    electrical_eng: [
        {
            question: "What is the purpose of an MCB (Miniature Circuit Breaker)?",
            answers: [
                { text: "To protect against overcurrent and short circuit", correct: true },
                { text: "To measure voltage", correct: false },
                { text: "To store electrical energy", correct: false },
                { text: "To convert AC to DC", correct: false }
            ]
        },
        {
            question: "What is the standard frequency of electricity in Pakistan?",
            answers: [
                { text: "50 Hz", correct: true },
                { text: "60 Hz", correct: false },
                { text: "40 Hz", correct: false },
                { text: "55 Hz", correct: false }
            ]
        }
    ],
    mbbs: [
        {
            question: "What is the normal respiratory rate in adults?",
            answers: [
                { text: "12-20 breaths per minute", correct: true },
                { text: "25-30 breaths per minute", correct: false },
                { text: "5-10 breaths per minute", correct: false },
                { text: "30-40 breaths per minute", correct: false }
            ]
        },
        {
            question: "Which vitamin deficiency causes night blindness?",
            answers: [
                { text: "Vitamin A", correct: true },
                { text: "Vitamin B", correct: false },
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: false }
            ]
        }
    ],
    pharmacy: [
        {
            question: "What is the half-life of a drug?",
            answers: [
                { text: "Time taken for drug concentration to reduce by 50%", correct: true },
                { text: "Time taken for complete drug absorption", correct: false },
                { text: "Time taken for drug distribution", correct: false },
                { text: "Time taken for complete drug elimination", correct: false }
            ]
        },
        {
            question: "Which route of drug administration has the fastest absorption?",
            answers: [
                { text: "Intravenous", correct: true },
                { text: "Oral", correct: false },
                { text: "Subcutaneous", correct: false },
                { text: "Intramuscular", correct: false }
            ]
        }
    ],
    electrical_wiring: [
        {
            question: "What color wire is typically used for neutral in Pakistan?",
            answers: [
                { text: "Black", correct: true },
                { text: "Red", correct: false },
                { text: "Green", correct: false },
                { text: "Yellow", correct: false }
            ]
        },
        {
            question: "What is the standard voltage for domestic supply in Pakistan?",
            answers: [
                { text: "220V", correct: true },
                { text: "110V", correct: false },
                { text: "440V", correct: false },
                { text: "330V", correct: false }
            ]
        }
    ],
    plumbing: [
        {
            question: "What is the purpose of a P-trap in plumbing?",
            answers: [
                { text: "To prevent sewer gases from entering the building", correct: true },
                { text: "To increase water pressure", correct: false },
                { text: "To filter water", correct: false },
                { text: "To reduce water consumption", correct: false }
            ]
        },
        {
            question: "Which pipe material is most commonly used for water supply in Pakistan?",
            answers: [
                { text: "PPR (Polypropylene Random)", correct: true },
                { text: "PVC", correct: false },
                { text: "Copper", correct: false },
                { text: "GI", correct: false }
            ]
        }
    ]
};
