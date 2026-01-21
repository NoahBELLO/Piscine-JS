/*  
Année bissextile
Créer une fonction isLeapYearqui détermine si une année est bissextile.

Règles d'une année bissextile
Une année est bissextile si :

Elle est divisible par 4 ET non divisible par 100
OU elle est divisible par 400
En résumé :

Tous les 4 ans → bissextile
SAUF tous les 100 ans → PAS bissextile
SAUF tous les 400 ans → bissextile
Exemples de tests :
isLeapYear(2024)  // true (divisible par 4, pas par 100)
isLeapYear(2023)  // false (pas divisible par 4)
isLeapYear(2000)  // true (divisible par 400)
isLeapYear(1900)  // false (divisible par 100 mais pas par 400)
*/

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
