<!-- .slide: class="transition left sfeir-bg-2" -->

# Conformité k8s avec Kyverno

## Un outil de la CNCF qui a le vent en poupe !

##==##

<!-- .slide: class="transition" -->

Un peu d'histoire...

Chaque diapo montre une fonctionnalité du Thème SFEIR School


<!-- .element: class="center" -->

##==##

# 1er share

Un peu de contexte
Pas trop technique


##==##

<!-- .slide: class="transition" -->

# big bang -> kubernetes

##==##


# big bang


##==##

<!-- .slide: class="transition" -->

# big bang -> kubernetes

##==##

<!-- .slide: class="transition" -->

# big bang -> kubernetes

##==##

<!-- .slide: class="transition" -->

# big bang -> kubernetes

##==##

<!-- .slide: class="first-slide" sfeir-level="1" sfeir-techno="pwa" -->

# deploiements, cronjobs, statefulset, networkpolicies, ingress, ...


##==##

<!-- .slide: class="with-code" -->

# pas de latest

pas de mount host

pas de CVE

capabilities, escalation

referentiel kubescape

duplicate hostname sur ingress



<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="first-slide" sfeir-level="2" sfeir-techno="pwa" -->

# trame

adminssion controller
schema

gatekeeper
  with rego

pod security context 

Kyverno

Validation admission policy

kyverno with CEL 

Policies sur etagères

Validation
mutation
image
clean
generation


Prevent create
background
audit/enforce
prevent delete (network policy)
check deprecated
Enforce deprecated




minikube
install Kyverno
pod with latest
pod without limits
##==##

<!-- .slide: class="first-slide" sfeir-level="2" sfeir-techno="pwa" -->

# démo time 

minikube
install Kyverno
pod with latest
pod without limits


## **PWA 200**

##--##

<!-- .slide: class="with-code" -->

# Code pour reproduire / Markdown

```markdown
<!-- .slide: class="first-slide" sfeir-level="2" sfeir-techno="pwa" -->

# **Bienvenue à la SFEIR School**

## **PWA 200**
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="first-slide" sfeir-level="3" sfeir-techno="pwa" -->

# **Bienvenue à la SFEIR School**

## **PWA 300**

##--##

<!-- .slide: class="with-code" -->

# Code pour reproduire / Markdown

```markdown
<!-- .slide: class="first-slide" sfeir-level="3" sfeir-techno="pwa" -->

# **Bienvenue à la SFEIR School**

## **PWA 300**
```

<!-- .element: class="big-code" -->
