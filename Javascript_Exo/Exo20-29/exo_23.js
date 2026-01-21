/*  
Filtrer les nombres pairs
Créez une fonction filterEven qui retourne un nouveau tableau contenant uniquement les nombres pairs.

Rappel :
Un nombre est pair si nombre % 2 === 0

Exemples :
filterEven([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
filterEven([1, 3, 5, 7]) → []
filterEven([10, 15, 20, 25]) → [10, 20]
Exemples de tests :
filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  // [2, 4, 6, 8, 10]
filterEven([1, 3, 5, 7])                      // []
filterEven([2, 4, 6, 8])                      // [2, 4, 6, 8]
filterEven([])                                 // []
*/

function filterEven(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(filterEven([1, 3, 5, 7]));
console.log(filterEven([2, 4, 6, 8]));
console.log(filterEven([]));