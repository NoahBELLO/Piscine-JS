# Comparer Node.js et le Navigateur Web
# Objectif général
# Comprendre les différences fondamentales entre :
- Node.js (environnement d’exécution côté serveur)
- le navigateur web (environnement d’exécution côté client)

# Rappel (à lire avant l’exercice)
JavaScript peut s’exécuter :
- dans le navigateur (côté client)
- dans Node.js (côté serveur)
Même langage, environnements différents.

# Consignes générales
Pour chaque tableau :
- Complétez les cases en indiquant où la fonctionnalité est disponible
- Utilisez ✔ / ✖ ou des phrases courtes
- Justifiez au moins une réponse par tableau

# Tableau 1 – Environnement d’exécution
Énoncé :
Indiquez les caractéristiques propres à Node.js, au navigateur, ou aux deux.

|Critère	                  |Node.js	     | Navigateur   |
|-----------------------------|:------------:|:------------:|
|Exécute JavaScript           |		 ✔      |       ✔       |
|Côté serveur                 |		 ✔        |     ✖         |
|Côté client	              |	     ✖        |       ✔       |
|Accès au DOM		          |      ✖        |       ✔       | 
|Accès au système de fichiers |	     ✔        |      ✖        |
|Accès au réseau bas niveau	  |	     ✔        |     ✖         |

# Tableau 2 – APIs disponibles
Énoncé : Indiquez quelles APIs sont disponibles dans chaque environnement.

|API / Fonctionnalité	      |Node.js	     |Navigateur   | 
-----------------------------|:------------:|:------------:|
|DOM		                 |       ✖       |     ✔         |
|fs (file system)		     |       ✔       |      ✖        |
|http		                 |       ✔       |      ✖        |
|fetch		                 |       ✔       |      ✔        |
|localStorage		         |      ✖        |      ✔        |
|process		             |      ✔        |      ✖        |

# Tableau 3 – Sécurité et contraintes
Énoncé : Comparez les contraintes de sécurité.

|Critère	                  |Node.js	     |Navigateur    |
|-----------------------------|:------------:|:------------:|
|Accès disque libre	          |	     ✔        |      ✖        |
|Sandbox de sécurité		  |	      ✖       |       ✔       |
|Accès matériel		          |	     ✔        |      ✖        |
|Isolation du code		      |	     ✖        |       ✔       |

# Tableau 4 – Cas d’usage
Énoncé : Associez chaque cas d’usage à l’environnement le plus adapté.

|Cas d’usage	              |Node.js	     |Navigateur    |
|-----------------------------|:------------:|:------------:|
|API backend		          |	     ✔        |      ✖        |
|Interface utilisateur		  |	     ✖       |      ✔        |
|Traitement de fichiers		  |	     ✔        |      ✖        |
|Validation de formulaire	  |	     ✖        |       ✔       |	
|Temps réel (WebSocket)		  |	     ✔        |      ✔        |

# Tableau 5 – Performance et exécution
Énoncé :Comparez le comportement à l’exécution.

|Critère	                  |Node.js	     |Navigateur    |
|-----------------------------|:------------:|:------------:|
|Event Loop		              |	     ✔        |      ✔        |
|Multithreading		          |	     ✔        |      ✔        |
|Longs calculs		          |	     ✔        |      ✖        |
|Interaction utilisateur	  |	     ✖        |      ✔        |

# Question de synthèse (obligatoire)
Expliquez en 5 lignes maximum : Pourquoi JavaScript se comporte-t-il différemment dans Node.js et dans le navigateur ?

- Réponse : JavaScript se comporte différemment dans Node.js et dans le navigateur car il s’exécute dans des environnements aux objectifs distincts.
Le navigateur est conçu pour interagir avec l’utilisateur tout en garantissant une forte sécurité.
Node.js est conçu pour le serveur, avec un accès complet au système et au réseau.
Ainsi, les APIs disponibles et les responsabilités ne sont pas les mêmes.

# Phrase de conclusion attendue
“Node.js et le navigateur utilisent JavaScript, mais n’offrent pas les mêmes capacités ni les mêmes responsabilités.”