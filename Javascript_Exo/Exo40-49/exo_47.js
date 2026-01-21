/*  
Première Promesse
Créez une fonction qui retourne une Promesse qui se résout après un délai.

Objectifs :
✅ Créer une Promesse avec new Promise()
✅ Utiliser resolve() pour indiquer le succès
✅ Utiliser reject() pour indiquer une erreur
✅ Consommer la Promesse avec .then() et .catch()
Exemple de structure :
const maPromesse = new Promise((resolve, reject) => {
    // Opération asynchrone
    if ( succès ) {
        resolve(resultat);
    } else {
        reject(erreur);
    }
});

maPromesse
    .then(resultat => console.log(resultat))
    .catch(erreur => console.error(erreur));

Comportement attendu :
Créer une fonction attendreDelai(ms) qui retourne une Promesse
La Promesse se résout après ms millisecondes
Utiliser .then() pour afficher un message de succès
*/

function attendreDelai(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Délai de ${ms} ms écoulé`);
        }, ms);
    });
}

attendreDelai(2000)
    .then(message => console.log(message))
    .catch(erreur => console.error(erreur));