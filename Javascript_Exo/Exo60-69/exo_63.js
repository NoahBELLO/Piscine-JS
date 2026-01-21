/* 
Répéter une chaîne
Implémentez une fonction qui répète une chaîne de caractères un nombre donné de fois.

Objectifs :
✅ Utiliser la méthode native repeat()
✅ Comprendre les boucles pour la répétition
✅ Découvrir les approches alternatives ( Array.from , récursivité)
✅ Maîtriser la manipulation de chaînes
Exemples :
repeatString("ha", 3)   // "hahaha"
repeatString("Go ", 2)  // "Go Go "
repeatString("?", 5)    // "?????"
*/

function repeatString(str, count) {
    return str.repeat(count);
}

console.log(repeatString("ha", 3));
console.log(repeatString("Go ", 2));
console.log(repeatString("?", 5));