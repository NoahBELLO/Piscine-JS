/*  
Somme d'un tableau
Calculez la somme de tous les nombres contenus dans un tableau.

Exemple :
let nombres = [5, 10, 15, 20, 25];

Résultat attendu : 75 (5 + 10 + 15 + 20 + 25)

Exemples de tests :
sommeTableau([5, 10, 15, 20, 25])  // 75
sommeTableau([1, 2, 3, 4, 5])      // 15
sommeTableau([100])                 // 100
sommeTableau([])                    // 0
*/

function sommeTableau(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
}

// Exemples de tests
console.log(sommeTableau([5, 10, 15, 20, 25]));
console.log(sommeTableau([1, 2, 3, 4, 5]));
console.log(sommeTableau([100]));
console.log(sommeTableau([]));
