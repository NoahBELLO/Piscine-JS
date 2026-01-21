/*
API de géolocalisation
Utilisez l'API Geolocation pour obtenir et suivre la position de l'utilisateur, et calculer les distances.

Objectifs :
✅ Créer, lire et supprimer des position actuelle de l'utilisateur
✅ Gérer l' Suivre (expire, max-age)
✅ Utiliser les drapeaux de distance (sécurisé, sameSite)
✅ Mettre en œuvre un système de autorisations RGPDerreurs
Fonctionnalités à implémenter :
class GeoLocation {
  async getCurrentPosition(options)  // Position actuelle
  watchPosition(callback, error)     // Suivi temps réel
  clearWatch()                        // Arrêter le suivi
  static calculateDistance(...)       // Distance en km
}

class ProximityFinder {
  async findNearby(places, maxDist)  // Trouver à proximité
}
*/

class GeoLocation {
  getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        return reject(
          new Error("Geolocation is not supported by this browser.")
        );
      }
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  watchPosition(callback, error, options = {}) {
    if (!navigator.geolocation) {
      if (error)
        error(new Error("Geolocation is not supported by this browser."));
      return null;
    }
    return navigator.geolocation.watchPosition(callback, error, options);
  }

  clearWatch(watchId) {
    if (navigator.geolocation && watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
    }
  }

  static calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
  }
}

class ProximityFinder {
  async findNearby(places, maxDist) {
    const geo = new GeoLocation();
    try {
      const position = await geo.getCurrentPosition();
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;

      return places.filter((place) => {
        const distance = GeoLocation.calculateDistance(
          userLat,
          userLon,
          place.latitude,
          place.longitude
        );
        return distance <= maxDist;
      });
    } catch (error) {
      console.error("Error getting current position:", error);
      return [];
    }
  }
}

(async () => {
  const geo = new GeoLocation();
  try {
    const position = await geo.getCurrentPosition({ enableHighAccuracy: true });
    console.log("Current Position:", position.coords);

    const watchId = geo.watchPosition(
      (pos) => console.log("Updated Position:", pos.coords),
      (err) => console.error("Watch Error:", err),
      { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true }
    );

    setTimeout(() => {
      geo.clearWatch(watchId);
      console.log("Stopped watching position.");
    }, 30000);

    const places = [
      {
        name: "Place A",
        latitude: position.coords.latitude + 0.01,
        longitude: position.coords.longitude + 0.01,
      },
      {
        name: "Place B",
        latitude: position.coords.latitude + 0.1,
        longitude: position.coords.longitude + 0.1,
      },
    ];

    const proximityFinder = new ProximityFinder();
    const nearbyPlaces = await proximityFinder.findNearby(places, 5); // 5 km
    console.log("Nearby Places:", nearbyPlaces);
  } catch (error) {
    console.error("Error:", error);
  }
})();
