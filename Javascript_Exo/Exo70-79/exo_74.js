/* 
Méthodes statiques
Créez des méthodes qui appartiennent à la classe, pas aux instances.

Objectifs :
✅ Utiliser le mot-clé statique
✅ Créer des méthodes de classe
✅ Appeler sans créer d' instance
✅ Créer des utilitaires
Exemple :
class Calculatrice {
    static addition(a, b) {
        return a + b;
    }

    static multiplication(a, b) {
        return a * b;
    }
}

// Appel direct sur la classe
Calculatrice.addition(5, 3);  // 8
*/

class Calculatrice {
    static addition(a, b) {
        return a + b;
    }

    static multiplication(a, b) {
        return a * b;
    }
}

console.log(Calculatrice.addition(5, 3));  
console.log(Calculatrice.multiplication(5, 3));  