/* 
Carte - Dictionnaires améliorés
Utilisez une Mappour gérer des paires clé-valeur avec des fonctionnalités avancées.

Consignations
Créez des fonctions qui utilisent une Map pour :

Gérer un cache de données avec limite de taille
Compter les occurrences de mots dans un texte
Stocker des configurations avec clés d'objets
Fonctions à implémenter
1. ClasseCache
Créez un système de cache avec les méthodes :

constructor(maxSize): Initialiser le cache avec une taille maximale
set(key, value): Ajoute une valeur (supprime la plus ancienne si plein)
get(key)Récupère une valeur
has(key): Vérifie l'existence d'une clé
clear(): Vide le cache
2.compterMots(texte)
Retourne une Map avec les mots et leur nombre d'occurrences.

3. Démonstration Carte avec objets
Montrez qu'une Map peut utiliser des objets comme clés (contrairement aux objets JavaScript classiques).

Exemples de tests :
// Cache
const cache = new Cache(3);
cache.set('user1', { name: 'Alice' });
cache.set('user2', { name: 'Bob' });
cache.set('user3', { name: 'Charlie' });
cache.set('user4', { name: 'David' });  // user1 est supprimé (FIFO)
cache.has('user1')  // false
cache.get('user2')  // { name: 'Bob' }

// Compteur de mots
const texte = "le chat et le chien jouent. Le chat dort";
const occurrences = compterMots(texte);
occurrences.get('le')    // 3
occurrences.get('chat')  // 2

// Map avec objets comme clés
const objetA = { id: 1 };
const objetB = { id: 2 };
const metadata = new Map();
metadata.set(objetA, { created: '2024-01-01' });
metadata.set(objetB, { created: '2024-01-02' });
metadata.get(objetA)  // { created: '2024-01-01' }
*/

class Cache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.map = new Map();
    }

    set(key, value) {
        if (this.map.size >= this.maxSize) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
        this.map.set(key, value);
    }

    get(key) {
        return this.map.get(key);
    }

    has(key) {
        return this.map.has(key);
    }

    clear() {
        this.map.clear();
    }
}

function compterMots(texte) {
    const mots = texte.toLowerCase().match(/\b\w+\b/g);
    const compteur = new Map();

    for (const mot of mots) {
        compteur.set(mot, (compteur.get(mot) || 0) + 1);
    }

    return compteur;
}

const objetA = { id: 1 };
const objetB = { id: 2 };
const metadata = new Map();
metadata.set(objetA, { created: '2024-01-01' });
metadata.set(objetB, { created: '2024-01-02' });

export { Cache, compterMots, metadata, objetA, objetB };

const cache = new Cache(3);
cache.set('user1', { name: 'Alice' });
cache.set('user2', { name: 'Bob' });
cache.set('user3', { name: 'Charlie' });
cache.set('user4', { name: 'David' });  
console.log(cache.has('user1')); 
console.log(cache.get('user2')); 

const texte = "le chat et le chien jouent. Le chat dort";
const occurrences = compterMots(texte);
console.log(occurrences.get('le'));    
console.log(occurrences.get('chat'));  

console.log(metadata.get(objetA));  