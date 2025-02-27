import json
import random
from typing import Dict, List, Tuple
import os

def generate_urdu_questions() -> List[Dict]:
    grammar_templates = [
        ("اسم کی تعریف کیا ہے؟", {
            "a": "کسی شخص، جگہ یا چیز کا نام",
            "b": "کسی کام کا کرنا یا ہونا",
            "c": "کسی چیز کی صفت",
            "d": "کسی چیز کی حالت"
        }, "a", "اسم کسی شخص، جگہ یا چیز کے نام کو کہتے ہیں۔"),
        ("فعل کی تعریف کیا ہے؟", {
            "a": "کسی شخص کا نام",
            "b": "کسی کام کا کرنا یا ہونا",
            "c": "کسی چیز کی صفت",
            "d": "کسی چیز کی حالت"
        }, "b", "فعل کسی کام کے کرنے یا ہونے کو کہتے ہیں۔"),
        ("حرف کی تعریف کیا ہے؟", {
            "a": "کسی شخص کا نام",
            "b": "کسی کام کا کرنا یا ہونا",
            "c": "اسم اور فعل کے درمیان تعلق",
            "d": "کسی چیز کی حالت"
        }, "c", "حرف اسم اور فعل کے درمیان تعلق بتاتا ہے۔"),
        ("صفت کی تعریف کیا ہے؟", {
            "a": "کسی شخص کا نام",
            "b": "کسی کام کا کرنا یا ہونا",
            "c": "اسم اور فعل کے درمیان تعلق",
            "d": "کسی چیز کی خصوصیت یا حالت"
        }, "d", "صفت کسی چیز کی خصوصیت یا حالت بتاتی ہے۔"),
        ("ضمیر کی تعریف کیا ہے؟", {
            "a": "اسم کی جگہ استعمال ہونے والا لفظ",
            "b": "کسی کام کا کرنا یا ہونا",
            "c": "اسم اور فعل کے درمیان تعلق",
            "d": "کسی چیز کی حالت"
        }, "a", "ضمیر اسم کی جگہ استعمال ہونے والا لفظ ہے۔"),
    ]
    
    literature_templates = [
        ("غالب کا پورا نام کیا تھا؟", {
            "a": "مرزا اسد اللہ خان غالب",
            "b": "مرزا محمد غالب",
            "c": "مرزا نواب غالب",
            "d": "مرزا احمد غالب"
        }, "a", "غالب کا پورا نام مرزا اسد اللہ خان غالب تھا۔"),
        ("اقبال کا پورا نام کیا تھا؟", {
            "a": "علامہ محمد اقبال",
            "b": "علامہ سر محمد اقبال",
            "c": "علامہ ڈاکٹر محمد اقبال",
            "d": "علامہ سر ڈاکٹر محمد اقبال"
        }, "d", "اقبال کا پورا نام علامہ سر ڈاکٹر محمد اقبال تھا۔"),
        ("فیض کا پورا نام کیا تھا؟", {
            "a": "فیض احمد",
            "b": "فیض احمد فیض",
            "c": "فیض محمد",
            "d": "فیض احمد خان"
        }, "b", "فیض کا پورا نام فیض احمد فیض تھا۔"),
        ("میر تقی میر کا تخلص کیا تھا؟", {
            "a": "میر",
            "b": "تقی",
            "c": "میر تقی",
            "d": "تقی میر"
        }, "a", "میر تقی میر کا تخلص 'میر' تھا۔"),
        ("حالی کا اصل نام کیا تھا؟", {
            "a": "مولوی الطاف حسین",
            "b": "خواجہ الطاف حسین",
            "c": "سید الطاف حسین",
            "d": "میاں الطاف حسین"
        }, "a", "حالی کا اصل نام مولوی الطاف حسین تھا۔"),
    ]
    
    poetry_templates = [
        ("غزل کی تعریف کیا ہے؟", {
            "a": "ایک نظم",
            "b": "عشقیہ شاعری",
            "c": "حمد و نعت",
            "d": "مرثیہ"
        }, "b", "غزل عشقیہ شاعری کی ایک صنف ہے۔"),
        ("نظم کی تعریف کیا ہے؟", {
            "a": "موضوعی شاعری",
            "b": "عشقیہ شاعری",
            "c": "حمد و نعت",
            "d": "مرثیہ"
        }, "a", "نظم کسی ایک موضوع پر مبنی شاعری ہے۔"),
        ("مرثیہ کی تعریف کیا ہے؟", {
            "a": "موضوعی شاعری",
            "b": "عشقیہ شاعری",
            "c": "حمد و نعت",
            "d": "سوگوار شاعری"
        }, "d", "مرثیہ سوگوار شاعری کی ایک صنف ہے۔"),
    ]
    
    questions = []
    for template in grammar_templates + literature_templates + poetry_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        
        variations = []
        difficulties = ['easy', 'medium', 'hard']
        
        for difficulty in difficulties:
            variation = base_question.copy()
            variation['difficulty'] = difficulty
            
            if difficulty == 'medium':
                variation['question'] = f"وضاحت کیجیے: {variation['question']}"
            elif difficulty == 'hard':
                variation['question'] = f"تفصیل سے بیان کیجیے: {variation['question']}"
            
            variations.append(variation)
            
            if difficulty == 'easy':
                var2 = variation.copy()
                var2['question'] = f"درج ذیل میں سے درست جواب کا انتخاب کیجیے: {base_question['question']}"
                variations.append(var2)
            
            elif difficulty == 'medium':
                var2 = variation.copy()
                var2['question'] = f"مندرجہ ذیل سوال کا جواب دیجیے: {base_question['question']}"
                variations.append(var2)
            
            elif difficulty == 'hard':
                var2 = variation.copy()
                var2['question'] = f"تشریح کیجیے: {base_question['question']}"
                variations.append(var2)
        
        questions.extend(variations)
    
    while len(questions) < 1000:
        questions.extend(questions[:1000-len(questions)])
    
    return questions[:1000]

def generate_islamiat_questions() -> List[Dict]:
    quran_templates = [
        ("قرآن مجید میں کتنی سورتیں ہیں؟", {
            "a": "112", "b": "113", "c": "114", "d": "115"
        }, "c", "قرآن مجید میں کل 114 سورتیں ہیں۔"),
        ("سب سے پہلی نازل ہونے والی سورت کون سی ہے؟", {
            "a": "سورۃ الفاتحہ", "b": "سورۃ العلق", "c": "سورۃ البقرہ", "d": "سورۃ الناس"
        }, "b", "سب سے پہلے سورۃ العلق کی پہلی پانچ آیات نازل ہوئیں۔"),
        ("قرآن مجید کی سب سے طویل سورت کون سی ہے؟", {
            "a": "سورۃ البقرہ", "b": "سورۃ النساء", "c": "سورۃ آل عمران", "d": "سورۃ المائدہ"
        }, "a", "سورۃ البقرہ قرآن مجید کی سب سے طویل سورت ہے۔"),
        ("قرآن مجید کی سب سے چھوٹی سورت کون سی ہے؟", {
            "a": "سورۃ الکوثر", "b": "سورۃ العصر", "c": "سورۃ الناس", "d": "سورۃ الاخلاص"
        }, "a", "سورۃ الکوثر قرآن مجید کی سب سے چھوٹی سورت ہے۔"),
        ("قرآن مجید کی پہلی سورت کون سی ہے؟", {
            "a": "سورۃ الفاتحہ", "b": "سورۃ البقرہ", "c": "سورۃ العلق", "d": "سورۃ الناس"
        }, "a", "سورۃ الفاتحہ قرآن مجید کی پہلی سورت ہے۔")
    ]
    
    hadith_templates = [
        ("صحاح ستہ میں کتنی کتابیں شامل ہیں؟", {
            "a": "4", "b": "5", "c": "6", "d": "7"
        }, "c", "صحاح ستہ میں چھ کتابیں شامل ہیں۔"),
        ("صحیح بخاری کے مصنف کون ہیں؟", {
            "a": "امام بخاری", "b": "امام مسلم", "c": "امام ترمذی", "d": "امام مالک"
        }, "a", "صحیح بخاری کے مصنف امام محمد بن اسماعیل بخاری ہیں۔"),
        ("صحیح مسلم کے مصنف کون ہیں؟", {
            "a": "امام بخاری", "b": "امام مسلم", "c": "امام ترمذی", "d": "امام مالک"
        }, "b", "صحیح مسلم کے مصنف امام مسلم بن حجاج ہیں۔")
    ]
    
    fiqh_templates = [
        ("اسلام کے بنیادی ارکان کتنے ہیں؟", {
            "a": "3", "b": "4", "c": "5", "d": "6"
        }, "c", "اسلام کے پانچ بنیادی ارکان ہیں۔"),
        ("نماز کے فرائض کتنے ہیں؟", {
            "a": "5", "b": "6", "c": "7", "d": "8"
        }, "b", "نماز کے چھ فرائض ہیں۔"),
        ("روزے کے فرائض کتنے ہیں؟", {
            "a": "2", "b": "3", "c": "4", "d": "5"
        }, "b", "روزے کے تین فرائض ہیں۔")
    ]
    
    questions = []
    all_templates = quran_templates + hadith_templates + fiqh_templates
    
    for template in all_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        
        # Generate variations with different wordings and difficulty levels
        variations = []
        difficulties = ['easy', 'medium', 'hard']
        
        for difficulty in difficulties:
            # Create base variation
            variation = base_question.copy()
            variation['difficulty'] = difficulty
            
            # Add difficulty-specific modifications
            if difficulty == 'medium':
                variation['question'] = f"وضاحت کیجیے: {variation['question']}"
                variation['feedback'] = f"{variation['feedback']} مزید تفصیل کے لیے کتب حدیث سے رجوع کریں۔"
            elif difficulty == 'hard':
                variation['question'] = f"تفصیل سے بیان کیجیے: {variation['question']}"
                variation['feedback'] = f"{variation['feedback']} اس کے بارے میں علماء کے مختلف نظریات موجود ہیں۔"
            
            variations.append(variation)
            
            # Create additional variations with different phrasings
            if difficulty == 'easy':
                var2 = variation.copy()
                var2['question'] = f"درج ذیل میں سے درست جواب کا انتخاب کیجیے: {base_question['question']}"
                variations.append(var2)
            
            elif difficulty == 'medium':
                var2 = variation.copy()
                var2['question'] = f"مندرجہ ذیل سوال کا جواب دیجیے: {base_question['question']}"
                variations.append(var2)
            
            elif difficulty == 'hard':
                var2 = variation.copy()
                var2['question'] = f"تشریح کیجیے: {base_question['question']}"
                variations.append(var2)
        
        questions.extend(variations)
    
    # Multiply questions to reach 1000
    while len(questions) < 1000:
        questions.extend(questions[:1000-len(questions)])
    
    return questions[:1000]

def generate_physics_questions() -> List[Dict]:
    mechanics_templates = [
        ("Newton's First Law of Motion states:", {
            "a": "Force equals mass times acceleration",
            "b": "An object remains at rest or in motion unless acted upon by a force",
            "c": "For every action there is an equal and opposite reaction",
            "d": "Energy cannot be created or destroyed"
        }, "b", "Newton's First Law describes inertia - objects maintain their state of motion unless acted upon by a force."),
        ("What is the SI unit of force?", {
            "a": "Newton (N)",
            "b": "Joule (J)",
            "c": "Watt (W)",
            "d": "Pascal (Pa)"
        }, "a", "The SI unit of force is the Newton (N), defined as the force needed to accelerate 1 kg at 1 m/s²"),
        ("What is acceleration?", {
            "a": "Distance covered per unit time",
            "b": "Change in velocity per unit time",
            "c": "Total distance traveled",
            "d": "Speed in a given direction"
        }, "b", "Acceleration is the rate of change of velocity with respect to time"),
        ("What is the formula for kinetic energy?", {
            "a": "KE = mgh",
            "b": "KE = ½mv²",
            "c": "KE = mv",
            "d": "KE = ma"
        }, "b", "Kinetic energy is equal to half the mass times velocity squared (½mv²)")
    ]
    
    electricity_templates = [
        ("What is Ohm's Law?", {
            "a": "V = IR",
            "b": "P = VI",
            "c": "F = ma",
            "d": "E = mc²"
        }, "a", "Ohm's Law states that voltage equals current times resistance (V = IR)"),
        ("What is the SI unit of electric current?", {
            "a": "Volt (V)",
            "b": "Ampere (A)",
            "c": "Ohm (Ω)",
            "d": "Watt (W)"
        }, "b", "The SI unit of electric current is the Ampere (A)"),
        ("What is electrical resistance measured in?", {
            "a": "Volts",
            "b": "Amperes",
            "c": "Ohms",
            "d": "Watts"
        }, "c", "Electrical resistance is measured in Ohms (Ω)")
    ]
    
    questions = []
    all_templates = mechanics_templates + electricity_templates
    
    for template in all_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        
        # Generate variations with different difficulty levels
        variations = []
        difficulties = ['easy', 'medium', 'hard']
        
        for difficulty in difficulties:
            variation = base_question.copy()
            variation['difficulty'] = difficulty
            
            if difficulty == 'medium':
                variation['question'] = f"Explain in detail: {variation['question']}"
                variation['feedback'] = f"{variation['feedback']} Consider real-world applications."
            elif difficulty == 'hard':
                variation['question'] = f"Analyze and derive: {variation['question']}"
                variation['feedback'] = f"{variation['feedback']} Consider edge cases and limitations."
            
            variations.append(variation)
            
            # Create numerical variations
            if 'formula' in variation['question'].lower():
                var2 = variation.copy()
                var2['question'] = f"Calculate using {variation['question']}"
                variations.append(var2)
            
            # Create application variations
            var3 = variation.copy()
            var3['question'] = f"In a real-world scenario, {variation['question']}"
            variations.append(var3)
        
        questions.extend(variations)
    
    # Multiply questions to reach 1000
    while len(questions) < 1000:
        questions.extend(questions[:1000-len(questions)])
    
    return questions[:1000]

def generate_pakistan_studies_questions() -> List[Dict]:
    history_templates = [
        ("پاکستان کب آزاد ہوا؟", {
            "a": "14 اگست 1947",
            "b": "15 اگست 1947",
            "c": "23 مارچ 1940",
            "d": "3 جون 1947"
        }, "a", "پاکستان 14 اگست 1947 کو برطانوی راج سے آزاد ہوا۔"),
        # Add more templates...
    ]
    
    questions = []
    for template in history_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        variations = generate_variations(base_question)
        questions.extend(variations)
    
    return questions[:1000]

def generate_physics_questions() -> List[Dict]:
    mechanics_templates = [
        ("Newton's First Law of Motion states:", {
            "a": "Force equals mass times acceleration",
            "b": "An object remains at rest or in motion unless acted upon by a force",
            "c": "For every action there is an equal and opposite reaction",
            "d": "Energy cannot be created or destroyed"
        }, "b", "Newton's First Law describes inertia - objects maintain their state of motion unless acted upon by a force."),
        # Add more templates...
    ]
    
    questions = []
    for template in mechanics_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        variations = generate_variations(base_question)
        questions.extend(variations)
    
    return questions[:1000]

def generate_chemistry_questions() -> List[Dict]:
    periodic_table_templates = [
        ("What is the atomic number of Hydrogen?", {
            "a": "1", "b": "2", "c": "3", "d": "4"
        }, "a", "Hydrogen has an atomic number of 1, meaning it has 1 proton in its nucleus."),
        ("What is the atomic number of Carbon?", {
            "a": "4", "b": "6", "c": "8", "d": "10"
        }, "b", "Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus."),
        ("Which element has the symbol 'Na'?", {
            "a": "Nitrogen", "b": "Neon", "c": "Sodium", "d": "Nickel"
        }, "c", "Na is the symbol for Sodium (Natrium in Latin)."),
        ("What is the most abundant element in the Earth's crust?", {
            "a": "Silicon", "b": "Oxygen", "c": "Carbon", "d": "Iron"
        }, "b", "Oxygen is the most abundant element in the Earth's crust."),
        ("Which of these is a noble gas?", {
            "a": "Nitrogen", "b": "Chlorine", "c": "Helium", "d": "Hydrogen"
        }, "c", "Helium is a noble gas, characterized by its stable electron configuration.")
    ]
    
    bonding_templates = [
        ("What type of bond forms between sodium and chlorine?", {
            "a": "Covalent", "b": "Ionic", "c": "Metallic", "d": "Hydrogen"
        }, "b", "Sodium and chlorine form an ionic bond in NaCl (table salt)."),
        ("What type of bond shares electrons equally?", {
            "a": "Ionic", "b": "Covalent", "c": "Metallic", "d": "Hydrogen"
        }, "b", "Covalent bonds involve equal sharing of electrons between atoms."),
        ("Which type of bonding occurs in metals?", {
            "a": "Ionic", "b": "Covalent", "c": "Metallic", "d": "Hydrogen"
        }, "c", "Metallic bonding occurs between metal atoms, involving delocalized electrons."),
        ("What type of bond forms between water molecules?", {
            "a": "Ionic", "b": "Covalent", "c": "Metallic", "d": "Hydrogen"
        }, "d", "Water molecules are held together by hydrogen bonds.")
    ]
    
    reactions_templates = [
        ("What is a catalyst?", {
            "a": "A substance that speeds up a reaction",
            "b": "A substance that slows down a reaction",
            "c": "A product of a reaction",
            "d": "A reactant in a reaction"
        }, "a", "A catalyst increases reaction rate without being consumed."),
        ("What is an exothermic reaction?", {
            "a": "A reaction that absorbs heat",
            "b": "A reaction that releases heat",
            "c": "A reaction that requires light",
            "d": "A reaction that produces light"
        }, "b", "An exothermic reaction releases heat to the surroundings."),
        ("What is pH?", {
            "a": "Measure of temperature",
            "b": "Measure of acidity/basicity",
            "c": "Measure of pressure",
            "d": "Measure of volume"
        }, "b", "pH measures the acidity or basicity of a solution.")
    ]
    
    questions = []
    all_templates = periodic_table_templates + bonding_templates + reactions_templates
    
    for template in all_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        
        # Generate variations with different difficulty levels
        variations = []
        difficulties = ['easy', 'medium', 'hard']
        
        for difficulty in difficulties:
            variation = base_question.copy()
            variation['difficulty'] = difficulty
            
            if difficulty == 'medium':
                variation['question'] = f"Explain the concept: {variation['question']}"
                variation['feedback'] = f"{variation['feedback']} Consider the underlying principles."
            elif difficulty == 'hard':
                variation['question'] = f"Analyze in detail: {variation['question']}"
                variation['feedback'] = f"{variation['feedback']} Consider the quantum mechanical explanation."
            
            variations.append(variation)
            
            # Create application variations
            var2 = variation.copy()
            var2['question'] = f"In a laboratory setting, {variation['question']}"
            variations.append(var2)
            
            # Create theoretical variations
            var3 = variation.copy()
            var3['question'] = f"According to modern theory, {variation['question']}"
            variations.append(var3)
            
            # Create practical variations
            var4 = variation.copy()
            var4['question'] = f"In everyday life, {variation['question']}"
            variations.append(var4)
        
        questions.extend(variations)
    
    # Multiply questions to reach 1000
    while len(questions) < 1000:
        questions.extend(questions[:1000-len(questions)])
    
    return questions[:1000]

def generate_biology_questions() -> List[Dict]:
    cell_biology_templates = [
        ("What is the powerhouse of the cell?", {
            "a": "Nucleus",
            "b": "Mitochondria",
            "c": "Golgi apparatus",
            "d": "Endoplasmic reticulum"
        }, "b", "Mitochondria are called the powerhouse of the cell because they produce energy through cellular respiration."),
        # Add more templates...
    ]
    
    questions = []
    for template in cell_biology_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        variations = generate_variations(base_question)
        questions.extend(variations)
    
    return questions[:1000]

def generate_math_questions() -> List[Dict]:
    algebra_templates = [
        ("Solve for x: 2x + 5 = 13", {
            "a": "x = 4",
            "b": "x = 5",
            "c": "x = 6",
            "d": "x = 7"
        }, "a", "Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4"),
        # Add more templates...
    ]
    
    questions = []
    for template in algebra_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        variations = generate_variations(base_question)
        questions.extend(variations)
    
    return questions[:1000]

def generate_computer_science_questions() -> List[Dict]:
    fundamentals_templates = [
        ("What is RAM?", {
            "a": "Random Access Memory",
            "b": "Read Access Memory",
            "c": "Read And Memory",
            "d": "Random And Memory"
        }, "a", "RAM (Random Access Memory) is volatile memory used for temporary data storage."),
        ("What is an operating system?", {
            "a": "A software that manages hardware only",
            "b": "A system that manages hardware and software resources",
            "c": "A hardware component",
            "d": "A type of computer"
        }, "b", "An operating system manages both hardware and software resources of a computer."),
        ("What is CPU?", {
            "a": "Central Processing Unit",
            "b": "Central Program Unit",
            "c": "Computer Processing Unit",
            "d": "Computer Program Unit"
        }, "a", "CPU (Central Processing Unit) is the brain of the computer that processes instructions."),
        ("Which of these is an input device?", {
            "a": "Monitor",
            "b": "Printer",
            "c": "Keyboard",
            "d": "Speaker"
        }, "c", "A keyboard is an input device used to enter data into the computer."),
        ("What is a hard disk used for?", {
            "a": "Processing data",
            "b": "Permanent storage",
            "c": "Temporary storage",
            "d": "Display output"
        }, "b", "A hard disk is used for permanent data storage.")
    ]
    
    programming_concepts_templates = [
        ("What is a variable?", {
            "a": "A fixed value",
            "b": "A storage location with a name",
            "c": "A type of function",
            "d": "A programming language"
        }, "b", "A variable is a named storage location that can hold different values."),
        ("What is a loop?", {
            "a": "A one-time execution",
            "b": "A type of variable",
            "c": "A repeated execution of code",
            "d": "A programming error"
        }, "c", "A loop is a control structure that repeats a block of code multiple times."),
        ("What is an array?", {
            "a": "A single value",
            "b": "A collection of values",
            "c": "A type of loop",
            "d": "A function"
        }, "b", "An array is a data structure that stores a collection of values of the same type."),
        ("What is a function?", {
            "a": "A block of reusable code",
            "b": "A type of variable",
            "c": "A programming language",
            "d": "A data type"
        }, "a", "A function is a block of code that can be called and reused multiple times.")
    ]
    
    programming_languages_templates = [
        ("Which language is known for web development?", {
            "a": "JavaScript",
            "b": "C++",
            "c": "Java",
            "d": "Python"
        }, "a", "JavaScript is primarily used for web development and runs in browsers."),
        ("What is Python?", {
            "a": "A compiled language",
            "b": "An interpreted language",
            "c": "A markup language",
            "d": "An assembly language"
        }, "b", "Python is an interpreted, high-level programming language."),
        ("What is Java?", {
            "a": "A scripting language",
            "b": "A markup language",
            "c": "An object-oriented language",
            "d": "A database language"
        }, "c", "Java is an object-oriented programming language that runs on the JVM."),
        ("Which language is used for iOS development?", {
            "a": "Java",
            "b": "Python",
            "c": "Swift",
            "d": "JavaScript"
        }, "c", "Swift is Apple's programming language for iOS development.")
    ]
    
    web_development_templates = [
        ("What is HTML?", {
            "a": "Programming language",
            "b": "Markup language",
            "c": "Database language",
            "d": "Scripting language"
        }, "b", "HTML is a markup language used to structure web content."),
        ("What is CSS used for?", {
            "a": "Styling web pages",
            "b": "Creating databases",
            "c": "Programming logic",
            "d": "Server management"
        }, "a", "CSS is used for styling and formatting web pages."),
        ("What is a database?", {
            "a": "A programming language",
            "b": "An organized collection of data",
            "c": "A web browser",
            "d": "A computer component"
        }, "b", "A database is an organized collection of structured data.")
    ]
    
    questions = []
    all_templates = (fundamentals_templates + programming_concepts_templates + 
                    programming_languages_templates + web_development_templates)
    
    for template in all_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        
        # Generate variations with different difficulty levels
        variations = []
        difficulties = ['easy', 'medium', 'hard']
        
        for difficulty in difficulties:
            variation = base_question.copy()
            variation['difficulty'] = difficulty
            
            if difficulty == 'medium':
                variation['question'] = f"Explain in detail: {variation['question']}"
                variation['feedback'] = f"{variation['feedback']} Consider practical applications."
            elif difficulty == 'hard':
                variation['question'] = f"Analyze and discuss: {variation['question']}"
                variation['feedback'] = f"{variation['feedback']} Consider advanced concepts and edge cases."
            
            variations.append(variation)
            
            # Create practical variations
            var2 = variation.copy()
            var2['question'] = f"In a real-world scenario, {variation['question']}"
            variations.append(var2)
            
            # Create theoretical variations
            var3 = variation.copy()
            var3['question'] = f"According to computer science theory, {variation['question']}"
            variations.append(var3)
            
            # Create problem-solving variations
            var4 = variation.copy()
            var4['question'] = f"When debugging a program, how does {variation['question'].lower()} affect your approach?"
            variations.append(var4)
            
            # Create implementation variations
            var5 = variation.copy()
            var5['question'] = f"How would you implement or use {variation['question'].lower()}?"
            variations.append(var5)
        
        questions.extend(variations)
    
    # Add coding-specific questions
    coding_questions = [
        {
            "question": "What will be the output of: print('Hello' + ' ' + 'World')?",
            "answers": {
                "a": "HelloWorld",
                "b": "Hello World",
                "c": "Error",
                "d": "Hello + World"
            },
            "correctAnswer": "b",
            "feedback": "String concatenation combines the strings with the space in between."
        },
        {
            "question": "What is the time complexity of binary search?",
            "answers": {
                "a": "O(1)",
                "b": "O(n)",
                "c": "O(log n)",
                "d": "O(n²)"
            },
            "correctAnswer": "c",
            "feedback": "Binary search has a logarithmic time complexity of O(log n)."
        }
    ]
    
    # Add variations for coding questions
    for question in coding_questions:
        for difficulty in difficulties:
            variation = question.copy()
            variation['difficulty'] = difficulty
            variations.append(variation)
    
    questions.extend(variations)
    
    # Multiply questions to reach 1000
    while len(questions) < 1000:
        questions.extend(questions[:1000-len(questions)])
    
    return questions[:1000]

def generate_english_questions() -> List[Dict]:
    grammar_templates = [
        ("Which of these is a proper noun?", {
            "a": "London",
            "b": "city",
            "c": "book",
            "d": "tree"
        }, "a", "London is a proper noun because it names a specific city."),
        # Add more templates...
    ]
    
    questions = []
    for template in grammar_templates:
        base_question = {
            "question": template[0],
            "answers": template[1],
            "correctAnswer": template[2],
            "feedback": template[3]
        }
        variations = generate_variations(base_question)
        questions.extend(variations)
    
    return questions[:1000]

def generate_variations(base_question: Dict) -> List[Dict]:
    variations = []
    difficulties = ['easy', 'medium', 'hard']
    
    for difficulty in difficulties:
        variation = base_question.copy()
        variation['difficulty'] = difficulty
        
        if difficulty == 'medium':
            variation['question'] = f"Consider the following: {variation['question']}"
        elif difficulty == 'hard':
            variation['question'] = f"Analyze and explain: {variation['question']}"
        
        variations.append(variation)
    
    return variations

def save_questions(subject: str, questions: List[Dict]):
    data_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data')
    os.makedirs(data_dir, exist_ok=True)
    
    filename = os.path.join(data_dir, f'{subject}.json')
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump({'questions': questions}, f, ensure_ascii=False, indent=2)

def main():
    subjects = {
        'urdu': generate_urdu_questions,
        'islamiat': generate_islamiat_questions,
        'pakistan_studies': generate_pakistan_studies_questions,
        'physics': generate_physics_questions,
        'chemistry': generate_chemistry_questions,
        'biology': generate_biology_questions,
        'mathematics': generate_math_questions,
        'computer_science': generate_computer_science_questions,
        'english': generate_english_questions
    }
    
    for subject, generator in subjects.items():
        print(f"Generating questions for {subject}...")
        questions = generator()
        save_questions(subject, questions)
        print(f"Saved {len(questions)} questions for {subject}")

if __name__ == "__main__":
    main()
