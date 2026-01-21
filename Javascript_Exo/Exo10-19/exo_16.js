/*  
Inverser une chaîne
Créez une fonction reverseString qui inverse l'ordre des caractères d'une chaîne.

Exemples :
"hello" → "olleh"
"JavaScript" → "tpircSavaJ"
"12345" → "54321"
Exemples de tests :
reverseString("hello")       // "olleh"
reverseString("JavaScript")  // "tpircSavaJ"
reverseString("12345")       // "54321"
*/

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));     
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));     