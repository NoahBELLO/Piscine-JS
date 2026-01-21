/* 
Concaténer deux chaînes
Implémentez une fonction qui combine deux chaînes de caractères avec un espace entre elles.

Objectifs :
✅ Utiliser l'opérateur de concaténation +
✅ Comprendre les modèles littéraux
✅ Découvrez la méthode concat()
✅ Maîtriser l'assemblage de chaînes
Exemples :
concatStrings("Hello", "World") // "Hello World"
concatStrings("Bonjour", "JS")   // "Bonjour JS"
concatStrings("", "Test")        // " Test"
*/

function concatStrings(str1, str2) {
    return `${str1} ${str2}`;
}

console.log(concatStrings("Hello", "World"));
console.log(concatStrings("Bonjour", "JS"));
console.log(concatStrings("", "Test"));