/* 
Première fonction async
Réécrivez le code avec Promesses en utilisant async/await.

Objectifs :
✅ Comprendre le mot-clé async
✅ Utiliser wait pour attendre une Promesse
✅ Créer une fonction async simple
✅ Comparer avec la syntaxe des Promesses
Exemple :
// Fonction qui retourne une Promesse
function attendreDelai(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Fonction async qui utilise await
async function afficherMessage() {
    console.log("⏳ Attente...");
    await attendreDelai(2000);
    console.log("✅ Terminé !");
}
*/