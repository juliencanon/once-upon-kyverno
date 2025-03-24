<!-- .slide: class="transition-bg-sfeir-2" -->
# Revenons à kubernetes 
## Afin de comprendre comment le gérer efficacement

##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
![h500](./assets/kubernetes/k8s_archi1.png)
<BR>
Kubernetes est un orchestrateur de container piloté via APIs <BR>
<BR>
Les requêtes sont émises par : 
- kubectl (outil CLI officiel)
- curl
- un outil tiers (k9s, headlamp, argoCD, ...)

##==##
<!-- .slide: class="transition-bg-sfeir-1" -->
## La requête est modélisée par : 
- ses données (sous forme de yaml ou json)
  - son chemin d'appel (apiVersion)
  - l'objet concerné (king)
  - les spécificications (specs)
- Le verbe d'action (CRUD) traduit en verbe HTTP (POST, PUT, PATCH, DELETE, GET)


![h500](./assets/kubernetes/pod-yaml.png)


##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
## L'outil clef : l'Admission Controller

![h500](./assets/images/admission_schema.jpg)


