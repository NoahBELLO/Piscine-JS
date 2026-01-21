/*  
Créer et ajouter des éléments au DOM
Apprenez à créer dynamiquement des éléments HTML et à les ajouter à la page.

HTML de départ :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>DOM - Création</title>
    <style>
        .produit {
            border: 1px solid #ccc;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
        }
        .prix { color: green; font-weight: bold; }
    </style>
</head>
<body>
    <h1 id="titre">Ma boutique</h1>
    <div id="produits"></div>

    <script src="093_A.js"></script>
</body>
</html>

Objectifs :
✅ Créer un nouvel élément <p>
✅ Créer une liste <ul> avec plusieurs <li>
✅ Créer une carte produit complète
✅ Insérer les éléments à différentes positions
✅ Supprimer un élément
Méthodes à utiliser :
document.createElement()
appendChild()
insertAdjacentElement()
remove() / removeChild()
*/

const conteneurProduits = document.getElementById("produits");
const paragraphe = document.createElement("p");
paragraphe.textContent = "Bienvenue dans ma boutique en ligne !";
const titre = document.getElementById("titre");
titre.insertAdjacentElement("afterend", paragraphe);

const listeCategories = document.createElement("ul");
const categories = ["Électronique", "Vêtements", "Livres"];
categories.forEach((categorie) => {
  const item = document.createElement("li");
  item.textContent = categorie;
  listeCategories.appendChild(item);
});
conteneurProduits.appendChild(listeCategories);

const carteProduit = document.createElement("div");
carteProduit.className = "produit";

const nomProduit = document.createElement("h2");
nomProduit.textContent = "Smartphone XYZ";
carteProduit.appendChild(nomProduit);

const descriptionProduit = document.createElement("p");
descriptionProduit.textContent =
  "Un smartphone moderne avec toutes les fonctionnalités.";
carteProduit.appendChild(descriptionProduit);

const prixProduit = document.createElement("p");
prixProduit.className = "prix";
prixProduit.textContent = "Prix : 499€";
carteProduit.appendChild(prixProduit);

conteneurProduits.appendChild(carteProduit);

setTimeout(() => {
  listeCategories.remove();
}, 5000);
