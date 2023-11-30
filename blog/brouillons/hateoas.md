---
slug: HATEOAS
title: Hypermedia as the Engine of Application State (HATEOAS)
authors: jonas
keywords: [ hateoas, api, json, html, rest, hypermedia, htmx, django ]
tags: [ hateoas, api, json, html, rest, hypermedia, htmx, django ]
image: /img/blog/traefik_docker_letsencrypt.png
description: Traduction de l'article de Carson Gross - https://htmx.org/essays/hateoas/
draft: true
---

## Traduction de l'article de Carson Gross - https://htmx.org/essays/hateoas/

# HATEOAS

Cette page est un remaniement de [l'entrée Wikipedia sur HATEOAS](https://en.wikipedia.org/wiki/HATEOAS), qui utilise
JSON. Ici, nous souhaitons utiliser le HTML afin d'expliquer le concept et le comparer aux API JSON.
Il s'agit d'une explication plus nuancée du concept que celle qui serait appropriée pour Wikipedia, mais elle est plus
correcte à notre avis.

Hypermedia as the Engine of Application State (HATEOAS) est une contrainte de l'architecture d'application REST qui la
distingue des autres architectures d'application en réseau.

Avec HATEOAS, un client interagit avec une application réseau dont les serveurs d'application fournissent des
informations de manière dynamique par le biais d'hypermédias. Un client REST n'a besoin que de peu ou pas de
connaissances préalables sur la manière d'interagir avec une application ou un serveur, au-delà d'une compréhension
générique de l'hypermédia.

En revanche, aujourd'hui, les clients web basés sur JSON interagissent généralement par le biais d'une interface fixe
partagée par le biais d'une documentation via un outil tel que swagger.

Les restrictions imposées par HATEOAS découplent le client et le serveur. Cela permet à la fonctionnalité du serveur
d'évoluer indépendamment.

### Exemple

Un user-agent qui implémente HTTP effectue une requête HTTP auprès d'un point final REST par le biais d'une simple URL.
Toutes les demandes ultérieures que l'agent utilisateur peut faire sont découvertes dans les réponses hypermédia à
chaque demande. Les types de médias utilisés pour ces représentations et les relations de liens qu'ils peuvent contenir
sont normalisés. Le client passe d'un état d'application à l'autre en sélectionnant des liens dans une représentation
hypermédia ou en manipulant la représentation d'une autre manière permise par son type de média.

De cette manière, l'interaction RESTful est pilotée par les hypermédias plutôt que par les informations hors bande.

Un exemple concret permet d'éclaircir ce point. Considérons cette requête GET, émise par un navigateur web, qui récupère
une ressource de compte bancaire :

```
GET /accounts/12345 HTTP/1.1
Hôte : bank.example.com
```
