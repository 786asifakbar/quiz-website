const quizQuestions = [
    {
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
        question: "Which river is the longest in Pakistan?",
        answers: {
            a: "Indus River",
            b: "Chenab River",
            c: "Jhelum River"
        },
        correctAnswer: "a",
        feedback: "The Indus River is Pakistan's longest and most important river system."
    },
    {
        question: "What is Pakistan's major export?",
        answers: {
            a: "Textiles",
            b: "Petroleum",
            c: "Electronics"
        },
        correctAnswer: "a",
        feedback: "Textiles and clothing are Pakistan's largest export sector."
    }
];

function buildQuiz() {
    const output = [];

    quizQuestions.forEach((questionData, index) => {
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

    quizQuestions.forEach((questionData, index) => {
        const answerContainer = answerContainers[index];
        const question = questions[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === questionData.correctAnswer) {
            score++;
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

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<h2>Your Score: ${score} out of ${quizQuestions.length}</h2>`;
    resultsContainer.className = '';
}

// Build quiz when the page loads
document.addEventListener('DOMContentLoaded', buildQuiz);

// Show results when submit button is clicked
document.getElementById('submit').addEventListener('click', showResults);
