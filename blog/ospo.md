---
slug: programme
title: Le programme
description: Code commun, c'est entre une fabrique à communs et un OSPO. Ça veut dire quoi tout ça ?
sidebar_position: 3
tags: [ licence libre, coopérative, économie sociale et solidaire, commun numérique]
image: /img/CCC-charte-social-card.jpg
draft: true
---

:::info
Code commun, c'est entre une fabrique communautaire et un OSPO. Ça veut dire quoi tout ça ?
:::

OSPO pour Open Source Program Office, ou comment faire un projet open source réussi ?

Nous ne voyons loin que sur les épaules des géants, allons emprunter et synthétiser une partie du verbe de :

- Sébastien Dinot dans sa conférence : [Bien gérer son projet libre : que faire au-delà du code ? - Libre à lire !](https://www.librealire.org/bien-gerer-son-projet-libre-que-faire-au-dela-du-code) 

- Matti Schneider dans son Livre Blanc : [Construire des communs numériques](https://communs.mattischneider.fr/) 

Merci beaucoup à eux !

Nous publions ici un résumé en mode pense-bête. J'avoue prendre du plaisir à le relire régulièrement et parfois à le modifier suivant nos expériences. La coopérative Code Commun emprunte cette direction et prend ce programme comme un guide, non pas comme un dogme. 

Le chemin est long, mais la voie est libre !

---

## Construire sur les besoins

Autrement dit : comprendre les attentes des utilisateur.ices, récolter des informations sur le terrain, construire main dans la main avec celles et ceux qui se servent de l'outil, et c'est encore mieux si on s'en sert soi même !

L'idée principale est de passer de l'usage à la contribution :

- **Le logiciel doit répondre à un besoin**, et non pas à une idée, même [révolutionnaire](https://ficd.sh/blog/your-project-sucks/) :D

- **Il doit être simple à mettre en œuvre.** Si l’installation prend 3 heures et qu'il est mal documenté, vous perdez tout le monde en chemin.

- **Penser ergonomie, [robustesse](https://www.youtube.com/watch?v=SjE696nfbr0) et simplicité.** On s'en fiche que ta stack soit la dernière techno à la mode. Il faut que ça tienne dans le temps et que tout le monde puisse ouvrir le capot pour réparer. Pitié, pas d'intefaces [à la Soyouz](https://fr.wikipedia.org/wiki/Soyouz_(v%C3%A9hicule_spatial)#/media/Fichier:Jsc2006e33951.jpg) !

- **Une vraie documentation.** Ne jamais répondre : *« Lis le code, tu comprendras. »* Un projet non documenté, c’est un projet inutilisable, donc mort. Sur TiBillet, par exemple, on tente de travailler sur une [méthode orienté usage](https://docs.divio.com/documentation-system/) et en [écriture collaborative](https://notes.liiib.re/docs/a65fc672-d634-4f49-bec3-212439df49eb/).

- **Qu’un espace d’échange soit disponible.** Forum, canal Matrix, mailing-list, Ce n’est pas du support client, c’est de la communauté vivante. 

> 📌 **L'outil peut être modeste, mais il doit être clair, documenté et facile à découvrir.**

---

#### Bonnes pratiques :

- Faites une **checklist des attentes utilisateur/contributeur**, cochez ce qui est déjà en place.

- Mettez en place un **guide de contribution clair**, avec des instructions simples dès la première PR.

- Organisez un **onboarding contributeur** (ex. : issues « good first issue », labels pour les nouveaux).

- Gardez en tête la **valeur de la confiance** : la transparence est un investissement, pas une option.

## Faire connaître le commun : la communication externe

L’un des piliers pour faire vivre un projet open source, c’est la visibilité. On a beau avoir un code génial, bien structuré et documenté, si personne ne le sait, personne ne viendra.

**Créez un site vitrine.**  
Un point d’ancrage incontournable pour tout projet. Il permet de centraliser l’information et de servir de référence officielle (présentation du projet, liens vers la documentation, code source, communauté, gouvernance, etc.).

**Communiquez régulièrement.**  
Oui, ça peut sembler pénible, mais c’est essentiel. Les gens ne viennent pas spontanément vérifier les nouveautés de votre projet. À vous d’aller vers eux.

> 💬 « Personne ne se dit "tiens, si j’allais faire un diff sur ce projet pour voir ce qui a changé ces trois derniers mois". »

**Utilisez les bons canaux.**  
Selon votre domaine (bibliothèques, applications, systèmes embarqués, systèmes d'information…), les espaces de communication changent. Ça peut être des réseaux sociaux, des forums techniques, des newsletters métier ou des canaux spécialisés. Identifiez-les, investissez-les.

**Faites des annonces.**  
Pas besoin d’attendre une nouvelle version officielle. Parlez des avancées, des orientations, des décisions techniques, de l’arrivée de nouveaux contributeurs. Montrez que le projet vit et évolue.

**Multipliez les formats.**  
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

- C’est un **objet technique** : ça compile ou ça plante, ça marche ou ça crashe.

- C’est un **objet juridique** : il est publié sous une licence, avec des conditions d’usage, de modification, de redistribution.

Et mal gérer cet aspect, c’est **produire des “chimères juridiques”** : des assemblages de composants incompatibles entre eux, qui créent de vrais risques pour votre projet ou votre entreprise.

#### Adoptez une licence libre ?

Pas de licence = pas d’usage possible.  
Un projet sans licence explicite **n’est pas un projet libre**.

Choisir une licence n’est pas sorcier, mais ce n’est pas anodin, c'est votre **moteur de confiance principal** !

- Utilisez des ressources comme :
  
  - [ChooseALicense.com](https://choosealicense.com/)
  
  - [TLDRLegal](https://tldrlegal.com/)
  
  - [OpenSource.org](https://opensource.org/)


Veillez surtout à la **compatibilité des dépendances**.  
Vous publiez un projet sous licence MIT ? Ne glissez pas dedans un composant sous GPL sans réfléchir. Ce serait créer une incohérence juridique majeure.

---

### 🧾 Gérer les droits patrimoniaux du code

Qui détient les droits sur le code ?  
Sans clarification, la situation est floue. Et le flou est toujours un frein à l’adoption ou à la contribution.

C'est un peu la partie la plus relou. N'hésitez pas à poser des questions à un juriste. Vous aurez aussi plus de détails sur la conférence de Sébastien Dinot : [Bien gérer son projet libre : que faire au-delà du code ? - Libre à lire !](https://www.librealire.org/bien-gerer-son-projet-libre-que-faire-au-dela-du-code) 

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

- 🟢 Très léger administrativement.  
- 🟡 Moins solide juridiquement que les CLA.  
- 🔁 Mais comme c’est **fait à chaque commit**, cela crée un engagement renouvelé, automatique, fluide.

---

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

Sébastien Dinot raconte que dans la communauté **Orekit**, une petite pratique s’est installée naturellement :  
Quand quelqu’un **en demande trop**, qu’il **attend qu’on code à sa place**, les réponses… mettent un peu plus de temps à arriver ⏳.

Évitez les conflits et les recadrages publics. Juste un petit signal : « Bouge-toi un peu ».  
💡 Et ça marche. Les gens font plus d’efforts, reviennent avec de meilleures questions.  
✅ Résultat : on **évite les tensions** et on **préserve l’ambiance générale**.

---

### 🧑‍🔧 Un bon support vaut de l’or

Une communauté engagée et disponible peut offrir un meilleur support que beaucoup de SAV traditionnels.  
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

- [Minimum Viable Governance](https://github.com/github/MVG) (une base minimaliste)

- [Governing Open Source Projects](https://governingopen.com/) (plein de pistes à explorer)

Chez nous, dans la Coopérative Code Commun, on aime [les budgets contributifs](https://movilab.org/wiki/Coremuneration_et_budget_contributif) et la prise de [décision par consentement.](https://movilab.org/wiki/Consentement_contre_consensus) Si vous voulez, on vous en parle avec plaisir !

---

### 📏 Adoptez un code de conduite

Même si tout se passe bien, même si votre communauté est composée de Bisounours 🧸…  
Le **jour où une personne toxique arrive**, vous serez bien content d’avoir un **code de conduite**.

📋 C’est lui qui vous permettra de dire :

> “Ce comportement n’est pas acceptable **selon nos règles**.”

✅ Pas d’arbitraire. ✅ Pas de malentendu. ✅ Et une communauté protégée.

---

## 💸 Étape 5 : Penser le **financement** dès le départ

Oui, votre projet est **libre**.  
Mais non, il n’est pas **gratuit**.  
Et encore moins **autosuffisant par magie** 🧙‍♂️.

Même le plus beau des projets open source a besoin de **ressources**, humaines **et** financières.

### 💰 Le Libre, ça coûte combien ?

Prenons un exemple concret : le projet **TiBillet**.

- **30 années équivalent temps plein** de développement depuis sa création en 2010 ;

- **3 000 € par an** pour les serveurs de prod, test et démonstration, pour la CI, les outils en ligne 🖥️ ;

- Les déplacements dans les lieux et les salons, la rédaction de contrats de travail, de fiches de paye, etc.

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
Ensuite, chaque personne décrit sa contribution (code, animation, documentation, support, etc.).  
Puis tout le monde **vote** sur la **valeur ressentie** de chaque apport, sans marchandiser le temps.

> On ne paie pas les gens à l’heure, on **reconnaît leur utilité** dans l’écosystème.  
> C’est une logique de **coopération** plutôt que de compétition.

---

### 🔁 Résumé : la boucle est bouclée

✅ Le logiciel est libre,  
✅ La communauté est vivante,  
✅ La gouvernance est claire,  
✅ Le cadre légal est posé.

Avec ça, vous ne lancez pas juste un dépôt Git.  

Et ça… c’est précieux ❤️