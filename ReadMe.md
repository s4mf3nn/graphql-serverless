# 🚀 GraphQL-Serverless

GraphQL-Serverless est un boilerplate backend en cours de développement qui permet de déployer rapidement une API GraphQL dans un environnement sans serveur. Le projet utilise les services suivants :

  - [Serverless Framework](https://www.serverless.com/)
  - [AWS Lambda function](https://aws.amazon.com/fr/lambda/)
  - [AWS DynamoDB](https://aws.amazon.com/fr/dynamodb/)
  - [Apollo GraphQL](https://www.apollographql.com/)
  - [API Rest SpaceX](https://docs.spacexdata.com/?version=latest)

### Installation du projet
```
$ mkdir graphql-serverless && cd graphql-serverless
$ git clone https://github.com/s4mf3nn/graphql-serverless.git
$ yarn install
```

### Démarrer une instance DynamoDB locale
```
$ sls dynamodb install
```

### Lancer le serveur
```
$ sls offline start
```

### URL du serveur
```http://localhost:3030/dev/graphql```

### Fonctionnalités

Graphql-Serverless converti l'API Rest de SpaceX en API GraphQL et permet de récupérer des informations sur les Lancements ainsi que les fusées de la compagnie Space X.

Graphql-Serverless sert également une API GraphQL permettant de créer et lister des utilisateurs et leurs followers.

### Exemple de requêtes

```javascript
query {
    getAllUsers {
        id
        name
        email
        gender
    }
}

query {
    getAllUsers {
        gender
        email
        name
        followers {
            name
            email
        }
        following {
            email
            name
        }
    }
}

query {
    getUser(id: "1") {
        name
        email
        followers {
            name
        }
    }
}

mutation {
    createUser(name: "Samir", email: "samir@domain.com", gender: male) { 
        user {
            id
            name
            email
            gender
        }
        token
    }
}

/*** API Rest SpaceX ***/

query {
  getAllLaunches {
    id
    mission
    success
    year
    date
    rocket {
      id
      name
      type
    }
  }
}

query {
  getRocket(id: "falcon9"){
    name
    type
    id
  }
}
```

### Todos
* Filtrer et trier les utilisateurs
* Mettre à jour un utilisateur
* Supprimer un utilisateur
* S'abonner à un utilisateur
* Se désabonner d'un utilisateur

### License
MIT

### Auteur
Samir Fennikh

### Dernière mise à jour
30 juillet 2020
