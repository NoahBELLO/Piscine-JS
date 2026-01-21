/* 
206.3 - Question
Créer une fonction isInInterval(point, interval)qui fusionne deux intervalles et retourne le nouvel intervalle englobant.

Exemples :

isInInterval(3, {start: 1, end: 5}) // true
isInInterval(7, {start: 1, end: 5}) // false
isInInterval(1, {start: 1, end: 5}) // true (borne incluse)
isInInterval(5, {start: 1, end: 5}) // true (borne incluse)
*/

function isInInterval(point, interval) {
    return point >= interval.start && point <= interval.end;
}

console.log(isInInterval(3, {start: 1, end: 5})); 
console.log(isInInterval(7, {start: 1, end: 5})); 
console.log(isInInterval(1, {start: 1, end: 5})); 
console.log(isInInterval(5, {start: 1, end: 5})); 