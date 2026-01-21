/*  
DELETE - Supprimer une ressource
Supprimez une ressource du serveur.

Objectifs :
✅ Utiliser method: 'DELETE'
✅ Demander confirmation avant suppression
✅ Mettre à jour l'interface après suppression
✅ Gérer les échecs de suppression
Structure de base :
const supprimer = async (id) => {
    const response = await fetch(`/api/resource/${id}`, {
        method: 'DELETE'
    });

    return response.ok;
}
*/

const url = 'https://exemple.com/api/ressource';
const supprimer = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
    
    return response.ok;
};

const idASupprimer = 1;
const resultat = await supprimer(idASupprimer);
if (resultat) {
    console.log(`Ressource avec l'ID ${idASupprimer} supprimée avec succès.`);
} else {
    console.log(`Échec de la suppression de la ressource avec l'ID ${idASupprimer}.`);
}
