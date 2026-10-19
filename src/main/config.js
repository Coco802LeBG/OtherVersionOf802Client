// ============================================================
//  CONFIGURATION DE 802 CLIENT LAUNCHER
//  Modifie ce fichier si ton pseudo GitHub ou tes dépôts changent.
// ============================================================
module.exports = {
  LAUNCHER_NAME: '802 Client',
  MC_VERSION: '1.21.11',

  // Dépôt GitHub du MOD (doit être public, avec des Releases contenant le .jar)
  CLIENT_REPO: 'Coco802/802-client',

  // Dépôt GitHub du LAUNCHER (pour les mises à jour : voir aussi package.json > build > publish)
  LAUNCHER_REPO: 'Coco802/802-launcher',

  // Client ID de ton application Azure (voir README.md, étape 2).
  // Tu peux aussi le coller dans Réglages > Compte Microsoft, sans recompiler.
  AZURE_CLIENT_ID: '',

  // Identifie le launcher auprès de Modrinth / GitHub / Mojang (obligatoire pour Modrinth)
  USER_AGENT: 'Coco802/802-client-launcher/1.0.0 (github.com/Coco802/802-launcher)'
};
