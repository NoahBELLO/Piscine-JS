/*  
Accéder aux éléments d'un tableau
Affichez le premier, le troisième et le dernier élément du tableau de langages.

Rappels importants
Les indices commencent à 0 (pas à 1)
Le premier élément est à l'indice 0
Le dernier élément est à l'indice length - 1
Exemple avec ce tableau :
let langages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

Résultat attendu :
Premier: JavaScript
Troisième: Java
Dernier: Ruby
*/

let langages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
console.log("Premier: " + langages[0]);
console.log("Troisième: " + langages[2]);
console.log("Dernier: " + langages[langages.length - 1]);