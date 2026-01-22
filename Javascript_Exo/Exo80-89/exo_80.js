/* 
Mémoisation avec fermetures
Optimisez les calculs coûteux avec la mémorisation.

Objectifs :
✅ Créer des mémorisation
✅ Encapsuler les cache avec fermeture
✅ Exposez une spectacles
✅ Valider les expiration
Qu'est-ce que la mémorisation ?
Technique d'optimisation qui met en cache les résultats de fonctions coûteuses.

Exemple :
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];  // Cache!
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
*/

function memoize(fn, options = {}) {
    const cache = new Map();
    const ttl = options.ttl || 0;

    function memoized(...args) {
        const key = JSON.stringify(args);
        const now = Date.now();

        if (cache.has(key)) {
            const { value, timestamp } = cache.get(key);
            if (ttl === 0 || (now - timestamp) < ttl) {
                return value; 
            } else {
                cache.delete(key); 
            }
        }

        const result = fn(...args);
        cache.set(key, { value: result, timestamp: now });
        return result;
    }

    memoized.clear = function() {
        cache.clear();
    };

    return memoized;
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci, { ttl: 5000 });

console.log(memoizedFibonacci(40)); 
console.log(memoizedFibonacci(40)); 

setTimeout(() => {
    console.log(memoizedFibonacci(40)); 
}, 6000);

memoizedFibonacci.clear();
console.log(memoizedFibonacci(40)); 