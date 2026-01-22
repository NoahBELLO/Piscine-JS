/* 
Projet - Système de tags
Créez un système complet de gestion de tags pour des articles en utilisant Map et Set.

Consignations
Implémentez une classe SystemeTagsqui permet de :

Gérer des articles avec des tags uniques
Rechercher par tags (mode OR et AND)
Obtenir des statistiques sur les tags
Classe à implémenter
SystemeTags
Méthodes principales :
ajouterArticle(id, titre, contenu, tags): Ajout d'un article avec ses tags
ajouterTag(articleId, tag): Ajout d'un tag à un article existant
retirerTag(articleId, tag): Retirer un tag d'un article
rechercherParTag(tag): Trouve tous les articles ayant un tag spécifique
rechercherParTags(tags, mode): Recherche avec plusieurs tags (mode 'OR' ou 'AND')
obtenirTousLesTags(): Liste tous les tags utilisés
obtenirStatsTags(): Statistiques des tags essayés par fréquence
afficherArticle(id): Affiche les détails d'un article
Structure de données
Utilisez :

Carte pour stocker les articles (clé = id, valeur = objet article)
Set pour les tags de chaque article (unicité garantie)
Map pour l'index inversé (clé = tag, valeur = Set d'IDs d'articles)
Exemples de tests :
const systeme = new SystemeTags();

// Ajouter des articles
systeme.ajouterArticle(
    1,
    "Introduction à JavaScript",
    "JavaScript est un langage de programmation...",
    ['javascript', 'programmation', 'web']
);

systeme.ajouterArticle(
    2,
    "Guide des Promesses",
    "Les promesses permettent de gérer l'asynchrone...",
    ['javascript', 'async', 'promesses']
);

systeme.ajouterArticle(
    3,
    "CSS Grid Layout",
    "Grid est un système de mise en page...",
    ['css', 'web', 'design']
);

// Recherche par tag
systeme.rechercherParTag('javascript')  // Articles 1 et 2

// Recherche avec plusieurs tags (OR)
systeme.rechercherParTags(['javascript', 'css'], 'OR')  // Articles 1, 2 et 3

// Recherche avec plusieurs tags (AND)
systeme.rechercherParTags(['javascript', 'web'], 'AND')  // Article 1 uniquement

// Statistiques
systeme.obtenirStatsTags()
// [
//   { tag: 'javascript', count: 2 },
//   { tag: 'web', count: 2 },
//   { tag: 'programmation', count: 1 },
//   ...
// ]
*/

class SystemeTags {
    constructor() {
        this.articles = new Map(); 
        this.indexTags = new Map();
    }

    ajouterArticle(id, titre, contenu, tags) {
        if (this.articles.has(id)) {
            throw new Error(`Article avec ID ${id} existe déjà.`);
        }
        const tagSet = new Set(tags);
        this.articles.set(id, { titre, contenu, tags: tagSet });

        for (const tag of tagSet) {
            if (!this.indexTags.has(tag)) {
                this.indexTags.set(tag, new Set());
            }
            this.indexTags.get(tag).add(id);
        }
    }

    ajouterTag(articleId, tag) {
        const article = this.articles.get(articleId);
        if (!article) {
            throw new Error(`Article avec ID ${articleId} n'existe pas.`);
        }
        if (!article.tags.has(tag)) {
            article.tags.add(tag);
            if (!this.indexTags.has(tag)) {
                this.indexTags.set(tag, new Set());
            }
            this.indexTags.get(tag).add(articleId);
        }
    }

    retirerTag(articleId, tag) {
        const article = this.articles.get(articleId);
        if (!article || !article.tags.has(tag)) {
            throw new Error(`Tag ${tag} n'existe pas pour l'article ID ${articleId}.`);
        }
        article.tags.delete(tag);
        const tagSet = this.indexTags.get(tag);
        if (tagSet) {
            tagSet.delete(articleId);
            if (tagSet.size === 0) {
                this.indexTags.delete(tag);
            }
        }
    }

    rechercherParTag(tag) {
        const articleIds = this.indexTags.get(tag);
        if (!articleIds) return [];
        return Array.from(articleIds).map(id => this.articles.get(id));
    }

    rechercherParTags(tags, mode = 'OR') {
        const resultIds = new Set();

        if (mode === 'OR') {
            for (const tag of tags) {
                const articleIds = this.indexTags.get(tag);
                if (articleIds) {
                    for (const id of articleIds) {
                        resultIds.add(id);
                    }
                }
            }
        } else if (mode === 'AND') {
            let first = true;
            for (const tag of tags) {
                const articleIds = this.indexTags.get(tag);
                if (!articleIds) return []; 
                if (first) {
                    for (const id of articleIds) {
                        resultIds.add(id);
                    }       
                }
            }
        }

        return Array.from(resultIds).map(id => this.articles.get(id));
    }
    obtenirTousLesTags() {
        return Array.from(this.indexTags.keys());
    }

    obtenirStatsTags() {
        const stats = [];
        for (const [tag, articleIds] of this.indexTags.entries()) {
            stats.push({ tag, count: articleIds.size });
        }
        stats.sort((a, b) => b.count - a.count);
        return stats;
    }

    afficherArticle(id) {
        const article = this.articles.get(id);
        if (!article) {
            throw new Error(`Article avec ID ${id} n'existe pas.`);
        }
        console.log(`ID: ${id}`);
        console.log(`Titre: ${article.titre}`);
        console.log(`Contenu: ${article.contenu}`);
        console.log(`Tags: ${Array.from(article.tags).join(', ')}`);
    }
}

const systeme = new SystemeTags();

systeme.ajouterArticle(
    1,
    "Introduction à JavaScript",
    "JavaScript est un langage de programmation...",
    ['javascript', 'programmation', 'web']
);

systeme.ajouterArticle(
    2,
    "Guide des Promesses",
    "Les promesses permettent de gérer l'asynchrone...",
    ['javascript', 'async', 'promesses']
);

systeme.ajouterArticle(
    3,
    "CSS Grid Layout",
    "Grid est un système de mise en page...",
    ['css', 'web', 'design']
);

console.log(systeme.rechercherParTag('javascript')); 

console.log(systeme.rechercherParTags(['javascript', 'css'], 'OR'));  

console.log(systeme.rechercherParTags(['javascript', 'web'], 'AND'));  

console.log(systeme.obtenirStatsTags());