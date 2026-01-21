/*  
Inverser un tableau
Créez une fonction reverseArray qui inverse l'ordre des éléments d'un tableau.

Contrainte : Ne pas utiliser .reverse() !

Exemples :
reverseArray([1, 2, 3]) → [3, 2, 1]
reverseArray(["a", "b", "c"]) → ["c", "b", "a"]
reverseArray([5]) → [5]
Exemples de tests :
reverseArray([1, 2, 3, 4, 5])        // [5, 4, 3, 2, 1]
reverseArray(["a", "b", "c"])       // ["c", "b", "a"]
reverseArray([5])                     // [5]
reverseArray([])                      // []
*/

function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([5]));
console.log(reverseArray([]));
