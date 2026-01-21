/* 
Mémoisation et cache
Implémentez la mémorisation pour cacher les résultats de fonctions coûteuses et optimiser les performances.

Objectifs :
✅ Créer une fonction memoize de base
✅ Gérer la limite de taille du cache (FIFO)
✅ Ajouter une expiration (TTL)
✅ Créer une classe MemoCache avec statistiques
Fonctionnalités à implémenter :
function memoize(func)                    // Basique
function memoizeWithLimit(func, maxSize)  // Limite
function memoizeWithExpiry(func, ttl)     // Expiration

class MemoCache {
  get(key)      // Récupérer
  set(key, val) // Stocker
  getStats()    // Statistiques hits/misses
}
*/

function memoize(func) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = func.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}

function slowFunction(num) {
  for (let i = 0; i < 1e6; i++);
  return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); 
console.log(memoizedSlowFunction(5)); 
console.log(memoizedSlowFunction(10)); 
console.log(memoizedSlowFunction(10)); 