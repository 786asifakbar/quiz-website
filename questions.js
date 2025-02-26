// Import all question banks
import { matricQuestions } from './question_banks/matric_questions.js';
import { competitiveQuestions } from './question_banks/competitive_questions.js';
import { professionalQuestions } from './question_banks/professional_questions.js';
import { languageQuestions } from './question_banks/language_questions.js';
import { emergingQuestions } from './question_banks/emerging_questions.js';

// Combine all questions
const allQuestions = {
    matric: matricQuestions,
    competitive: competitiveQuestions,
    professional: professionalQuestions,
    language: languageQuestions,
    emerging: emergingQuestions
};

// Question count by category
const questionCounts = {
    matric: 600, // 200 each for Urdu, English, Mathematics
    competitive: 1600, // CSS (600), MDCAT (500), ECAT (500)
    professional: 1200, // IT (400), Engineering (400), Medical (400)
    language: 500, // Urdu Literature (200), Regional Languages (300)
    emerging: 700 // AI (200), Data Science (200), Others (300)
};

// Total questions: 4,600+

// Metadata for filtering and organization
const quizMetadata = {
    difficulties: ['Easy', 'Medium', 'Hard'],
    languages: ['English', 'Urdu', 'Punjabi', 'Sindhi', 'Arabic'],
    examTypes: ['CSS', 'PMS', 'MDCAT', 'ECAT', 'NTS'],
    subjects: {
        academic: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Urdu'],
        professional: ['Programming', 'Engineering', 'Medical', 'Law'],
        competitive: ['Current Affairs', 'Pakistan Affairs', 'Islamic Studies'],
        technical: ['IT', 'Electrical', 'Mechanical', 'Civil']
    }
};

// Utility functions

// Get questions by category and subject
function getQuestions(category, subject, count = 10) {
    if (allQuestions[category]?.[subject]) {
        return shuffleArray(allQuestions[category][subject]).slice(0, count);
    }
    return [];
}

// Get questions by difficulty
function getQuestionsByDifficulty(difficulty, count = 10) {
    const questions = Object.values(allQuestions)
        .flatMap(category => Object.values(category))
        .flatMap(subject => subject)
        .filter(q => q.difficulty === difficulty);
    return shuffleArray(questions).slice(0, count);
}

// Get questions by exam type
function getQuestionsByExam(examType, count = 10) {
    const questions = Object.values(allQuestions)
        .flatMap(category => Object.values(category))
        .flatMap(subject => subject)
        .filter(q => q.examType === examType);
    return shuffleArray(questions).slice(0, count);
}

// Get questions by language
function getQuestionsByLanguage(language, count = 10) {
    const questions = Object.values(allQuestions)
        .flatMap(category => Object.values(category))
        .flatMap(subject => subject)
        .filter(q => q.language === language);
    return shuffleArray(questions).slice(0, count);
}

// Generate a mock test for specific exam
function generateMockTest(examType, duration = 60) {
    const mockTest = {
        examType,
        duration,
        totalQuestions: 0,
        questions: {}
    };

    switch (examType) {
        case 'CSS':
            mockTest.questions = {
                currentAffairs: getQuestionsByExam('CSS', 20),
                pakistanAffairs: getQuestionsByExam('CSS', 20),
                islamicStudies: getQuestionsByExam('CSS', 10)
            };
            break;
        case 'MDCAT':
            mockTest.questions = {
                biology: getQuestionsByExam('MDCAT', 20),
                chemistry: getQuestionsByExam('MDCAT', 15),
                physics: getQuestionsByExam('MDCAT', 15)
            };
            break;
        // Add more exam types
    }

    mockTest.totalQuestions = Object.values(mockTest.questions)
        .reduce((total, questions) => total + questions.length, 0);

    return mockTest;
}

// Shuffle array utility
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Export everything
export {
    allQuestions,
    quizMetadata,
    getQuestions,
    getQuestionsByDifficulty,
    getQuestionsByExam,
    getQuestionsByLanguage,
    generateMockTest
};
