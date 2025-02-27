const quizQuestions = [
    // History Category
    {
        category: "History",
        question: "Who is known as the founder of Pakistan?",
        answers: {
            a: "Quaid-e-Azam Muhammad Ali Jinnah",
            b: "Allama Iqbal",
            c: "Liaquat Ali Khan"
        },
        correctAnswer: "a",
        feedback: "Quaid-e-Azam Muhammad Ali Jinnah is known as the founder of Pakistan and served as its first Governor-General."
    },
    {
        category: "History",
        question: "In which year did Pakistan gain independence?",
        answers: {
            a: "1945",
            b: "1947",
            c: "1950"
        },
        correctAnswer: "b",
        feedback: "Pakistan gained independence from British rule on August 14, 1947."
    },
    {
        category: "History",
        question: "Who was Pakistan's first Prime Minister?",
        answers: {
            a: "Quaid-e-Azam",
            b: "Liaquat Ali Khan",
            c: "Khawaja Nazimuddin"
        },
        correctAnswer: "b",
        feedback: "Liaquat Ali Khan served as Pakistan's first Prime Minister from 1947 until his assassination in 1951."
    },
    {
        category: "History",
        question: "When did Pakistan become a nuclear power?",
        answers: {
            a: "1998",
            b: "1999",
            c: "2000"
        },
        correctAnswer: "a",
        feedback: "Pakistan conducted its nuclear tests in May 1998, becoming the world's 7th nuclear power."
    },

    // Geography Category
    {
        category: "Geography",
        question: "What is the capital of Pakistan?",
        answers: {
            a: "Lahore",
            b: "Islamabad",
            c: "Karachi"
        },
        correctAnswer: "b",
        feedback: "Islamabad has been the capital of Pakistan since 1967."
    },
    {
        category: "Geography",
        question: "Which mountain is the highest in Pakistan?",
        answers: {
            a: "Nanga Parbat",
            b: "K2",
            c: "Tirich Mir"
        },
        correctAnswer: "b",
        feedback: "K2, at 8,611 meters, is the second-highest mountain in the world and the highest in Pakistan."
    },
    {
        category: "Geography",
        question: "What is the largest province of Pakistan by area?",
        answers: {
            a: "Balochistan",
            b: "Punjab",
            c: "Sindh"
        },
        correctAnswer: "a",
        feedback: "Balochistan is Pakistan's largest province by area, covering approximately 44% of the country's total land area."
    },
    {
        category: "Geography",
        question: "Which river is the longest in Pakistan?",
        answers: {
            a: "Indus River",
            b: "Chenab River",
            c: "Jhelum River"
        },
        correctAnswer: "a",
        feedback: "The Indus River is Pakistan's longest and most important river system."
    },

    // Culture Category
    {
        category: "Culture",
        question: "What is the national language of Pakistan?",
        answers: {
            a: "English",
            b: "Urdu",
            c: "Punjabi"
        },
        correctAnswer: "b",
        feedback: "Urdu is the national language of Pakistan, though English is also an official language."
    },
    {
        category: "Culture",
        question: "What is Pakistan's national flower?",
        answers: {
            a: "Rose",
            b: "Jasmine",
            c: "Tulip"
        },
        correctAnswer: "b",
        feedback: "Jasmine (Chambeli) is Pakistan's national flower, known for its sweet fragrance."
    },
    {
        category: "Culture",
        question: "Which is the most widely spoken regional language in Pakistan?",
        answers: {
            a: "Sindhi",
            b: "Punjabi",
            c: "Pashto"
        },
        correctAnswer: "b",
        feedback: "Punjabi is the most widely spoken regional language in Pakistan."
    },

    // Sports Category
    {
        category: "Sports",
        question: "What is Pakistan's national sport?",
        answers: {
            a: "Cricket",
            b: "Hockey",
            c: "Football"
        },
        correctAnswer: "b",
        feedback: "Field Hockey is Pakistan's national sport, though cricket is more popular among the masses."
    },
    {
        category: "Sports",
        question: "In which year did Pakistan win its first Cricket World Cup?",
        answers: {
            a: "1987",
            b: "1992",
            c: "1996"
        },
        correctAnswer: "b",
        feedback: "Pakistan won its first Cricket World Cup in 1992 under Imran Khan's captaincy."
    },
    {
        category: "Sports",
        question: "How many Olympic Gold Medals has Pakistan won in Hockey?",
        answers: {
            a: "1",
            b: "2",
            c: "3"
        },
        correctAnswer: "c",
        feedback: "Pakistan has won 3 Olympic Gold Medals in Hockey (1960, 1968, and 1984)."
    },

    // Economy Category
    {
        category: "Economy",
        question: "What is Pakistan's major export?",
        answers: {
            a: "Textiles",
            b: "Petroleum",
            c: "Electronics"
        },
        correctAnswer: "a",
        feedback: "Textiles and clothing are Pakistan's largest export sector."
    },
    {
        category: "Economy",
        question: "Which is Pakistan's largest industrial city?",
        answers: {
            a: "Lahore",
            b: "Karachi",
            c: "Faisalabad"
        },
        correctAnswer: "b",
        feedback: "Karachi is Pakistan's largest industrial city and economic hub."
    },
    {
        category: "Economy",
        question: "What is Pakistan's currency called?",
        answers: {
            a: "Rupee",
            b: "Riyal",
            c: "Dinar"
        },
        correctAnswer: "a",
        feedback: "The Pakistani Rupee (PKR) is the official currency of Pakistan."
    },

    // Science & Technology
    {
        category: "Science & Technology",
        question: "Who was Pakistan's only Nobel Prize winner in Science?",
        answers: {
            a: "Dr. Abdul Qadeer Khan",
            b: "Dr. Abdus Salam",
            c: "Dr. Atta-ur-Rahman"
        },
        correctAnswer: "b",
        feedback: "Dr. Abdus Salam won the Nobel Prize in Physics in 1979 for his contribution to electroweak unification theory."
    },
    {
        category: "Science & Technology",
        question: "Which Pakistani satellite was launched in 2018?",
        answers: {
            a: "PakSat-1R",
            b: "PRSS-1",
            c: "Badr-1"
        },
        correctAnswer: "b",
        feedback: "PRSS-1 (Pakistan Remote Sensing Satellite) was launched in 2018 for Earth observation."
    },

    // Literature
    {
        category: "Literature",
        question: "Who wrote Pakistan's national anthem?",
        answers: {
            a: "Allama Iqbal",
            b: "Hafeez Jalandhari",
            c: "Faiz Ahmad Faiz"
        },
        correctAnswer: "b",
        feedback: "The national anthem was written by Hafeez Jalandhari in 1952."
    },
    {
        category: "Literature",
        question: "Who is known as the 'Poet of the East'?",
        answers: {
            a: "Allama Iqbal",
            b: "Faiz Ahmad Faiz",
            c: "Ahmed Faraz"
        },
        correctAnswer: "a",
        feedback: "Allama Iqbal is known as the 'Poet of the East' (Shaair-e-Mashriq)."
    },

    // Current Affairs
    {
        category: "Current Affairs",
        question: "What is the name of Pakistan's current largest poverty alleviation program?",
        answers: {
            a: "Benazir Income Support",
            b: "Ehsaas Program",
            c: "Zakat Program"
        },
        correctAnswer: "b",
        feedback: "The Ehsaas Program is Pakistan's largest poverty alleviation program launched in 2019."
    },
    {
        category: "Current Affairs",
        question: "Which major economic corridor project connects Pakistan with China?",
        answers: {
            a: "CPEC",
            b: "TAPI",
            c: "IPI"
        },
        correctAnswer: "a",
        feedback: "CPEC (China-Pakistan Economic Corridor) is a major economic corridor project between Pakistan and China."
    }
];

function buildQuiz() {
    const output = [];
    let currentCategory = "";

    quizQuestions.forEach((questionData, index) => {
        // Add category header if it's a new category
        if (currentCategory !== questionData.category) {
            currentCategory = questionData.category;
            output.push(`<h2 class="category-header">${currentCategory}</h2>`);
        }

        const answers = [];

        for (const letter in questionData.answers) {
            answers.push(
                `<label class="answer-option">
                    <input type="radio" name="question${index}" value="${letter}">
                    ${letter}: ${questionData.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">
                <div class="question-title">${index + 1}. ${questionData.question}</div>
                <div class="answers">${answers.join('')}</div>
            </div>`
        );
    });

    document.getElementById('quiz').innerHTML = output.join('');
}

function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let categoryScores = {};

    quizQuestions.forEach((questionData, index) => {
        const answerContainer = answerContainers[index];
        const question = questions[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Initialize category score if not exists
        if (!categoryScores[questionData.category]) {
            categoryScores[questionData.category] = {
                correct: 0,
                total: 0
            };
        }
        categoryScores[questionData.category].total++;

        if (userAnswer === questionData.correctAnswer) {
            score++;
            categoryScores[questionData.category].correct++;
            question.style.borderColor = '#4caf50';
            const feedback = document.createElement('div');
            feedback.className = 'feedback correct';
            feedback.textContent = '✓ Correct! ' + questionData.feedback;
            question.appendChild(feedback);
        } else {
            question.style.borderColor = '#f44336';
            const feedback = document.createElement('div');
            feedback.className = 'feedback wrong';
            feedback.textContent = `✗ Incorrect. The correct answer is ${questionData.correctAnswer}: ${questionData.answers[questionData.correctAnswer]}. ${questionData.feedback}`;
            question.appendChild(feedback);
        }
    });

    // Display overall and category-wise scores
    const resultsContainer = document.getElementById('results');
    let resultsHTML = `<h2>Your Overall Score: ${score} out of ${quizQuestions.length}</h2>`;
    resultsHTML += '<h3>Category-wise Scores:</h3>';
    
    for (const category in categoryScores) {
        const categoryScore = categoryScores[category];
        const percentage = ((categoryScore.correct / categoryScore.total) * 100).toFixed(1);
        resultsHTML += `<p>${category}: ${categoryScore.correct}/${categoryScore.total} (${percentage}%)</p>`;
    }
    
    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.className = '';
}

// Build quiz when the page loads
document.addEventListener('DOMContentLoaded', buildQuiz);

// Show results when submit button is clicked
document.getElementById('submit').addEventListener('click', showResults);
