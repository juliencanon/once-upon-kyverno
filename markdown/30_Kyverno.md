
<!-- .slide: class="transition-bg-sfeir-2" -->
# Revenons à kyverno
## Le 12 Juillet 2022 le projet rejoint la CNCF avec le statut "Incubation"


##==##
<!-- .slide: class="transition-bg-sfeir-2" -->
## Ce que kyverno sait faire en plus de validation et mutation 

- Validation des requêtes ( sur create, update, delete, patch...)
- Mutation des requêtes (rectification du contenu, ajout, offuscation, cryptage...)
- Generation de nouvelles resources
- Verify Images Rules (contrôle de la supply chain via Notary ou Sigstore) 
- Cleanup Rules (sur expression cron, ou sur présence de label/ttl)
- PolicyExceptions (Pouvoir gérer une exception ponctuelle)
- Background Scans (vérifier les policies en continu en tâche de fond)
- Auto-Gen Rules (un coup de génie !)
<BR>
- kyverno CLI 
   - apply
   - test 
   - generation VAP 


