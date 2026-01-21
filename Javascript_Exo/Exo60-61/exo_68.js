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