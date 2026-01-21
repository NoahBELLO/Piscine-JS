/* 
Regular Expressions - Projet analyseur de logs
Créez un analyseur de fichiers de logs capable d'extraire, filtrer et analyser les entrées de logs du système.

Consignations
Implémentez une classe AnalyseurLogsqui permet de :

Analyseur des lignes de logs au format standard
Extraire les informations : timestamp, niveau, IP, message
Générer des statistiques sur les logs
Filtrer et rechercher dans les logs
Générer un rapport d'analyse
Format des logs
Format standard à parser :

[2024-01-15 10:30:45] [INFO] 192.168.1.1 - Message du log
[YYYY-MM-DD HH:MM:SS] [NIVEAU] IP_ADDRESS - MESSAGE

Niveaux de log pris en charge : INFO, ERROR, WARN,DEBUG

Classe à implémenter
AnalyseurLogs
Propriétés
logs: tableau des logs parsés
stats: objet contenant les statistiques
total: nombre total de logs
parNiveau: compteur par niveau (INFO, ERREUR, etc.)
parIP: compteur par adresse IP
erreurs: tableau des erreurs uniquement
Méthodes
analyserLigne(ligne)
Analyser une ligne de log et retourner un objet :

{
  timestamp: Date,
  niveau: string,
  ip: string,
  message: string
}

mettreAJourStats(log)
Met à jour les statistiques après ajout d'un log.

analyserFichier(contenu)
Analyser un fichier complet (chaîne multi-lignes).

Split par lignes
Analyser chaque ligne
Retourne les statistiques finales
filtrerParNiveau(niveau)
Retourne tous les logs d'un niveau spécifique.

filtrerParIP(ip)
Retourne tous les logs d'une IP spécifique.

filtrerParPeriode(debut, fin)
Retourne les logs entre deux dates.

Paramètres : objetsDate
rechercherMotif(motif)
Recherche un motif (regex) dans les messages.

Recherche insensible à la casse
obtenirTopIPs(limite = 5)
Retourne les IP les plus actifs.

Format :[{ ip: string, count: number }, ...]
Trié par ordre décroissant
genererRapport()
Afficher un rapport complet dans la console :

Total d'entrées
Répartition par niveau (avec pourcentages)
Top 5 des adresses IP
Dernières erreurs
Exemples de tests :
const analyseur = new AnalyseurLogs();

const logs = `
[2024-01-15 10:30:45] [INFO] 192.168.1.100 - Utilisateur connecté
[2024-01-15 10:31:12] [ERROR] 192.168.1.101 - Erreur de connexion BDD
[2024-01-15 10:32:00] [WARN] 192.168.1.100 - Tentative échouée
[2024-01-15 10:33:15] [INFO] 192.168.1.102 - Requête GET /api/users
`;

const stats = analyseur.analyserFichier(logs);
// stats.total === 4
// stats.parNiveau.INFO === 2
// stats.parNiveau.ERROR === 1

analyseur.genererRapport();
// Affiche rapport formaté dans la console

// Filtres
const erreurs = analyseur.filtrerParNiveau('ERROR');
// [{ timestamp: Date(...), niveau: 'ERROR', ... }]

const ip100 = analyseur.filtrerParIP('192.168.1.100');
// Tous les logs de cette IP

// Recherche
const connexions = analyseur.rechercherMotif('connexion');
// Trouve tous les logs mentionnant "connexion"

// Top IPs
const topIPs = analyseur.obtenirTopIPs(3);
// [{ ip: '192.168.1.100', count: 2 }, ...]

Points clés à implémenter
Regex pour analyser le format complexe avec groupes de capture
Gestion des dates avecnew Date()
Agrégé des statistiques (compteurs, totaux)
Méthodes de filtrage et de recherche
Formatage et présentation des données
*/

class AnalyseurLogs {
    constructor() {
        this.logs = [];
        this.stats = {
            total: 0,
            parNiveau: {},
            parIP: {},
            erreurs: []
        };
    }

    analyserLigne(ligne) {
        const regex = /^\[(.+?)\] \[(.+?)\] (.+?) - (.+)$/;
        const match = ligne.match(regex);
        if (match) {
            return {
                timestamp: new Date(match[1]),
                niveau: match[2],
                ip: match[3],
                message: match[4]
            };
        }
        return null;
    }

    mettreAJourStats(log) {
        this.stats.total += 1;

        if (!this.stats.parNiveau[log.niveau]) {
            this.stats.parNiveau[log.niveau] = 0;
        }
        this.stats.parNiveau[log.niveau] += 1;

        if (!this.stats.parIP[log.ip]) {
            this.stats.parIP[log.ip] = 0;
        }
        this.stats.parIP[log.ip] += 1;

        if (log.niveau === 'ERROR') {
            this.stats.erreurs.push(log);
        }
    }

    analyserFichier(contenu) {
        const lignes = contenu.trim().split('\n');
        for (const ligne of lignes) {
            const log = this.analyserLigne(ligne);
            if (log) {
                this.logs.push(log);
                this.mettreAJourStats(log);
            }
        }
        return this.stats;
    }

    filtrerParNiveau(niveau) {
        return this.logs.filter(log => log.niveau === niveau);
    }

    filtrerParIP(ip) {
        return this.logs.filter(log => log.ip === ip);
    }

    filtrerParPeriode(debut, fin) {
        return this.logs.filter(log => log.timestamp >= debut && log.timestamp <= fin);
    }

    rechercherMotif(motif) {
        const regex = new RegExp(motif, 'i');
        return this.logs.filter(log => regex.test(log.message));
    }

    obtenirTopIPs(limite = 5) {
        const ipCounts = Object.entries(this.stats.parIP)
            .map(([ip, count]) => ({ ip, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, limite);
        return ipCounts;
    }

    genererRapport() {
        console.log(`Total d'entrées: ${this.stats.total}`);
        console.log('Répartition par niveau:');
        for (const [niveau, count] of Object.entries(this.stats.parNiveau)) {
            const pourcentage = ((count / this.stats.total) * 100).toFixed(2);
            console.log(`  ${niveau}: ${count} (${pourcentage}%)`);
        }
        console.log('Top 5 des adresses IP:');
        const topIPs = this.obtenirTopIPs(5);
        topIPs.forEach(({ ip, count }) => {
            console.log(`  ${ip}: ${count}`);
        });
        console.log('Dernières erreurs:');
        this.stats.erreurs.slice(-5).forEach(err => {
            console.log(`  [${err.timestamp.toISOString()}] ${err.ip} - ${err.message}`);
        });
    }
}

const analyseur = new AnalyseurLogs();

const logs = `
[2024-01-15 10:30:45] [INFO] [192.168.1.100] Connexion établie
[2024-01-15 10:31:00] [ERROR] [192.168.1.101] Échec de la connexion
[2024-01-15 10:32:15] [INFO] [192.168.1.100] Déconnexion
[2024-01-15 10:33:30] [ERROR] [192.168.1.102] Erreur de serveur
[2024-01-15 10:34:45] [INFO] [192.168.1.100] Connexion établie
`;

analyseur.analyserFichier(logs);
analyseur.genererRapport();

const erreurs = analyseur.filtrerParNiveau('ERROR');
console.log('Erreurs:', erreurs);

const ip100 = analyseur.filtrerParIP('192.168.1.100');
console.log('Logs pour 192.168.1.100:', ip100); 

const connexions = analyseur.rechercherMotif('connexion');
console.log('Logs mentionnant "connexion":', connexions);

const topIPs = analyseur.obtenirTopIPs(3);
console.log('Top 3 des IPs:', topIPs);