/* 
Créer un intervalle
Implémentez une fonction qui crée un objet représentant un intervalle numérique avec un point de départ et un point d'arrivée.

Objectifs :
✅ Utiliser la syntaxe des objets littéraires
✅ Comprendre les propriétés raccourcies ES6
✅ Découvrez la validation des données
✅ Maîtriser la création d'objets simples
Exemples :
createInterval(1, 5)    // { start: 1, end: 5 }
createInterval(10, 20)  // { start: 10, end: 20 }
createInterval(-5, 0)   // { start: -5, end: 0 }

*/

function createInterval(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('Les valeurs de début et de fin doivent être des nombres.');
    }
    if (start > end) {
        throw new Error('La valeur de début ne peut pas être supérieure à la valeur de fin.');
    }
    return { start, end };
}

console.log(createInterval(1, 5));    
console.log(createInterval(10, 20));  
console.log(createInterval(-5, 0));   