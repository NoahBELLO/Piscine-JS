/*  
Paire ou détérioration
Créer une fonction evenOrOddqui détermine si un nombre est paire ou impair.

Retour attendu
La fonction doit retourner :

La chaîne "pair"si le nombre est paire
La chaîne "impair"si le nombre est impair
Rappel : Un nombre est paire si le reste de sa division par 2 est égal à 0.

Exemples de tests :
evenOrOdd(4)   // "pair"
evenOrOdd(7)   // "impair"
evenOrOdd(0)   // "pair"
evenOrOdd(-2)  // "pair"
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "pair";
  } else {
    return "impair";
  }
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(7));
console.log(evenOrOdd(0));
console.log(evenOrOdd(-2));
