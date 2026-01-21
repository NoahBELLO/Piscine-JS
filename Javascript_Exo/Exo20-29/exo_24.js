/*  
Moyenne d'un tableau
Créez une fonction calculateAverage qui calcule la moyenne des nombres d'un tableau.

Formule :
Moyenne = Somme des éléments / Nombre d'éléments

Exemples :
calculateAverage([10, 20, 30]) → 20
calculateAverage([12, 15, 18, 14, 16]) → 15
calculateAverage([5, 5, 5, 5]) → 5
Exemples de tests :
calculateAverage([10, 20, 30])              // 20
calculateAverage([12, 15, 18, 14, 16])      // 15
calculateAverage([5, 5, 5, 5])              // 5
calculateAverage([100])                      // 100
*/

function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30])); 
console.log(calculateAverage([12, 15, 18, 14, 16])); 
console.log(calculateAverage([5, 5, 5, 5])); 
console.log(calculateAverage([100])); 