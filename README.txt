Stampare a schermo i dischi presenti nelle vostra vecchia esercitazione vue-discs

Utilizzare:
Html, CSS, VueJS (con CDN non CLI), axios, PHP


**Prima Milestone:**

Stampiamo i dischi solo con l’utilizzo di PHP, che stampa direttamente i dischi in pagina: al caricamento della pagina ci saranno tutti i dischi.

In questa milestone non ci sarà nessuna chiamata axios il file php stamperà direttamente il “database”

Questo file lo chiamate index.php. Il “database” dei dischi è meglio che sia un file esterno che viene incluso


**Seconda Milestone:**

Attraverso l’utilizzo di axios: al caricamento della pagina axios chiederà, attraverso una chiamata api, i dischi a php e li stamperà attraverso vue CDN.

Questo file lo chiamate index-vue.html che chiamerà via axios un file che si chiamerà api.php.

api.php includerà lo stesso “database” che viene incluso anche in index.php


**Bonus:**

Attraverso la select dei generi filtrare i generi selezionati tramite le chiamate API

benvenuti nel magico mondo full-stack! 

NB: ricordatevi di lanciare il file index-vue.html dal server PHP e non dal server generato da VScode con liveserver