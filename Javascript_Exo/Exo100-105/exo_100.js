/* 
Fuseaux horaires et UTC
Gérez les fuseaux horaires, convertissez entre UTC et heure locale, et effectuez des calculs précis.

Objectifs :
✅ Comprendre UTC vs heure locale
✅ Utiliser les méthodes UTC (getUTCHours, etc.)
✅ Convertir entre les horaires des fuseaux avec toLocaleString
✅ Calculatrice avec getTimezoneOffset()
Fonctionnalités à implémenter :
class TimezoneConverter {
  static toTimezone(date, timezone)    // Convertir
  static format(date, timezone)        // Formater
  static getOffset(date, timezone)     // Obtenir offset
  static compare(date, timezones)      // Comparer
}

class FlightDuration {
  getDuration()  // Calculer durée avec fuseaux
}
*/

class TimezoneConverter {
  static toTimezone(date, timezone) {
    return new Date(date.toLocaleString("en-US", { timeZone: timezone }));
  }

  static format(date, timezone) {
    return date.toLocaleString("en-US", { timeZone: timezone, timeZoneName: "short" });
  }

  static getOffset(date, timezone) {
    const localDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
    return (localDate - date) / (60 * 1000); 
  }

  static compare(date, timezones) {
    return timezones.map(tz => ({
      timezone: tz,
      time: this.format(date, tz)
    }));
  }
}

class FlightDuration {
  constructor(departureDate, departureTimezone, arrivalDate, arrivalTimezone) {
    this.departureDate = TimezoneConverter.toTimezone(departureDate, departureTimezone);
    this.arrivalDate = TimezoneConverter.toTimezone(arrivalDate, arrivalTimezone);
  }

  getDuration() {
    const durationMs = this.arrivalDate - this.departureDate;
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    return { hours, minutes };
  }
}

const departure = new Date('2024-06-01T10:00:00Z'); 
const arrival = new Date('2024-06-01T15:30:00Z');   

const flight = new FlightDuration(departure, 'America/New_York', arrival, 'Europe/London');
const duration = flight.getDuration();
console.log(`Durée du vol : ${duration.hours} heures et ${duration.minutes} minutes`);

const date = new Date('2024-06-01T12:00:00Z');
console.log(TimezoneConverter.format(date, 'America/Los_Angeles'));
console.log(TimezoneConverter.getOffset(date, 'Asia/Tokyo'));
console.log(TimezoneConverter.compare(date, ['America/New_York', 'Europe/London', 'Asia/Tokyo']));