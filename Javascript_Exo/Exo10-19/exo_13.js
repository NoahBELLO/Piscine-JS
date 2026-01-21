/*  
Compte à rebours avec while
Affichez un compte à rebours de 10 à 0 en utilisant une boucle while.

Exemple de sortie attendue :
10
9
8
7
6
5
4
3
2
1
0
Décollage !

Attention : N'oubliez pas de décrémenter le compteur, sinon vous créez une boucle infinie !
*/
let count = 10;
while (count >= 0) {
  console.log(count);
  count--;
}
console.log("Décollage !");