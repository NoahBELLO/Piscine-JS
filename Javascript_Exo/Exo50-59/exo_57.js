/* Loading states
Gérez les états de chargement dans l'interface.

Objectifs :
✅ Définir les états (IDLE, LOADING, SUCCESS, ERROR)
✅ Afficher un loader pendant le chargement
✅ Désactiver les boutons pendant le chargement
✅ Permettre de réessayer en cas d'erreur
États possibles :
const STATES = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
}; */

const STATES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};
let currentState = STATES.IDLE;
const button = document.getElementById("loadButton");
const loader = document.getElementById("loader");
const resultContainer = document.getElementById("result");
const errorContainer = document.getElementById("error");
const updateUI = () => {
  loader.style.display = currentState === STATES.LOADING ? "block" : "none";
  button.disabled = currentState === STATES.LOADING;
  resultContainer.style.display =
    currentState === STATES.SUCCESS ? "block" : "none";
  errorContainer.style.display =
    currentState === STATES.ERROR ? "block" : "none";
};
const fetchData = async () => {
  currentState = STATES.LOADING;
  updateUI();
  try {
    const response = await fetch(
      "https://gomanga-api.vercel.app/api/search/death",
    );
    const data = await response.json();
    resultContainer.textContent = JSON.stringify(data, null, 2);
    currentState = STATES.SUCCESS;
  } catch (error) {
    errorContainer.textContent = "Erreur de chargement des données.";
    currentState = STATES.ERROR;
  }
  updateUI();
};
button.addEventListener("click", fetchData);
updateUI();
