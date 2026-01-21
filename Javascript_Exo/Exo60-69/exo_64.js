/* 
Inverser une chaîne
Implémentez une fonction qui inverse l'ordre des caractères dans une chaîne.

Objectifs :
✅ Utiliser la combinaison split() + reverse() + join()
✅ Comprendre la chaîne de conversion ↔ tableau
✅ Découvrir les approches alternatives (boucle, réduire, récursivité)
✅ Maîtriser la manipulation de chaînes
Exemples :
reverseString("hello")      // "olleh"
reverseString("JavaScript") // "tpircSavaJ"
reverseString("123")        // "321"
*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString("123"));