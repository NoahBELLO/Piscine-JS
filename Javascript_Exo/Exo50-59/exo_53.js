/* Top-level await
Utilisez await au niveau racine d'un module (ES modules).

Objectifs :
✅ Comprendre le top-level await
✅ Charger des données au démarrage du module
✅ Connaître les prérequis (ES modules)
Exemple :
// Dans un fichier .js avec type="module"

// ✅ Top-level await (sans fonction async)
const response = await fetch('/api/data');
const data = await response.json();
console.log(data);
 */

const response = await fetch('https://gomanga-api.vercel.app/api/search/naruto');
const data = await response.json();
console.log(data);
console.log('Premier manga:', data.results[0].title);