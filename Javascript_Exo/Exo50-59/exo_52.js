/* Async/await avec Promise.all()
Combinez async/await avec Promise.all() pour exécuter des requêtes en parallèle.

Objectifs :
✅ Comprendre la différence entre séquence et parallèle
✅ Utiliser Promise.all() avec await
✅ Optimiser les performances
✅ Gérer les erreurs avec Promise.allSettled()
Comparaison :
// ❌ Séquence (lent - 3s)
const user = await chargerUtilisateur();    // 1s
const posts = await chargerPosts();         // 1s  
const comments = await chargerComments();   // 1s
// Total: 3s

// ✅ Parallèle (rapide - 1s)
const [user, posts, comments] = await Promise.all([
    chargerUtilisateur(),
    chargerPosts(),
    chargerComments()
]);
// Total: 1s (le temps de la plus longue) */

const chargerUtilisateur = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Utilisateur chargé");
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
};

const chargerPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts chargés");
      resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ]);
    }, 1000);
  });
};

const chargerComments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Commentaires chargés");
      resolve([
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" },
      ]);
    }, 1000);
  });
};

const chargerDonnees = async () => {
  try {
    const [user, posts, comments] = await Promise.all([
      chargerUtilisateur(),
      chargerPosts(),
      chargerComments(),
    ]);
    console.log("Données combinées:", { user, posts, comments });
  } catch (erreur) {
    console.error("Erreur lors du chargement des données:", erreur);
  }
};
chargerDonnees();
