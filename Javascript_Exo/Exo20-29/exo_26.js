/*  
Template literals (ES6)
Réécrivez ces concaténations de chaînes en utilisant les template literals (backticks `).

Code à convertir :
let nom = "Marie";
let age = 25;
let ville = "Paris";

let phrase = "Je m'appelle " + nom + ", j'ai " + age + " ans et j'habite à " + ville + ".";
console.log(phrase);

Résultat attendu :
Je m'appelle Marie, j'ai 25 ans et j'habite à Paris.

Objectif : Utiliser la syntaxe moderne ${variable} avec des backticks.
*/

let nom = "Marie";
let age = 25;
let ville = "Paris";

let phrase = `Je m'appelle ${nom}, j'ai ${age} ans et j'habite à ${ville}.`;
console.log(phrase);