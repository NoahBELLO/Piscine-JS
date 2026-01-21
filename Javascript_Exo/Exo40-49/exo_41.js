/*  
Calculatrice interactive
Créez une calculatrice simple avec interface utilisateur.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Calculatrice</title>
    <style>
        .calculatrice {
            width: 300px;
            margin: 50px auto;
            padding: 20px;
            background: #f0f0f0;
            border-radius: 10px;
        }
        #display {
            width: 100%;
            padding: 10px;
            font-size: 24px;
            text-align: right;
            margin-bottom: 10px;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        button {
            padding: 20px;
            font-size: 18px;
            cursor: pointer;
        }
        .operator {
            background: #ff9500;
            color: white;
        }
        .equal {
            grid-column: span 2;
            background: #4cd964;
            color: white;
        }
    </style>
</head>
<body>
    <div class="calculatrice">
        <input type="text" id="display" readonly value="0">
        <div class="buttons">
            <button class="number">7</button>
            <button class="number">8</button>
            <button class="number">9</button>
            <button class="operator">÷</button>

            <button class="number">4</button>
            <button class="number">5</button>
            <button class="number">6</button>
            <button class="operator">×</button>

            <button class="number">1</button>
            <button class="number">2</button>
            <button class="number">3</button>
            <button class="operator">-</button>

            <button class="number">0</button>
            <button id="clear">C</button>
            <button class="equal">=</button>
            <button class="operator">+</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

Objectifs :
✅ Gérer les clics sur les chiffres (0-9)
✅ Gérer les opérateurs (+, -, ×, ÷)
✅ Calculer le résultat avec le bouton =
✅ Réinitialiser avec le bouton C
Exemple de comportement attendu :
Clic sur "7" → Affichage : 7
Clic sur "+" → Enregistrement de l'opération
Clic sur "3" → Affichage : 3
Clic sur "=" → Affichage : 10
Clic sur "C" → Affichage : 0
*/

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let operator = null;
let previousInput = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number")) {
      if (currentInput === "0") {
        currentInput = value;
      }
    } else {
      currentInput += value;
    }
    display.value = currentInput;
  });

  button.addEventListener("click", () => {
    const value = button.textContent;
    if (button.classList.contains("number")) {
      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.value = currentInput;
    } else if (button.classList.contains("operator")) {
      if (currentInput !== "") {
        previousInput = currentInput;
        operator = value;
        currentInput = "";
        display.value = "";
      }
    } else if (button.classList.contains("equal")) {
      if (previousInput !== null && operator !== null && currentInput !== "") {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);
        switch (operator) {
          case "+":
            result = prev + curr;
            break;
          case "-":
            result = prev - curr;
            break;
          case "×":
            result = prev * curr;
            break;
          case "÷":
            result = prev / curr;
            break;
        }
        display.value = result;
        currentInput = result.toString();
        previousInput = null;
        operator = null;
      }
    } else if (button.id === "clear") {
      currentInput = "";
      previousInput = null;
      operator = null;
      display.value = "0";
    }
  });
});