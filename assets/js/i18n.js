document.addEventListener("DOMContentLoaded", () => {
  // Get language from localStorage, default to English
  let currentLang = localStorage.getItem("lang") || "en";
  
  // Set initial language
  setLanguage(currentLang);

  // Language toggle button listener
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      currentLang = currentLang === "en" ? "ar" : "en";
      setLanguage(currentLang);
    });
  }

  function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    // Update HTML dir and lang attributes
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }

    // Update the button text
    const langToggleText = document.getElementById("lang-toggle-text");
    if (langToggleText) {
      langToggleText.textContent = lang === "en" ? "العربية" : "English";
    }

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Special case for input placeholders if any
    const inputs = document.querySelectorAll("[data-i18n-placeholder]");
    inputs.forEach(input => {
      const key = input.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        input.setAttribute("placeholder", translations[lang][key]);
      }
    });
    
    // Dispatch an event if other scripts need to know about the language change
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
});
