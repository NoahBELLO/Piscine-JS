/*  
Chaîner des Promesses
Créez une séquence d'opérations asynchrones enchaînées.

Objectifs :
✅ Comprendre le chaînage de Promesses avec .then()
✅ Passer des valeurs d'une étape à l'autre
✅ Gérer les erreurs dans une chaîne
✅ Utiliser .finally() pour le nettoyage
Exemple de structure :
etape1()
    .then(resultat1 => {
        // Traiter resultat1
        return etape2(resultat1);
    })
    .then(resultat2 => {
        // Traiter resultat2
        return etape3(resultat2);
    })
    .then(resultatFinal => {
        console.log('Terminé:', resultatFinal);
    })
    .catch(erreur => {
        console.error('Erreur:', erreur);
    });

Comportement attendu :
Créer 3 fonctions qui retournent des Promesses
Chaque étape utilise le résultat de la précédente
Une seule erreur dans la chaîne est capturée par .catch()
*/

function etape1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Étape 1 terminée");
      resolve(1);
    }, 1000);
  });
}

function etape2(valeur) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Étape 2 terminée");
      resolve(valeur + 1);
    }, 1000);
  });
}

function etape3(valeur) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Étape 3 terminée");
      resolve(valeur + 1);
    }, 1000);
  });
}

etape1()
  .then((resultat1) => etape2(resultat1))
  .then((resultat2) => etape3(resultat2))
  .then((resultatFinal) => {
    console.log("Terminé:", resultatFinal);
  })
  .catch((erreur) => {
    console.error("Erreur:", erreur);
  })
  .finally(() => {
    console.log("Chaîne de Promesses terminée");
  });
