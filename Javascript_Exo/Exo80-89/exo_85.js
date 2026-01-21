/* 
Bases des RegExp
Créez des expressions régulières pour rechercher, tester et extraire des motifs dans du texte.

Consignations
Démontrez l'utilisation des expressions régulières pour :

Créer des RegExp avec les deux syntaxes (littéral et constructeur)
Tester la présence d'un motif avec.test()
Extraire des correspondances avec .match()et.exec()
Remplacer du texte avec.replace()
Diviser une chaîne avec.split()
Fonctions à implémenter
1.testMotif(texte, motif)
Retourne truesi le motif existe dans le texte (insensible à la casse).

2.extraireMots(texte, prefixe)
Extrait tous les mots commençant par un préfixe donné (ex: tous les mots en "ch").

3.remplacerMotif(texte, ancien, nouveau)
Remplacez toutes les occurrences d'un motif par un nouveau texte.

4.diviserProprement(texte)
Divisez une chaîne de nombres séparés par des virgules (avec espaces variables) en tableau.

Exemples de tests :
// Test de motif
testMotif("Hello World", "hello")  // true (insensible à la casse)
testMotif("Bonjour", "hello")      // false

// Extraction
extraireMots("Les chats et les chiens jouent", "ch")  // ["chats", "chiens"]
extraireMots("Le soleil brille", "br")                // ["brille"]

// Remplacement
remplacerMotif("Les pommes et les pommes", "pommes", "oranges")
// "Les oranges et les oranges"

// Division
diviserProprement("1, 2,  3,4,   5")  // ["1", "2", "3", "4", "5"]

// Métacaractères de base
const regex1 = /h.t/;        // . = n'importe quel caractère (hat, hit, hot)
const regex2 = /^Hello/;     // ^ = début de chaîne
const regex3 = /world$/;     // $ = fin de chaîne
const regex4 = /bo*k/;       // * = 0 ou plus (bk, bok, book)
const regex5 = /bo+k/;       // + = 1 ou plus (bok, book)
const regex6 = /colou?r/;    // ? = 0 ou 1 (color, colour)
const regex7 = /\d+/;        // \d = chiffre
const regex8 = /\w+/;        // \w = mot (lettre, chiffre, _)
const regex9 = /\s/;         // \s = espace blanc
*/

class RegExpBasics {
    testMotif(texte, motif) {
        const regex = new RegExp(motif, 'i');
        return regex.test(texte);
    }

    extraireMots(texte, prefixe) {
        const regex = new RegExp(`\\b${prefixe}\\w*`, 'gi');
        return texte.match(regex) || [];
    }

    remplacerMotif(texte, ancien, nouveau) {
        const regex = new RegExp(ancien, 'g');
        return texte.replace(regex, nouveau);
    }

    diviserProprement(texte) {
        return texte.split(/\s*,\s*/);
    }
}

const regexpBasics = new RegExpBasics();

console.log(regexpBasics.testMotif("Hello World", "hello"));  
console.log(regexpBasics.testMotif("Bonjour", "hello"));      

console.log(regexpBasics.extraireMots("Les chats et les chiens jouent", "ch"));  
console.log(regexpBasics.extraireMots("Le soleil brille", "br"));               

console.log(regexpBasics.remplacerMotif("Les pommes et les pommes", "pommes", "oranges"));

console.log(regexpBasics.diviserProprement("1, 2,  3,4,   5"));  