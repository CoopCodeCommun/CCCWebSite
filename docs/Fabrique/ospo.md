---
slug: ospo
title: Le programme
description: Un OSPO, c'est quoi ?
sidebar_position: 2
tags: [ licence libre, coopérative, économie sociale et solidaire, commun numérique]
image: /img/CCC-charte-social-card.jpg
---


# :rocket: Le programme. C'est quoi un OSPO ?

OSPO : Open source program office

Ici, nous allons emprunter et synthétiser une partie du verbe de Sébastien Dinot dans sa conférence : [Bien gérer son projet libre : que faire au-delà du code ? - Libre à lire !](https://www.librealire.org/bien-gerer-son-projet-libre-que-faire-au-dela-du-code)

---

## 🔍 Étape 1 – Construire sur les besoins

Autrement dit : Comprendre les attentes des utilisateurs et des contributeurs
Avant de vouloir attirer le monde vers votre projet, demandez-vous : **"Pourquoi viendraient-ils ?"**  
Spoiler : ce ne sera jamais « pour vos beaux yeux », mais parce que **le projet répond à un besoin réel**, et qu’il est **accessible et agréable à utiliser ou à contribuer**.

#### 👥 Côté utilisateurs : proposez un outil utile, utilisable et utilisé

Un utilisateur potentiel a des attentes simples, mais non négociables :

- ✅ **Que le logiciel réponde à un vrai besoin**, pas seulement au vôtre. Pensez comme vos utilisateurs : ce qu’ils attendent peut être très différent de vos propres cas d’usage.
  
- ✅ **Qu’il soit simple à mettre en œuvre.** Si l’installation prend 3 heures (ou pire : 18), vous perdez tout le monde en chemin.
  
- ✅ **Qu’il soit ergonomique, robuste et fiable.** Ce sont les bases d’un logiciel professionnel ou utilisé en production.
  
- ✅ **Qu’il y ait une vraie documentation.** Ne répondez jamais : *« Lis le code, tu comprendras. »* Un projet non documenté, c’est un projet inutilisable, donc mort.
  
- ✅ **Qu’un espace d’échange soit disponible.** Forum, canal Matrix, mailing-list, GitHub Discussions… Ce n’est pas du support client, c’est de la communauté vivante.
  

> 📌 **Votre outil peut être modeste, mais il doit être clair, documenté et facile à découvrir.**

---

#### 🤝 Côté contributeurs : ouvrez, simplifiez, faites confiance

Un contributeur ne demande pas l’impossible. Il veut pouvoir :

- ✅ **Accéder au dépôt en continu.** Oubliez le “libre en interne” où l’on publie un `.tar.gz` tous les six mois. Un projet vivant est un projet avec un dépôt public, actif, accessible en permanence.
  
- ✅ **Lire une documentation technique claire.** Les contributeurs ne sont pas devins. Expliquez l’architecture, les principes, les processus de contribution.
  
- ✅ **Utiliser des outils de collaboration modernes.** Git, CI/CD, système d’issues clair, etc. Montrez que vous accueillez les contributions avec soin.
  
- ✅ **Trouver du code propre et bien conçu.** Personne ne veut déboguer un plat de spaghettis.
  
- ✅ **Se sentir en confiance.** Transparence, bienveillance, communication ouverte : voilà les vraies bases d’un collectif contributif.
  

> 💡 **Demandez-vous toujours : dans ce projet, est-ce que *vous-même* auriez envie de contribuer ?**

---

#### 🛠️ Bonnes pratiques OSPO :

- Faites une **checklist des attentes utilisateur/contributeur**, cochez ce qui est déjà en place.
  
- Mettez en place un **guide de contribution clair**, avec des instructions simples dès la première PR.
  
- Organisez un **onboarding contributeur** (ex. : issues « good first issue », labels pour les nouveaux).
  
- Gardez en tête la **valeur de la confiance** : la transparence est un investissement, pas une option.
  

## 🧭 Étape 2 – Faire connaître votre projet libre : la communication externe

L’un des piliers pour faire vivre un projet open source, c’est **la visibilité**. On a beau avoir un code génial, bien structuré et documenté, **si personne ne le sait, personne ne viendra**.

#### 🎯 Objectif : rendre votre projet identifiable et vivant

**✅ Créez un site vitrine.**  
Un point d’ancrage incontournable pour tout projet. Il permet de centraliser l’information et de servir de référence officielle (présentation du projet, liens vers la documentation, code source, communauté, gouvernance, etc.).

**✅ Communiquez régulièrement.**  
Oui, ça peut sembler pénible, mais c’est essentiel. Les gens ne viennent pas spontanément vérifier les nouveautés de votre projet. À vous d’aller vers eux.

> 💬 « Personne ne se dit "tiens, si j’allais faire un diff sur ce projet pour voir ce qui a changé ces trois derniers mois". »

**✅ Utilisez les bons canaux.**  
Selon votre domaine (librairies, applications, systèmes embarqués, systèmes d'information…), les espaces de communication changent. Ça peut être des réseaux sociaux, des forums techniques, des newsletters métier ou des canaux spécialisés. Identifiez-les, investissez-les.

**✅ Faites des annonces.**  
Pas besoin d’attendre une nouvelle version officielle. Parlez des avancées, des orientations, des décisions techniques, de l’arrivée de nouveaux contributeurs. Montrez que le projet vit et évolue.

**✅ Multipliez les formats.**  
Interventions en conférence, articles de blog, interviews, podcasts : diversifiez vos moyens de communication. Chaque format touche une audience différente.

#### 🛠️ Bonnes pratiques OSPO :

- Maintenez un **calendrier de communication** (même léger).
  
- Équipez les développeurs pour qu’ils puissent eux aussi relayer l’info.
  
- Valorisez les contributeurs et les nouveautés du projet.
  
- Ouvrez un canal dédié pour recueillir des retours (mail, formulaire, GitHub Discussions…).
  

> 📌 **Rappelez-vous : soyez proactifs, pas passifs.** Vous ne « spammez » pas, vous **rendez visible un commun vivant**.

---

## ⚖️ Étape 3 – S’occuper (vraiment) des aspects juridiques

Oui, ce n’est pas la partie la plus fun du métier.  
Mais le **logiciel libre**, aussi technique soit-il, est **un objet juridique**. Et faire l’impasse là-dessus, c’est jouer avec le feu – pour vous, votre organisation, ou vos utilisateurs.

#### 📜 Le logiciel libre, un objet *techno-juridique*

Chaque fois que vous touchez à du code, vous touchez à quelque chose qui **a une double nature** :

- C’est un **objet technique** : ça compile ou ça plante, ça marche ou ça crash.
  
- C’est un **objet juridique** : il est publié sous une licence, avec des conditions d’usage, de modification, de redistribution.
  

Et mal gérer cet aspect, c’est **produire des “chimères juridiques”** : des assemblages de composants incompatibles entre eux, qui créent de vrais risques pour votre projet ou votre entreprise.

---

### ✅ Adopter une licence libre… correctement

Pas de licence = pas d’usage possible.  
Un projet sans licence explicite **n’est pas un projet libre**.

Choisir une licence n’est pas sorcier, mais ce n’est pas anodin :

- Utilisez des ressources comme :
  
  - [ChooseALicense.com](https://choosealicense.com/)
    
  - [TLDRLegal](https://tldrlegal.com/)
    
  - OpenSource.org
    
- **N’écrivez jamais votre propre licence !**
  
  - Une licence maison est un repoussoir.
    
  - Elle est souvent incompatible, incomprise, et inutilisable par d'autres.
    
  - Utilisez des licences **reconnues** (MIT, Apache 2.0, GPLv3, etc.)
    

Et surtout, **veillez à la compatibilité des dépendances**.  
Vous publiez un projet sous licence MIT ? Ne glissez pas dedans un composant sous GPL sans réfléchir. Ce serait créer une incohérence juridique majeure.

---

### 🧾 Gérer les droits patrimoniaux du code

Qui détient les droits sur le code ?  
Sans clarification, la situation est floue. Et le flou est toujours un frein à l’adoption ou à la contribution.

Trois stratégies principales existent :

---

#### 1. 📩 **Le transfert de copyright (copyright assignment)**

Le contributeur transfère ses droits patrimoniaux au porteur du projet.

- ✅ Permet une gestion centralisée, plus simple sur le long terme.
  
- ❌ Très clivant : peu de gens acceptent de “donner” leur code.
  
- ⚠️ À éviter, sauf cas très particuliers (FSF, projets à forte gouvernance juridique).
  

---

#### 2. 📄 **Les accords de contribution (CLA)**

Le contributeur conserve ses droits, mais **autorise l’utilisation du code** dans le cadre du projet, sous une licence donnée.

Deux formes :

- **ICLA** : pour les contributeurs individuels.
  
- **CCLA** : pour les contributions faites dans le cadre d’un emploi.
  

👍 Bien sécurisé juridiquement.  
👎 Lourdeur administrative, lenteur, risque d’oubli (ex : changement d’employeur non signalé).

Certains projets, comme Eclipse, imposent un renouvellement tous les 3 ans. Cela réduit le risque, mais alourdit encore le processus.

---

#### 3. ✍️ **Le DCO – Developer Certificate of Origin**

C’est la méthode **la plus simple**, utilisée notamment par la Linux Foundation, GitLab, Red Hat, etc.

- Le contributeur certifie, à chaque commit, qu’il est en droit de soumettre le code.
  
- Cela se fait via l’option `-s` dans Git (`git commit -s`), qui ajoute automatiquement un champ `Signed-off-by`.
  

🟢 Très léger administrativement.  
🟡 Moins solide juridiquement que les CLA.  
🔁 Mais comme c’est **fait à chaque commit**, cela crée un engagement renouvelé, automatique, fluide.

---

### ⚙️ Bonnes pratiques OSPO côté juridique

- 📌 **Affichez clairement la licence** du projet (dans le dépôt, la doc, le site…).
  
- 🔎 **Vérifiez les licences des dépendances**, et assurez leur compatibilité.
  
- 📂 Proposez un **modèle de DCO ou CLA prêt à l’usage**, selon le choix de votre projet.
  
- 💬 Expliquez votre choix dans la documentation : cela instaure la confiance.
  
- 🛑 N’acceptez **aucune contribution “sauvage”** sans validation juridique.
  

## 🌱 Étape 4 : Animer une communauté vivante : le cœur du logiciel libre

Le logiciel libre, ce n’est pas juste du code et des licences. C’est d’abord une aventure humaine 🤝.  
Alors que faire, sur le plan social, pour que votre projet décolle vraiment ?  
👉 En un mot : **cultivez votre communauté**.

---

### 💬 L'humain avant tout

Dans le Libre, on écrit du code, oui… mais **on s’adresse surtout à des gens**.  
Et pour que ces gens restent, s’impliquent, s’engagent, il faut **de la bienveillance, de la considération**.

🪞 Mettez-vous à la place des autres. Si quelqu’un vous parle sèchement, vous partez. C’est pareil pour les autres.  
Même si c’est le troisième débutant de la semaine, tant qu’il n’abuse pas, restez patient. Vous avez peut-être été ce débutant un jour.

---

### 🧘 Gérer les abus… en douceur

Dans la communauté **Orekit**, une petite pratique s’est installée naturellement :  
Quand quelqu’un **en demande trop**, qu’il **attend qu’on code à sa place**, les réponses… mettent un peu plus de temps à arriver ⏳.

Pas de conflit, pas de recadrage public. Juste un petit signal : « Bouge-toi un peu ».  
💡 Et ça marche. Les gens font plus d’efforts, reviennent avec de meilleures questions.  
✅ Résultat : on **évite les tensions** et on **préserve l’ambiance générale**.

---

### 🧑‍🔧 Un bon support vaut de l’or

Quand **Airbus Defence and Space** a annoncé publiquement qu’ils utilisaient Orekit, ils ont souligné un point étonnant :

> “Le support communautaire est meilleur que celui d’éditeurs propriétaires qu’on paie très cher.”

💥 Boom. Voilà ce qu’une communauté engagée et disponible peut offrir.  
Un bon support, c’est de **l’accueil**, de **l’échange**, de **la confiance**. Et ça attire de nouveaux contributeurs.

---

### 🧭 Posez un cadre clair : la gouvernance

Pas de communauté pérenne sans **règles du jeu** claires. C’est là qu’intervient la **gouvernance**.

📜 C’est un peu la **constitution** de votre projet :

- Où on va 🚀 ;
  
- Comment on prend les décisions 🗳️ ;
  
- Qui fait quoi 🧑‍💼.
  

👉 Publier ce cadre, c’est :

- Gagner en **transparence** ;
  
- Créer de la **confiance** ;
  
- Permettre à chacun de **s’engager en conscience**.
  

🛑 Attention cependant : ne sacralisez pas tout.  
Exemple : Orekit mentionne encore les *patchs par mail* dans sa gouvernance… alors que plus personne ne fait ça depuis longtemps.  
Moralité : ne mettez que ce qui doit vraiment être gravé dans le marbre.  
📝 Le reste (guide de contribution, workflows…) doit rester souple et évolutif.

---

### 🏛️ Quel modèle de gouvernance choisir ?

Il en existe plusieurs, chacun avec ses avantages et ses pièges.

1. **Le dictateur bienveillant à vie (BDFL)** 👑  
  → Rapide, efficace, mais étouffe la participation. Gare au fork…
  
2. **La méritocratie** 🏅  
  → Le mérite passé donne le pouvoir. Problème : les anciens sont parfois écoutés *même quand ils ne font plus rien*, au détriment des nouveaux actifs.  
  ⚠️ Attention à l’effet « caste ».
  
3. **La démocratie** 🗳️  
  → Pouvoir tournant, basé sur des élections. Plus juste, mais plus complexe à organiser.
  
4. **La do-ocratie** 🛠️  
  → Ceux qui font ont raison. Souple, mais parfois floue. Le consensus est parfois trop… mou.
  

💡 Besoin d’aide pour choisir ?  
Regardez du côté de :

- [Minimum Viable Governance](https://github.com/hyphacoop/handbook/blob/main/docs/Governance.md) (une base minimaliste)
  
- [Governing Open Source Projects](https://github.com/oss-wg/governance) (plein de pistes à explorer)
  

---

### 📏 Adoptez un code de conduite

Même si tout se passe bien, même si votre communauté est composée de Bisounours 🧸…  
Le **jour où une personne toxique arrive**, vous serez bien content d’avoir un **code de conduite**.

📋 C’est lui qui vous permettra de dire :

> “Ce comportement n’est pas acceptable **selon nos règles**.”

✅ Pas d’arbitraire. ✅ Pas de malentendu. ✅ Et une communauté protégée.

---

## ✅ En résumé

🧠 Un bon cadre social, c’est :

- De la bienveillance dès le départ ;
  
- Une régulation douce des abus ;
  
- Un support communautaire de qualité ;
  
- Une gouvernance claire, souple et adaptée ;
  
- Un code de conduite explicite, pour éviter les dérapages.
  

💬 Vous avez du code ? Très bien.  
Mais si vous avez aussi **une communauté qui se sent bien**, alors vous avez **un projet qui peut durer**. 🌟

## 💸 Étape 5 : Penser le **financement** dès le départ

Oui, votre projet est **libre**.  
Mais non, il n’est pas **gratuit**.  
Et encore moins **auto-suffisant par magie** 🧙‍♂️.

Même le plus beau des projets open source a besoin de **ressources**, humaines **et** financières.

---

### 💰 Le Libre, ça coûte combien ?

Prenons un exemple concret : le projet **TiBillet**.

- **42 années-homme** de développement pour CS Group 👷‍♂️ ;
  
- **2 550 € par an** pour les serveurs, la CI, les outils en ligne 🖥️ ;
  
- Les **Orekit Days** ? Chaque édition coûte plusieurs **dizaines de milliers d’euros** 🎤 ;
  
- Les **plateformes SaaS** ? C’est *gratuit… jusqu’à ce que ça explose* 🚀.  
  Et là, ça peut devenir très très cher.
  

👉 Bref, derrière chaque commit, chaque réponse sur un forum, chaque release… il y a du **travail**, du **temps**, des **infrastructures**, et donc un **coût**.

---

### 👥 Des contributions… humaines

Tout n’est pas qu’une question d’euros 💶. On peut aussi **contribuer autrement** :

- 🏢 En mettant à disposition une salle pour un événement ;
  
- 🧑‍🏫 En organisant un atelier ou une présentation de l'outil à son réseau ;
  
- 🧑‍💻 En offrant des heures de développement ou de maintenance ;
  
- ⚙️ En prêtant des machines, de la bande passante, de l’énergie.
  

Ce genre de **mécénat en nature** est précieux — et souvent sous-estimé.

---

### 🧑‍🌾 Un exemple inspirant : la co-rémunération

Si vous cherchez une **approche alternative du financement**, regardez du côté des **communs contributifs** et de la **co-rémunération**.  
C’est ce que nous expérimentons dans notre coopérative.

📚 Pour creuser, deux ressources clés :

- 🧾 Le [wiki de la co-rémunération sur Movilab](https://movilab.org/wiki/Coremuneration) ;
  
- 🧭 Le [processus participatif de TiBillet sur Framavox](https://framavox.org/d/XbPF0qAI/processus-de-cor-mun-ration-r-gles-de-budget-contributif).
  

💡 Le principe ?  
On définit collectivement un **budget contributif**.  
Ensuite, chaque personne décrit sa contribution (code, animation, documentation, support, etc.)  
Puis tout le monde **vote** sur la **valeur ressentie** de chaque apport, sans marchandiser le temps.

> On ne paie pas les gens à l’heure, on **reconnaît leur utilité** dans l’écosystème.  
> C’est une logique de **coopération** plutôt que de compétition 💚.

---

### 🔁 Résumé : la boucle est bouclée

✅ Le logiciel est libre,  
✅ La communauté est vivante,  
✅ La gouvernance est claire,  
✅ Le cadre légal est posé,  
Mais sans **financement**, tout ça s’essouffle…

---

## 🧭 En résumé : construire un projet libre, c’est…

1. **Choisir une licence libre** ⚖️
  
2. **Ouvrir le code, les pratiques et les intentions** 🔓
  
3. **Partager les décisions avec une gouvernance claire** 🏛️
  
4. **Accueillir les humains avec bienveillance** 🫂
  
5. **Organiser les moyens humains et financiers** 💰
  

---

Avec ça, vous ne lancez pas juste un dépôt Git.  
🚀 Vous créez **un commun numérique durable**.

Et ça… c’est précieux ❤️

---