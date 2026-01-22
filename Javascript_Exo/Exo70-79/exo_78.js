/* 
IIFE (Expression de fonction immédiatement invoquée)
Utilisez les IIFE pour créer des modules isolés.

Objectifs :
✅ Créer des IIFE
✅ Encapsuler les portée isolée
✅ Exposez une module de modèle
✅ Valider les pollution globale
Syntaxe IIFE :
// IIFE classique
(function() {
    // Code isolé
    const prive = "secret";
})();

// IIFE avec return
const module = (function() {
    const prive = "secret";

    return {
        public: "visible"
    };
})();
*/

(function() {
    const prive = "secret";
})();

const module = (function() {
    const prive = "secret";

    return {
        public: "visible"
    };
})();

console.log(module.public);
console.log(module.prive); 