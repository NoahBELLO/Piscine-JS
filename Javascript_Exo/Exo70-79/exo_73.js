/*  
Patrimoine
Créer des classes qui héritent d'autres classes.

Objectifs :
✅ Utiliser extends pour hériter
✅ Appeler le constructeur parent avec super()
✅ Redéfinir les méthodes ( override )
✅ Vérifier le type avec instanceof
Structure :
class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    parler() {
        console.log(`${this.nom} fait un bruit`);
    }
}

class Chien extends Animal {
    constructor(nom, race) {
        super(nom);
        this.race = race;
    }

    parler() {
        console.log(`${this.nom} aboie`);
    }
}
*/

class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    parler() {
        console.log(`${this.nom} fait un bruit`);
    }
}

class Chien extends Animal {
    constructor(nom, race) {
        super(nom);
        this.race = race;
    }

    parler() {
        console.log(`${this.nom} aboie`);
    }
}

const monChien = new Chien("Rex", "Berger Allemand");
monChien.parler(); 

console.log(monChien instanceof Chien); 
console.log(monChien instanceof Animal); 