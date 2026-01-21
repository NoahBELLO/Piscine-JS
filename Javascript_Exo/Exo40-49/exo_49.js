/*  
Promise.all()
Exécutez plusieurs promesses en parallèle et attendez qu'elles soient toutes terminées.

Objectifs :
✅ Comprendre Promise.all() pour exécuter des Promesses en parallèle
✅ Récupérer tous les résultats une fois terminés
✅ Gérer le cas où une Promesse échoue
✅ Découvrir Promise.race() et Promise.allSettled()
Exemple de structure :
Promise.all([
    promesse1(),
    promesse2(),
    promesse3()
])
.then(resultats => {
    // Tableau des résultats dans le même ordre
    const [res1, res2, res3] = resultats;
})
.catch(erreur => {
    // Si UNE seule promesse échoue
});

Comportement attendu :
Exécuter 3 Promesses en parallèle
Attendre que toutes soient terminées
Récupérer les résultats dans un tableau
Si une échoue, tout échoue
*/

function promesse1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Résultat 1'), 1000);
    });
}

function promesse2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Résultat 2'), 2000);
    });
}

function promesse3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Erreur dans la promesse 3'), 1500);
    });
}

Promise.all([promesse1(), promesse2(), promesse3()])
    .then((resultats) => {
        const [res1, res2, res3] = resultats;
        console.log(res1, res2, res3);
    })
    .catch((erreur) => {
        console.error('Une promesse a échoué :', erreur);
    });