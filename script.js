const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// تحقق من التفضيل المحفوظ
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.src = 'dark-icon.png'; // استبدل بـ رابط أيقونة الوضع الداكن
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // حفظ التفضيل
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.src = 'dark-icon.png'; // استبدل بـ رابط أيقونة الوضع الداكن
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.src = 'light-icon.png'; // استبدل بـ رابط أيقونة الوضع الفاتح
    }
});