/*  
FizzBuzz
Créez une fonction qui affiche les nombres de 1 à 30 avec les règles suivantes :

Règles
Si le nombre est divisible par 3 : affichez"Fizz"
Si le nombre est divisible par 5 : affichez"Buzz"
Si le nombre est divisible par 3 ET 5 : affichez"FizzBuzz"
Sinon : affichez le nombre
Exemple de sortie attendue (début) :
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...

Astuce importante : L'ordre des conditions est crucial !
*/

function fizzBuzz() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();