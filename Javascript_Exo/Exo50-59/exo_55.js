/* Récupérer un seul élément
Récupérez les détails d'un utilisateur spécifique par son ID.

Objectifs :
✅ Utiliser des URLs dynamiques avec template literals
✅ Récupérer une ressource spécifique
✅ Vérifier si la ressource existe
✅ Combiner plusieurs appels avec Promise.all()
Exemple :
const recupererUtilisateur = async (id) => {
    const response = await fetch(`https://api.example.com/users/${id}`);

    if (!response.ok) {
        throw new Error(`Utilisateur ${id} non trouvé`);
    }

    return await response.json();
}; */

const recupererUtilisateur = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error(`Utilisateur ${id} non trouvé`);
    }
    return await response.json();
};

recupererUtilisateur(1)
    .then(user => console.log(user))
    .catch(erreur => console.error(erreur));
