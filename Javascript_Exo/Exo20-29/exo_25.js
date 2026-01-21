/*  
Défi : Palindrome
Créez une fonction isPalindrome qui vérifie si un mot est un palindrome (se lit de la même manière dans les deux sens).

Qu'est-ce qu'un palindrome ?
Un palindrome est un mot qui se lit identiquement de gauche à droite et de droite à gauche.

Exemples de palindromes :
"radar" ✓
"kayak" ✓
"level" ✓
"noon" ✓
"civic" ✓
Exemples de tests :
isPalindrome("radar")   // true
isPalindrome("hello")   // false
isPalindrome("Kayak")   // true (insensible à la casse)
isPalindrome("Level")   // true
isPalindrome("abc")     // false

Astuce : Pensez à gérer les majuscules/minuscules !
*/

function isPalindrome(word) {
  const normalizedWord = word.toLowerCase();
  const reversedWord = normalizedWord.split("").reverse().join("");
  return normalizedWord === reversedWord;
}

console.log(isPalindrome("radar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("Kayak")); 
console.log(isPalindrome("Level")); 
console.log(isPalindrome("abc")); 
