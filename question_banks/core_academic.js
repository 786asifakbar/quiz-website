const coreAcademicQuestions = {
    mathematics: {
        algebra: [
            {
                id: "MATH_ALG_001",
                question: "Solve the quadratic equation: x² + 5x + 6 = 0",
                options: [
                    { text: "x = -2 or x = -3", correct: true },
                    { text: "x = 2 or x = 3", correct: false },
                    { text: "x = -2 or x = 3", correct: false },
                    { text: "x = 2 or x = -3", correct: false }
                ],
                difficulty: "Medium",
                topic: "Quadratic Equations",
                examType: ["Matric", "ECAT"]
            },
            {
                id: "MATH_ALG_002",
                question: "If a² + b² = 25 and ab = 12, find the value of (a + b)²",
                options: [
                    { text: "49", correct: true },
                    { text: "25", correct: false },
                    { text: "24", correct: false },
                    { text: "36", correct: false }
                ],
                difficulty: "Hard",
                topic: "Algebraic Expressions",
                examType: ["Intermediate", "ECAT"]
            }
        ],
        geometry: [
            {
                id: "MATH_GEO_001",
                question: "In a right-angled triangle, if one angle is 30°, what is the other acute angle?",
                options: [
                    { text: "60°", correct: true },
                    { text: "45°", correct: false },
                    { text: "30°", correct: false },
                    { text: "90°", correct: false }
                ],
                difficulty: "Easy",
                topic: "Triangle Properties",
                examType: ["Matric"]
            }
        ],
        calculus: [
            {
                id: "MATH_CAL_001",
                question: "Find the derivative of y = x³ + 2x² - 4x + 1",
                options: [
                    { text: "3x² + 4x - 4", correct: true },
                    { text: "3x² + 2x - 4", correct: false },
                    { text: "x³ + 4x - 4", correct: false },
                    { text: "3x² + 4x - 1", correct: false }
                ],
                difficulty: "Medium",
                topic: "Differentiation",
                examType: ["Intermediate", "ECAT"]
            }
        ]
    },
    pakistan_studies: {
        history: [
            {
                id: "PKS_HIS_001",
                question: "Which important resolution was passed on March 23, 1940?",
                options: [
                    { text: "Pakistan Resolution", correct: true },
                    { text: "Independence Resolution", correct: false },
                    { text: "Partition Resolution", correct: false },
                    { text: "Muslim League Resolution", correct: false }
                ],
                difficulty: "Easy",
                topic: "Creation of Pakistan",
                examType: ["Matric", "CSS"]
            },
            {
                id: "PKS_HIS_002",
                question: "Who was the first Prime Minister of Pakistan?",
                options: [
                    { text: "Liaquat Ali Khan", correct: true },
                    { text: "Muhammad Ali Jinnah", correct: false },
                    { text: "Khawaja Nazimuddin", correct: false },
                    { text: "Ibrahim Ismail Chundrigar", correct: false }
                ],
                difficulty: "Easy",
                topic: "Early Leadership",
                examType: ["Matric", "CSS"]
            }
        ],
        geography: [
            {
                id: "PKS_GEO_001",
                question: "Which is Pakistan's largest province by area?",
                options: [
                    { text: "Balochistan", correct: true },
                    { text: "Punjab", correct: false },
                    { text: "Sindh", correct: false },
                    { text: "Khyber Pakhtunkhwa", correct: false }
                ],
                difficulty: "Easy",
                topic: "Provincial Geography",
                examType: ["Matric", "CSS"]
            }
        ]
    },
    islamic_studies: {
        quran: [
            {
                id: "ISL_QUR_001",
                question: "Which Surah is known as the heart of the Quran?",
                options: [
                    { text: "Surah Yasin", correct: true },
                    { text: "Surah Fatiha", correct: false },
                    { text: "Surah Ikhlas", correct: false },
                    { text: "Surah Rahman", correct: false }
                ],
                difficulty: "Medium",
                topic: "Quranic Knowledge",
                examType: ["Matric", "CSS"]
            }
        ],
        hadith: [
            {
                id: "ISL_HAD_001",
                question: "Who compiled Sahih Bukhari?",
                options: [
                    { text: "Imam Bukhari", correct: true },
                    { text: "Imam Muslim", correct: false },
                    { text: "Imam Abu Dawud", correct: false },
                    { text: "Imam Tirmidhi", correct: false }
                ],
                difficulty: "Medium",
                topic: "Hadith Collection",
                examType: ["Intermediate", "CSS"]
            }
        ]
    },
    english: {
        grammar: [
            {
                id: "ENG_GRM_001",
                question: "Choose the correct form of the verb: He _____ to school every day.",
                options: [
                    { text: "goes", correct: true },
                    { text: "go", correct: false },
                    { text: "going", correct: false },
                    { text: "gone", correct: false }
                ],
                difficulty: "Easy",
                topic: "Verb Forms",
                examType: ["Matric"]
            }
        ],
        comprehension: [
            {
                id: "ENG_COM_001",
                question: "What is the main purpose of a topic sentence in a paragraph?",
                options: [
                    { text: "To introduce the main idea", correct: true },
                    { text: "To conclude the paragraph", correct: false },
                    { text: "To add supporting details", correct: false },
                    { text: "To create a transition", correct: false }
                ],
                difficulty: "Medium",
                topic: "Reading Comprehension",
                examType: ["Intermediate", "CSS"]
            }
        ]
    },
    general_science: {
        physics: [
            {
                id: "SCI_PHY_001",
                question: "What is the SI unit of force?",
                options: [
                    { text: "Newton", correct: true },
                    { text: "Joule", correct: false },
                    { text: "Pascal", correct: false },
                    { text: "Watt", correct: false }
                ],
                difficulty: "Easy",
                topic: "Units and Measurements",
                examType: ["Matric", "ECAT"]
            }
        ],
        chemistry: [
            {
                id: "SCI_CHM_001",
                question: "What is the atomic number of Carbon?",
                options: [
                    { text: "6", correct: true },
                    { text: "12", correct: false },
                    { text: "14", correct: false },
                    { text: "8", correct: false }
                ],
                difficulty: "Easy",
                topic: "Atomic Structure",
                examType: ["Matric", "MDCAT"]
            }
        ],
        biology: [
            {
                id: "SCI_BIO_001",
                question: "Which organelle is known as the powerhouse of the cell?",
                options: [
                    { text: "Mitochondria", correct: true },
                    { text: "Nucleus", correct: false },
                    { text: "Ribosome", correct: false },
                    { text: "Golgi body", correct: false }
                ],
                difficulty: "Easy",
                topic: "Cell Biology",
                examType: ["Matric", "MDCAT"]
            }
        ]
    }
};
