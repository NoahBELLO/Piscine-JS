/* 
Système de préférences avec LocalStorage
Créez un système de gestion des préférences utilisateur qui conserve les données avec LocalStorage.

Objectifs :
✅ Utiliser LocalStorage pour sauvegarder des données
✅ Comprendre la sérialisation JSON
✅ Gérer les erreurs (quota, parsing)
✅ Différencier LocalStorage et SessionStorage
Fonctionnalités à implémenter :
// Wrapper pour LocalStorage
class Storage {
  static set(key, value)    // Sauvegarder
  static get(key, default)  // Récupérer
  static remove(key)        // Supprimer
  static clear()            // Tout supprimer
}

// Gestion des préférences
class UserPreferences {
  load()              // Charger les préférences
  save()              // Sauvegarder
  set(key, value)     // Modifier une préférence
  get(key)            // Lire une préférence
  reset()             // Réinitialiser
}
*/

class Storage {
  static set(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (e) {
      console.error("Erreur lors de la sauvegarde dans LocalStorage :", e);
    }
  }

  static get(key, defaultValue = null) {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) return defaultValue;
      return JSON.parse(serializedValue);
    } catch (e) {
      console.error("Erreur lors de la récupération depuis LocalStorage :", e);
      return defaultValue;
    }
  }

  static remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error("Erreur lors de la suppression depuis LocalStorage :", e);
    }
  }

  static clear() {
    try {
      localStorage.clear();
    } catch (e) {
      console.error("Erreur lors du nettoyage de LocalStorage :", e);
    }
  }
}

class UserPreferences {
  constructor() {
    this.preferences = {};
    this.load();
  }

  load() {
    this.preferences = Storage.get("userPreferences", {});
  }

  save() {
    Storage.set("userPreferences", this.preferences);
  }

  set(key, value) {
    this.preferences[key] = value;
    this.save();
  }

  get(key) {
    return this.preferences[key];
  }

  reset() {
    this.preferences = {};
    this.save();
  }
}

const userPrefs = new UserPreferences();
userPrefs.set("theme", "dark");
console.log(userPrefs.get("theme")); 
userPrefs.reset();
console.log(userPrefs.get("theme")); 