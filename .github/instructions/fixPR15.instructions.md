Removes the in-content suspicious site detection UI/logic from content.js (now handled by UIManager via suspiciousSitesManager), and adds a retry cap to the DIMA initialization loop to avoid infinite retries.

Changes:

Deletes checkCurrentSiteInSuspiciousList and showSuspiciousSiteAlert and the related "PARTIE 1" section comments.
Updates the section header to point readers to modules/uiManager.js.
Adds MAX_RETRIES = 30 (3 seconds) bound to initializeDIMA recursive retry.
