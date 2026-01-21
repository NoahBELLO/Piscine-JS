/* Gestion d'erreurs avec try/catch
Gérez correctement les erreurs dans du code asynchrone.

Objectifs :
✅ Utiliser try/catch pour gérer les erreurs
✅ Utiliser finally pour le nettoyage
✅ Lancer des erreurs avec throw
✅ Distinguer différents types d'erreurs
Structure de base :
const maFonction = async () => {
    try {
        // Code qui peut échouer
        const resultat = await operationAsynchrone();
        return resultat;
    } catch (erreur) {
        // Gérer l'erreur
        console.error('Erreur:', erreur);
    } finally {
        // Toujours exécuté (nettoyage)
        console.log('Terminé');
    }
};
 */

const maFonction = async () => {
    try {
        const response = await fetch('https://gomanga-api.vercel.app/api/search/naruto');
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (erreur) {
        console.error('Erreur:', erreur);
    } finally {
        console.log('Terminé');
    }
};
maFonction();