const CounterPlag = function ({
  selector,
  value = 0,
  step = 1,
  price = 0,
} = {}) {
  this._value = value;
  this._step = step;
  this._price = price;
  this._totalPrice = 0;

  this._refs = this._getRefs(selector);
  this._bindEvents();
  this.updateUI();
};

CounterPlag.prototype._getRefs = function (selector) {
  const refs = {};
  refs.container = document.querySelector(selector);
  refs.incrementBtn = refs.container.querySelector('[data-increase]');
  refs.decrementBtn = refs.container.querySelector('[data-decrease]');
  refs.value = refs.container.querySelector('[data-value]');
  refs.price = document.querySelector('[data-total-price]');
  refs.iceCreamPic = refs.container.previousElementSibling;
  return refs;
};

CounterPlag.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    this.increment();
    this.updateUI();
    
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    this.decrement();
    this.updateUI();
  });
  
  this._refs.iceCreamPic.addEventListener('click', () => {
    this.increment();
    this.updateUI();
  });
};

CounterPlag.prototype.increment = function () {
  this._value += this._step;
  this._totalPrice =
    Number(document.querySelector('[data-total-price]').textContent) +
    this._price;
};

CounterPlag.prototype.decrement = function () {
  if (this._value <= 0) {
    this._value = 0;
    return;
  }
  this._value -= this._step;
  this._totalPrice =
    Number(document.querySelector('[data-total-price]').textContent) -
    this._price;
};

CounterPlag.prototype.updateUI = function () {
  this._refs.value.innerHTML = this._value;
  this._refs.price.innerHTML = this._totalPrice;
};

new CounterPlag({ selector: '#counter-1', step: 1, price: 12 });

new CounterPlag({ selector: '#counter-2', step: 1, price: 15 });

new CounterPlag({ selector: '#counter-3', step: 1, price: 14 });
