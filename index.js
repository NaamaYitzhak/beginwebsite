document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeLogin = document.getElementById("closeLogin");
    const loginForm = document.getElementById("loginForm");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // פתיחת וסגירת טופס התחברות
    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
        // אם התפריט פתוח במובייל נסגור אותו אוטומטית
        navMenu.classList.remove("open");
    });

    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    // ניהול תפריט המובייל
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // סגירת התפריט בלחיצה על קישור
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });

    // טיפול בהגשת טופס התחברות
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        if (username && password) {
            login(username, password);
        }
    });
});

function login(username, password) {
    alert(`ניסית להתחבר עם משתמש: ${username} וסיסמה: ${password}`);
}
