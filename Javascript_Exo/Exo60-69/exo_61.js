/*  
Headers et authentification
Gérez les headers HTTP et l'authentification.

Objectifs :
✅ Ajouter des headers personnalisés
✅ Gérer l'authentification (Bearer token)
✅ Comprendre les headers communs
✅ Créer une fonction wrapper réutilisable
Headers communs :
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123',
    'Accept': 'application/json',
    'Accept-Language': 'fr-FR'
};
*/

const url = "https://exemple.com/api/ressource";
const token = "token123";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
  Accept: "application/json",
  "Accept-Language": "fr-FR",
};

const fetchAvecHeaders = async (endpoint, options = {}) => {
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  return await response.json();
};
