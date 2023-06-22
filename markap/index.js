// Мережа фастфудів пропонує кілька видів гамбургерів:
// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:
// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).

// Можна додати добавки:
// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).

// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

// Приклад роботи коду:

// // маленький гамбургер з начинкою з сиру
// var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculate ());

// // скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());

// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// // А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;

    this.toppings.forEach(topping => calories += topping.calories
    );

    return calories;
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;

    this.toppings.forEach(topping => price += topping.price
    );

    return price;
  }
}

class SmallHamburger extends Hamburger {
  constructor(stuffing) {
    const size = { price: 50, calories: 20 };
    super(size, stuffing);
  }
}

class LargeHamburger extends Hamburger {
  constructor(stuffing) {
    const size = { price: 100, calories: 40 };
    super(size, stuffing);
  }
}

const CHEESE = { price: 10, calories: 20 };
const SALAD = { price: 20, calories: 5 };
const POTATO = { price: 15, calories: 10 };
const SPICE = { price: 15, calories: 0 };
const MAYO = { price: 20, calories: 5 };

const smallHamburger = new SmallHamburger(CHEESE);
smallHamburger.addTopping(MAYO);

const largeHamburger = new LargeHamburger(SALAD);
largeHamburger.addTopping(SPICE);

console.log("Small Hamburger Calories: " + smallHamburger.calculateCalories());
console.log("Small Hamburger Price: " + smallHamburger.calculatePrice());

console.log("Large Hamburger Calories: " + largeHamburger.calculateCalories());
console.log("Large Hamburger Price: " + largeHamburger.calculatePrice());