const professionalQuestions = {
    it: {
        programming: [
            // 200 Programming Questions
            {
                id: "IT_PROG_001",
                question: "What is the time complexity of quicksort in average case?",
                options: [
                    { text: "O(n log n)", correct: true },
                    { text: "O(n²)", correct: false },
                    { text: "O(n)", correct: false },
                    { text: "O(log n)", correct: false }
                ],
                difficulty: "Hard",
                topic: "Algorithms"
            },
            // Add 199 more Programming questions
        ],
        web_development: [
            // 200 Web Development Questions
            {
                id: "IT_WEB_001",
                question: "Which HTTP status code indicates a successful request?",
                options: [
                    { text: "200", correct: true },
                    { text: "404", correct: false },
                    { text: "500", correct: false },
                    { text: "301", correct: false }
                ],
                difficulty: "Easy",
                topic: "HTTP Protocol"
            },
            // Add 199 more Web Development questions
        ]
    },
    engineering: {
        electrical: [
            // 200 Electrical Engineering Questions
            {
                id: "ENG_ELEC_001",
                question: "What is the purpose of a transformer?",
                options: [
                    { text: "To change voltage levels", correct: true },
                    { text: "To store energy", correct: false },
                    { text: "To generate electricity", correct: false },
                    { text: "To convert AC to DC", correct: false }
                ],
                difficulty: "Medium",
                topic: "Power Systems"
            },
            // Add 199 more Electrical Engineering questions
        ],
        mechanical: [
            // 200 Mechanical Engineering Questions
            {
                id: "ENG_MECH_001",
                question: "What is the first law of thermodynamics?",
                options: [
                    { text: "Energy cannot be created or destroyed", correct: true },
                    { text: "Heat flows from hot to cold", correct: false },
                    { text: "Force equals mass times acceleration", correct: false },
                    { text: "Pressure is force per unit area", correct: false }
                ],
                difficulty: "Medium",
                topic: "Thermodynamics"
            },
            // Add 199 more Mechanical Engineering questions
        ]
    },
    medical: {
        anatomy: [
            // 200 Anatomy Questions
            {
                id: "MED_ANAT_001",
                question: "Which bone is the longest in the human body?",
                options: [
                    { text: "Femur", correct: true },
                    { text: "Tibia", correct: false },
                    { text: "Humerus", correct: false },
                    { text: "Fibula", correct: false }
                ],
                difficulty: "Easy",
                topic: "Skeletal System"
            },
            // Add 199 more Anatomy questions
        ],
        physiology: [
            // 200 Physiology Questions
            {
                id: "MED_PHYS_001",
                question: "What is the normal resting heart rate in adults?",
                options: [
                    { text: "60-100 beats per minute", correct: true },
                    { text: "40-60 beats per minute", correct: false },
                    { text: "100-120 beats per minute", correct: false },
                    { text: "120-140 beats per minute", correct: false }
                ],
                difficulty: "Easy",
                topic: "Cardiovascular System"
            },
            // Add 199 more Physiology questions
        ]
    }
};
