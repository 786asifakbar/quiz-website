const professionalTechnicalQuestions = {
    it_computer_science: {
        programming: [
            {
                id: "IT_PRG_001",
                question: "What is the time complexity of binary search?",
                options: [
                    { text: "O(log n)", correct: true },
                    { text: "O(n)", correct: false },
                    { text: "O(n²)", correct: false },
                    { text: "O(1)", correct: false }
                ],
                difficulty: "Medium",
                topic: "Algorithms",
                language: "General"
            },
            {
                id: "IT_PRG_002",
                question: "In Python, what is the output of: [x*2 for x in range(3)]?",
                options: [
                    { text: "[0, 2, 4]", correct: true },
                    { text: "[2, 4, 6]", correct: false },
                    { text: "[1, 2, 3]", correct: false },
                    { text: "[0, 1, 2]", correct: false }
                ],
                difficulty: "Medium",
                topic: "Python",
                language: "Python"
            }
        ],
        web_development: [
            {
                id: "IT_WEB_001",
                question: "Which CSS property is used to make a flex container?",
                options: [
                    { text: "display: flex", correct: true },
                    { text: "position: flex", correct: false },
                    { text: "flex: 1", correct: false },
                    { text: "flex-wrap: true", correct: false }
                ],
                difficulty: "Easy",
                topic: "CSS",
                technology: "Frontend"
            }
        ],
        databases: [
            {
                id: "IT_DB_001",
                question: "What is the purpose of HAVING clause in SQL?",
                options: [
                    { text: "To filter grouped data", correct: true },
                    { text: "To sort data", correct: false },
                    { text: "To join tables", correct: false },
                    { text: "To filter individual rows", correct: false }
                ],
                difficulty: "Medium",
                topic: "SQL",
                technology: "Database"
            }
        ]
    },
    vocational_skills: {
        electrical: [
            {
                id: "VOC_ELEC_001",
                question: "What color wire is used for earthing in Pakistan's electrical system?",
                options: [
                    { text: "Green/Yellow", correct: true },
                    { text: "Red", correct: false },
                    { text: "Black", correct: false },
                    { text: "Blue", correct: false }
                ],
                difficulty: "Easy",
                topic: "Wiring",
                certification: "Electrician"
            }
        ],
        plumbing: [
            {
                id: "VOC_PLUM_001",
                question: "What is the standard pipe size for a home's main water supply in Pakistan?",
                options: [
                    { text: "1 inch", correct: true },
                    { text: "1/2 inch", correct: false },
                    { text: "2 inches", correct: false },
                    { text: "3/4 inch", correct: false }
                ],
                difficulty: "Medium",
                topic: "Pipe Sizing",
                certification: "Plumber"
            }
        ]
    },
    law: {
        constitutional: [
            {
                id: "LAW_CON_001",
                question: "Which article of Pakistan's Constitution deals with Fundamental Rights?",
                options: [
                    { text: "Articles 8-28", correct: true },
                    { text: "Articles 1-7", correct: false },
                    { text: "Articles 29-40", correct: false },
                    { text: "Articles 41-50", correct: false }
                ],
                difficulty: "Medium",
                topic: "Constitutional Rights",
                examType: "LLB"
            }
        ],
        criminal: [
            {
                id: "LAW_CRM_001",
                question: "Under which section of PPC is murder defined?",
                options: [
                    { text: "Section 300", correct: true },
                    { text: "Section 302", correct: false },
                    { text: "Section 299", correct: false },
                    { text: "Section 301", correct: false }
                ],
                difficulty: "Hard",
                topic: "Criminal Law",
                examType: "LLB"
            }
        ]
    },
    emerging_fields: {
        ai_ml: [
            {
                id: "EMG_AI_001",
                question: "Which algorithm is commonly used for image classification?",
                options: [
                    { text: "Convolutional Neural Network", correct: true },
                    { text: "Linear Regression", correct: false },
                    { text: "Decision Tree", correct: false },
                    { text: "K-means Clustering", correct: false }
                ],
                difficulty: "Hard",
                topic: "Deep Learning",
                field: "AI"
            }
        ],
        digital_marketing: [
            {
                id: "EMG_DM_001",
                question: "What is the purpose of meta descriptions in SEO?",
                options: [
                    { text: "To provide search result snippets", correct: true },
                    { text: "To rank higher in search", correct: false },
                    { text: "To store website data", correct: false },
                    { text: "To track visitors", correct: false }
                ],
                difficulty: "Medium",
                topic: "SEO",
                field: "Digital Marketing"
            }
        ],
        renewable_energy: [
            {
                id: "EMG_RE_001",
                question: "What is the average efficiency of commercial solar panels?",
                options: [
                    { text: "15-20%", correct: true },
                    { text: "5-10%", correct: false },
                    { text: "30-35%", correct: false },
                    { text: "40-45%", correct: false }
                ],
                difficulty: "Medium",
                topic: "Solar Energy",
                field: "Renewable Energy"
            }
        ]
    }
};
