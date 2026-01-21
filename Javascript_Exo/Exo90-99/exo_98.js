/* 
Création et formatage de dates
Créez et formatez des dates en JavaScript avec différentes méthodes natives et personnalisées.

Objectifs :
✅ Créer des dates (nouvelle Date, timestamp, composants)
✅ Utiliser les méthodes get/set (getFullYear, setMonth, etc.)
✅ Formater avec toLocaleString et méthodes natives
✅ Créer un formateur personnalisé (JJ/MM/AAAA, etc.)
Fonctionnalités à implémenter :
class DateFormatter {
  static format(date, format)      // Format personnalisé
  static formatRelative(date)      // "Il y a X minutes"
}

// Créer des dates
new Date()                    // Maintenant
new Date('2024-01-15')       // String
new Date(2024, 0, 15)        // Composants
Date.now()                    // Timestamp
*/

class DateFormatter {
  static format(date, format) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return format
      .replace("JJ", day)
      .replace("MM", month)
      .replace("AAAA", year)
      .replace("hh", hours)
      .replace("mm", minutes)
      .replace("ss", seconds);
  }

  static formatRelative(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) {
      return `Il y a ${diffSeconds} secondes`;
    } else if (diffMinutes < 60) {
      return `Il y a ${diffMinutes} minutes`;
    } else if (diffHours < 24) {
      return `Il y a ${diffHours} heures`;
    } else {
      return `Il y a ${diffDays} jours`;
    }
  }
}

const date1 = new Date("2024-01-15T10:30:00");
console.log(DateFormatter.format(date1, "JJ/MM/AAAA hh:mm:ss"));

const date2 = new Date(Date.now() - 5 * 60 * 1000);
console.log(DateFormatter.formatRelative(date2));