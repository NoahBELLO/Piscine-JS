/* 
Calculs et comparaisons de dates
Effectuez des calculs et comparaisons entre dates (différences, ajouts, soustractions).

Objectifs :
✅ Calculer la différence entre dates (jours, heures, etc.)
✅ Utiliser les méthodes Ajouter/soustraire (getFullYear, setMonth, etc.)
✅ Formater avec début/fin et méthodes natives
✅ Créer un Comparateur (JJ/MM/AAAA, etc.)
Fonctionnalités à implémenter :
class DateUtils {
  static diff(date1, date2, unit)      // Différence
  static add(date, amount, unit)       // Ajouter
  static subtract(date, amount, unit)  // Soustraire
  static startOf(date, unit)           // Début de période
  static endOf(date, unit)             // Fin de période
  static isBetween(date, start, end)   // Entre deux dates
  static isToday(date)                 // Est aujourd'hui
}
*/

class DateUtils {
  static diff(date1, date2, unit) {
    const msDiff = Math.abs(date2 - date1);
    switch (unit) {
      case 'days':
        return Math.floor(msDiff / (1000 * 60 * 60 * 24));
      case 'hours':
        return Math.floor(msDiff / (1000 * 60 * 60));
      case 'minutes':
        return Math.floor(msDiff / (1000 * 60));
      case 'seconds':
        return Math.floor(msDiff / 1000);
      default:
        throw new Error('Unit not supported');
    }
  }

  static add(date, amount, unit) {
    const newDate = new Date(date);
    switch (unit) {
      case 'days':
        newDate.setDate(newDate.getDate() + amount);
        break;
      case 'hours':
        newDate.setHours(newDate.getHours() + amount);
        break;
      case 'minutes':
        newDate.setMinutes(newDate.getMinutes() + amount);
        break;
      case 'seconds':
        newDate.setSeconds(newDate.getSeconds() + amount);
        break;
      default:
        throw new Error('Unit not supported');
    }
    return newDate;
  }

  static subtract(date, amount, unit) {
    return this.add(date, -amount, unit);
  }

  static startOf(date, unit) {
    const newDate = new Date(date);
    switch (unit) {
      case 'day':
        newDate.setHours(0, 0, 0, 0);
        break;
      case 'month':
        newDate.setDate(1);
        newDate.setHours(0, 0, 0, 0);
        break;
      case 'year':
        newDate.setMonth(0, 1);
        newDate.setHours(0, 0, 0, 0);
        break;
      default:
        throw new Error('Unit not supported');
    }
    return newDate;
  }

  static endOf(date, unit) {
    const newDate = new Date(date);
    switch (unit) {
      case 'day':
        newDate.setHours(23, 59, 59, 999);
        break;
      case 'month':
        newDate.setMonth(newDate.getMonth() + 1, 0);
        newDate.setHours(23, 59, 59, 999);
        break;
      case 'year':
        newDate.setFullYear(newDate.getFullYear() + 1, 0, 0);
        newDate.setHours(23, 59, 59, 999);
        break;
      default:
        throw new Error('Unit not supported');
    }
    return newDate;
  }

  static isBetween(date, start, end) {
    return date >= start && date <= end;
  }

  static isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }
}

const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-15');

console.log(DateUtils.diff(date1, date2, 'days')); 
console.log(DateUtils.add(date1, 10, 'days')); 
console.log(DateUtils.subtract(date2, 5, 'days')); 
console.log(DateUtils.startOf(date2, 'month')); 
console.log(DateUtils.endOf(date2, 'month')); 
console.log(DateUtils.isBetween(new Date('2024-01-10'), date1, date2)); 
console.log(DateUtils.isToday(new Date())); 