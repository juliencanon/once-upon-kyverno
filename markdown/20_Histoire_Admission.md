
<!-- .slide: class="transition-bg-sfeir-2" -->
# Une histoire d'Admission 

##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
## La proposition : implémenter un ou plusieurs webhook pour ajouter nos contrôles 
![h500](./assets/kubernetes/admissionReview.webp)

Puis l'enregistrer via l'apiVersion admissionregistration.k8s.io/v1 <BR>
ValidatingWebhookConfiguration ou MutatingWebhookConfiguration

##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
# Vraiment simple, non ?
## Et si on trouvait un produit qui nous faisait ça simplement ?


##==##
<!-- .slide: class="transition-bg-sfeir-3" -->
## Première solution packagée : OPA gatekeeper (Juin 2017)
- implémente un moteur générique pour implémenter ses policies
- se base sur le moteur d'open policy agent (OPA)
- le langage est donc le rego

![h500](./assets/kubernetes/gatekeeper.png)


##==##
<!-- .slide: class="transition-bg-sfeir-3" -->
## Exemple de ConstraintTemplate

```yaml
apiVersion: templates.gatekeeper.sh/v1beta1
kind: ConstraintTemplate
metadata:
  name: k8srequiredresourcequotas
spec:
  crd:
    spec:
      names:
        kind: K8sRequiredResourceQuotas
  targets:
    - target: admission.k8s.gatekeeper.sh
      rego: |
        package k8srequiredresourcequotas

        violation[{"msg": msg}] {
          input.review.kind.kind == "Namespace"
          namespace := input.review.object

          some label_key
          namespace.metadata.labels[label_key] == "production"
          not has_resource_quota(namespace.metadata.name)

          msg := sprintf("Namespace labeled 'env: production' must have a resource quota", [])
        }

        has_resource_quota(namespace_name) {
          some i
          input.review.context.related[i].kind == "ResourceQuota"
          input.review.context.related[i].metadata.namespace == namespace_name
        }
```

##==##
<!-- .slide: class="transition-bg-sfeir-3" -->
- OPA Gatekeeper est un projet graduated de la CNCF

- Open Policy Agent propose au travers de Rego un outil d'écriture de policies généraliste. 

- Etant le premier outil sur le créneau, une grande communauté s'est formée et il est facile de trouver de la documentation et des exemples.

- Le rego reste cependant assez peu intuitif et accessible 

##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
## Une autre vision des policies : Kyverno
- Initié en Mai 2019 par la société Nirmata
- Souhaite résoudre la complexité de Gatekeeper
- La proposition est de pouvoir écrire les policies directement en yaml
- Plus facile à écrire et à relire

##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
## Améliorations :
- Policies plus lisibles
- Collection sur étagère
## Inconvénients :
- La performance (parser du yaml est bien plus lourd qu'un moteur d'évaluation)
- Sorti des policies fournies, difficile d'en écrire de nouvelles (la syntaxe n'est pas au niveau d'un langage)
- Necessite toujours l'installation d'un produit tiers (et stratégique/critique)


##==##
<!-- .slide: class="transition-bg-sfeir-4" -->
## Kubernetes propose une implémentation native :
- ValidatingAdmissionPolicy et MutatingAdmissionPolicy
   (link VAP : https://github.com/datreeio/validating-admission-policy)

- Apparaît en beta dans kubernetes 1.26 (8 Décembre 2022)
- Passe en GA dans kubernetes 1.30 (17 Avril 2024)
- Se base sur le CEL : un moteur d'évaluation d'expression simple et performant
- Le langage est indépendant, propose un playground pour le tester
- Le langage est pré-compilé, prévu pour une évaluation extrêment rapide (prévue pour les reverse-proxy à l'origine)


##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
## Kyverno ne dit pas son dernier mot : Le projet pivote.
- L'ambition du produit se veut plus large
- Se voit comme une boîte à outil gérant tous les use-cases de la conformité
- S'installe dans le cluster, mais fournit également une version en ligne de commande (CLI)
- Kyverno 1.11 (16 Novembre 2023) implémente le langage CEL dans ses policies
- La bibliothèque de policies se ré-écrit progressivement en CEL

