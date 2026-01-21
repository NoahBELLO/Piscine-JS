/*  
Calculateur de TVA
Écrivez un programme qui calcule le prix TTC (Toutes Taxes Compris) à partir d'un prix HT (Hors Taxes).

Données
TVA : 20%
Prix ​​HT : 100€
Calculs à effectuer
Calculez le montant de la TVA
Calculez le prix TTC
Affichez les trois valeurs : Prix HT, Montant TVA, Prix TTC
Formule : Prix TTC = Prix HT + (Prix HT × Taux TVA)

Exemple de sortie attendue :
Prix HT: 100€
Montant TVA: 20€
Prix TTC: 120€
*/

const tvaRate = 0.2;
const priceHT = 100;
const tvaAmount = priceHT * tvaRate;
const priceTTC = priceHT + tvaAmount;
console.log(`Prix HT: ${priceHT}€`);
console.log(`Montant TVA: ${tvaAmount}€`);
console.log(`Prix TTC: ${priceTTC}€`);
