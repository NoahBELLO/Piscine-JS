/*  
Somme de 1 à N
Créez une fonction sumUpToqui calcule la somme de tous les nombres entiers de 1 à n.

Formule
somme(n) = 1 + 2 + 3 + ... + n

Exemples :
sumUpTo(5)= 1 + 2 + 3 + 4 + 5 = 15
sumUpTo(10)= 1 + 2 + 3 + ... + 10 = 55
sumUpTo(100)= 1 + 2 + 3 + ... + 100 = 5050
Exemples de tests :
sumUpTo(5)    // 15
sumUpTo(10)   // 55
sumUpTo(100)  // 5050
*/

function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumUpTo(5));
console.log(sumUpTo(10));
console.log(sumUpTo(100));