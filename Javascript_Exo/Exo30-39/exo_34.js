/*  
Sélectionner des éléments du DOM
Apprenez à sélectionner des éléments HTML avec JavaScript pour pouvoir les manipuler.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>DOM - Sélection</title>
</head>
<body>
    <h1 id="titre">Bienvenue</h1>
    <p class="paragraphe">Premier paragraphe</p>
    <p class="paragraphe">Deuxième paragraphe</p>
    <ul id="liste">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button id="monBouton">Cliquer</button>

    <script src="091_A.js"></script>
</body>
</html>

Objectifs :
✅ Sélectionner l'élément avec l'id "titre"
✅ Sélectionner tous les paragraphes avec la classe "paragraphe"
✅ Sélectionner tous les <li> de la liste
✅ Afficher le contenu de chaque élément dans la console
Méthodes à utiliser :
document.getElementById()
document.querySelector()
document.querySelectorAll()
*/

// Sélectionner l'élément avec l'id "titre"
let titre = document.getElementById("titre");
console.log(titre.textContent);

// Sélectionner tous les paragraphes avec la classe "paragraphe"
let paragraphes = document.querySelectorAll(".paragraphe");
paragraphes.forEach((p, index) => {
    console.log(`Paragraphe ${index + 1}: ${p.textContent}`);
});

// Sélectionner tous les <li> de la liste
let items = document.querySelectorAll("#liste li");
items.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${item.textContent}`);
});