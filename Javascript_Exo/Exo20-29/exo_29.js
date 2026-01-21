/*  
Arrow functions avec méthodes de tableau
Convertissez ces utilisations de fonctions classiques en arrow functions avec les méthodes de tableau.

Code à convertir :
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Avec des fonctions classiques
let pairs = nombres.filter(function(n) {
    return n % 2 === 0;
});

let doubles = nombres.map(function(n) {
    return n * 2;
});

Objectifs :
✅ Remplacer les fonctions anonymes par des arrow functions
✅ Utiliser la syntaxe courte quand possible
✅ Comprendre le chaînage de méthodes
Résultats attendus :
pairs   // [2, 4, 6, 8, 10]
doubles // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
*/

let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pairs = nombres.filter(n => n % 2 === 0);
let doubles = nombres.map(n => n * 2);

console.log("Pairs :", pairs);
console.log("Doubles :", doubles);