/* 
206.2 - Question
Créer une fonction mergeIntervals(interval1, interval2)qui fusionne deux intervalles et retourne le nouvel intervalle englobant.

Exemples :

mergeIntervals({start: 1, end: 5}, {start: 3, end: 8}) // { start: 1, end: 8 }
mergeIntervals({start: 10, end: 15}, {start: 5, end: 12}) // { start: 5, end: 15 }
mergeIntervals({start: 0, end: 3}, {start: 7, end: 10}) // { start: 0, end: 10 }
*/

function mergeIntervals(interval1, interval2) { 
    const start = Math.min(interval1.start, interval2.start);
    const end = Math.max(interval1.end, interval2.end);
    return { start, end };
}

console.log(mergeIntervals({start: 1, end: 5}, {start: 3, end: 8})); 
console.log(mergeIntervals({start: 10, end: 15}, {start: 5, end: 12}));
console.log(mergeIntervals({start: 0, end: 3}, {start: 7, end: 10}));