/* 
Fonction anti-rebond
Implémentez une fonction anti-rebond pour retarder l'exécution jusqu'à la fin des invocations rapides.

Objectifs :
✅ Créer un rebond (ajout, recherche, filtrage)
✅ Filtrer par arguments et le contexte (this)
✅ Détecter les immédiat d'horairesannuler , vider
✅ Générer cas d'usage mensuel
Fonctionnalités à implémenter :
function debounce(func, delay)         // Basique
function debounceImmediate(...)        // Avec option immediate
function createDebouncedFunction(...)  // Avec cancel/flush

// Cas d'usage
- Recherche en temps réel
- Validation de formulaire
- Sauvegarde automatique
- Resize/scroll handlers
*/

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function debounceImmediate(func, delay, immediate = false) {
  let timeoutId;
  return function(...args) {
    const callNow = immediate && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, args);
      }
    }, delay);
    if (callNow) {
      func.apply(this, args);
    }
  };
}

function createDebouncedFunction(func, delay, immediate = false) {
  let timeoutId;

  function debounced(...args) {
    const callNow = immediate && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, args);
      }
    }, delay);
    if (callNow) {
      func.apply(this, args);
    }
  }

  debounced.cancel = function() {
    clearTimeout(timeoutId);
    timeoutId = null;
  };

  debounced.flush = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      func.apply(this, arguments);
      timeoutId = null;
    }
  };

  return debounced;
}

const log = (msg) => console.log(msg);

const debouncedLog = debounce(log, 300);
debouncedLog("Hello");
debouncedLog("World"); 

const immediateDebouncedLog = debounceImmediate(log, 300, true);
immediateDebouncedLog("Immediate Hello"); 
immediateDebouncedLog("Immediate World"); 

const customDebouncedLog = createDebouncedFunction(log, 300);
customDebouncedLog("Custom Hello");
customDebouncedLog.cancel(); 
customDebouncedLog("Custom World");