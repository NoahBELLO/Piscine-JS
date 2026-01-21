/*  
Spread operator avec tableaux
Utilisez l'opérateur spread ... pour manipuler des tableaux de manière élégante.

Objectifs :
✅ Copier un tableau sans référence
✅ Fusionner plusieurs tableaux
✅ Ajouter des éléments facilement
✅ Passer des arguments à une fonction
Exemples à réaliser :
// 1. Copier un tableau
let original = [1, 2, 3];
// Créer une copie indépendante

// 2. Fusionner des tableaux
let tableau1 = [1, 2, 3];
let tableau2 = [4, 5, 6];
// Créer un tableau contenant tous les éléments

// 3. Trouver le maximum
let nombres = [5, 10, 15, 3, 8];
// Utiliser Math.max() avec spread
*/

let original = [1, 2, 3];
let copie = [...original];
console.log("Copie du tableau :", copie);

let tableau1 = [1, 2, 3];
let tableau2 = [4, 5, 6];
let fusion = [...tableau1, ...tableau2];
console.log("Tableau fusionné :", fusion);

let nombres = [5, 10, 15, 3, 8];
let max = Math.max(...nombres);
console.log("Valeur maximale :", max);
