// DIMA - Base de données d'opération : Africa Politology / SVR et successeurs de Wagner
// Généré le 2026-10-03 à partir de github.com/tripkrant/IO-Campaign-Collections
// 5 domaines issus de 3 rapport(s) public(s)

/**
 * INSTRUCTIONS D'UTILISATION
 * ==========================
 *
 * Ce fichier est déclaré dans manifest.json (content_scripts) AVANT
 * modules/Suspicioussitesmanager.js, qui détecte la variable globale
 * `africaPolitologyDomains` et l'enregistre comme source.
 *
 * riskLevel : high = site opéré/attribué à l'opération ou infrastructure d'hameçonnage ;
 *             medium = relais, média d'État, opérateur ; low = site légitime détourné, exploité ou compromis.
 * Les domaines sont des infrastructures malveillantes : ne pas les visiter directement.
 */

const africaPolitologyDomains = [
  {
    domain: "africa-rus.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — dispositif d'influence russe en Afrique repris par le SVR (Africa Politology, Bureau Legint, GR Group). Rapport : « After Wagner: Russia’s Spin Doctors Take Over in Africa ».",
    source: "All Eyes on Wagner",
    reportUrl: "https://alleyesonwagner.org/2025/08/10/after-wagner-russias-spin-doctors-take-over-in-africa/",
    identifiedDate: "2025-08-10",
    riskLevel: "high",
    tags: ["AfricaPolitology", "Russie", "Afrique"]
  },

  {
    domain: "arenergy.pro",
    matchType: "exact",
    reason: "Site attribué à l'opération — dispositif d'influence russe en Afrique repris par le SVR (Africa Politology, Bureau Legint, GR Group). Rapport : « After Wagner: Russia’s Spin Doctors Take Over in Africa ».",
    source: "All Eyes on Wagner",
    reportUrl: "https://alleyesonwagner.org/2025/08/10/after-wagner-russias-spin-doctors-take-over-in-africa/",
    identifiedDate: "2025-08-10",
    riskLevel: "high",
    tags: ["AfricaPolitology", "Russie", "Afrique"]
  },

  {
    domain: "gr-group.site",
    matchType: "exact",
    reason: "Site attribué à l'opération — dispositif d'influence russe en Afrique repris par le SVR (Africa Politology, Bureau Legint, GR Group). Rapport : « After Wagner: Russia’s Spin Doctors Take Over in Africa ».",
    source: "All Eyes on Wagner",
    reportUrl: "https://alleyesonwagner.org/2025/08/10/after-wagner-russias-spin-doctors-take-over-in-africa/",
    identifiedDate: "2025-08-10",
    riskLevel: "high",
    tags: ["AfricaPolitology", "Russie", "Afrique"]
  },

  {
    domain: "lobitocoridor.org",
    matchType: "exact",
    reason: "Site attribué à l'opération — dispositif d'influence russe en Afrique repris par le SVR (Africa Politology, Bureau Legint, GR Group). Rapport : « Anatomy of Deception: Engineering Covert Influence Operations ».",
    source: "All Eyes on Wagner",
    reportUrl: "https://alleyesonwagner.org/2026/02/20/anatomy-of-deception-engineering-covert-influence-operations/",
    identifiedDate: "2026-02-20",
    riskLevel: "high",
    tags: ["AfricaPolitology", "Russie", "Afrique"]
  },

  {
    domain: "unitedworldinternational.org",
    matchType: "exact",
    reason: "Site attribué à l'opération — dispositif d'influence russe en Afrique repris par le SVR (Africa Politology, Bureau Legint, GR Group). Rapport : « Love Me Alone: Russia’s No-Rivals Doctrine ».",
    source: "All Eyes on Wagner",
    reportUrl: "https://alleyesonwagner.org/2026/02/27/love-me-alone-russias-no-rivals-doctrine/",
    identifiedDate: "2026-02-27",
    riskLevel: "high",
    tags: ["AfricaPolitology", "Russie", "Afrique"]
  }
];

// =============================================================================
// FONCTIONS UTILITAIRES (OPTIONNELLES)
// =============================================================================

// Filtrer par tag
function filterAfricaPolitologyByTag(tag) {
  return africaPolitologyDomains.filter(d => d.tags.includes(tag));
}

// Filtrer par niveau de risque
function filterAfricaPolitologyByRiskLevel(level) {
  return africaPolitologyDomains.filter(d => d.riskLevel === level);
}

// Obtenir tous les tags uniques
function getAfricaPolitologyTags() {
  const allTags = new Set();
  africaPolitologyDomains.forEach(d => {
    d.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

// Obtenir les statistiques
function getAfricaPolitologyStats() {
  return {
    total: africaPolitologyDomains.length,
    highRisk: africaPolitologyDomains.filter(d => d.riskLevel === "high").length,
    mediumRisk: africaPolitologyDomains.filter(d => d.riskLevel === "medium").length,
    lowRisk: africaPolitologyDomains.filter(d => d.riskLevel === "low").length,
    tags: getAfricaPolitologyTags()
  };
}

// =============================================================================
// EXPORTS ET DISPONIBILITÉ GLOBALE
// =============================================================================

// Export pour Node.js / modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    africaPolitologyDomains,
    filterAfricaPolitologyByTag,
    filterAfricaPolitologyByRiskLevel,
    getAfricaPolitologyTags,
    getAfricaPolitologyStats
  };
}

// Disponibilité globale pour le navigateur
if (typeof window !== 'undefined') {
  window.africaPolitologyDomains = africaPolitologyDomains;
  window.AfricaPolitologyUtils = {
    filterByTag: filterAfricaPolitologyByTag,
    filterByRiskLevel: filterAfricaPolitologyByRiskLevel,
    getTags: getAfricaPolitologyTags,
    getStats: getAfricaPolitologyStats
  };
}

// Log de chargement
console.log(`Liste Africa Politology / SVR et successeurs de Wagner chargée: ${africaPolitologyDomains.length} domaines identifiés`);
