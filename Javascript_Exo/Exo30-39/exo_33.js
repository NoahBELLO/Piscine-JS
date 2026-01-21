/*  
Spread operator avec objets
Utilisez l'opérateur spread ... pour manipuler des objets de manière élégante.

Objectifs :
✅ Copier un objet sans référence
✅ Fusionner plusieurs objets
✅ Modifier une propriété sans mutation
✅ Ajouter de nouvelles propriétés
Exemples à réaliser :
// 1. Copier un objet
let personne = { nom: "Dupont", age: 30 };
// Créer une copie indépendante

// 2. Fusionner des objets
let infos = { nom: "Martin", age: 25 };
let contact = { email: "martin@email.com", tel: "0612345678" };
// Créer un objet avec toutes les propriétés

// 3. Modifier une propriété
let user = { nom: "Dupont", age: 30, ville: "Paris" };
// Créer un nouvel objet avec age = 31
*/

let personne = { nom: "Dupont", age: 30 };
let copiePersonne = { ...personne };
console.log(copiePersonne);

let infos = { nom: "Martin", age: 25 };
let contact = { email: "martin@test.com", tel: "0612345678" };
let fusion = { ...infos, ...contact };
console.log(fusion);

let user = { nom: "Dupont", age: 30, ville: "Paris" };
let updatedUser = { ...user, age: 31 };
console.log(updatedUser);
