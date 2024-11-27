Pixel War

Pixel War est une application interactive en temps réel où les utilisateurs peuvent collaborer pour dessiner et effacer des pixels sur une toile partagée, tout en échangeant des messages via un chat intégré. Cette application utilise Node.js, Express, et WebSocket pour offrir une expérience collaborative fluide et réactive.
Fonctionnalités

    🎨 Dessin collaboratif : Créez des pixels en temps réel sur une toile partagée.
    ❌ Effacement de pixels : Supprimez des pixels dessinés.
    💬 Chat en direct : Échangez des messages instantanés avec d'autres utilisateurs.
    🔄 Synchronisation automatique : Tous les utilisateurs connectés voient les mêmes modifications en temps réel.

Prérequis

Avant de commencer, assurez-vous d'avoir :

    Node.js : Version 14 ou supérieure.
    npm : Livré avec Node.js pour gérer les dépendances.
    Navigateur Web : Un navigateur moderne (Chrome, Firefox, etc.).

Installation

    Clonez le dépôt :

git clone https://github.com/Angy41/Pixel-War.git
cd Pixel-War

Installez les dépendances nécessaires :

npm install

Lancez le serveur :

npm start

Accédez à l'application via votre navigateur à l'adresse suivante :

    http://localhost:8080

Dépendances utilisées

    express : Pour gérer les requêtes HTTP et servir les fichiers statiques.
    ws : Pour gérer les connexions WebSocket et permettre la communication en temps réel.

Pour installer manuellement ces dépendances, exécutez la commande suivante :

npm install express ws

Structure du projet

Pixel-War/
│
├── server.js         # Code principal du serveur
├── package.json      # Dépendances et scripts npm
├── public/           # Fichiers statiques pour le client
│   ├── index.html    # Interface utilisateur principale
│   ├── style.css     # Styles pour l'interface
│   └── script.js     # Code WebSocket et interactions client
└── README.md         # Documentation du projet

Fonctionnement

    Connexion utilisateur :
        Lorsqu'un utilisateur ouvre l'application, une connexion WebSocket est établie avec le serveur.
        L'état actuel de la toile est envoyé à l'utilisateur pour synchronisation.

    Dessin et effacement :
        Un utilisateur peut dessiner ou effacer des pixels.
        Ces actions sont transmises à tous les utilisateurs connectés via le serveur WebSocket.

    Chat en direct :
        Les utilisateurs peuvent envoyer des messages dans une boîte de chat.
        Tous les messages sont diffusés instantanément aux autres utilisateurs.

Commandes principales

    Démarrer le serveur :

npm start

Installer les dépendances :

    npm install

Voici le README.md mis à jour avec votre URL de dépôt Git :
Pixel War

Pixel War est une application interactive en temps réel où les utilisateurs peuvent collaborer pour dessiner et effacer des pixels sur une toile partagée, tout en échangeant des messages via un chat intégré. Cette application utilise Node.js, Express, et WebSocket pour offrir une expérience collaborative fluide et réactive.
Fonctionnalités

    🎨 Dessin collaboratif : Créez des pixels en temps réel sur une toile partagée.
    ❌ Effacement de pixels : Supprimez des pixels dessinés.
    💬 Chat en direct : Échangez des messages instantanés avec d'autres utilisateurs.
    🔄 Synchronisation automatique : Tous les utilisateurs connectés voient les mêmes modifications en temps réel.

Prérequis

Avant de commencer, assurez-vous d'avoir :

    Node.js : Version 14 ou supérieure.
    npm : Livré avec Node.js pour gérer les dépendances.
    Navigateur Web : Un navigateur moderne (Chrome, Firefox, etc.).

Installation

    Clonez le dépôt :

git clone https://github.com/Angy41/Pixel-War.git
cd Pixel-War

Installez les dépendances nécessaires :

npm install

Lancez le serveur :

npm start

Accédez à l'application via votre navigateur à l'adresse suivante :

    http://localhost:8080

Dépendances utilisées

    express : Pour gérer les requêtes HTTP et servir les fichiers statiques.
    ws : Pour gérer les connexions WebSocket et permettre la communication en temps réel.

Pour installer manuellement ces dépendances, exécutez la commande suivante :

npm install express ws

Structure du projet

Pixel-War/
│
├── server.js         # Code principal du serveur
├── package.json      # Dépendances et scripts npm
├── public/           # Fichiers statiques pour le client
│   ├── index.html    # Interface utilisateur principale
│   ├── style.css     # Styles pour l'interface
│   └── script.js     # Code WebSocket et interactions client
└── README.md         # Documentation du projet

Fonctionnement

    Connexion utilisateur :
        Lorsqu'un utilisateur ouvre l'application, une connexion WebSocket est établie avec le serveur.
        L'état actuel de la toile est envoyé à l'utilisateur pour synchronisation.

    Dessin et effacement :
        Un utilisateur peut dessiner ou effacer des pixels.
        Ces actions sont transmises à tous les utilisateurs connectés via le serveur WebSocket.

    Chat en direct :
        Les utilisateurs peuvent envoyer des messages dans une boîte de chat.
        Tous les messages sont diffusés instantanément aux autres utilisateurs.

Commandes principales

    Démarrer le serveur :

npm start

Installer les dépendances :

    npm install

Améliorations possibles

    Authentification : Permettre à chaque utilisateur de se connecter avec un nom ou un avatar.
    Sauvegarde des données : Stocker l'état de la toile dans une base de données pour la persistance.
    Gestion des commandes de chat : Ajouter des commandes spécifiques (ex. /clear pour réinitialiser la toile).

Exemple pour commencer :

git clone https://github.com/Angy41/Pixel-War.git
cd Pixel-War
npm install
npm start

Accédez ensuite à l'URL suivante dans votre navigateur : http://localhost:8080.
