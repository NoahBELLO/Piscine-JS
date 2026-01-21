/* 
Requêtes séquentielles
Exécutez des opérations asynchrones en séquence.

Objectifs :
✅ Comprendre l'exécution séquentielle
✅ Chaîner plusieurs await
✅ Chaque étape attend la précédente
✅ Gérer les erreurs à chaque étape
Exemple :
async function traiterCommande() {
    try {
        const stock = await verifierStock();
        const paiement = await traiterPaiement();
        const envoi = await envoyerColis();
        console.log('Commande terminée');
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
}
*/

function verifierStock() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Stock vérifié");
            resolve(true);
        }, 1000);
    });
}

function traiterPaiement() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Paiement traité");
            resolve(true);
        }, 1000);
    });
}

function envoyerColis() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Colis envoyé");
            resolve(true);
        }, 1000);
    });
}
async function traiterCommande() {
    try {
        const stock = await verifierStock();
        const paiement = await traiterPaiement();
        const envoi = await envoyerColis();
        console.log('✅ Commande terminée');
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
}
traiterCommande();