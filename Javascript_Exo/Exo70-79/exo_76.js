/* 
Première fermeture
Créez votre première fermeture pour encapsuler des données privées.

Objectifs :
✅ Comprendre le concept de fermeture
✅ Créer des variables privées
✅ Retourner des fonctions
✅ Maintenir l' état entre les appels
Qu'est-ce qu'une closure ?
Une fonction qui conserve l'accès aux variables de son environnement parent, même après que la fonction parent ait terminé son exécution.

Exemple :
function creerCompteur() {
    let compteur = 0;  // Variable privée

    return function() {
        compteur++;
        return compteur;
    };
}

const counter = creerCompteur();
counter();  // 1
counter();  // 2
*/

function creerCompteur() {
    let compteur = 0;  // Variable privée

    return function() {
        compteur++;
        return compteur;
    };
}

const counter = creerCompteur();
console.log(counter());  
console.log(counter());  
console.log(counter());    