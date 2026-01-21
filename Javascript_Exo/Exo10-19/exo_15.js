/*  
Compter les voyelles
Créez une fonction countVowels qui compte le nombre de voyelles dans une chaîne de caractères.

Voyelles à compter
Voyelles : a, e, i, o, u (minuscules et majuscules)

Exemples :
"Hello World" → 3 voyelles (e, o, o)
"JavaScript" → 3 voyelles (a, a, i)
"Piscine" → 4 voyelles (i, i, e)
Exemples de tests :
countVowels("Hello World")   // 3
countVowels("JavaScript")    // 3
countVowels("Piscine")       // 4
countVowels("bcdfg")         // 0
*/

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello World")); 
console.log(countVowels("JavaScript"));
console.log(countVowels("Piscine"));
console.log(countVowels("bcdfg")); 