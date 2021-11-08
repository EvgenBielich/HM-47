// 10=====================
// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const keys = [];
//  const values = [];
//  // Change code below this line
//  for (const key in apartment) {
//     keys.push(key)
//    values.push(apartment[key])
// }

// 11===================================

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//    if (apartment.hasOwnProperty(key)) {
//       keys.push(key);
//   values.push(apartment[key]);
//    }
// }

// 12======================================
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//    let propCount = 0;
//    for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         propCount+=1
//      }
//    }
//    return propCount;
//  }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// 13=============================
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const values = [];
//  // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//    values.push(apartment[key])

// }
//  console.log(values);

// 14=============================
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
//    let propCount = 0;

//    const keys = Object.keys(object)
//    for (const key of keys) {
//       propCount += 1;
//    }

//    return propCount;
//  }

// 15========================================
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values()

// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };

//  const keys = Object.keys(apartment);
//  const values = Object.values(apartment);

// 16=========================================
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты

// function countTotalSalary(salaries) {
//    let totalSalary = 0;
//    // Change code below this line
//    const values = Object.values(salaries);
//    console.log(values);

//    for (const value of values) {
//       totalSalary+=value
//    }
//    // Change code above this line
//    return totalSalary;
//  }

//  console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //400

// 17==============================================
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//    { hex: '#f44336', rgb: '244,67,54' },
//    { hex: '#2196f3', rgb: '33,150,243' },
//    { hex: '#4caf50', rgb: '76,175,80' },
//    { hex: '#ffeb3b', rgb: '255,235,59' },
//  ];

//  const hexColors = [];
// const rgbColors = [];

// for (const key of colors) {
//    hexColors.push(key.hex)
//    rgbColors.push(key.rgb)

// }

// 18=======================================================
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//    { name: 'Radar', price: 1300, quantity: 4 },
//    { name: 'Scanner', price: 2700, quantity: 3 },
//    { name: 'Droid', price: 400, quantity: 7 },
//    { name: 'Grip', price: 1200, quantity: 9 },
//  ];

//  function getProductPrice(productName) {
//    for (const prod of products) {

//       if (prod.name === productName) {
//          return prod.price
//       }
//    }
//    return null
// }

// console.log(getProductPrice("Radar")); //300

// 19================================================
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//    { name: 'Radar', price: 1300, quantity: 4 },
//    { name: 'Scanner', price: 2700, quantity: 3 },
//    { name: 'Droid', price: 400, quantity: 7 },
//    { name: 'Grip', price: 1200, quantity: 9 },
//  ];

//  function getAllPropValues(propName) {
//     const allValues = [];

//     for (const prod of products) {
//        console.log(prod);
//        const keys = Object.keys(prod);
//        console.log(keys);

//        for (const key of keys) {
//           if (key === propName) {
//              allValues.push(prod[key]);
//           }
//        }
//     }
//    return allValues;
// }

// console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"]

// 20=======================================
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//    { name: 'Radar', price: 1300, quantity: 4 },
//    { name: 'Scanner', price: 2700, quantity: 3 },
//    { name: 'Droid', price: 400, quantity: 7 },
//    { name: 'Grip', price: 1200, quantity: 9 },
//  ];

// function calculateTotalPrice(productName) {
//    let total = 0

//    for (const prod of products) {

//          if (prod.name === productName) {
//              total= prod.price * prod.quantity
//          }

//       }
//    return total;
// }

// console.log(calculateTotalPrice("Radar")); //5200

// 26===========================================================================

// Change code above this line
// function calculateMeanTemperature(forecast) {
//    const {
//       today: {
//          low: todayLow,
//          high: todayHigh
//       },
//       tomorrow: {
//          low: tomorrowLow,
//          high: tomorrowHigh
//       }
//    } = forecast
//    // Change code above this line
//    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//  }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));


// 28=======================================================

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// 30===================================

// function makeTask(data) {
//    const completed = false;
//    const category = 'General';
//    const priority = 'Normal';
//    // Change code below this line
//  return { category, priority, completed, ...data };
//    // Change code above this line
//  }
// console.log(makeTask);

// 31====================================================

// function add(...args) {
//    let total = 0;

//    for (const arg of args) {
//       total+=arg
//    }
//    return total
//    // Change code above this line
//  }

// console.log(add(74, 11, 62, 46, 12, 36)); //241

// 32=============================================
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// function addOverNum(...args) {
//    let total = 0;

//    for (const arg of args) {
//       console.log(arg);

//       if (arg > args[0]) {
//          total += arg;
//       }
//    }

//    return total;

//  }
//  console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// 33=====================================================

// Change code below this line
// function findMatches(arr, ...args) {
//    const matches = []; // Don't change this line

//    for (const arg of args) {
//       if (arr.includes(arg)) {
//          matches.push(arg)
//       }
//    }
//    return matches;
//  }

//  console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //[24, 9, 41]

// 34===========================================================

// const bookShelf = {
//    // Change code below this line
//    books: ['The last kingdom', 'The guardian of dreams'],
//    getBooks() {
//      return 'Returning all books';
//    },
//    addBook(bookName) {
//      return `Adding book ${bookName}`;
//    },
//    removeBook(bookName) {
//       return `Deleting book ${bookName}`;
//    },
//    updateBook(oldName, newName) {
//    return `Updating book ${oldName} to ${newName}`
//    }

//    // Change code above this line
//  };

// 35====================================================================
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//    books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//    updateBook(oldName, newName) {
//          const oldBook = this.books.indexOf(oldName);
//          this.books.splice(oldBook, 1, newName);
//          },
//  };

//  console.log(bookShelf.updateBook("The last kingdom", "Dune")); //["Dune", "Haze", "The guardian of dreams"]

// 36========================================

// const atTheOldToad = {
//    potions : []
//   };

// 37======================================================

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],

//   getPotions() {
//     return this.potions;
//   },
// };

// 38=-=====================================

// const atTheOldToad = {
//       potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//       addPotion(potionName) {
//            this.potions.push(potionName)
//       },
// };
// console.log(atTheOldToad.addPotion('Invisibility'));

// 39=============================================
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//       potions: ["Speed potion", "Dragon breath", "Stone skin"],
//       removePotion(potionName) {
//             const potionIndex = this.potions.indexOf(potionName);
//                 this.potions.splice(potionIndex, 1);
//       },
//     };
// console.log(atTheOldToad.removePotion("Dragon breath"));

// 40=================================================
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

const atTheOldToad = {
      potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
      updatePotionName(oldName, newName) {
        // Change code below this line
        const oldPotion = this.potions.indexOf(oldName);
            this.potions.splice(oldPotion, 1, newName);
        // Change code above this line
      },
    };
    
    console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));