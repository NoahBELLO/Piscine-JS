/* POST - Créer une ressource
Envoyez des données au serveur avec la méthode POST.

Objectifs :
✅ Utiliser method: 'POST'
✅ Définir les headers correctement
✅ Convertir les données avec JSON.stringify()
✅ Récupérer la réponse créée
Structure de base :
const creer = async (data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}; */

const creerRessource = async (data) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resultat = await response.json();
        console.log(resultat);
        return resultat;
    } catch (erreur) {
        console.error(erreur);
    }
};

creerRessource({
    title: 'foo',
    body: 'bar',
    userId: 1
});