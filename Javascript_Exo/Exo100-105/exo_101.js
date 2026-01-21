/* 
Calendrier et planificateur
Créez un système complet de calendrier avec gestion d'événements, détection de conflits et affichage.

Objectifs :
✅ Créer un système d'événements (ajout, recherche, filtrage)
✅ Filtrer par jour, période, à venir
✅ Détecter les conflits d'horaires
✅ Générer afficher et un calendrier mensuel
Fonctionnalités à implémenter :
class Calendar {
  addEvent(title, start, end, details)  // Ajouter
  getEventsForDay(date)                 // Jour
  getEventsInRange(start, end)          // Période
  getUpcomingEvents(limit)              // À venir
  hasConflict(start, end)               // Conflit
  generateMonth(year, month)            // Générer
  displayMonth(year, month)             // Afficher
}
*/

class Calendar {
  constructor() {
    this.events = [];
  }

  addEvent(title, start, end, details = '') {
    if (this.hasConflict(start, end)) {
      throw new Error('Event conflicts with existing events');
    }
    this.events.push({ title, start: new Date(start), end: new Date(end), details });
  }

  getEventsForDay(date) {
    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(dayStart);
    dayEnd.setHours(23, 59, 59, 999);

    return this.events.filter(event =>
      event.start < dayEnd && event.end > dayStart
    );
  }

  getEventsInRange(start, end) {
    const rangeStart = new Date(start);
    const rangeEnd = new Date(end);

    return this.events.filter(event =>
      event.start < rangeEnd && event.end > rangeStart
    );
  }

  getUpcomingEvents(limit = 5) {
    const now = new Date();
    return this.events
      .filter(event => event.start > now)
      .sort((a, b) => a.start - b.start)
      .slice(0, limit);
  }

  hasConflict(start, end) {
    const newStart = new Date(start);
    const newEnd = new Date(end);

    return this.events.some(event =>
      event.start < newEnd && event.end > newStart
    );
  }

  generateMonth(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const monthEvents = {};

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const dateKey = new Date(year, month, day).toISOString().split('T')[0];
      monthEvents[dateKey] = this.getEventsForDay(new Date(year, month, day));
    }

    return monthEvents;
  }

  displayMonth(year, month) {
    const monthEvents = this.generateMonth(year, month);
    console.log(`Events for ${year}-${month + 1}:`);
    for (const [date, events] of Object.entries(monthEvents)) {
      console.log(`\nDate: ${date}`);
      if (events.length === 0) {
        console.log('  No events');
      } else {
        events.forEach(event => {
          console.log(`  - ${event.title} (${event.start.toLocaleTimeString()} - ${event.end.toLocaleTimeString()})`);
        });
      }
    }
  }
}

const calendar = new Calendar();
calendar.addEvent('Meeting', '2024-07-10T10:00:00', '2024-07-10T11:00:00', 'Project discussion');
calendar.addEvent('Dentist Appointment', '2024-07-12T15:00:00', '2024-07-12T16:00:00');
calendar.addEvent('Conference', '2024-07-15T09:00:00', '2024-07-15T17:00:00');

console.log('Events on 2024-07-10:', calendar.getEventsForDay('2024-07-10'));
console.log('Events from 2024-07-10 to 2024-07-12:', calendar.getEventsInRange('2024-07-10', '2024-07-12'));
console.log('Upcoming Events:', calendar.getUpcomingEvents(2));

calendar.displayMonth(2024, 6); 