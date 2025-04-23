// Отримуємо елементи
const mobileMenu = document.querySelector(".mobile-menu");
const mobileBtnOpen = document.querySelector(".burger-btn"); // кнопка бургер
const mobileBtnClose = document.querySelector(".mobile-btn-close"); // кнопка закриття
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-nav-list-item"); // посилання в меню

// Функція: перемикання видимості меню
const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  toggleScroll();
};

// Функція: блокування прокрутки
const toggleScroll = () => {
  document.body.classList.toggle("is-scroll-disable");
};

// Функція: закриття меню
const closeMenu = () => {
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("is-scroll-disable");
};

// Відкриття меню
mobileBtnOpen.addEventListener("click", toggleMenu);

// Закриття кнопкою
mobileBtnClose.addEventListener("click", closeMenu);

// Закриття при натисканні на будь-яке посилання
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
