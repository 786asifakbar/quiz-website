import { generatePhysicsQuestions } from './subject_generators/physics_generator.js';
import { generateChemistryQuestions } from './subject_generators/chemistry_generator.js';
import { generateBiologyQuestions } from './subject_generators/biology_generator.js';

// Generate all questions for different exams and subjects
const questionBank = {
    matric: {
        physics: generatePhysicsQuestions(500, 'general'),
        chemistry: generateChemistryQuestions(500, 'general'),
        biology: generateBiologyQuestions(500, 'general'),
        // Other subjects...
    },
    mdcat: {
        physics: generatePhysicsQuestions(500, 'medical'),
        chemistry: generateChemistryQuestions(1000, 'medical'),
        biology: generateBiologyQuestions(1000, 'medical'),
        // Other subjects...
    },
    ecat: {
        physics: generatePhysicsQuestions(1000, 'engineering'),
        chemistry: generateChemistryQuestions(500, 'engineering'),
        // Other subjects...
    }
};

// Utility functions for accessing questions
function getQuestionsBySubject(subject, examType = 'general') {
    const allQuestions = [];
    Object.keys(questionBank).forEach(exam => {
        if (questionBank[exam][subject]) {
            allQuestions.push(...questionBank[exam][subject]);
        }
    });
    return allQuestions.filter(q => q.examType === examType);
}

function getQuestionsByExam(examType) {
    if (questionBank[examType]) {
        return Object.values(questionBank[examType]).flat();
    }
    return [];
}

function getQuestionsByDifficulty(difficulty) {
    return Object.values(questionBank)
        .flatMap(exam => Object.values(exam))
        .flat()
        .filter(q => q.difficulty === difficulty);
}

function generateMockTest(examType, count = 50) {
    const questions = getQuestionsByExam(examType);
    return shuffleArray(questions).slice(0, count);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export {
    questionBank,
    getQuestionsBySubject,
    getQuestionsByExam,
    getQuestionsByDifficulty,
    generateMockTest
};
