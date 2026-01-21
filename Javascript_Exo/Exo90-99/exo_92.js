/* 
206.4 - Question
Créer une fonction intervalLength(interval)qui fusionne deux intervalles et retourne le nouvel intervalle englobant.

Exemples :

intervalLength({start: 1, end: 5}) // 4
intervalLength({start: 10, end: 20}) // 10
intervalLength({start: -5, end: 5}) // 10
intervalLength({start: 0, end: 0}) // 0
*/

function intervalLength(interval) {
    return interval.end - interval.start;
}

console.log(intervalLength({start: 1, end: 5})); 
console.log(intervalLength({start: 10, end: 20})); 
console.log(intervalLength({start: -5, end: 5})); 
console.log(intervalLength({start: 0, end: 0})); 