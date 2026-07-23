const fs = require('fs');
const path = 'c:/Users/Dhiaa/Documents/profile/assets/js/script.js';
let content = fs.readFileSync(path, 'utf8');

// Replace projectsData array
content = content.replace(/const projectsData = \[\s*\{[\s\S]*?\}\s*\];/, 'let projectsData = [];');

// Replace initProjectsSection
const newInit = sync function initProjectsSection() {
  const lang = localStorage.getItem('lang') || 'en';
  try {
    const res = await fetch('./projects/projects.json');
    if (res.ok) {
      projectsData = await res.json();
    }
  } catch(e) {
    console.error('Failed to fetch projects', e);
  }
  renderProjects(lang);

  .filter-btn.on('click', function () {
    .filter-btn.removeClass('active');
    .addClass('active');
    currentProjectFilter = .data('filter');
    const currentLang = localStorage.getItem('lang') || 'en';
    renderProjects(currentLang);
  });

  #project-search-input.on('keyup input', function () {
    currentProjectSearch = .val();
    const currentLang = localStorage.getItem('lang') || 'en';
    renderProjects(currentLang);
  });

  #modalCloseBtn, #projectModal.on('click', function (e) {
    if (e.target === this || e.target.id === 'modalCloseBtn') {
      #projectModal.removeClass('active');
    }
  });
};

content = content.replace(/function initProjectsSection\(\) \{[\s\S]*?\n\}\n/, newInit + '\n\n');

fs.writeFileSync(path, content, 'utf8');
console.log('Done');
