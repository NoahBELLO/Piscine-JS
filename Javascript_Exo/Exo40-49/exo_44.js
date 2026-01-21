/*  
Quiz interactif
Créez un quiz à choix multiples avec système de score.

Objectifs :
✅ Afficher les questions et leurs options de réponse
✅ Vérifier si la réponse est correcte
✅ Calculer et afficher le score
✅ Naviguer entre les questions
✅ Afficher le résultat final avec possibilité de recommencer
Exemple de structure de données :
const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        reponse: 0  // Index de la bonne réponse
    },
    {
        question: "Combien font 2 + 2 ?",
        options: ["3", "4", "5", "6"],
        reponse: 1
    }
];

Exemple de comportement attendu :
Affichage : "Question 1/3 : Quelle est la capitale de la France ?"
4 boutons : Paris, Londres, Berlin, Madrid
Clic sur "Paris" → Message "Bonne réponse !" + passage à la question suivante
Après la dernière question → "Quiz terminé ! Votre score: 2/3"
*/

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        reponse: 0
    },
    {
        question: "Combien font 2 + 2 ?",
        options: ["3", "4", "5", "6"],
        reponse: 1
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
        reponse: 3
    }
];

let indexQuestion = 0;
let score = 0;

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const resultatElem = document.getElementById("resultat");

function afficherQuestion() {
    resultatElem.textContent = "";
    const q = questions[indexQuestion];
    questionElem.textContent = `Question ${indexQuestion + 1}/${questions.length} : ${q.question}`;
    optionsElem.innerHTML = "";
    q.options.forEach((option, i) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "option";
        btn.onclick = () => verifierReponse(i);
        optionsElem.appendChild(btn);
    });
}

function verifierReponse(reponseUtilisateur) {
    const q = questions[indexQuestion];
    if (reponseUtilisateur === q.reponse) {
        resultatElem.textContent = "Bonne réponse !";
        score++;
    } else {
        resultatElem.textContent = `Mauvaise réponse ! La bonne réponse était : ${q.options[q.reponse]}`;
    }
    // Désactiver les boutons
    Array.from(optionsElem.children).forEach(btn => btn.disabled = true);

    setTimeout(() => {
        indexQuestion++;
        if (indexQuestion < questions.length) {
            afficherQuestion();
        } else {
            afficherResultatFinal();
        }
    }, 1000);
}

function afficherResultatFinal() {
    questionElem.textContent = "Quiz terminé !";
    optionsElem.innerHTML = "";
    resultatElem.textContent = `Votre score : ${score}/${questions.length}`;
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Recommencer";
    restartBtn.className = "option";
    restartBtn.onclick = () => {
        indexQuestion = 0;
        score = 0;
        afficherQuestion();
    };
    optionsElem.appendChild(restartBtn);
}

afficherQuestion();