/*  
Table de multiplication
Créez une fonction multiplicationTablequi affiche la table de multiplication d'un nombre de 1 à 10.

Format attendu
Pour chaque ligne, affichez :"n x i = résultat"

Exemple pour n=7 :
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70

Exemples de tests :
multiplicationTable(5)  // Affiche la table de 5
multiplicationTable(9)  // Affiche la table de 9
*/

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

multiplicationTable(5);
multiplicationTable(9);
