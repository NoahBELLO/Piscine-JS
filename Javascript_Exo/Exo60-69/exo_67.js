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

function attendreDelai(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject(new Error("Le délai ne peut pas être négatif"));
        } else {
            setTimeout(resolve, ms);
        }
    });
}

async function afficherMessageAvecGestionErreur(ms) {
    try {
        console.log("⏳ Attente...");
        await attendreDelai(ms);
        console.log("✅ Terminé !");
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    } finally {
        console.log('Terminé');
    }
}

afficherMessageAvecGestionErreur(2000);
afficherMessageAvecGestionErreur(-1000);