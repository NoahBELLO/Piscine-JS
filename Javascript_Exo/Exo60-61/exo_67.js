/* 
Gestion des erreurs avec try/catch
Gérez les erreurs dans du code asynchrone avec try/catch.

Objectifs :
✅ Utiliser try/catch avec async/await
✅ Créer des erreurs personnalisées
✅ Utiliser le bloc finalement
✅ Gérer proprement les échecs
Structure :
async function maFonction() {
    try {
        const resultat = await operationAsynchrone();
        console.log(resultat);
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    } finally {
        console.log('Terminé');
    }
}
*/