// Import all question banks
import { matricQuestions } from './question_banks/matric_questions.js';
import { competitiveQuestions } from './question_banks/competitive_questions.js';
import { professionalQuestions } from './question_banks/professional_questions.js';
import { languageQuestions } from './question_banks/language_questions.js';
import { emergingQuestions } from './question_banks/emerging_questions.js';

// Combine all questions
export const allQuestions = {
    academic: {
        mathematics: matricQuestions.mathematics,
        science: matricQuestions.science,
        english: matricQuestions.english,
        urdu: matricQuestions.urdu
    },
    professional: professionalQuestions,
    language: languageQuestions,
    competitive: competitiveQuestions
};

// Question count by category
const questionCounts = {
    academic: 600,
    competitive: 1600,
    professional: 1200,
    language: 500,
    emerging: 700
};

// Metadata for filtering and organization
export const quizMetadata = {
    difficulties: ['Easy', 'Medium', 'Hard'],
    languages: ['English', 'Urdu', 'Sindhi', 'Arabic']
};

// Get questions by category and subject
export function getQuestions(category, subject, count = 10) {
    try {
        const categoryQuestions = allQuestions[category];
        if (!categoryQuestions) {
            console.error(`Category ${category} not found`);
            return [];
        }

        const subjectQuestions = categoryQuestions[subject];
        if (!subjectQuestions) {
            console.error(`Subject ${subject} not found in category ${category}`);
            return [];
        }

        // If we have fewer questions than requested, return all available questions
        if (subjectQuestions.length <= count) {
            return shuffleArray([...subjectQuestions]);
        }

        // Otherwise, randomly select the requested number of questions
        return shuffleArray([...subjectQuestions]).slice(0, count);
    } catch (error) {
        console.error('Error getting questions:', error);
        return [];
    }
}

// Shuffle array utility
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export {
    getQuestions as default,
    questionCounts
};
