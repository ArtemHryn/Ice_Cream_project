(() => {
  const refs = {
    iceCreamEl: document.querySelector('.js-open-more-ice-cream'),
    iceCoffeeEl: document.querySelector('.js-open-more-ice-coffee'),
    milkshakesEl: document.querySelector('.js-open-more-milkshakes'),
    iceCreamText: document.querySelector('.js-more-text-ice-cream'),
    iceCoffeeText: document.querySelector('.js-more-text-ice-coffee'),
    milkshakesText: document.querySelector('.js-more-text-milkshakes'),
  };

  refs.iceCreamEl.addEventListener('click', iceCreamClass);
  refs.iceCoffeeEl.addEventListener('click', iceCoffeeClass);
  refs.milkshakesEl.addEventListener('click', milkshakesClass);

  function iceCreamClass() {
    refs.iceCreamText.classList.toggle('text-hidder');
    refs.iceCreamEl.classList.toggle('rotate-button');
  }
  function iceCoffeeClass() {
    refs.iceCoffeeText.classList.toggle('text-hidder');
    refs.iceCoffeeEl.classList.toggle('rotate-button');
  }
  function milkshakesClass() {
    refs.milkshakesText.classList.toggle('text-hidder');
    refs.milkshakesEl.classList.toggle('rotate-button');
  }
})();
