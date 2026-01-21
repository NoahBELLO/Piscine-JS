/*  
Événement click simple
Créez un compteur qui s'incrémente à chaque clic sur un bouton.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Compteur</title>
    <style>
        #compteur {
            font-size: 48px;
            font-weight: bold;
            text-align: center;
            margin: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 18px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div id="compteur">0</div>
    <button id="incrementer">+1</button>
    <button id="decrementer">-1</button>
    <button id="reset">Reset</button>

    <script src="111_A.js"></script>
</body>
</html>

Objectifs :
✅ Le bouton +1 incrémente le compteur
✅ Le bouton -1 décrémente le compteur
✅ Le bouton Reset remet le compteur à 0
✅ Afficher le compteur à l'écran
Méthodes à utiliser :
addEventListener('click', callback)
Modifier textContent pour afficher le compteur
*/

const compteurElement = document.getElementById("compteur");
const incrementerBtn = document.getElementById("incrementer");
const decrementerBtn = document.getElementById("decrementer");
const resetBtn = document.getElementById("reset");

let compteur = 0;

function mettreAJourAffichage() {
  compteurElement.textContent = compteur;
}

incrementerBtn.addEventListener("click", () => {
  compteur++;
  mettreAJourAffichage();
});

decrementerBtn.addEventListener("click", () => {
  compteur--;
  mettreAJourAffichage();
});

resetBtn.addEventListener("click", () => {
  compteur = 0;
  mettreAJourAffichage();
});