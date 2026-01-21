/* 
WeakMap et WeakSet
Utilisez WeakMapet WeakSetpour gérer des données associées à des objets sans empêcher leur garbage collection.

Consignations
Démontrez l'utilisation de WeakMap et WeakSet pour :

Stocker des données privées d'une classe
Gérer des métadonnées d'éléments DOM (simulation)
Marquer des objets avec un WeakSet
Fonctions à implémenter
1. Classe Personneavec données privées
Utilisez une WeakMap pour stocker des données privées :

constructor(nom, age): Initialiser la personne
getNom(): Retourne le nom
getAge(): Retourne l'âge
ajouterSecret(secret): Ajoute un secret
getSecrets()Retourne les secrets
2. Système de métadonnées
ajouterMetadata(element, meta): Associée des métadonnées à un objet
obtenirMetadata(element): Récupère les métadonnées
3. Marquage d'objets avec WeakSet
marquer(obj): Marquez un objet
estMarque(obj): Vérifie si un objet est marqué
Exemples de tests :
// Données privées
const personne = new Personne('Alice', 25);
personne.ajouterSecret('J\'aime le chocolat');
personne.getNom()       // 'Alice'
personne.getSecrets()   // ['J\'aime le chocolat']
personne.nom            // undefined (données privées !)

// Métadonnées
const element = { id: 1, type: 'button' };
ajouterMetadata(element, { clicks: 0, lastClick: null });
obtenirMetadata(element)  // { clicks: 0, lastClick: null }

// Marquage
const obj = { id: 1 };
marquer(obj);
estMarque(obj)  // true

Note importante : Les WeakMap et WeakSet ne peuvent contenir que des objets comme clés, jamais des valeurs primitives.
*/

const donneesPrivees = new WeakMap();

class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
        donneesPrivees.set(this, { secrets: [] });
    }

    getNom() {
        return this.nom;
    }

    getAge() {
        return this.age;
    }

    ajouterSecret(secret) {
        const infos = donneesPrivees.get(this);
        infos.secrets.push(secret);
    }

    getSecrets() {
        const infos = donneesPrivees.get(this);
        return infos.secrets;
    }
}

const metadataMap = new WeakMap();

function ajouterMetadata(element, meta) {
    metadataMap.set(element, meta);
}

function obtenirMetadata(element) {
    return metadataMap.get(element);
}

const objetsMarques = new WeakSet();

function marquer(obj) {
    objetsMarques.add(obj);
}

function estMarque(obj) {
    return objetsMarques.has(obj);
}

const personne = new Personne('Alice', 25);
personne.ajouterSecret('J\'aime le chocolat');
console.log(personne.getNom());       
console.log(personne.getSecrets());   
console.log(personne.nom);            

const element = { id: 1, type: 'button' };
ajouterMetadata(element, { clicks: 0, lastClick: null });
console.log(obtenirMetadata(element));

const obj = { id: 1 };
marquer(obj);
console.log(estMarque(obj));  