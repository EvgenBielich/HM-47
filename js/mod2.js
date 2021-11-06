// !===============================================

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//    const words = message.split(' ')
//    console.log(words);

//    const result = words.length * pricePerWord;
//    return result
//    console.log(result);

//    // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 20)

// =====================================================
// function slugify(title) {
//    // Change code below this line
//    const string = title.toLowerCase().split(' ').join('-');
//    console.log(string);
//    // Change code above this line
// }

// slugify("Arrays for begginers")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// =======================================================
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//    // Change code below this line
//    const newArr = firstArray.concat(secondArray);
//    console.log(newArr);

//    if (newArr.length > maxLength) {
//     return newArr.slice(0, maxLength)
//  }

//  return newArr

//    // Change code above this line
// }

// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)

// =========================================

// function calculateTotalPrice(order) {
//    let total = 0;
//    // Change code below this line
//    for (let i = 0; i <order.length; i += 1){
//     console.log(order[i]);
//     total+=order[i]
//  }
//    // Change code above this line
//    return total;
//  }


//  calculateTotalPrice([412, 371, 94, 63, 176])

// 21==================================================
// розбей строку на масив,скажи что самое длиное слово это элемент с индексом ноль....перебери масив через фор, и сравни длину каждого слова с твоим уже существующем тоесть с тем что под индексом ноль, если при сравнении нашлось слово больше, перезапиши его как самое большое)

// function findLongestWord(string) {
//    // Change code below this line
//    let longWord = string.split(' ')
//    console.log(longWord);
//    let word = longWord[0]
//    console.log(word);
//    for (let i = 0; i < longWord.length; i += 1) {
//       if (longWord[i].length > word.length) {
//          word = longWord[i]
//       }
//    }
// return word
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//22 ==================================================

// function createArrayOfNumbers(min, max) {
//    const numbers = [];
//    for (let i = min; i <= max; i+=1 ) {
//       console.log(i);
//       numbers.push(i)

//      }
//    return numbers;
// }

// console.log(createArrayOfNumbers(29, 34));


// 23===================================================
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//    const newArr = [];
//    for (const num of numbers) {
//       console.log(num);
//       if (num > value) {
//          newArr.push(num)
//       }
//    }
//    return newArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// 25============================================================
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//    let newArr = []

//    for (const el of array1) {
//       console.log(el);
//       if (array2.includes(el)) {
//          newArr.push(el)
//       }
//   }
//    return newArr
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));


// 26==============================================================
// function calculateTotalPrice(order) {
//    let total = 0;
//    for(let el of order) {
//      total += el;
//    }
//    return total;
//  }

// 27==============================================================

// function filterArray(numbers, value) {
//    const filteredNumbers = [];

//    for( let num of numbers) {
//    if (num > value) {
//        filteredNumbers.push(num);
//      }
//    }
//    return filteredNumbers;
//  }


// 28=======================================================================

// const a = 3 % 3;
// const b = 4 % 3 ;
// const c = 11 % 4 ; //3
// const d = 12 % 7; //5
// const e = 8 % 6;  //2

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// 29==============================================

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    let newArr = [];

//    for (let i = start; i <= end; i += 1){
//       console.log(i);
//       if (i % 2 === 0) {
//          newArr.push(i)
//       }
//    }
//    return newArr;
// }

// console.log(getEvenNumbers(6, 12));


// 31===============================================

// function findNumber(start, end, divisor) {

//    for (let i = start; i < end; i += 1) {
//      if (i % divisor === 0) {
//        return i;
//      }
//    }
//  }

// 32==========================================================

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
   for (const arr of array) {
      console.log(arr);
      if (arr === value) {
         return true
      }
   }
   return false
}

console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));

console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));