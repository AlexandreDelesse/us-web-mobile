#!/bin/bash

# Variables
USER="u47950285-special"       # Remplacez par votre nom d'utilisateur SFTP
HOST="home231975525.1and1-data.host"         # Remplacez par l'adresse ou l'IP de votre hôte SFTP
REMOTE_DIR="/dev"  # Remplacez par le répertoire distant où vous voulez envoyer les fichiers
LOCAL_BUILD_DIR="build"            # Chemin vers votre dossier de build local

# Vérifiez si le dossier de build existe
if [ ! -d "$LOCAL_BUILD_DIR" ]; then
  echo "Le dossier de build '$LOCAL_BUILD_DIR' n'existe pas. Assurez-vous d'avoir exécuté 'npm run build'."
  exit 1
fi

# Envoi des fichiers via SFTP
echo "Début du transfert SFTP..."

sftp $USER@$HOST <<EOF
cd $REMOTE_DIR
lcd $LOCAL_BUILD_DIR
mput -r *
bye
EOF

# Vérifiez le succès du transfert
if [ $? -eq 0 ]; then
  echo "Transfert SFTP réussi."
else
  echo "Une erreur s'est produite lors du transfert SFTP."
  exit 1
fi