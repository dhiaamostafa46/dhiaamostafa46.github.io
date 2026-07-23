import sys
with open('c:/Users/Dhiaa/Documents/profile/assets/js/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re
# 1. Replace the projectsData array
content = re.sub(r'const projectsData = \[\s*\{.*?\}\s*\];', 'let projectsData = [];', content, flags=re.DOTALL)

# 2. Replace initProjectsSection
new_init = '''async function initProjectsSection() {
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
}
'''
content = re.sub(r'function initProjectsSection\(\) \{.*?\}\n', new_init, content, flags=re.DOTALL)

with open('c:/Users/Dhiaa/Documents/profile/assets/js/script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Success')
