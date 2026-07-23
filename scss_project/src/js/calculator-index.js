// Переключалка дней в калькуляторе
document.addEventListener('DOMContentLoaded', () => {
  const dayButtons = document.querySelectorAll('.calculator__content-day');
  const planEconom = document.getElementById('plan-econom');
  const planComfort = document.getElementById('plan-comfort');
  const planComfortPlus = document.getElementById('plan-comfort-plus');
  const planBusiness = document.getElementById('plan-business');

  const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  dayButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentActive = document.querySelector('.calculator__content-day--active');
      if (currentActive)
        currentActive.classList.remove('calculator__content-day--active');
      button.classList.add('calculator__content-day--active');
      
      const daysCount = parseInt(button.textContent.trim());
      if (planEconom) planEconom.textContent = `${formatNumber(daysCount * 10000)} ₽`;
      if (planComfort) planComfort.textContent = `${formatNumber(daysCount * 12000)} ₽`;
      if (planComfortPlus) planComfortPlus.textContent = `${formatNumber(daysCount * 14000)} ₽`;
      if (planBusiness) planBusiness.textContent = `${formatNumber(daysCount * 16000)} ₽`;
    });
  });
})