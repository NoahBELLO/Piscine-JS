/* 
Comprendre le scope
Analysez et comprenez la portée des variables en JavaScript.

Objectifs :
✅ Utiliser le mot-clé portée globale vs locale
✅ Créer des var , let et const
✅ Appeler sans créer d' hissage
✅ Créer des portée de bloc
Différences principales :
var : Scope de fonction + hoisting let : Scope de bloc const : Scope de bloc + immuable

Exemple de problème classique :
// Avec var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Affiche: 3, 3, 3

// Avec let
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}
// Affiche: 0, 1, 2
*/

function testerPortee() {
    var globaleVar = "Je suis une variable globale (var)";
    let globaleLet = "Je suis une variable globale (let)";
    const globaleConst = "Je suis une variable globale (const)";

    function porteeFonction() {
        var localeVar = "Je suis une variable locale (var)";
        let localeLet = "Je suis une variable locale (let)";
        const localeConst = "Je suis une variable locale (const)";

        console.log(globaleVar);   
        console.log(globaleLet);   
        console.log(globaleConst); 

        console.log(localeVar);    
        console.log(localeLet);    
        console.log(localeConst);  

        if (true) {
            // Portée de bloc
            var blocVar = "Je suis une variable de bloc (var)";
            let blocLet = "Je suis une variable de bloc (let)";
            const blocConst = "Je suis une variable de bloc (const)";

            console.log(blocVar);   
            console.log(blocLet);   
            console.log(blocConst); 
        }

        console.log(blocVar);   
        // console.log(blocLet);   
        // console.log(blocConst);
    }

    porteeFonction();

    console.log(globaleVar);   
    console.log(globaleLet);   
    console.log(globaleConst); 

    // console.log(localeVar);   
    // console.log(localeLet);    
    // console.log(localeConst);  
}

testerPortee();