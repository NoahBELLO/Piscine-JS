const fs = require("fs");
const path = require("path");

/**
 * Crée un fichier JavaScript avec le contenu donné.
 * @param {string} fileName - Le nom du fichier à créer (ex: "nouveauFichier.js")
 * @param {string} content - Le contenu à écrire dans le fichier
 */
function createJsFile(fileName, content = "// Nouveau fichier JS\n") {
  const filePath = path.join(__dirname, fileName);
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Erreur lors de la création du fichier :", err);
    } else {
      console.log(`Fichier ${fileName} créé avec succès !`);
    }
  });
}

// Exemple d'utilisation :
for(let i = 70; i <= 105; i++) {
    createJsFile(`exo_${i}.js`, `// Exercice ${i}\n`);
}