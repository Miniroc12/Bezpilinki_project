document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, на какой странице мы находимся
  if (window.location.pathname.includes("contact.html")) {
    console.log("📩 Страница контактов - загружаем EmailJS");

    // Загружаем EmailJS, если это страница контактов
    emailjs.init("Myyzv3kCiflpoEmAE"); // Замените на свой Public Key
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
          name: contactForm.querySelector('input[name="name"]').value.trim(),
          phone: contactForm.querySelector('input[name="phone"]').value.trim(),
          message: contactForm.querySelector('textarea[name="message"]').value.trim(),
        };

        if (!formData.name || !formData.phone || !formData.message) {
          alert("❌ Заполните все поля формы!");
          return;
        }

        // Отправка данных в EmailJS
      emailjs.send("service_carak4y", "template_e3fe058", formData)
        .then(() => {
            console.log("✅ Письмо успешно отправлено!");
            successMessage.classList.remove('hidden');
            successMessage.innerText = "Ваш заказ успешно отправлен!";
            contactForm.reset();
          })
          .catch((error) => {
            alert("Ошибка отправки. Проверьте консоль.");
            console.error("❌ Ошибка EmailJS:", error);
          });
      });
    }
  } else {
    console.log("🔹 Не страница контактов - EmailJS не загружается.");
  }
});

// Функция для открытия модального окна с изображением
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) {
    console.error("❌ Ошибка: модальное окно не найдено!");
    return;
  }

  modal.style.display = "flex";
  modalImg.src = "" + imageSrc; // Проверь, что изображения в папке images
}

document.addEventListener("DOMContentLoaded", function() {
  const animatedElements = document.querySelectorAll(".animated");

  function onScroll() {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated, section");

  function onScroll() {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Запуск анимаций при загрузке страницы
});


function toggleText(button) {
  const fullText = button.previousElementSibling; // Ищем полный текст
  const shortText = fullText.previousElementSibling; // Ищем короткий текст

  // Переключаем видимость текста
  if (fullText.style.display === "none") {
    fullText.style.display = "block";
    button.textContent = "Скрыть полный текст"; // Изменяем текст на кнопке
  } else {
    fullText.style.display = "none";
    button.textContent = "Показать полный текст"; // Возвращаем исходный текст на кнопке
  }
}
function toggleText(button) {
  // Находим блок с полным текстом
  const fullText = button.parentElement.querySelector('.full-text');
  
  // Проверяем, скрыт ли текст
  if (fullText.style.display === "none") {
    // Если скрыт, показываем
    fullText.style.display = "block";
    button.textContent = "Скрыть полный текст"; // Меняем текст кнопки
  } else {
    // Если видим, скрываем
    fullText.style.display = "none";
    button.textContent = "Показать полный текст"; // Меняем текст кнопки
  }
}

// Получаем элементы бургер-меню и навигации
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav ul');

// Добавляем обработчик событий на клик по бургер-меню
navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');  // Добавляем/удаляем класс active
  navToggle.classList.toggle('active'); // Для бургер-меню, чтобы менять его стиль
});




function showPrice(category, event) {
  // Убираем активный класс у всех изображений
  document.querySelectorAll('.price-img').forEach(img => img.classList.remove('active'));

  // Убираем активный класс у всех кнопок
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // Показываем нужное изображение
  document.getElementById(category).classList.add('active');

  // Добавляем активный класс на нажатую кнопку
  event.currentTarget.classList.add('active');
}
