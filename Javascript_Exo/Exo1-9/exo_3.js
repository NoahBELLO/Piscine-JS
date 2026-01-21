/*  
Calculatrice simple
Créez une fonction calculator qui convertit une température Celsius en Fahrenheit.

Paramètres
La fonction doit accepter 3 paramètres :

num1: premier nombre
operator: opérateur ( +, -, *, /)
num2: deuxième nombre
La fonction doit retourner le résultat du calcul.

Gestion des erreurs
Si l'opérateur est invalide, retournez le message :"Opérateur invalide"

Exemples de tests :
calculator(10, '+', 5)  // 15
calculator(10, '-', 5)  // 5
calculator(10, '*', 5)  // 50
calculator(10, '/', 5)  // 2
calculator(10, '%', 3)  // "Opérateur invalide"
*/

function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Opérateur invalide";
  }
}

console.log(calculator(10, "+", 5)); // 15
console.log(calculator(10, "-", 5)); // 5
console.log(calculator(10, "*", 5)); // 50
console.log(calculator(10, "/", 5)); // 2
console.log(calculator(10, "%", 3)); // "Opérateur invalide"
