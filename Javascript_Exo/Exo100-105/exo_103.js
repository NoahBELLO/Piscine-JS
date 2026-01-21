/* 
Fonction accélérateur
Implémentez une fonction throttle pour limiter la fréquence d'exécution (maximum 1 fois par période).

Objectifs :
✅ Créer une fonction throttle de base
✅ Comprendre lead (début) et trailing (fin)
✅ Gérer le contexte et les arguments
✅ Différencier anti-rebond vs accélérateur
Fonctionnalités à implémenter :
function throttle(func, limit)         // Basique
function throttleAdvanced(...)         // Avec options leading/trailing
function createThrottledFunction(...)  // Avec cancel

// Cas d'usage
- Scroll events
- Resize window
- Mouse move tracking
- Bouton anti-spam
*/

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

const log = () => console.log('Function executed at', new Date().toISOString());
const throttledLog = throttle(log, 2000);

setInterval(throttledLog, 500); 
setTimeout(() => clearInterval(throttledLog), 10000); 