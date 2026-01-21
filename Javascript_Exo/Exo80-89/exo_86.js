/* 
Validation de données
Créez des validateurs pour différents types de données en utilisant des expressions régulières.

Consignations
Créer des fonctions de validation pour :

Adresses email (format standard)
Téléphones français (différents formats)
Codes postaux français (5 chiffres)
Mots de passe forts (avec règles de sécurité)
URL (http/https)
Couleurs hexadécimales (#RGB ou #RRGGBB)
Fonctions à implémenter
1.validerEmail(email)
Retourne truesi l'email est valide.

2.validerTelephoneFR(tel)
Accepte les formats : 0123456789, 01 23 45 67 89, 01.23.45.67.89,+33123456789

3.validerCodePostal(cp)
Vérifiez que le code postal est composé de 5 chiffres.

4.validerMotDePasse(mdp)
Vérifier :

Au moins 8 caractères
Au moins 1 majuscule
Au moins 1 minuscule
Au moins 1 chiffre
Au moins 1 caractère spécial
Retourne un objet avec{ valide: boolean, details: {...} }

5.validerURL(url)
Vérifiez que l'URL commence par http:// ou https://

6.validerCouleurHex(couleur)
Acceptez #RGB(3 caractères) ou #RRGGBB(6 caractères).

Exemples de tests :
// Email
validerEmail('test@example.com')     // true
validerEmail('invalide')             // false
validerEmail('test @example.com')    // false

// Téléphone
validerTelephoneFR('0123456789')     // true
validerTelephoneFR('01 23 45 67 89') // true
validerTelephoneFR('+33123456789')   // true
validerTelephoneFR('123456')         // false

// Code postal
validerCodePostal('75001')  // true
validerCodePostal('1234')   // false

// Mot de passe
validerMotDePasse('Abc123!@')
// { valide: true, details: { longueur: true, majuscule: true, ... } }

validerMotDePasse('faible')
// { valide: false, details: { longueur: false, majuscule: false, ... } }

// URL
validerURL('https://example.com')        // true
validerURL('http://sub.example.com/path') // true
validerURL('invalide')                   // false

// Couleur hexadécimale
validerCouleurHex('#FF5733')  // true
validerCouleurHex('#F57')     // true
validerCouleurHex('FF5733')   // false (manque #)
*/

function validerEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validerTelephoneFR(tel) {
    const regex = /^(?:0|\+33)[1-9](?:[ .]?\d{2}){4}$/;
    return regex.test(tel);
}

function validerCodePostal(cp) {
    const regex = /^\d{5}$/;
    return regex.test(cp);
}

function validerMotDePasse(mdp) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(mdp);
}
function validerURL(url) {
    const regex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
}

function validerCouleurHex(couleur) {
    const regex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return regex.test(couleur);
}

console.log(validerEmail('test@example.com'));      
console.log(validerEmail('invalide'));             
console.log(validerTelephoneFR('0123456789'));     
console.log(validerTelephoneFR('01 23 45 67 89')); 
console.log(validerCodePostal('75001'));           
console.log(validerMotDePasse('Abc123!@'));        
console.log(validerURL('https://example.com'));    
console.log(validerCouleurHex('#FF5733'));         