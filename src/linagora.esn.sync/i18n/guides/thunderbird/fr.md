Ce tutoriel explique étape par étape comment configurer Thunderbird afin de l'utiliser avec OpenPaaS.

## Avertissement

Afin de fonctionner correctement, l'extension OpenPaaS pour Thunderbird s'appuie sur deux autres extensions :

* Lightning pour les calendriers (installée par défaut depuis Thunderbird 60)
* Cardbook pour les carnets d'adresses.

L'extension OpenPaaS pour Thunderbird installera d'elle-même ces deux extensions si elle venaient à manquer.

Merci de ne pas les désactiver ni les désinstaller.

## Prérequis

Téléchargez l'extension [OpenPaaS pour Thunderbird](/account/downloads/thunderbird/op-tb-autoconf.xpi) et enregistrez-la sur votre ordinateur.

## Installation et configuration

1. Au démarrage de Thunderbird, si vous n'avez jamais pas d'adresse électronique configurée, l'écran suivant devrait s'afficher.

    ![create_address](/account/images/fr/thunderbird_create_address.png)

2. Cliquez sur `Annuler`.

3. Cliquez sur l'icône de menu comme indiqué ci-dessous.

    ![open_menu](/account/images/fr/thunderbird_open_menu.png)

4. Puis cliquez sur `Modules complémentaires`.

5. Dans l'écran de gestion des modules complémentaires, cliquez sur `Extensions` dans la colonne de gauche, puis sur l'icône d'engrenage.

    ![modules_menu](/account/images/fr/thunderbird_modules_menu.png)

6. Enfin, cliquez sur `Installer un module depuis un fichier...` afin de sélectionner le fichier d'extension téléchargé précédemment. Sur l'écran suivant, attendez la fin du décompte du bouton `Installer` puis cliquez sur `Installez maintenant`.

    ![install_countdown](/account/images/fr/thunderbird_install_now.png)

7. Thunderbird vous demandera alors de redémarrer. Cliquez sur `Redémarrer maintenant`.

8. Au redémarrage, la fenêtre suivante vous demande votre compte et mot de passe OpenPaaS.

    ![enter_account](/account/images/fr/thunderbird_enter_account.png)

9. Thunderbird s'ouvre et vous demande à nouveau si vous voulez configurer une adresse électronique existante. Cliquez `Annuler`. Un second redémarrage s'effectue alors, vous demandant à nouveau vos compte et mot de passe OpenPaaS. Pensez à cocher la case `Enregistrer mon mot de passe` si vous ne souhaitez pas l'entrer à chaque démarrage du logiciel.

Vous constaterez alors dans l'écran de gestion des modules complémentaires que les extensions Lightning et Cardbook ont également été installée si ce n'était pas le cas.

Vos e-mails, calendriers et carnets d'adresses sont en cours de synchronisation et devraient apparaître rapidement.
