// Import individual question banks
import matricQuestions from './question_bank/matric_questions.js';
import intermediateQuestions from './question_bank/intermediate_questions.js';
import cssQuestions from './question_bank/css_questions.js';
import medicalQuestions from './question_bank/medical_questions.js';
import engineeringQuestions from './question_bank/engineering_questions.js';
import professionalQuestions from './question_bank/professional_questions.js';
import languageQuestions from './question_bank/language_questions.js';
import skillsQuestions from './question_bank/skills_questions.js';
import islamicQuestions from './question_bank/islamic_questions.js';

// Combine all questions
const allQuestions = {
    schoolSubjects: {
        matric: matricQuestions,
        intermediate: intermediateQuestions
    },
    competitiveExams: {
        css: cssQuestions,
        medical: medicalQuestions,
        engineering: engineeringQuestions
    },
    professionalFields: professionalQuestions,
    languages: languageQuestions,
    skillsDevelopment: skillsQuestions,
    islamicStudies: islamicQuestions
};

// Function to get questions based on category, subcategory, subject and topic
export function getQuestions(category, subcategory, subject, topic) {
    try {
        const categoryQuestions = allQuestions[category];
        if (!categoryQuestions) {
            console.error(`No questions found for category: ${category}`);
            return [];
        }

        const subcategoryQuestions = categoryQuestions[subcategory];
        if (!subcategoryQuestions) {
            console.error(`No questions found for subcategory: ${subcategory}`);
            return [];
        }

        const subjectQuestions = subcategoryQuestions[subject];
        if (!subjectQuestions) {
            console.error(`No questions found for subject: ${subject}`);
            return [];
        }

        const topicQuestions = subjectQuestions[topic];
        if (!topicQuestions || !Array.isArray(topicQuestions)) {
            console.error(`No questions found for topic: ${topic}`);
            return [];
        }

        // Shuffle questions
        return shuffleArray(topicQuestions);
    } catch (error) {
        console.error('Error getting questions:', error);
        return [];
    }
}

// Utility function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export { allQuestions };
