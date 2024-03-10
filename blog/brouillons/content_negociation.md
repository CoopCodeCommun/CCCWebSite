---
slug: hypermedia-content-negociation
title: Pourquoi j'ai tendance à ne pas utiliser Content Negotiation (négociation de contenu)
authors: jonas
keywords: [ hateoas, api, json, html, rest, hypermedia, htmx, django ]
tags: [ hateoas, api, json, html, rest, hypermedia, htmx, django ]
image: /img/blog/traefik_docker_letsencrypt.png
description: Cache, vary, content negotiation, django, htmx, cloudflare
draft: true
---

Source :
https://simonwillison.net/2023/Nov/20/cloudflare-does-not-consider-vary-values-in-caching-decisions/
https://docs.djangoproject.com/fr/4.2/topics/conditional-view-processing/
https://docs.djangoproject.com/fr/4.2/topics/cache/

:::tip
Traduction de https://htmx.org/essays/why-tend-not-to-use-content-negotiation/
:::

J'ai beaucoup écrit sur les API hypermédia et les API de données (JSON), notamment sur les différences entre les deux,
sur ce que REST signifie "réellement" et sur les raisons pour lesquelles HATEOAS n'est pas si mal tant que votre API
interagit avec un client hypermédia.

Souvent, lorsque je discute avec des personnes qui viennent du monde "REST est JSON sur HTTP" (c'est-à-dire le monde
normal), je dois faire face à de nombreux problèmes linguistiques et conceptuels :

- Non, je ne préconise pas le retour du HTML en tant qu'API à usage général, l'hypermédia est une mauvaise API à usage général.
- Oui, je préconise un couplage étroit entre votre application web et votre API hypermédia.
- Non, je ne pense pas que nous pourrons un jour corriger la façon dont l'industrie utilise le terme REST.
- Oui, je préconise de séparer votre API de données et votre API hypermédia

Le dernier point est souvent considéré comme stupide par les personnes habituées à une API JSON unique et généraliste :
pourquoi avoir deux API alors qu'il est possible d'en avoir une seule qui peut satisfaire n'importe quel type de
client ? J'ai essayé de répondre à cette question du mieux que j'ai pu dans l'essai ci-dessus, mais il est certainement
raisonnable de se la poser.

Il semble (et c'est le cas) qu'il y ait un surcroît de travail par rapport à une API générale.

À ce stade de la conversation, quelqu'un qui est globalement d'accord avec mon point de vue sur REST, les applications
hypermédias, etc.

    "Oh, c'est facile, il suffit d'utiliser la négociation de contenu, c'est intégré dans HTTP !"

Ne me contentant pas d'aliéner seulement les enthousiastes de l'API JSON à usage général, permettez-moi maintenant
d'aliéner également mes anciens alliés enthousiastes de l'hypermédia en disant : "J'ai besoin d'une API JSON à usage
général :

Je ne pense pas que la négociation de contenu soit typiquement la bonne approche pour renvoyer à la fois du JSON et du
HTML pour la plupart des applications.
