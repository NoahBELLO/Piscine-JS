/*  
Event object et preventDefault
Créez un formulaire qui empêche le rechargement de la page lors de la soumission.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Formulaire</title>
</head>
<body>
    <form id="monFormulaire">
        <input type="text" id="nom" placeholder="Nom" required>
        <input type="email" id="email" placeholder="Email" required>
        <button type="submit">Envoyer</button>
    </form>
    <div id="message"></div>

    <script src="script.js"></script>
</body>
</html>

Objectifs :
✅ Empêcher le rechargement de la page avec event.preventDefault()
✅ Récupérer les valeurs des champs du formulaire
✅ Afficher un message de confirmation
✅ Réinitialiser le formulaire après soumission
Exemple de comportement attendu :
L'utilisateur saisit "Thomas" et "thomas@exemple.com"
En cliquant sur "Envoyer", la page ne se recharge pas
Un message s'affiche : "Formulaire soumis ! Nom: Thomas, Email: thomas@exemple.com"
Les champs du formulaire sont vidés
*/

const formulaire = document.getElementById("monFormulaire");
const messageDiv = document.getElementById("message");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
    messageDiv.textContent = `Formulaire soumis ! Nom: ${nom}, Email: ${email}`;
    formulaire.reset();
});
