# ØkoKompas

Dansk, interaktiv budgetprototype, version 138, til test med familie og venner.

Åbn [ØkoKompas](https://hddk1986.github.io/okonemt/) i din browser.

## Data og privatliv

- Beregninger udføres i browseren. Budgetdata gemmes i browserens localStorage på den aktuelle enhed.
- Ingen bankforbindelse, backend, analyseværktøjer eller eksterne biblioteker.
- Siden sender ikke indtastede budgetoplysninger til GitHub eller andre tjenester. En browserpolitik blokerer netværkskald. Lokale appikoner og webmanifest er tilladt.
- GitHub Pages leverer selve siden og kan registrere almindelige besøgsoplysninger, herunder IP-adresser. Se [GitHubs privatlivspolitik](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- JSON-sikkerhedskopier og CSV-filer indeholder brugerens egne oplysninger og skal opbevares privat. De skal aldrig uploades til dette repository.
- Lokale browserdata er ikke krypteret af appen. Andre med adgang til samme browserprofil kan få adgang til budgettet.
- Data deles ikke automatisk mellem enheder. Hent en sikkerhedskopi før sletning af browserdata.

## Udgivelse

GitHub Pages: Deploy from a branch → main → /(root). Ingen byggeproces er nødvendig.

Udgivelsen bygger på okokompas_prototype_v138.html. Appens indlejrede ikoner er bevaret. En restriktiv browserpolitik tillader ikoner og blokerer netværkskald. Appens JavaScript og eksisterende lagringsnøgler er bevaret.

Hvis JavaScript ændres, skal SHA-256-værdien i sidens Content-Security-Policy opdateres, så den svarer til scriptets præcise indhold.

Standardbeløb og beregninger er illustrative. Kontrollér egne tal og antagelser.

Den lokale sw.js understøtter registreringen i appens installationsflow. Den gemmer ingen filer, læser ingen budgetdata og giver ikke offlinefunktion. Testadressen er fortsat /okonemt/.









