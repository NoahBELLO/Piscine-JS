/*  
Événement input
Créez un champ texte qui affiche en temps réel ce que l'utilisateur tape.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Input Live</title>
    <style>
        #monInput {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            margin-bottom: 20px;
        }
        #resultat {
            font-weight: bold;
            color: #007bff;
        }
    </style>
</head>
<body>
    <h1>Saisie en temps réel</h1>
    <input type="text" id="monInput" placeholder="Tapez quelque chose...">
    <p>Vous avez tapé : <span id="resultat"></span></p>
    <p>Nombre de caractères : <span id="longueur">0</span></p>

    <script src="112_A.js"></script>
</body>
</html>

Objectifs :
✅ Afficher le texte tapé en temps réel
✅ Afficher le nombre de caractères
✅ Gérer le cas où le champ est vide
Méthodes à utiliser :
addEventListener('input', callback)
event.target.value pour récupérer la valeur
.length pour compter les caractères
*/

const monInput = document.getElementById("monInput");
const resultat = document.getElementById("resultat");
const longueur = document.getElementById("longueur");

monInput.addEventListener("input", function (event) {
  const valeur = event.target.value;
  resultat.textContent = valeur || "(rien)";
  longueur.textContent = valeur.length;
});
