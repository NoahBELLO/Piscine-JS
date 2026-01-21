/*  
Parcourir un tableau
Affichez chaque langage du tableau avec sa position (numérotée à partir de 1).

Format attendu
Pour chaque élément, affichez : "numéro. langage"

Exemple avec ce tableau :
let langages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

Résultat attendu :
1. JavaScript
2. Python
3. Java
4. C++
5. Ruby

Astuce : Utilisez i + 1 pour afficher la numérotation à partir de 1.
*/

let langages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
for (let i = 0; i < langages.length; i++) {
    console.log((i + 1) + ". " + langages[i]);
}