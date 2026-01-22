/* 
Ensembles uniques
Utilisez un Setpour gérer des collections d'éléments uniques et effectuer des opérations ensemblistes.

Consignations
Créez des fonctions qui utilisent un Set pour :

Supprimer les doublons d'un tableau
Gérer une liste d'utilisateurs en ligne (connexion/déconnexion)
Trouver l'intersection et l'union de deux ensembles
Fonctions à implémenter
1.supprimerDoublons(tableau)
Retourne un nouveau tableau sans doubles en utilisant un Set.

2. ClasseGestionnaireUtilisateurs
Gère les utilisateurs en ligne avec les méthodes :

connexion(userId): Ajout d'un utilisateur en ligne
deconnexion(userId): Retirer un utilisateur
estEnLigne(userId): Vérifie si un utilisateur est connecté
obtenirTous(): Retourne la liste de tous les utilisateurs en ligne
3. Opérations sur ensembles
union(setA, setB): Retourne l'union de deux Ensembles
intersection(setA, setB): Retourne l'intersection de deux Ensembles
difference(setA, setB): Retourne la différence (éléments dans A mais pas dans B)
Exemples de tests :
// Suppression de doublons
supprimerDoublons([1, 2, 2, 3, 3, 3, 4, 5, 5])  // [1, 2, 3, 4, 5]
supprimerDoublons(['a', 'b', 'a', 'c', 'b'])    // ['a', 'b', 'c']

// Gestion utilisateurs
const manager = new GestionnaireUtilisateurs();
manager.connexion("alice");
manager.connexion("bob");
manager.estEnLigne("alice")   // true
manager.estEnLigne("charlie") // false
manager.obtenirTous()         // ["alice", "bob"]

// Opérations sur ensembles
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
union(setA, setB)         // Set {1, 2, 3, 4, 5, 6}
intersection(setA, setB)  // Set {3, 4}
difference(setA, setB)    // Set {1, 2}
*/

export function supprimerDoublons(tableau) {
    return Array.from(new Set(tableau));
}

export class GestionnaireUtilisateurs {
    constructor() {
        this.utilisateursEnLigne = new Set();
    }

    connexion(userId) {
        this.utilisateursEnLigne.add(userId);
    }

    deconnexion(userId) {
        this.utilisateursEnLigne.delete(userId);
    }

    estEnLigne(userId) {
        return this.utilisateursEnLigne.has(userId);
    }

    obtenirTous() {
        return Array.from(this.utilisateursEnLigne);
    }
}

export function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

export function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

export function difference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}

console.log(supprimerDoublons([1, 2, 2, 3, 3, 3, 4, 5, 5]));
const manager = new GestionnaireUtilisateurs();
manager.connexion("alice");
manager.connexion("bob");
console.log(manager.estEnLigne("alice")); 
console.log(manager.obtenirTous());
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
console.log(union(setA, setB)); 
console.log(intersection(setA, setB)); 
console.log(difference(setA, setB)); 