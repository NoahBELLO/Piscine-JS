/* 
Première classe
Créez votre première classe ES6.

Objectifs :
✅ Utiliser la classe mot-clé
✅ Définir un constructeur
✅ Créer des méthodes
✅ Instancier avec nouveau
Structure de base :
class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }

    afficherInfos() {
        console.log(`${this.marque} ${this.modele}`);
    }
}

const voiture = new Voiture("Tesla", "Model 3", 2023);
*/

class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }

    afficherInfos() {
        console.log(`${this.marque} ${this.modele}`);
    }
}

const voiture = new Voiture("Tesla", "Model 3", 2023);
voiture.afficherInfos();  // Tesla Model 3