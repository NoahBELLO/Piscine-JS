/*  
Event delegation
Comprenez la délégation d'événements avec une liste dynamique.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Event Delegation</title>
    <style>
        .item {
            padding: 10px;
            margin: 5px 0;
            background: #e0e0e0;
            cursor: pointer;
        }
        .item.selected {
            background: #4caf50;
            color: white;
        }
    </style>
</head>
<body>
    <button id="ajouter">Ajouter un item</button>
    <ul id="liste"></ul>

    <script src="script.js"></script>
</body>
</html>

Objectifs :
✅ Ajouter des items dynamiquement avec le bouton
✅ Utiliser event delegation (un seul listener sur le parent)
✅ Sélectionner un item au clic (changement de style)
✅ Désélectionner les autres items lors de la sélection
Exemple de comportement attendu :
Clic sur "Ajouter un item" → Un nouvel item apparaît dans la liste
Clic sur un item → Il devient vert (classe selected)
Clic sur un autre item → Le précédent redevient gris, le nouveau devient vert
*/

document.addEventListener('DOMContentLoaded', () => {
    const liste = document.getElementById('liste');
    const boutonAjouter = document.getElementById('ajouter');
    let compteur = 1;
    
    boutonAjouter.addEventListener('click', () => {
        const nouvelItem = document.createElement('li');
        nouvelItem.textContent = `Item ${compteur++}`;
        nouvelItem.classList.add('item');
        liste.appendChild(nouvelItem);
    }
    );
});

liste.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('item')) {
        const items = liste.getElementsByClassName('item');
        for (let item of items) {
            item.classList.remove('selected');
        }
        event.target.classList.add('selected');
    }
});
