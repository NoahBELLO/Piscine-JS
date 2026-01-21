/* 
Getters et Setters
Utilisez les getters et setters pour contrôler l'accès aux propriétés.

Objectifs :
✅ Définir des getters avecget
✅ Définir des setters avecset
✅ Valider les données dans les setters
✅ Utiliser la convention underscore pour propriétés privées
Exemple :
class Personne {
    constructor(nom, age) {
        this._nom = nom;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(nouvelAge) {
        if (nouvelAge >= 0) {
            this._age = nouvelAge;
        }
    }
}
*/

class Personne {
    constructor(nom, age) {
        this._nom = nom;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(nouvelAge) {
        if (nouvelAge >= 0) {
            this._age = nouvelAge;
        }
    }
}

const personne = new Personne("Alice", 30);
console.log(personne.age);  
personne.age = 35;
console.log(personne.age);  
personne.age = -5;         
console.log(personne.age);  