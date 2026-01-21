/*  
Générateur de couleurs aléatoires
Créez une application qui génère une couleur hexadécimale aléatoire et change le fond de la page.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Générateur de Couleurs</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            transition: background-color 0.3s ease;
            font-family: Arial, sans-serif;
        }
        #couleur {
            font-size: 48px;
            font-weight: bold;
            margin: 20px;
            padding: 20px;
            background: white;
            border-radius: 10px;
        }
        button {
            padding: 15px 30px;
            font-size: 20px;
            cursor: pointer;
            border: none;
            background: white;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div id="couleur">#FFFFFF</div>
    <button id="generer">Générer une couleur</button>

    <script src="script.js"></script>
</body>
</html>

Objectifs :
✅ Générer une couleur hexadécimale aléatoire (format #RRGGBB)
✅ Changer le fond de la page avec cette couleur
✅ Afficher le code couleur à l'écran
✅ Adapter la couleur du texte pour un bon contraste
Exemple de comportement attendu :
Clic sur "Générer une couleur" → Le fond devient #3A7BD5 (par exemple)
Le texte affiche #3A7BD5
La couleur du texte s'adapte automatiquement (noir ou blanc selon la luminosité)
*/

document.getElementById("generer").addEventListener("click", () => {
  function genererCouleurHex() {
    const lettres = "0123456789ABCDEF";
    let couleur = "#";
    for (let i = 0; i < 6; i++) {
      couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
  }

  function getLuminosite(couleur) {
    const r = parseInt(couleur.substr(1, 2), 16);
    const g = parseInt(couleur.substr(3, 2), 16);
    const b = parseInt(couleur.substr(5, 2), 16);
    return 0.299 * r + 0.587 * g + 0.114 * b;
  }

  const couleurGeneree = genererCouleurHex();
  document.body.style.backgroundColor = couleurGeneree;
  document.getElementById("couleur").textContent = couleurGeneree;
  const luminosite = getLuminosite(couleurGeneree);
  document.getElementById("couleur").style.color =
    luminosite > 186 ? "black" : "white";
  document.getElementById("couleur").style.backgroundColor =
    luminosite > 186 ? "white" : "black";
});
