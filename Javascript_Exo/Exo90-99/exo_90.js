/* 
206.2 - Question
Créer une fonction mergeIntervals(interval1, interval2)qui fusionne deux intervalles et retourne le nouvel intervalle englobant.

Exemples :

mergeIntervals({start: 1, end: 5}, {start: 3, end: 8}) // { start: 1, end: 8 }
mergeIntervals({start: 10, end: 15}, {start: 5, end: 12}) // { start: 5, end: 15 }
mergeIntervals({start: 0, end: 3}, {start: 7, end: 10}) // { start: 0, end: 10 }
*/

function splitInterval(interval, n) {
    const points = [];
    const step = (interval.end - interval.start) / n;
    for (let i = 0; i <= n; i++) {
        points.push(interval.start + i * step);
    }
    return points;
}

console.log(splitInterval({start: 0, end: 10}, 5));  
console.log(splitInterval({start: 0, end: 1}, 4)); 
console.log(splitInterval({start: 10, end: 20}, 2)); 