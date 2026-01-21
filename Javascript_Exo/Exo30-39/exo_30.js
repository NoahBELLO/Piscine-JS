/*  
Destructuring de tableaux
Utilisez la déstructuration pour extraire des valeurs d'un tableau de manière élégante.

Méthode classique (à éviter) :
let couleurs = ["rouge", "vert", "bleu"];
let premiere = couleurs[0];
let deuxieme = couleurs[1];
let troisieme = couleurs[2];

Objectif :
Utiliser la syntaxe de destructuration pour extraire les valeurs en une seule ligne.

Résultat attendu :
console.log(premiere);   // "rouge"
console.log(deuxieme);   // "vert"
console.log(troisieme);  // "bleu"
*/

let couleurs = ["rouge", "vert", "bleu"];
let [premiere, deuxieme, troisieme] = couleurs;

console.log(premiere);
console.log(deuxieme);
console.log(troisieme);