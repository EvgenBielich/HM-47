// 3======================================

// function makePizza(pizzaName, callback) {
//    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//    callback(pizzaName);
//  }

//  makePizza('Роял гранд', function deliverPizza(pizzaName) {
//    console.log(`Доставляем пиццу ${pizzaName}.`);
//  });

//  makePizza('Ультрасыр', function eatPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
//  });


// 4===========================================
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//    order(pizzaName, onSuccess, onError) {
//       for (const pizza of pizzaPalace.pizzas) {
//                if (pizzaName === pizza) {
//                return onSuccess(pizzaName);
//             }
//          }
//             return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//    },
// };
//  // Колбэк для onSuccess
// function makePizza(pizzaName) {
//    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

//  // Колбэк для onError
//  function onOrderError(error) {
//    return `Ошибка! ${error}`;
//  }
 
//  // Вызовы метода с колбэками
//  console.log( pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
//  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
//  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
//  pizzaPalace.order('Биг майк', makePizza, onOrderError);
//  pizzaPalace.order('Венская', makePizza, onOrderError);

// 5==================================================

// const pizzaPalace = {
//    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//    // Пиши код ниже этой строки
//    checkPizza(pizzaName) {
//      return this.pizzas.includes(pizzaName);
//    },
//    order(pizzaName) {
//      const isPizzaAvailable = this.checkPizza(pizzaName);
 
//      if (!isPizzaAvailable) {
//        return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//      }
 
//      return `Заказ принят, готовим пиццу «${pizzaName}».`;
//    },
//    // Пиши код выше этой строки
//  };

// 6============================================================

// const customer = {
//    username: 'Mango',
//    balance: 24000,
//    discount: 0.1,
//    orders: ['Burger', 'Pizza', 'Salad'],
//    // Пиши код ниже этой строки
//    getBalance() {
//      return this.balance;
//    },
//    getDiscount() {
//      return this.discount;
//    },
//    setDiscount(value) {
//      this.discount = value;
//    },
//    getOrders() {
//      return this.orders;
//    },
//    addOrder(cost, order) {
//      this.balance -= cost - cost * this.discount;
//      this.orders.push(order);
//    },
//    // Пиши код выше этой строки
//  };
 
//  customer.setDiscount(0.15);
//  console.log(customer.getDiscount()); // 0.15
//  customer.addOrder(5000, 'Steak');
//  console.log(customer.getBalance()); // 19750
//  console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// 7===================================================================

const orders = [
   { email: 'solomon@topmail.ua', dish: 'Burger' },
   { email: 'artemis@coldmail.net', dish: 'Pizza' },
   { email: 'jacob@mail.com', dish: 'Taco' },
 ];
 
 // Пиши код ниже этой строки
function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
 }
 
 const messages = orders.map((order, index) => composeMessage.call(order, index + 1));
 
 console.log(messages);