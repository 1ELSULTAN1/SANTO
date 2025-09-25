const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// التحقق من التفضيل المحفوظ للوضع الداكن
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.src = 'dark-icon.png';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.src = 'dark-icon.png';
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.src = 'light-icon.png';
    }
});

// زر تبديل اللغة
const langBtn = document.getElementById("lang-btn");
const elements = document.querySelectorAll("[data-ar]");
const desktopSearchInput = document.getElementById('desktop-search-input');
let currentLang = localStorage.getItem('lang') || "ar"; // اللغة الافتراضية

// وظيفة تحديث اللغة
function updateLanguage(lang) {
  elements.forEach(el => {
    if (lang === "en") {
      el.textContent = el.getAttribute("data-en");
    } else {
      el.textContent = el.getAttribute("data-ar");
    }
  });

  if (desktopSearchInput) {
    desktopSearchInput.placeholder = desktopSearchInput.getAttribute(`data-${lang}-placeholder`);
  }

  if (lang === "en") {
    document.body.setAttribute("dir", "ltr");
    langBtn.innerHTML = `
      <div class="flag"><img src="eg.png" alt="EG Flag"></div>
      <div class="text">AR</div>
    `;
  } else {
    document.body.setAttribute("dir", "rtl");
    langBtn.innerHTML = `
      <div class="flag"><img src="us.png" alt="US Flag"></div>
      <div class="text">US</div>
    `;
  }
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

// تحديث اللغة عند تحميل الصفحة
updateLanguage(currentLang);

langBtn.addEventListener("click", () => {
  if (currentLang === "ar") {
    updateLanguage("en");
  } else {
    updateLanguage("ar");
  }
});

// وظائف قائمة الموبايل
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});