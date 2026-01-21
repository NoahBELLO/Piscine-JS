/*  
Mini TODO List
Créez une TODO list basique : ajouter et supprimer des tâches dynamiquement.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>TODO List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
        }
        #nouveauTodo {
            width: 70%;
            padding: 10px;
            font-size: 16px;
        }
        #ajouter {
            padding: 10px 20px;
            font-size: 16px;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        .todo-item {
            padding: 10px;
            margin: 5px 0;
            background: #f0f0f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
        }
        .delete-btn {
            background: #dc3545;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 3px;
        }
        .delete-btn:hover {
            background: #c82333;
        }
    </style>
</head>
<body>
    <h1>Ma TODO List</h1>
    <input type="text" id="nouveauTodo" placeholder="Nouvelle tâche...">
    <button id="ajouter">Ajouter</button>
    <ul id="listeTodos"></ul>

    <script src="113_A.js"></script>
</body>
</html>

Objectifs :
✅ Ajouter une tâche en cliquant sur le bouton
✅ Ajouter une tâche en appuyant sur Enter
✅ Supprimer une tâche avec le bouton "Supprimer"
✅ Vider le champ après ajout
✅ Vérifier que le champ n'est pas vide
Méthodes à utiliser :
createElement(), appendChild()
addEventListener('click') et addEventListener('keypress')
event.key === 'Enter'
element.remove()
*/

const nouveauTodo = document.getElementById("nouveauTodo");
const ajouterBtn = document.getElementById("ajouter");
const listeTodos = document.getElementById("listeTodos");

function ajouterTache() {
  const tacheTexte = nouveauTodo.value.trim();
  if (tacheTexte === "") {
    alert("Veuillez entrer une tâche valide.");
    return;
  }

  const li = document.createElement("li");
  li.className = "todo-item";
  li.textContent = tacheTexte;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Supprimer";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  listeTodos.appendChild(li);
  nouveauTodo.value = "";
}
ajouterBtn.addEventListener("click", ajouterTache);
nouveauTodo.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    ajouterTache();
  }
});