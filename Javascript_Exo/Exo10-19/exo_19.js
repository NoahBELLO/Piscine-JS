/*  
Ajouter et supprimer des éléments
Manipulez un tableau de langages en utilisant les méthodes push(), pop() et unshift().

Étapes à suivre
Créez un tableau avec 3 langages
Affichez le tableau initial
Ajoutez un langage à la fin avec push()
Affichez le tableau après push()
Enlevez le dernier élément avec pop()
Affichez le tableau après pop()
Ajoutez un langage au début avec unshift()
Affichez le tableau final
Résultat attendu :
Initial: ["JavaScript", "Python", "Java"]
Après push: ["JavaScript", "Python", "Java", "Go"]
Après pop: ["JavaScript", "Python", "Java"]
Après unshift: ["TypeScript", "JavaScript", "Python", "Java"]
*/

let languages = ["JavaScript", "Python", "Java"];
console.log("Initial:", languages);
languages.push("Go");
console.log("Après push:", languages);
languages.pop();
console.log("Après pop:", languages);
languages.unshift("TypeScript");
console.log("Après unshift:", languages);