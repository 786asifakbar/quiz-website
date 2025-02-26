class UrduQuiz {
    constructor(container) {
        this.container = container;
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [];
        this.timePerQuestion = 30; // seconds
        this.timer = null;
        this.initializeStyles();
    }

    initializeStyles() {
        // Add Urdu font styles
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
            
            .urdu-quiz {
                font-family: 'Noto Nastaliq Urdu', serif;
                direction: rtl;
                text-align: right;
                padding: 20px;
                max-width: 800px;
                margin: 0 auto;
            }

            .urdu-quiz .question {
                font-size: 24px;
                margin-bottom: 20px;
                line-height: 1.6;
            }

            .urdu-quiz .options {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .urdu-quiz .option {
                padding: 15px;
                border: 2px solid #ddd;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 18px;
            }

            .urdu-quiz .option:hover {
                background-color: #f0f0f0;
            }

            .urdu-quiz .option.selected {
                background-color: #e3f2fd;
                border-color: #2196f3;
            }

            .urdu-quiz .option.correct {
                background-color: #c8e6c9;
                border-color: #4caf50;
            }

            .urdu-quiz .option.incorrect {
                background-color: #ffcdd2;
                border-color: #f44336;
            }

            .urdu-quiz .timer {
                font-size: 20px;
                margin-bottom: 15px;
                color: #666;
            }

            .urdu-quiz .score {
                font-size: 22px;
                margin-top: 20px;
                text-align: center;
            }

            .urdu-quiz .controls {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }

            .urdu-quiz button {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                background-color: #2196f3;
                color: white;
                cursor: pointer;
                font-family: 'Noto Nastaliq Urdu', serif;
                font-size: 18px;
            }

            .urdu-quiz button:disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }
        `;
        document.head.appendChild(style);
    }

    loadQuestions(questions) {
        this.questions = questions;
        this.currentQuestion = 0;
        this.score = 0;
        this.render();
    }

    startTimer() {
        let timeLeft = this.timePerQuestion;
        this.updateTimer(timeLeft);

        this.timer = setInterval(() => {
            timeLeft--;
            this.updateTimer(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(this.timer);
                this.handleTimeout();
            }
        }, 1000);
    }

    updateTimer(timeLeft) {
        const timerElement = this.container.querySelector('.timer');
        if (timerElement) {
            timerElement.textContent = `وقت باقی: ${timeLeft} سیکنڈ`;
        }
    }

    handleTimeout() {
        this.showResult(false);
        setTimeout(() => this.nextQuestion(), 2000);
    }

    handleAnswer(selectedIndex) {
        clearInterval(this.timer);
        const correct = this.questions[this.currentQuestion].options[selectedIndex].correct;
        
        if (correct) {
            this.score++;
        }

        this.showResult(correct);
        setTimeout(() => this.nextQuestion(), 2000);
    }

    showResult(correct) {
        const options = this.container.querySelectorAll('.option');
        options.forEach((option, index) => {
            if (this.questions[this.currentQuestion].options[index].correct) {
                option.classList.add('correct');
            } else if (option === options[selectedIndex] && !correct) {
                option.classList.add('incorrect');
            }
        });
    }

    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion < this.questions.length) {
            this.render();
        } else {
            this.showFinalScore();
        }
    }

    showFinalScore() {
        this.container.innerHTML = `
            <div class="urdu-quiz">
                <div class="score">
                    <h2>کوئز مکمل!</h2>
                    <p>آپ کا اسکور: ${this.score}/${this.questions.length}</p>
                </div>
                <div class="controls">
                    <button onclick="location.reload()">دوبارہ کوشش کریں</button>
                </div>
            </div>
        `;
    }

    render() {
        const question = this.questions[this.currentQuestion];
        this.container.innerHTML = `
            <div class="urdu-quiz">
                <div class="timer">وقت باقی: ${this.timePerQuestion} سیکنڈ</div>
                <div class="question">${question.question}</div>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option" onclick="quiz.handleAnswer(${index})">
                            ${option.text}
                        </div>
                    `).join('')}
                </div>
                <div class="score">
                    اسکور: ${this.score}/${this.questions.length}
                </div>
            </div>
        `;
        this.startTimer();
    }
}

export { UrduQuiz };
