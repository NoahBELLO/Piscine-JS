/* 
Requêtes parallèles avec Promise.all
Exécutez plusieurs opérations en parallèle pour optimiser les performances.

Objectifs :
✅ Comprendre l'exécution parallélisme
✅ Chaîner plusieurs Promise.all() avec await
✅ Chaque étape attend la séquentielle
✅ Gérer les erreurs à spectacles
Comparaison :
// Séquentiel (lent)
const a = await op1(); // 1s
const b = await op2(); // 1s
const c = await op3(); // 1s
// Total: 3s

// Parallèle (rapide)
const [a, b, c] = await Promise.all([
    op1(),
    op2(),
    op3()
]);
// Total: 1s (le plus long)
*/

function operationAsynchrone(id, delai) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`✅ Opération ${id} terminée`);
            resolve(id);
        }, delai);
    });
}  
async function executerOperationsParalleles() {
    try {
        const [op1, op2, op3] = await Promise.all([
            operationAsynchrone(1, 1000),
            operationAsynchrone(2, 2000),
            operationAsynchrone(3, 1500)
        ]);
        console.log('✅ Toutes les opérations sont terminées');
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
}
executerOperationsParalleles();