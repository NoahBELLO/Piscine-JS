/* 
Gestionnaire de cookies
Créez un gestionnaire de cookies complet avec expiration, sécurité et conformité RGPD.

Objectifs :
✅ Créer, lire et supprimer des cookies
✅ Gérer l' expiration (expire, max-age)
✅ Utiliser les drapeaux de sécurité (sécurisé, sameSite)
✅ Mettre en œuvre un système de consentement RGPD
Fonctionnalités à implémenter :
class CookieManager {
  static set(name, value, options)  // Créer un cookie
  static get(name)                   // Lire un cookie
  static remove(name)                // Supprimer un cookie
  static has(name)                   // Vérifier l'existence
  static getAll()                    // Tous les cookies
}

class CookieConsent {
  hasConsent()      // Vérifier le consentement
  giveConsent()     // Donner le consentement
  revokeConsent()   // Révoquer le consentement
}
*/

class CookieManager {
  static set(name, value, options = {}) {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (options.expires) {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }
    if (options.maxAge) {
      cookieString += `; max-age=${options.maxAge}`;
    }
    if (options.path) {
      cookieString += `; path=${options.path}`;
    }
    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }
    if (options.secure) {
      cookieString += `; secure`;
    }
    if (options.sameSite) {
      cookieString += `; samesite=${options.sameSite}`;
    }

    document.cookie = cookieString;
  }

  static get(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (decodeURIComponent(cookieName) === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  static remove(name) {
    this.set(name, '', { expires: new Date(0) });
  }

  static has(name) {
    return this.get(name) !== null;
  }

  static getAll() {
    const cookies = document.cookie.split('; ');
    const cookieObj = {};
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      cookieObj[decodeURIComponent(cookieName)] = decodeURIComponent(cookieValue);
    }
    return cookieObj;
  }
}

class CookieConsent {
  hasConsent() {
    return CookieManager.get('cookie_consent') === 'true';
  }

  giveConsent() {
    CookieManager.set('cookie_consent', 'true', { path: '/', maxAge: 31536000 }); // 1 year
  }

  revokeConsent() {
    CookieManager.remove('cookie_consent');
  }
}

CookieManager.set('test', 'value', { path: '/', maxAge: 3600, secure: true, sameSite: 'Lax' });
console.log(CookieManager.get('test'));
console.log(CookieManager.has('test'));
console.log(CookieManager.getAll());
CookieManager.remove('test');

const consent = new CookieConsent();
consent.giveConsent();
console.log(consent.hasConsent());
consent.revokeConsent();
console.log(consent.hasConsent());