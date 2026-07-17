$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // 3D Tilt initialization for static cards
    VanillaTilt.init(document.querySelectorAll(".service-card, .experience .box, .contact-info-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });

});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Dhiaa Mostafa";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come back! | Dhiaa Mostafa";
        $("#favicon").attr("href", "assets/images/favicon.png");
    }
});

// Typed.js effect
var typed = new Typed(".typing-text", {
    strings: [
        " PHP, Laravel &amp; Node.js backends",
        " React, Next.js &amp; Tailwind CSS",
        " AWS Cloud &amp; DevOps",
        " Microservices architecture",
        " Event-Driven design",
        " High-traffic production systems"
    ],
    loop: true,
    typeSpeed: 45,
    backSpeed: 25,
    backDelay: 1400,
});


let stackData = [];
let projectsData = [];

async function fetchData() {
    const stackRes = await fetch("stack.json");
    stackData = await stackRes.json();

    const projRes = await fetch("./projects/projects.json");
    projectsData = await projRes.json();
}

function showSkills(lang = "en") {
    let skillsContainer = document.getElementById("skillsContainer");
    let html = "";
    stackData.forEach(group => {
        const catName = lang === "ar" && group.category_ar ? group.category_ar : group.category;
        html += `
        <div class="stack-group">
          <p class="stack-group-title">${catName}</p>
          <div class="stack-chips">
            ${group.items.map(item => {
                const itemName = lang === "ar" && item.name_ar ? item.name_ar : item.name;
                return `
                <span class="stack-chip">
                  <img src="${item.icon}" alt="${itemName}" />
                  ${itemName}
                </span>`;
            }).join("")}
          </div>
        </div>`;
    });
    skillsContainer.innerHTML = html;

    // 3D Tilt for dynamically loaded stack-groups
    VanillaTilt.init(document.querySelectorAll(".stack-group"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
}

function showProjects(lang = "en") {
    let projectsContainer = document.getElementById("projectsContainer");
    let projectHTML = "";
    projectsData
        .filter(project => project.category !== "android")
        .forEach(project => {
            const pName = lang === "ar" && project.name_ar ? project.name_ar : project.name;
            const pDesc = lang === "ar" && project.desc_ar ? project.desc_ar : project.desc;
            const viewText = lang === "ar" ? "عرض" : "View";
            projectHTML += `
        <div class="box tilt">
          <img draggable="false" src="${project.image}" alt="${pName}" />
          <div class="content">
            <div class="tag">
              <h3>${pName}</h3>
            </div>
            <div class="desc">
              <p>${pDesc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> ${viewText}</a>
              </div>
            </div>
          </div>
        </div>`;
        });
    projectsContainer.innerHTML = projectHTML;

    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 8 });
    srtop.reveal('.work .box', { interval: 200 });
}

fetchData().then(() => {
    const currentLang = localStorage.getItem("lang") || "en";
    showSkills(currentLang);
    showProjects(currentLang);
});

document.addEventListener('languageChanged', (e) => {
    showSkills(e.detail.lang);
    showProjects(e.detail.lang);
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 800,
    reset: false,
    rotate: { x: 30, y: 0, z: 0 },
    scale: 0.95
});

/* Hero */
srtop.reveal('.home .greeting', { delay: 100 });
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content .hero-subtitle', { delay: 300 });
srtop.reveal('.home .content .hero-typed-line', { delay: 350 });
srtop.reveal('.home .hero-btns', { delay: 450 });
srtop.reveal('.home .socials', { delay: 500 });
srtop.reveal('.home .hero-widget', { delay: 300, origin: 'right' });

/* About */
srtop.reveal('.about .image', { delay: 200, origin: 'left' });
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 250 });
srtop.reveal('.about .stats-row', { delay: 300 });
srtop.reveal('.about .stat-item', { interval: 100 });
srtop.reveal('.about .profile-intro', { delay: 350 });
srtop.reveal('.about .resumebtn', { delay: 400 });

/* Services */
srtop.reveal('.service-card', { interval: 120 });

/* Skills */
srtop.reveal('.stack-panel', { delay: 200 });
srtop.reveal('.stack-group', { interval: 100 });

/* Education */
srtop.reveal('.education .box', { interval: 250 });

/* Certifications */
srtop.reveal('.cert-card', { interval: 150 });

/* Experience */
srtop.reveal('.experience .container', { interval: 250 });

/* Testimonials */
srtop.reveal('.testimonial-card', { interval: 180 });

/* Contact */
srtop.reveal('.hire-cta-banner', { delay: 200 });
srtop.reveal('.contact-info-card', { interval: 150 });
srtop.reveal('.contact .contact-image', { delay: 300, origin: 'right' });
