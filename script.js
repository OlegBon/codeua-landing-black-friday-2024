// Отримати модальне вікно
let modal = document.getElementById("modal");

// Отримати кнопки, що відкривають модальне вікно
let btns = document.querySelectorAll(".course-item button");

// Коли користувач натискає на кнопку, відкрити модальне вікно
btns.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = "block";
  };
});

// Коли користувач натискає будь-де поза модальним вікном, закрити його
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
