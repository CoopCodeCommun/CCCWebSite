---
slug: htmx-this-is-the-way
title: HTMX, Une nouvelle vieille méthode pour créer des applications web.
authors: jonas
keywords: [ htmx, hypermedia, hyperscript, django, mvt, python; javascript fatigue, ]
tags: [ htmx, hypermedia, hyperscript, django, mvt, python, javascript fatigue, ]
image: /
description: Htmx vous permet de construire des interfaces utilisateur modernes et puissantes avec des balises simples. Libérez vous de la pression qu'apporte le Javascript partout ; utilisez une approche hypermédia.
draft: true
---

# HOWL : Hypermedia partout !

### TLDR :

Dans la série "Libérez vous de la pression qu'apporte le Javascript partout" (Javascript fatigue is real), ( première partie : [HOWL](/blog/howl/))
abordons ici HTMX. Une nouvelle façon de faire des choses anciennes, et une simplification drastique de votre code
frontend pour réaliser des choses modernes.

### HTMX, c'est quoi ?

[HTMX](https://htmx.org/) vous donne accès à AJAX, aux transitions CSS, aux WebSockets et aux événements envoyés par le
serveur directement
en HTML, à l'aide d'attributs, afin que vous puissiez créer des interfaces utilisateur modernes avec la simplicité et la
puissance de l'hypertexte.

Autrement dit : [HTMX](https://htmx.org/) vous permet de construire des interfaces utilisateur modernes et puissantes
avec des balises simples.

Cette bibliothèque pèse ~10Ko, elle est sans dépendance (c'est-à-dire qu'elle ne nécessite aucun autre
paquetage JavaScript pour fonctionner), et elle est également compatible avec IE11 et permet de réduire la taille et la
complexité de votre code de près
de [67% par rapport à des frameworks comme React](https://htmx.org/essays/a-real-world-react-to-htmx-port/).
