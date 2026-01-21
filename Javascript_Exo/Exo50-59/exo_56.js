/* Gestion des erreurs réseau
Gérez proprement les différentes erreurs possibles.

Objectifs :
✅ Distinguer erreur réseau vs erreur HTTP
✅ Implémenter un timeout
✅ Système de retry intelligent
✅ Messages d'erreur clairs pour l'utilisateur
Types d'erreurs :
// Erreur réseau (pas de connexion)
catch (erreur) {
    if (erreur.name === 'TypeError') {
        console.log('Pas de connexion');
    }
}

// Erreur HTTP (404, 500...)
if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
}

// Timeout
if (erreur.name === 'AbortError') {
    console.log('Requête trop longue');
} */

const fetchAvecGestionErreurs = async (
  url,
  options = {},
  timeout = 5000,
  retries = 3,
) => {
  const controller = new AbortController();
  const idTimeout = setTimeout(() => controller.abort(), timeout);
  options.signal = controller.signal;
  try {
    const response = await fetch(url, options);
    clearTimeout(idTimeout);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (erreur) {
    if (erreur.name === "AbortError") {
      console.log("Requête trop longue");
    } else if (erreur.name === "TypeError") {
      console.log("Pas de connexion");
    } else {
      console.log(erreur.message);
    }
    if (retries > 0) {
      console.log(`Réessai... (${retries} restants)`);
      return await fetchAvecGestionErreurs(url, options, timeout, retries - 1);
    }
    throw erreur;
  }
};

fetchAvecGestionErreurs('https://gomanga-api.vercel.app/api/search/naruto')
  .then((data) => console.log(data))
  .catch((erreur) => console.error('Échec après plusieurs tentatives :', erreur));