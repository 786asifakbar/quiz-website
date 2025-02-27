import json
import random
from typing import List, Dict

def generate_urdu_questions() -> List[Dict]:
    topics = {
        "Grammar": [
            ("اسم کی کتنی اقسام ہیں؟",
             {"a": "3", "b": "4", "c": "5", "d": "7"},
             "a", "اسم کی تین اقسام ہیں: اسم ظاہر، اسم ضمیر، اور اسم علم۔"),
            # Add more templates
        ],
        "Literature": [
            ("'دیوانِ غالب' کس شاعر کا مجموعہ کلام ہے؟",
             {"a": "میر تقی میر", "b": "مرزا غالب", "c": "اقبال", "d": "فیض"},
             "b", "'دیوانِ غالب' مرزا اسداللہ خان غالب کا مشہور مجموعہ کلام ہے۔")
            # Add more templates
        ]
    }
    return generate_questions_from_templates("urdu", topics)

def generate_islamiat_questions() -> List[Dict]:
    topics = {
        "Quran": [
            ("قرآن مجید میں کتنی سورتیں ہیں؟",
             {"a": "112", "b": "113", "c": "114", "d": "115"},
             "c", "قرآن مجید میں کل 114 سورتیں ہیں۔"),
            # Add more templates
        ],
        "Hadith": [
            ("حدیث کی اقسام کتنی ہیں؟",
             {"a": "2", "b": "3", "c": "4", "d": "5"},
             "b", "حدیث کی تین اقسام ہیں: صحیح، حسن، اور ضعیف۔")
            # Add more templates
        ]
    }
    return generate_questions_from_templates("islamiat", topics)

def generate_physics_questions() -> List[Dict]:
    topics = {
        "Mechanics": [
            ("What is the SI unit of force?",
             {"a": "Newton", "b": "Joule", "c": "Watt", "d": "Pascal"},
             "a", "Newton (N) is the SI unit of force, named after Sir Isaac Newton."),
            # Add more templates
        ],
        "Electricity": [
            ("What is Ohm's Law?",
             {"a": "V = IR", "b": "P = VI", "c": "F = ma", "d": "E = mc²"},
             "a", "Ohm's Law states that voltage equals current times resistance (V = IR).")
            # Add more templates
        ]
    }
    return generate_questions_from_templates("physics", topics)

def generate_chemistry_questions() -> List[Dict]:
    topics = {
        "Periodic Table": [
            ("What is the atomic number of Carbon?",
             {"a": "5", "b": "6", "c": "7", "d": "8"},
             "b", "Carbon has an atomic number of 6, meaning it has 6 protons."),
            # Add more templates
        ],
        "Chemical Bonding": [
            ("What type of bond is formed between sodium and chlorine?",
             {"a": "Covalent", "b": "Ionic", "c": "Metallic", "d": "Hydrogen"},
             "b", "Sodium and chlorine form an ionic bond in NaCl (table salt).")
            # Add more templates
        ]
    }
    return generate_questions_from_templates("chemistry", topics)

def generate_biology_questions() -> List[Dict]:
    topics = {
        "Cell Biology": [
            ("What is the powerhouse of the cell?",
             {"a": "Nucleus", "b": "Mitochondria", "c": "Golgi body", "d": "Ribosome"},
             "b", "Mitochondria are called the powerhouse of the cell as they produce energy through cellular respiration."),
            # Add more templates
        ],
        "Genetics": [
            ("What is the shape of DNA?",
             {"a": "Single helix", "b": "Double helix", "c": "Triple helix", "d": "Straight line"},
             "b", "DNA has a double helix structure, as discovered by Watson and Crick.")
            # Add more templates
        ]
    }
    return generate_questions_from_templates("biology", topics)

def generate_mathematics_questions() -> List[Dict]:
    topics = {
        "Algebra": [
            ("What is the quadratic formula?",
             {"a": "x = -b ± √(b² - 4ac)/2a", "b": "a² + b² = c²", "c": "E = mc²", "d": "F = ma"},
             "a", "The quadratic formula is used to solve quadratic equations in the form ax² + bx + c = 0"),
            # Add more templates
        ],
        "Geometry": [
            ("What is the area of a circle?",
             {"a": "πr", "b": "2πr", "c": "πr²", "d": "2πr²"},
             "c", "The area of a circle is πr², where r is the radius.")
            # Add more templates
        ]
    }
    return generate_questions_from_templates("mathematics", topics)

def generate_history_questions() -> List[Dict]:
    topics = {
        "Ancient History": [
            ("Which ancient civilization flourished in the Indus Valley?",
             {"a": "Harappa", "b": "Mohenjo-daro", "c": "Mehrgarh", "d": "All of the above"},
             "d", "The Indus Valley Civilization included all these major sites."),
            # Add more question templates
        ],
        "Medieval Period": [
            ("Which dynasty ruled over the region of modern-day Pakistan during the 8th century?",
             {"a": "Ghaznavids", "b": "Mughals", "c": "Umayyads", "d": "Delhi Sultanate"},
             "c", "The Umayyad Caliphate ruled over this region during the 8th century."),
            # Add more question templates
        ],
        "Modern Era": [
            ("When was the Pakistan Resolution passed?",
             {"a": "1940", "b": "1941", "c": "1942", "d": "1943"},
             "a", "The Pakistan Resolution was passed on March 23, 1940, in Lahore."),
            # Add more question templates
        ]
    }
    return generate_questions_from_templates("history", topics)

def generate_geography_questions() -> List[Dict]:
    topics = {
        "Physical Geography": [
            ("Which mountain range is located in northern Pakistan?",
             {"a": "Himalayas", "b": "Karakoram", "c": "Hindu Kush", "d": "All of the above"},
             "d", "Pakistan's northern region contains parts of all these mountain ranges."),
            # Add more question templates
        ],
        "Climate": [
            ("Which season brings monsoon rains to Pakistan?",
             {"a": "Summer", "b": "Winter", "c": "Spring", "d": "Autumn"},
             "a", "Monsoon rains typically occur during the summer months in Pakistan."),
            # Add more question templates
        ]
    }
    return generate_questions_from_templates("geography", topics)

def generate_computer_questions() -> List[Dict]:
    topics = {
        "Programming": [
            ("What is the time complexity of binary search?",
             {"a": "O(n)", "b": "O(log n)", "c": "O(n log n)", "d": "O(1)"},
             "b", "Binary search has a time complexity of O(log n) as it divides the search space in half each time."),
            # Add more question templates
        ],
        "Hardware": [
            ("What is the purpose of RAM in a computer?",
             {"a": "Permanent storage", "b": "Temporary storage", "c": "Processing", "d": "Output display"},
             "b", "RAM (Random Access Memory) provides temporary storage for data that the CPU needs to access quickly."),
            # Add more question templates
        ]
    }
    return generate_questions_from_templates("computer", topics)

def generate_english_questions() -> List[Dict]:
    topics = {
        "Grammar": [
            ("Which of these is a past participle?",
             {"a": "run", "b": "ran", "c": "running", "d": "run"},
             "d", "The past participle of 'run' is 'run', as in 'have run'."),
            # Add more question templates
        ],
        "Vocabulary": [
            ("What is the meaning of 'ephemeral'?",
             {"a": "lasting", "b": "temporary", "c": "beautiful", "d": "ugly"},
             "b", "Ephemeral means lasting for a very short time, temporary."),
            # Add more question templates
        ]
    }
    return generate_questions_from_templates("english", topics)

def generate_questions_from_templates(category: str, topics: Dict) -> List[Dict]:
    questions = []
    question_id = 1
    
    for subcategory, templates in topics.items():
        for template in templates:
            question, answers, correct_answer, feedback = template
            
            # Generate variations of the question
            variations = generate_variations(question, answers, correct_answer, feedback)
            
            for variation in variations:
                questions.append({
                    "id": f"{category}{question_id}",
                    "category": category,
                    "subcategory": subcategory,
                    "difficulty": random.choice(["easy", "medium", "hard"]),
                    **variation
                })
                question_id += 1
                
                if question_id > 1000:  # Limit to 1000 questions per category
                    break
                    
    return questions

def generate_variations(question: str, answers: Dict, correct_answer: str, feedback: str) -> List[Dict]:
    # This function would generate variations of questions
    # For now, just return the original question
    return [{
        "question": question,
        "answers": answers,
        "correctAnswer": correct_answer,
        "feedback": feedback
    }]

def save_questions(category: str, questions: List[Dict]):
    with open(f'../data/{category}.json', 'w', encoding='utf-8') as f:
        json.dump({"questions": questions}, f, indent=4, ensure_ascii=False)

def main():
    # Generate questions for each category
    categories = {
        "urdu": generate_urdu_questions,
        "islamiat": generate_islamiat_questions,
        "physics": generate_physics_questions,
        "chemistry": generate_chemistry_questions,
        "biology": generate_biology_questions,
        "mathematics": generate_mathematics_questions,
        "history": generate_history_questions,
        "geography": generate_geography_questions,
        "computer": generate_computer_questions,
        "english": generate_english_questions
    }
    
    for category, generator in categories.items():
        questions = generator()
        save_questions(category, questions)
        print(f"Generated {len(questions)} questions for {category}")

if __name__ == "__main__":
    main()
