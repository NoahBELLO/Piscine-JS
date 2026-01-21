/* PUT/PATCH - Modifier une ressource
Modifiez une ressource existante avec PUT ou PATCH.

Objectifs :
✅ Comprendre PUT (remplacement complet)
✅ Comprendre PATCH (modification partielle)
✅ Utiliser l'ID de la ressource
✅ Gérer la réponse modifiée
Différence PUT vs PATCH :
// PUT : remplace TOUTE la ressource
fetch(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        name: 'Nouveau',
        email: 'nouveau@mail.com',
        // ... tous les champs
    })
});

// PATCH : modifie PARTIELLEMENT
fetch(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
        email: 'nouveau@mail.com'  // juste l'email
    })
}); */

const modifierUtilisateur = async (id, nouvellesDonnees) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nouvellesDonnees),
      },
    );
    const data = await response.json();
    console.log("Utilisateur modifié :", data);
  } catch (erreur) {
    console.error("Erreur lors de la modification :", erreur);
  }
};
modifierUtilisateur(1, { email: "test@test.com" });

const remplacerUtilisateur = async (id, nouvellesDonnees) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nouvellesDonnees),
      },
    );
    const data = await response.json();
    console.log("Utilisateur remplacé :", data);
  } catch (erreur) {
    console.error("Erreur lors du remplacement :", erreur);
  }
};
remplacerUtilisateur(1, {
  name: "Utilisateur Complet",
  email: "test@test.com",
  username: "utilisateurcomplet",
});
