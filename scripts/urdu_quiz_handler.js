import { generateUrduQuestions } from '../question_banks/subject_generators/urdu_generator.js';
import { UrduQuiz } from '../components/urdu_quiz.js';

class UrduQuizHandler {
    constructor() {
        this.quiz = null;
        this.categories = {
            grammar: {
                name: 'اردو گرامر',
                count: 200
            },
            literature: {
                name: 'اردو ادب',
                count: 200
            },
            islamiat: {
                name: 'اسلامیات',
                count: 150
            },
            history: {
                name: 'پاکستانی تاریخ',
                count: 150
            },
            science: {
                name: 'سائنس',
                count: 100
            },
            current: {
                name: 'موجودہ معاملات',
                count: 100
            }
        };
    }

    initialize() {
        const container = document.getElementById('urduQuizContainer');
        this.quiz = new UrduQuiz(container);
        this.setupEventListeners();
    }

    setupEventListeners() {
        Object.keys(this.categories).forEach(category => {
            const button = document.querySelector(`button[onclick="loadQuiz('${category}')"]`);
            if (button) {
                button.addEventListener('click', () => this.loadQuiz(category));
            }
        });
    }

    loadQuiz(category) {
        const categoryConfig = this.categories[category];
        const questions = generateUrduQuestions(categoryConfig.count, category);
        this.quiz.loadQuestions(questions);

        // Update UI
        document.querySelector('.category-selection').style.display = 'none';
        document.querySelector('#quizContainer').style.display = 'block';
    }

    switchLanguage(lang) {
        const urduContainer = document.getElementById('urduQuizContainer');
        const englishContainer = document.getElementById('englishQuizContainer');
        
        if (lang === 'ur') {
            urduContainer.style.display = 'block';
            englishContainer.style.display = 'none';
            document.querySelector('button[onclick="switchLanguage(\'ur\')"]').classList.add('active');
            document.querySelector('button[onclick="switchLanguage(\'en\')"]').classList.remove('active');
        } else {
            urduContainer.style.display = 'none';
            englishContainer.style.display = 'block';
            document.querySelector('button[onclick="switchLanguage(\'en\')"]').classList.add('active');
            document.querySelector('button[onclick="switchLanguage(\'ur\')"]').classList.remove('active');
        }
    }

    // Leader board functionality
    updateLeaderBoard(score) {
        const leaderBoard = JSON.parse(localStorage.getItem('urduQuizLeaderBoard') || '[]');
        leaderBoard.push({
            score: score,
            date: new Date().toISOString(),
            category: this.currentCategory
        });
        
        // Sort by score and keep top 10
        leaderBoard.sort((a, b) => b.score - a.score);
        leaderBoard.splice(10);
        
        localStorage.setItem('urduQuizLeaderBoard', JSON.stringify(leaderBoard));
        this.displayLeaderBoard();
    }

    displayLeaderBoard() {
        const leaderBoard = JSON.parse(localStorage.getItem('urduQuizLeaderBoard') || '[]');
        const container = document.getElementById('leaderBoard');
        if (!container) return;

        container.innerHTML = `
            <h2 class="urdu-text">ٹاپ اسکورز</h2>
            <div class="leader-board">
                ${leaderBoard.map((entry, index) => `
                    <div class="leader-board-entry urdu-text">
                        <span class="rank">${index + 1}</span>
                        <span class="score">${entry.score}</span>
                        <span class="category">${this.categories[entry.category].name}</span>
                        <span class="date">${new Date(entry.date).toLocaleDateString('ur-PK')}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Initialize the handler
const urduQuizHandler = new UrduQuizHandler();
document.addEventListener('DOMContentLoaded', () => urduQuizHandler.initialize());

export { urduQuizHandler };
