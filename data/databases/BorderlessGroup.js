// DIMA - Base de données d'opération : Borderless Group
// Généré le 2026-10-03 à partir de github.com/tripkrant/IO-Campaign-Collections
// 11 domaines issus de 1 rapport(s) public(s)

/**
 * INSTRUCTIONS D'UTILISATION
 * ==========================
 *
 * Ce fichier est déclaré dans manifest.json (content_scripts) AVANT
 * modules/Suspicioussitesmanager.js, qui détecte la variable globale
 * `borderlessGroupDomains` et l'enregistre comme source.
 *
 * riskLevel : high = site opéré/attribué à l'opération ou infrastructure d'hameçonnage ;
 *             medium = relais, média d'État, opérateur ; low = site légitime détourné, exploité ou compromis.
 * Les domaines sont des infrastructures malveillantes : ne pas les visiter directement.
 */

const borderlessGroupDomains = [
  {
    domain: "12beststar.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "br.firstopdesign.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "firstopdesign.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "jp.firstopdesign.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "kolovers.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "mamababy6.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "pets-naivety.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "vsdm8.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "weebokm.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "wetocd.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  },

  {
    domain: "wujfu.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau Borderless Group (fermes de contenus pro-RPC). Rapport : « Assessing the Borderless Group’s Activity on Threads ».",
    source: "Doublethink Lab",
    reportUrl: "https://medium.com/doublethinklab/assessing-the-borderless-groups-activity-on-threads-69257a44ca82",
    identifiedDate: "2026-04-28",
    riskLevel: "high",
    tags: ["BorderlessGroup", "Chine", "Asie"]
  }
];

// =============================================================================
// FONCTIONS UTILITAIRES (OPTIONNELLES)
// =============================================================================

// Filtrer par tag
function filterBorderlessGroupByTag(tag) {
  return borderlessGroupDomains.filter(d => d.tags.includes(tag));
}

// Filtrer par niveau de risque
function filterBorderlessGroupByRiskLevel(level) {
  return borderlessGroupDomains.filter(d => d.riskLevel === level);
}

// Obtenir tous les tags uniques
function getBorderlessGroupTags() {
  const allTags = new Set();
  borderlessGroupDomains.forEach(d => {
    d.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

// Obtenir les statistiques
function getBorderlessGroupStats() {
  return {
    total: borderlessGroupDomains.length,
    highRisk: borderlessGroupDomains.filter(d => d.riskLevel === "high").length,
    mediumRisk: borderlessGroupDomains.filter(d => d.riskLevel === "medium").length,
    lowRisk: borderlessGroupDomains.filter(d => d.riskLevel === "low").length,
    tags: getBorderlessGroupTags()
  };
}

// =============================================================================
// EXPORTS ET DISPONIBILITÉ GLOBALE
// =============================================================================

// Export pour Node.js / modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    borderlessGroupDomains,
    filterBorderlessGroupByTag,
    filterBorderlessGroupByRiskLevel,
    getBorderlessGroupTags,
    getBorderlessGroupStats
  };
}

// Disponibilité globale pour le navigateur
if (typeof window !== 'undefined') {
  window.borderlessGroupDomains = borderlessGroupDomains;
  window.BorderlessGroupUtils = {
    filterByTag: filterBorderlessGroupByTag,
    filterByRiskLevel: filterBorderlessGroupByRiskLevel,
    getTags: getBorderlessGroupTags,
    getStats: getBorderlessGroupStats
  };
}

// Log de chargement
console.log(`Liste Borderless Group chargée: ${borderlessGroupDomains.length} domaines identifiés`);
