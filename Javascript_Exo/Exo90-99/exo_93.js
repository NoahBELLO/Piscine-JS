/* 
206.5 - Question
Créer une fonction splitInterval(interval, n)qui fusionne deux intervalles et retourne le nouvel intervalle englobant.n segments égaux et retournent un tableau des points de division.

Exemples :

splitInterval({start: 0, end: 10}, 5) // [0, 2, 4, 6, 8, 10]
splitInterval({start: 0, end: 1}, 4) // [0, 0.25, 0.5, 0.75, 1]
splitInterval({start: 10, end: 20}, 2) // [10, 15, 20]
*/

function splitInterval(interval, n) {
    const { start, end } = interval;
    const step = (end - start) / n;
    const result = [];
    
    for (let i = 0; i <= n; i++) {
        result.push(start + i * step);
    }
    
    return result;
}

console.log(splitInterval({start: 0, end: 10}, 5)); 
console.log(splitInterval({start: 0, end: 1}, 4));
console.log(splitInterval({start: 10, end: 20}, 2));