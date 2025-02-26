function generateUrduQuestions(count, type = 'general') {
    const baseQuestions = {
        grammar: [
            {
                id: "URDU_GRAM_001",
                question: "اردو زبان کس خانوادہ سے تعلق رکھتی ہے؟",
                options: [
                    { text: "ہند آریائی", correct: true },
                    { text: "سامی", correct: false },
                    { text: "ترکی", correct: false },
                    { text: "ایرانی", correct: false }
                ],
                difficulty: "آسان",
                topic: "اردو گرامر"
            },
            {
                id: "URDU_GRAM_002",
                question: "'غم' کا مترادف کونسا لفظ ہے؟",
                options: [
                    { text: "اداسی", correct: true },
                    { text: "خوشی", correct: false },
                    { text: "پیار", correct: false },
                    { text: "نفرت", correct: false }
                ],
                difficulty: "آسان",
                topic: "مترادفات"
            }
        ],
        literature: [
            {
                id: "URDU_LIT_001",
                question: "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے، خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے' کے شاعر کون ہیں؟",
                options: [
                    { text: "علامہ اقبال", correct: true },
                    { text: "فیض احمد فیض", correct: false },
                    { text: "مرزا غالب", correct: false },
                    { text: "میر تقی میر", correct: false }
                ],
                difficulty: "درمیانہ",
                topic: "شاعری"
            }
        ],
        islamiat: [
            {
                id: "URDU_ISL_001",
                question: "قرآن پاک کی کون سی سورت کو 'قلبِ قرآن' کہا جاتا ہے؟",
                options: [
                    { text: "سورۃ یٰسین", correct: true },
                    { text: "سورۃ الفاتحہ", correct: false },
                    { text: "سورۃ البقرہ", correct: false },
                    { text: "سورۃ الکہف", correct: false }
                ],
                difficulty: "درمیانہ",
                topic: "اسلامیات"
            }
        ],
        history: [
            {
                id: "URDU_HIST_001",
                question: "پاکستان کا پہلا یومِ آزادی کب منایا گیا؟",
                options: [
                    { text: "14 اگست 1947", correct: true },
                    { text: "23 مارچ 1940", correct: false },
                    { text: "6 ستمبر 1965", correct: false },
                    { text: "25 دسمبر 1971", correct: false }
                ],
                difficulty: "آسان",
                topic: "تاریخ پاکستان"
            }
        ]
    };

    const variations = {
        prefixes: {
            grammar: [
                "درج ذیل میں سے",
                "کون سا لفظ",
                "صحیح جواب کا انتخاب کریں",
                "مندرجہ ذیل میں سے"
            ],
            literature: [
                "کس شاعر نے کہا",
                "کس کی تحریر ہے",
                "یہ شعر کس کا ہے",
                "کس ادیب کی تصنیف ہے"
            ],
            islamiat: [
                "اسلام میں",
                "قرآن پاک میں",
                "حدیث کے مطابق",
                "سنت کے مطابق"
            ],
            history: [
                "تاریخ کے مطابق",
                "کس سال",
                "کس دور میں",
                "کس واقعے میں"
            ]
        },
        topics: {
            grammar: ["گرامر", "مترادفات", "متضاد", "محاورے", "ضرب الامثال"],
            literature: ["شاعری", "نثر", "ناول", "افسانہ", "غزل"],
            islamiat: ["قرآن", "حدیث", "فقہ", "سیرت", "عقائد"],
            history: ["تحریک پاکستان", "آزادی", "جنگیں", "معاہدے", "قیام پاکستان"]
        }
    };

    function generateVariation(baseQuestion, category) {
        const prefix = variations.prefixes[category][Math.floor(Math.random() * variations.prefixes[category].length)];
        const topic = variations.topics[category][Math.floor(Math.random() * variations.topics[category].length)];
        
        return {
            id: `${baseQuestion.id}_VAR_${Math.random().toString(36).substr(2, 5)}`,
            question: `${prefix}: ${baseQuestion.question}`,
            options: shuffleArray([...baseQuestion.options]),
            difficulty: baseQuestion.difficulty,
            topic: topic,
            category: category
        };
    }

    const questions = [];
    const categories = Object.keys(baseQuestions);
    const questionsPerCategory = Math.floor(count / categories.length);

    categories.forEach(category => {
        const baseQuestionsForCategory = baseQuestions[category];
        for (let i = 0; i < questionsPerCategory; i++) {
            const baseQuestion = baseQuestionsForCategory[i % baseQuestionsForCategory.length];
            questions.push(generateVariation(baseQuestion, category));
        }
    });

    return questions;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export { generateUrduQuestions };
