import Modal from "./modal.js";

// Красивая маска на форму колбека
document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.querySelector('.callback__form input[type="tel"]');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value;

      // Шаг 1: Очищаем строку от ВСЕХ не-цифр (буквы и знаки просто исчезают при вводе)
      let digits = value.replace(/\D/g, '');

      // Если поле очистили полностью — выходим
      if (!digits) {
        e.target.value = '';
        return;
      }

      // Шаг 2: Корректируем первую цифру (если пользователь начал вводить с 7 или 8)
      if (digits.startsWith('7') || digits.startsWith('8')) {
        digits = digits.substring(1);
      }

      // Шаг 3: Жестко ограничиваем длину (не более 10 цифр после +7)
      digits = digits.substring(0, 10);

      // Шаг 4: Собираем красивую строку для маски
      let formatted = '+7 ';
      if (digits.length > 0) {
        formatted += '(' + digits.substring(0, 3);
      }
      if (digits.length >= 4) {
        formatted += ') ' + digits.substring(3, 6);
      }
      if (digits.length >= 7) {
        formatted += '-' + digits.substring(6, 8);
      }
      if (digits.length >= 9) {
        formatted += '-' + digits.substring(8, 10);
      }

      // Возвращаем отформатированный текст обратно в инпут
      e.target.value = formatted;
    });

    // Комфортное стирание: если остался только префикс "+7 ", при Backspace очищаем всё поле
    phoneInput.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && e.target.value.length <= 4) {
        e.target.value = '';
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  console.log('swiper');
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

try {
  const mobileHeader = document.querySelector('.mobile-header');
  const burgerBtn = document.querySelector('.header__burger');
  const closeBtn = document.querySelector('.mobile-header__cross');

  // Открываем меню при клике на бургер
  burgerBtn.addEventListener('click', () => {
    mobileHeader.classList.add('mobile-header-active');
  });

  // Закрываем меню при клике на крестик
  closeBtn.addEventListener('click', () => {
    mobileHeader.classList.remove('mobile-header-active');
  });

  // Автозакрытие меню при нажатии на ссылку
  const menuLinks = document.querySelectorAll('.mobile-menu__link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (closeBtn) {
        closeBtn.click();
      }
    });
  });


  const autoparkPlans = document.querySelector('.autopark__plans');
  const autoparkArrowRight = document.querySelector('.autopark__scroll-arrow-right');
  const autoparkArrowLeft = document.querySelector('.autopark__scroll-arrow-left');

  const scrollStep = 150; // Дистанция прокрутки за один клик

  // Клик вправо с защитой от бесконечного скролла
  autoparkArrowRight.addEventListener('click', () => {
    // Вычисляем максимально возможный скролл
    const maxScrollLeft = autoparkPlans.scrollWidth - autoparkPlans.clientWidth;

    // Если текущая позиция + шаг превышает максимум, то крутим ровно до упора
    if (autoparkPlans.scrollLeft + scrollStep >= maxScrollLeft) {
      autoparkPlans.scrollTo({
        left: maxScrollLeft,
        behavior: 'smooth'
      });
    } else {
      autoparkPlans.scrollBy({
        left: scrollStep,
        behavior: 'smooth'
      });
    }
  });

  // Клик влево с защитой от ухода в минус
  autoparkArrowLeft.addEventListener('click', () => {
    if (autoparkPlans.scrollLeft - scrollStep <= 0) {
      autoparkPlans.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      autoparkPlans.scrollBy({
        left: -scrollStep,
        behavior: 'smooth'
      });
    }
  });

  new Modal({
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll"
  })
} catch (error) {
  console.log(error);
}