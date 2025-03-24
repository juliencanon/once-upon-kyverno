
<!-- .slide: class="transition-bg-sfeir-1" -->
# Conformité k8s avec Kyverno
## Un outil de la CNCF qui a le vent en poupe !

##==##
<!-- .slide: class="transition-bg-sfeir-1" -->
# Il était une fois Kyverno

Notes:
Question : Qui utilise Kubernetes ? <BR>
Question : Qui a déjà entendu parlé de Kyverno ?

##==##
<!-- .slide: data-background="./assets/kubernetes/iletaitunefois.png"-->

##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
# Un peu de contexte

##==##
<!-- .slide: class="flex-row center" -->
![h-600](./assets/bigbang.jpg)
Tout commence toujours par le Big Bang : <BR> -13,8 milliards d'années

##==##
<!-- .slide: class="flex-row center" -->
![h-600](./assets/context/02-la-terre.png)
La planète Terre : <BR> -4,5 milliards d'années

##==##
<!-- .slide: class="flex-row center" -->
![h-600](./assets/context/5-la-roue.jpg)
Invention de la roue : 4000 av J.C.

##==##
<!-- .slide: class="flex-row center" -->
![h-600](./assets/context/11-Eniac.jpg)
Eniac : 15 Février 1946

##==##
<!-- .slide: class="flex-row center" -->
![h-500](./assets/context/13-8086.jpg)
![h-500](./assets/context/14-tux.png)
Début du Personnal Computer : Mai 1976 <BR>
Linux : 25 Août 1991

##==##
<!-- .slide: class="flex-row center" -->
![h-500](./assets/context/16-lxc.webp)
![h-500](./assets/context/17-docker.png)
LXC : 6 Août 2008 <BR>
Docker : 20 Mars 2023

##==##
<!-- .slide: class="flex-row center" -->
![h-600](./assets/context/18-kubernetes.webp)
Kubernetes : 7 juin 2014 <BR>
Les Noeuds sont alors appelés des minions...

##==##
<!-- .slide: class="transition left sfeir-bg-2" -->
![h-500](./assets/context/minions.png)
## Le concept plaît et est vite adopté en entreprise
    - Les équipes déploient des microservices
    - Il faut respecter le time to market
    - On démarre en production et on implémente le SRE  

##==##
<!-- .slide: class="transition left sfeir-bg-2" -->
![h-500](./assets/context/minions2.webp)
## L'entropie du système augmente...
    - La définition des requests/limits manquent pour le CPU et la RAM
    - Il est difficile de savoir à qui appartient telle ou telle application
    - Les containers ne sont pas sécurisés (possibilité d'évasion)
    - Les images proviennent de diverses registries, parfois obscures
    - Une nomenclature serait la bienvenue

