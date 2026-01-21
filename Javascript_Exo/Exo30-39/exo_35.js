/*  
Modifier le contenu du DOM
Apprenez à modifier le texte, le HTML, les attributs et les styles des éléments.

HTML de départ :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>DOM - Modification</title>
    <style>
        .highlight { background-color: yellow; }
        .large { font-size: 24px; }
    </style>
</head>
<body>
    <h1 id="titre">Titre original</h1>
    <p id="description" class="normal">Description originale</p>
    <button id="monBouton" class="btn">Bouton</button>
    <div id="contenu"></div>

    <script src="092_A.js"></script>
</body>
</html>

Objectifs :
✅ Modifier le texte du titre
✅ Modifier le HTML du div #contenu
✅ Ajouter/enlever des classes CSS
✅ Modifier les styles inline
✅ Modifier les attributs
Méthodes à utiliser :
textContent / innerHTML
classList.add() / classList.remove() / classList.toggle()
style.property
setAttribute() / getAttribute() / removeAttribute()
*/

document.getElementById('titre').textContent = 'Nouveau Titre';

document.getElementById('contenu').innerHTML = '<p>Ceci est un nouveau paragraphe ajouté dynamiquement.</p>';

document.getElementById('description').classList.add('highlight');

document.getElementById('description').classList.remove('normal');

document.getElementById('monBouton').style.backgroundColor = 'blue';
document.getElementById('monBouton').style.color = 'white';

document.getElementById('monBouton').setAttribute('data-info', 'bouton-principal');
let info = document.getElementById('monBouton').getAttribute('data-info');
console.log('Attribut data-info:', info);
document.getElementById('monBouton').
removeAttribute('data-info');
console.log('Attribut data-info après suppression:', document.getElementById('monBouton').getAttribute('data-info'));