/*  
Destructuring d'objets
Utilisez la déstructuration pour extraire des propriétés d'un objet.

Méthode classique (à éviter) :
let personne = {
    nom: "Dupont",
    prenom: "Marie",
    age: 28,
    ville: "Paris"
};

let nom = personne.nom;
let prenom = personne.prenom;
let age = personne.age;
let ville = personne.ville;

Objectif :
Utiliser la syntaxe de destructuration pour extraire les propriétés en une seule ligne.

Résultat attendu :
console.log(nom);     // "Dupont"
console.log(prenom);  // "Marie"
console.log(age);     // 28
console.log(ville);   // "Paris"
*/

let personne = {
  nom: "Dupont",
  prenom: "Marie",
  age: 28,
  ville: "Paris",
};

let { nom, prenom, age, ville } = personne;

console.log(nom);
console.log(prenom);
console.log(age);
console.log(ville);