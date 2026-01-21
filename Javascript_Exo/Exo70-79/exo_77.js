/* 
Fonctions d'usine avec fermetures
Créez des fonctions d'usine pour générer des objets avec des données privées.

Objectifs :
✅ Créer des fonctions d'usine
✅ Encapsuler les données privées
✅ Exposez une API publique
✅ Valider les données
Usine de modèles :
function creerBanque(proprietaire, solde = 0) {
    // Variables privées
    let _solde = solde;

    // Méthodes publiques
    return {
        deposer(montant) {
            if (montant > 0) {
                _solde += montant;
            }
        },
        consulter() {
            return _solde;
        }
    };
}
*/

function creerBanque(proprietaire, solde = 0) {
    // Variables privées
    let _solde = solde;

    // Méthodes publiques
    return {
        deposer(montant) {
            if (montant > 0) {
                _solde += montant;
            }
        },
        consulter() {
            return _solde;
        }
    };
}

const maBanque = creerBanque("Alice", 1000);
maBanque.deposer(500);
console.log(maBanque.consulter());  
console.log(maBanque._solde);     
const autreBanque = creerBanque("Bob");
autreBanque.deposer(300);
console.log(autreBanque.consulter());  
console.log(autreBanque._solde);     