---
slug: htmx-this-is-the-way
title: HTMX, Une nouvelle vieille méthode pour créer des applications web.
authors: jonas
keywords: [ htmx, hypermedia, hyperscript, django, mvt, python ]
tags: [ htmx, hypermedia, hyperscript, django, mvt, python ]
image: /
description: Htmx vous permet de construire des interfaces utilisateur modernes et puissantes avec des balises simples. Libérez vous de la pression qu'apporte le Javascript partout ; utilisez une approche hypermédia.
draft: true
---

# HOWL : Hypermedia partout !

### TLDR :

Dans la série "Libérez vous de la pression qu'apporte le Javascript partout", ( première partie : [HOWL](/blog/howl/))
abordons ici HTMX.

Htmx est une bibliothèque JavaScript permettant d'effectuer des requêtes AJAX, de déclencher des transitions CSS et
d'invoquer des événements WebSocket et envoyés par le serveur directement à partir d'éléments HTML. Htmx vous permet de
construire des interfaces utilisateur modernes et puissantes avec des balises simples.

Cette bibliothèque pèse ~10Ko (min.gz'd), elle est sans dépendance (c'est-à-dire qu'elle ne nécessite aucun autre
paquetage JavaScript pour fonctionner), et elle est également compatible avec IE11.

Dans ce tutoriel, nous allons explorer les puissantes fonctionnalités de htmx en couvrant les sections suivantes