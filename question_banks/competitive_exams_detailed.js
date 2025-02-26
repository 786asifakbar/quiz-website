const competitiveExamQuestions = {
    css_pms: {
        pakistan_affairs: [
            {
                id: "CSS_PAK_001",
                question: "Which amendment to the 1973 Constitution introduced the Federal Shariat Court?",
                options: [
                    { text: "8th Amendment", correct: true },
                    { text: "13th Amendment", correct: false },
                    { text: "17th Amendment", correct: false },
                    { text: "19th Amendment", correct: false }
                ],
                difficulty: "Hard",
                topic: "Constitutional History",
                year: "2022"
            },
            {
                id: "CSS_PAK_002",
                question: "What is the current status of CPEC projects in Pakistan as of 2025?",
                options: [
                    { text: "Phase II implementation", correct: true },
                    { text: "Initial planning stage", correct: false },
                    { text: "Project completion", correct: false },
                    { text: "Project suspension", correct: false }
                ],
                difficulty: "Medium",
                topic: "Current Affairs",
                year: "2025"
            }
        ],
        international_relations: [
            {
                id: "CSS_IR_001",
                question: "Which organization replaced SAARC as the primary regional cooperation forum in South Asia?",
                options: [
                    { text: "BIMSTEC", correct: true },
                    { text: "SCO", correct: false },
                    { text: "ASEAN", correct: false },
                    { text: "ECO", correct: false }
                ],
                difficulty: "Hard",
                topic: "Regional Organizations",
                year: "2023"
            }
        ],
        essay_writing: [
            {
                id: "CSS_ESS_001",
                question: "What are the key components of a CSS essay introduction?",
                options: [
                    { text: "Hook, background, thesis statement", correct: true },
                    { text: "Quote, statistics, conclusion", correct: false },
                    { text: "Definition, examples, summary", correct: false },
                    { text: "Background only", correct: false }
                ],
                difficulty: "Medium",
                topic: "Essay Structure",
                year: "2024"
            }
        ]
    },
    engineering_tests: {
        physics: [
            {
                id: "ECAT_PHY_001",
                question: "A projectile is launched at an angle of 45°. If air resistance is neglected, what is the ratio of horizontal range to maximum height?",
                options: [
                    { text: "4:1", correct: true },
                    { text: "2:1", correct: false },
                    { text: "1:1", correct: false },
                    { text: "3:1", correct: false }
                ],
                difficulty: "Hard",
                topic: "Projectile Motion",
                examType: "ECAT"
            }
        ],
        mathematics: [
            {
                id: "ECAT_MATH_001",
                question: "If the determinant of a 2×2 matrix is zero, what does it indicate about the matrix?",
                options: [
                    { text: "Matrix is singular", correct: true },
                    { text: "Matrix is symmetric", correct: false },
                    { text: "Matrix is diagonal", correct: false },
                    { text: "Matrix is identity", correct: false }
                ],
                difficulty: "Medium",
                topic: "Matrices",
                examType: "ECAT"
            }
        ]
    },
    medical_tests: {
        biology: [
            {
                id: "MDCAT_BIO_001",
                question: "During which phase of mitosis do chromosomes align at the metaphase plate?",
                options: [
                    { text: "Metaphase", correct: true },
                    { text: "Prophase", correct: false },
                    { text: "Anaphase", correct: false },
                    { text: "Telophase", correct: false }
                ],
                difficulty: "Medium",
                topic: "Cell Division",
                examType: "MDCAT"
            }
        ],
        chemistry: [
            {
                id: "MDCAT_CHEM_001",
                question: "What is the hybridization of carbon in ethene (C2H4)?",
                options: [
                    { text: "sp²", correct: true },
                    { text: "sp", correct: false },
                    { text: "sp³", correct: false },
                    { text: "sp³d", correct: false }
                ],
                difficulty: "Hard",
                topic: "Organic Chemistry",
                examType: "MDCAT"
            }
        ]
    },
    banking_finance: {
        accounting: [
            {
                id: "BANK_ACC_001",
                question: "Which financial ratio measures a company's ability to pay its short-term obligations?",
                options: [
                    { text: "Current Ratio", correct: true },
                    { text: "Debt-to-Equity Ratio", correct: false },
                    { text: "Return on Assets", correct: false },
                    { text: "Gross Profit Margin", correct: false }
                ],
                difficulty: "Medium",
                topic: "Financial Ratios",
                examType: "Banking"
            }
        ],
        islamic_banking: [
            {
                id: "BANK_ISL_001",
                question: "Which Islamic banking product is similar to conventional leasing?",
                options: [
                    { text: "Ijarah", correct: true },
                    { text: "Murabaha", correct: false },
                    { text: "Musharaka", correct: false },
                    { text: "Mudaraba", correct: false }
                ],
                difficulty: "Medium",
                topic: "Islamic Banking Products",
                examType: "Banking"
            }
        ]
    }
};
