let calculator = {
  
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
  read(first, second) {
    this.a = first;
    this.b = second;
  },

}

calculator.read(2, 15);
console.log( calculator.sum() );
console.log( calculator.mul() );

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
