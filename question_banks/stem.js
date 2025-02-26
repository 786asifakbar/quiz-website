const stemQuestions = {
    engineering: {
        civil: [
            {
                question: "What is the primary function of a foundation in construction?",
                answers: [
                    { text: "To transfer loads from the structure to the ground", correct: true },
                    { text: "To provide aesthetic appeal", correct: false },
                    { text: "To create living space", correct: false },
                    { text: "To store building materials", correct: false }
                ]
            },
            {
                question: "Which type of stress occurs when a force tries to stretch a material?",
                answers: [
                    { text: "Tensile stress", correct: true },
                    { text: "Compressive stress", correct: false },
                    { text: "Shear stress", correct: false },
                    { text: "Torsional stress", correct: false }
                ]
            }
        ],
        mechanical: [
            {
                question: "What is the First Law of Thermodynamics?",
                answers: [
                    { text: "Energy cannot be created or destroyed, only transformed", correct: true },
                    { text: "Heat flows from hot to cold", correct: false },
                    { text: "Force equals mass times acceleration", correct: false },
                    { text: "Every action has an equal and opposite reaction", correct: false }
                ]
            },
            {
                question: "What is the purpose of a heat exchanger?",
                answers: [
                    { text: "To transfer heat between two fluids without mixing them", correct: true },
                    { text: "To create heat from electricity", correct: false },
                    { text: "To store heat energy", correct: false },
                    { text: "To convert heat to mechanical energy", correct: false }
                ]
            }
        ],
        electrical: [
            {
                question: "What is Ohm's Law?",
                answers: [
                    { text: "V = IR", correct: true },
                    { text: "P = IV", correct: false },
                    { text: "E = mc²", correct: false },
                    { text: "F = ma", correct: false }
                ]
            },
            {
                question: "What is the function of a transformer?",
                answers: [
                    { text: "To change voltage levels in AC circuits", correct: true },
                    { text: "To store electrical energy", correct: false },
                    { text: "To convert AC to DC", correct: false },
                    { text: "To measure current", correct: false }
                ]
            }
        ]
    },
    medicine: {
        anatomy: [
            {
                question: "What is the largest organ in the human body?",
                answers: [
                    { text: "Skin", correct: true },
                    { text: "Liver", correct: false },
                    { text: "Brain", correct: false },
                    { text: "Heart", correct: false }
                ]
            },
            {
                question: "Which chamber of the heart pumps blood to the lungs?",
                answers: [
                    { text: "Right ventricle", correct: true },
                    { text: "Left ventricle", correct: false },
                    { text: "Right atrium", correct: false },
                    { text: "Left atrium", correct: false }
                ]
            }
        ],
        physiology: [
            {
                question: "What is the normal blood pH range?",
                answers: [
                    { text: "7.35-7.45", correct: true },
                    { text: "6.35-6.45", correct: false },
                    { text: "8.35-8.45", correct: false },
                    { text: "5.35-5.45", correct: false }
                ]
            },
            {
                question: "What is the main function of insulin?",
                answers: [
                    { text: "To lower blood glucose levels", correct: true },
                    { text: "To raise blood glucose levels", correct: false },
                    { text: "To digest proteins", correct: false },
                    { text: "To break down fats", correct: false }
                ]
            }
        ]
    },
    computer_science: {
        programming: [
            {
                question: "What is a variable in programming?",
                answers: [
                    { text: "A container for storing data values", correct: true },
                    { text: "A mathematical equation", correct: false },
                    { text: "A type of loop", correct: false },
                    { text: "A function name", correct: false }
                ]
            },
            {
                question: "What is an array?",
                answers: [
                    { text: "A data structure that stores multiple values in a single variable", correct: true },
                    { text: "A type of function", correct: false },
                    { text: "A programming language", correct: false },
                    { text: "A mathematical operation", correct: false }
                ]
            }
        ],
        algorithms: [
            {
                question: "What is the time complexity of binary search?",
                answers: [
                    { text: "O(log n)", correct: true },
                    { text: "O(n)", correct: false },
                    { text: "O(n²)", correct: false },
                    { text: "O(1)", correct: false }
                ]
            },
            {
                question: "What is recursion?",
                answers: [
                    { text: "A function that calls itself", correct: true },
                    { text: "A type of loop", correct: false },
                    { text: "A sorting algorithm", correct: false },
                    { text: "A data structure", correct: false }
                ]
            }
        ]
    },
    mathematics: {
        calculus: [
            {
                question: "What is the derivative of x²?",
                answers: [
                    { text: "2x", correct: true },
                    { text: "x", correct: false },
                    { text: "2", correct: false },
                    { text: "x³", correct: false }
                ]
            },
            {
                question: "What is the integral of 2x?",
                answers: [
                    { text: "x² + C", correct: true },
                    { text: "2x² + C", correct: false },
                    { text: "x + C", correct: false },
                    { text: "2x + C", correct: false }
                ]
            }
        ],
        statistics: [
            {
                question: "What is the mean of 2, 4, 6, 8, 10?",
                answers: [
                    { text: "6", correct: true },
                    { text: "5", correct: false },
                    { text: "7", correct: false },
                    { text: "8", correct: false }
                ]
            },
            {
                question: "What is standard deviation?",
                answers: [
                    { text: "A measure of variability in a dataset", correct: true },
                    { text: "The average of a dataset", correct: false },
                    { text: "The middle value of a dataset", correct: false },
                    { text: "The sum of all values", correct: false }
                ]
            }
        ]
    }
};
