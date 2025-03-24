
<!-- .slide: class="transition-bg-sfeir-2" -->
# Une histoire d'Admission 

##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
## La proposition : implémenter un ou plusieurs webhook pour ajouter nos contrôles 
![h500](./assets/kubernetes/admissionReview.webp)

Puis l'enregistrer via l'apiVersion admissionregistration.k8s.io/v1 <BR>
ValidatingWebhookConfiguration ou MutatingWebhookConfiguration


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
OPA Gatekeeper est un projet graduated de la CNCF

Open Policy Agent propose au travers de Rego un outil d'écriture de policies généraliste. <BR>
On peut tout aussi bien créer des policies pour valiter le plan de terraform par exemple.

Etant le premier outil sur le créneau, une grande communauté s'est formée et il est facile de trouver de la documentation et des exemples.

Le rego reste cependant assez peu intuitif et accessible


##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
## Une autre vision des policies : Kyverno
- Initié en Mai 2019 par la société Nirmata
- La proposition est de pouvoir écrire les policies directement en yaml
- Plus facile à écrire et à relire


##==##
<!-- .slide: class="transition-bg-sfeir-5" -->

Mais nécessite un outil
-> kubernetes propose des policies en natif, en utilisant des expressions CEL : VAP et MAP 
   (link VAP : https://github.com/datreeio/validating-admission-policy)

- Apparaît en beta dans kubernetes 1.26 (8 Décembre 2022)
- Passe en GA dans kubernetes 1.30 (17 Avril 2024)

##==##
<!-- .slide: class="transition-bg-sfeir-5" -->
-> descripton de CEL ( site, langage d'evaluation d'expression, pre-compilé, performance, playground...)
  -> pas d'outil, bonne performance,...

##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
Mais finalement un outil c'était bien, non ?
  CLI plus features sympa.
 Kyverno 1.11 (16 Novembre 2023) implémente le langage CEL dans ses policies

