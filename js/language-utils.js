import translations from '../translations.js';

// Get the current language from localStorage or default to English
export const getCurrentLanguage = () => localStorage.getItem('selectedLanguage') || 'en';

// Update the page language and all translations
export function updatePageLanguage() {
    const currentLanguage = getCurrentLanguage();
    document.documentElement.lang = currentLanguage;
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Update direction based on language
    document.body.dir = ['ur', 'sd'].includes(currentLanguage) ? 'rtl' : 'ltr';
}

// Change the current language
export function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} is not supported`);
        return;
    }
    
    localStorage.setItem('selectedLanguage', lang);
    updatePageLanguage();
    updateLanguageButtons();
}

// Update the language buttons to show the active language
export function updateLanguageButtons() {
    const currentLang = getCurrentLanguage();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// Initialize language handling
export function initializeLanguage() {
    updatePageLanguage();
    updateLanguageButtons();
}
