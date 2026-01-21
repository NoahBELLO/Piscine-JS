/*  
Conversion Celsius vers Fahrenheit
Créez une fonction celsiusToFahrenheitqui convertit une température Celsius en Fahrenheit.

Formule : F = C × 9/5 + 32

Testez votre fonction avec les valeurs suivantes :

0°C
100°C
-40°C
Exemple de sortie attendue :
32
212
-40
*/

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(-40));
