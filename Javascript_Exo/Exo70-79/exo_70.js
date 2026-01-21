/* 
Récupérer une API avec async/await
Utilisez async/await avec l'API Fetch pour récupérer des données.

Objectifs :
✅ Utiliser fetch() avec async/await
✅ Analyser les réponses JSON
✅ Gérer les erreurs HTTP
✅ Faire des requêtes POST
Exemple :
async function recuperer() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
}
*/
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetchData(apiUrl).then(data => {
    if (data) {
        console.log('Données récupérées:', data);
    }
});