/*  
Factorielle
Créez une fonction factorialqui calcule la somme de tous les nombres entiers de 1 à n.

Définition mathématique
n! = n × (n-1) × (n-2) × ... × 2 × 1

Par convention : 0! = 1 et 1 ! = 1

Exemples :
factorial(5)= 1 + 2 + 3 + 4 + 5 = 120
factorial(0)= 1 + 2 + 3 + ... + 10 = 1
factorial(1)= 1 + 2 + 3 + ... + 100 = 1
factorial(7)= 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
Exemples de tests :
factorial(5)   // 120
factorial(0)   // 1
factorial(7)   // 5040
*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(7));
