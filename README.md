# Interrogation Angular

Une fois votre devoir terminer, envoyer le moi par mail à l'adresse : ange.picard@pm.me.

**PENSEZ BIEN A SUPRRIMER LE DOSSIER .git ET node_modules**

> Pas la peine de faire de CSS, uniquement l'aspect fonctionnel sera pris en compte.

## Informations

Nom: DENOT
Prenom: Émilien

## Question ouvertes

Merci de répondre avec vos mots, même s'ils sont inexactes, je veux voir que vous avez compris, pas que vous savez faire un copier-coller.

### Qu'est qu'Angular et quel est son intérêt ?

```
Angular est un framework MVC Javascript, fait par google , il permet de faire des applications web en single page, personelement le meilleur intérêt que j'ai trouvé à Angular c'est les modification instentané dans les vues.. j'ai trouvé ça très pratique et grave bien...
```

### Qu'est-ce-qu'un composant

```
Un composant c'est comme un découpage de la vue... par exemple dans une vue il va y avoir differents "parties" comme une liste un menu un boutton déroulant...
```

### Comment est découpé un composant dans Angular ?

```
En template avec le html css js, en attribue avec  
```

### Pourquoi vaut-il mieux faire de petit composant ?

```
ça permet de découper, de mieux comprendre, re-utiliser, le code de pouvoir gérer son code en petit bouts, c'est aussi très pratique pour réutiliser du code deja existant
```

### A quoi sert un service ?

```
Un service permet la communication entre composants pour echanger des infos
```

### Qu'est-ce-qu'un observable, et quel est son intérêt ?

```
Un observable permet de 
```

## Exercice 1

- Créer un nouveau projet Angular
- Dans le AppComponent
    - Ajouter un input
    - Ajouter un span
    - Faire en sorte que quand l'utilisateur entre du contenu dans l'input, il soit également écrit dans le span. On voit la même chose dans le span et dans l'input.
    - Ajouter un bouton permettant de vider le contenu de l'input et du span
- Créer un composant ListComponent
    - L'ajouter dans le template du AppComponent
    - Afficher la liste qui suit dans ListComponent
        - ['Jean', 'Jacques', 'Martin']
- Ajouter un bouton "CACHER" dans le AppComponent
    - A chaque click, cacher ou afficher ListComponent

## Exercice 2

Cette partie de l'interrogation porte sur le projet PokeAdopt.

Pour l'instant l'application n'affiche que la première page de la liste de pokemon l'API.

- Ajouter un bouton précédent et suivant en haut de la liste
- Quand on clique sur précédent ou suivant, afficher la page précédente ou suivante de l'API
- Bonus: Griser le bouton précédent s'il n'y a pas de page précédente
- Bonus: Afficher le numéro de page entre les deux boutons (Page 1 / XXX)
