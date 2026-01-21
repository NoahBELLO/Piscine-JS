/* 
Expressions régulières - Extraction et manipulation
Utilisez les expressions régulières pour extraire et manipuler différents types de données dans des chaînes de caractères.

Consignations
Créez les fonctions qui utilisent des RegExp pour :

Extraire des hashtags d'un tweet
Extraire des mentions (@username)
Extraire des URLs (http/https)
Extraire des dates (format JJ/MM/AAAA)
Extraire des prix (format avec €)
Analyseur de coordonnées GPS
Masquer des emails (anonymisation)
Formateur des numéros de téléphone
Analyseur de couleurs CSS (hex vers rgb)
Fonctions à implémenter
1.extraireHashtags(texte)
Extrait tous les hashtags d'un texte.

Supporte les caractères accentués
Retourne un tableau vide si aucun hashtag
2.extraireMentions(texte)
Extrait toutes les mentions @username d'un texte.

Retourne un tableau de mentions
3.extraireURLs(texte)
Extrait toutes les URL (http et https) d'un texte.

4.extraireDates(texte)
Extrait les dates au format JJ/MM/AAAA.

Retourne un tableau d'objets avec :{ complete, jour, mois, annee }
5.extrairePrix(texte)
Extrait les prix avec le symbole €.

Supporte les formats : 49,99€et15.50€
Retourne un tableau de nombres (float)
6.extraireCoordonnees(texte)
Analyser les coordonnées GPS (latitude, longitude).

Format :48.8566, 2.3522
Retourne :{ latitude: number, longitude: number }
7.masquerEmails(texte)
Masquer les adresses email pour l'anonymisation.

alice@example.comdevienta***@example.com
Utilise .replace()avec callback
8.formaterTelephone(numero)
Formatez un numéro de téléphone.

0123456789devient01 23 45 67 89
9.analyserCSS(css)
Extrait et convertit les couleurs hexadécimales en RGB.

Retourne :{ hex: string, rgb: string }
Exemples de tests :
// Hashtags
extraireHashtags("J'adore #JavaScript et #WebDev ! #code2024")
// ['#JavaScript', '#WebDev', '#code2024']

// Mentions
extraireMentions("Salut @alice et @bob, regardez ça !")
// ['@alice', '@bob']

// URLs
extraireURLs("Visitez https://example.com et http://test.fr")
// ['https://example.com', 'http://test.fr']

// Dates
extraireDates("Réunion le 15/01/2024 et 20/03/2024")
// [{ complete: '15/01/2024', jour: '15', mois: '01', annee: '2024' }, ...]

// Prix
extrairePrix("Total: 49,99€ + 15.50€ de livraison")
// [49.99, 15.50]

// Coordonnées GPS
extraireCoordonnees("Paris: 48.8566, 2.3522 | Lyon: 45.7640, 4.8357")
// [{ latitude: 48.8566, longitude: 2.3522 }, ...]

// Masquer emails
masquerEmails("Contactez alice@example.com ou bob@test.fr")
// "Contactez a***@example.com ou b***@test.fr"

// Formater téléphone
formaterTelephone('0123456789')
// "01 23 45 67 89"

// Analyser CSS
analyserCSS("color: #FF5733; background: #3498DB;")
// [{ hex: '#FF5733', rgb: 'rgb(255, 87, 51)' }, ...]
*/

function extraireHashtags(texte) {
    const regex = /#\w+/g;
    return texte.match(regex) || [];
}

function extraireMentions(texte) {
    const regex = /@\w+/g;
    return texte.match(regex) || [];
}

function extraireURLs(texte) {
    const regex = /https?:\/\/[^\s]+/g;
    return texte.match(regex) || [];
}

function extraireDates(texte) {
    const regex = /(\d{2})\/(\d{2})\/(\d{4})/g;
    const matches = [];
    let match;
    while ((match = regex.exec(texte)) !== null) {
        matches.push({
            complete: match[0],
            jour: match[1],
            mois: match[2],
            annee: match[3]
        });
    }
    return matches;
}

function extrairePrix(texte) {
    const regex = /(\d+[\.,]?\d*)€/g;
    const prices = [];
    let match;
    while ((match = regex.exec(texte)) !== null) {
        prices.push(parseFloat(match[1].replace(',', '.')));
    }
    return prices;
}

function extraireCoordonnees(texte) {
    const regex = /(-?\d+\.\d+),\s*(-?\d+\.\d+)/g;
    const coords = [];
    let match;
    while ((match = regex.exec(texte)) !== null) {
        coords.push({
            latitude: parseFloat(match[1]),
            longitude: parseFloat(match[2])
        });
    }
    return coords;
}

function masquerEmails(texte) {
    const regex = /([a-zA-Z0-9._%+-])([a-zA-Z0-9._%+-]*)(@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    return texte.replace(regex, (match, p1, p2, p3) => {
        return p1 + '***' + p3;
    });
}

function formaterTelephone(numero) {
    return numero.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
}

function analyserCSS(css) {
    const regex = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g;
    const colors = [];
    let match;
    while ((match = regex.exec(css)) !== null) {
        const hex = match[0];
        let r, g, b;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        colors.push({
            hex: hex,
            rgb: `rgb(${r}, ${g}, ${b})`
        });
    }
    return colors;
}

console.log(extraireHashtags("J'adore #JavaScript et #WebDev ! #code2024"));
console.log(extraireMentions("Salut @alice et @bob, regardez ça !"));
console.log(extraireURLs("Visitez https://example.com et http://test.fr"));
console.log(extraireDates("Réunion le 15/01/2024 et 20/03/2024"));
console.log(extrairePrix("Total: 49,99€ + 15.50€ de livraison"));
console.log(extraireCoordonnees("Paris: 48.8566, 2.3522 | Lyon: 45.7640, 4.8357"));
console.log(masquerEmails("Contactez alice@example.com ou bob@test.fr"));
console.log(formaterTelephone('0123456789'));
console.log(analyserCSS("color: #FF5733; background: #3498DB;"));