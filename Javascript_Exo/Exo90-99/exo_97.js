/* 
Notifications de bureau
Créez un système de notifications sur bureau avec gestion des autorisations et file d'attente de notifications.

Objectifs :
✅ Créer, lire et supprimer des autorisation de l'utilisateur
✅ Gérer l' notifications (expire, max-age)
✅ Utiliser les drapeaux de événements (sécurisé, sameSite)
✅ Mettre en œuvre un système de file d'attente RGPD
Fonctionnalités à implémenter :
class NotificationManager {
  static isSupported()              // Vérifier support
  async requestPermission()         // Demander permission
  async show(title, options)        // Afficher notification
}

class NotificationQueue {
  add(title, options)    // Ajouter à la queue
  processQueue()         // Traiter la queue
}
*/

class NotificationManager {
  static isSupported() {
    return "Notification" in window;
  }

  async requestPermission() {
    if (!NotificationManager.isSupported()) {
      throw new Error("Notifications are not supported in this browser.");
    }
    return await Notification.requestPermission();
  }

  async show(title, options) {
    if (!NotificationManager.isSupported()) {
      throw new Error("Notifications are not supported in this browser.");
    }
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Notification permission denied.");
    }
    return new Notification(title, options);
  }
}

class NotificationQueue {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  add(title, options) {
    this.queue.push({ title, options });
    this.processQueue();
  }

  async processQueue() {
    if (this.isProcessing || this.queue.length === 0) {
      return;
    }
    this.isProcessing = true;

    const notificationManager = new NotificationManager();
    while (this.queue.length > 0) {
      const { title, options } = this.queue.shift();
      try {
        await notificationManager.show(title, options);
      } catch (error) {
        console.error("Failed to show notification:", error);
      }
    }

    this.isProcessing = false;
  }
}

const notificationQueue = new NotificationQueue();
notificationQueue.add("Hello!", { body: "This is your first notification." });
notificationQueue.add("Reminder", { body: "Don't forget to check your tasks." });