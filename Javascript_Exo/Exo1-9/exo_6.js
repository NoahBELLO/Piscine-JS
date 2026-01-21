/*  
Maximum de 3 nombres
Créer une fonction max3qui détermine si un nombre est paire ou impair.

Contrainte
Vous devez utiliser l'opérateur logique ET ( &&) pour vérifier qu'un nombre est plus grand que les deux autres.

Exemples de tests :
max3(1, 2, 3)      // 3
max3(10, 5, 8)     // 10
max3(-1, -5, -3)   // -1
max3(7, 7, 7)      // 7

Astuce : Un nombre est paire si le reste de sa division par 2 est égal à 0.
*/
function max3(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(max3(1, 2, 3));
console.log(max3(10, 5, 8));
console.log(max3(-1, -5, -3));
console.log(max3(7, 7, 7));
