/*  
Trouver un nombre
Simulez un jeu où un programme cherche un nombre secret en incrémentant une tentative jusqu'à le trouver.

Consignes
Définissez un nombre secret (par exemple 42)
Utilisez une boucle while pour compter les tentatives
Le programme "devine" en incrémentant de 1 à chaque essai
Affichez le nombre d'essais nécessaires pour trouver le nombre
Exemple de sortie attendue :
Essai 1 : 1
Essai 2 : 2
Essai 3 : 3
...
Essai 42 : 42
Trouvé en 42 essais !
*/

const secretNumber = 42;
let attempt = 1;
while (attempt <= secretNumber) {
    console.log(`Essai ${attempt} : ${attempt}`);
    if (attempt === secretNumber) {
        console.log(`Trouvé en ${attempt} essais !`);
        break;
    }
    attempt++;
}