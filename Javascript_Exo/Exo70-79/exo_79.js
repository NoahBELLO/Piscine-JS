/* 
Currying et fermetures
Transformez des fonctions en fonctions curryfiées.

Objectifs :
✅ Créer des curry
✅ Encapsuler les partiellement appliqués
✅ Exposez une composition
✅ Valider les configuration
Qu'est-ce que le currying ?
Transformer une fonction à plusieurs arguments en suite de fonctions à un argument.

Exemple :
// Fonction normale
function add(a, b) {
    return a + b;
}

// Fonction curryfiée
function addCurry(a) {
    return function(b) {
        return a + b;
    };
}

const add5 = addCurry(5);
add5(3);  // 8
*/

function multiplierCurry(facteur) {
    return function(nombre) {
        return facteur * nombre;
    };
}

const doubler = multiplierCurry(2);
console.log(doubler(5));  

const tripler = multiplierCurry(3);
console.log(tripler(5));  
const quadrupler = multiplierCurry(4);
console.log(quadrupler(5));   

module.exports = {
    multiplierCurry
};