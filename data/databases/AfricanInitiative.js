// DIMA - Base de données d'opération : African Initiative
// Généré le 2026-10-03 à partir de github.com/tripkrant/IO-Campaign-Collections
// 21 domaines issus de 3 rapport(s) public(s)

/**
 * INSTRUCTIONS D'UTILISATION
 * ==========================
 *
 * Ce fichier est déclaré dans manifest.json (content_scripts) AVANT
 * modules/Suspicioussitesmanager.js, qui détecte la variable globale
 * `africanInitiativeDomains` et l'enregistre comme source « AfricanInitiative ».
 *
 * riskLevel : high = site opéré/attribué à l'opération ou infrastructure d'hameçonnage ;
 *             medium = relais, média d'État, opérateur ; low = site légitime détourné, exploité ou compromis.
 * Les domaines sont des infrastructures malveillantes : ne pas les visiter directement.
 */

const africanInitiativeDomains = [
  {
    domain: "africadaily.africa",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "africanmedia.africa",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "afrinz.ru",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « Umbrae Ex Machina: Mapping Russian Ghostwriting Operations Across African News Outlets ». Également cité par : VIGINUM (2025-06-12).",
    source: "Graphika",
    reportUrl: "https://public-assets.graphika.com/reports/Public-Report_Umbrae-Ex-Machina.pdf",
    identifiedDate: "2026-08-25",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "afriquestories.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "britishattitudes.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "britishtalks.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "bshortnews.uk",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "euronewstop.co.uk",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "eventnewslondon.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "headstalk.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "mediaeventhub.africa",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "newstop.africa",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "newstoplondon.uk",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "newstopukcom.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "nouvelles-histoires-africaines.africa",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "nouvellesafrique.africa",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "perspectivesahelienne.org",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « After Wagner: Russia’s Spin Doctors Take Over in Africa ».",
    source: "All Eyes on Wagner",
    reportUrl: "https://alleyesonwagner.org/2025/08/10/after-wagner-russias-spin-doctors-take-over-in-africa/",
    identifiedDate: "2025-08-10",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique"]
  },

  {
    domain: "rusafromedia.ru",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "toplondonstories.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "topnewsuk.uk",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  },

  {
    domain: "ukeventnews.uk",
    matchType: "exact",
    reason: "Site attribué à l'opération — agence russe African Initiative et son écosystème (AI-Freak, RusAfro). Rapport : « African Initiative: From Public Diplomacy to Covert Influence Operations ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250612_TLP-CLEAR_VIGINUM_FCDO_EEAS_Technical_Report_African_Initiative_EN.pdf",
    identifiedDate: "2025-06-12",
    riskLevel: "high",
    tags: ["AfricanInitiative", "Russie", "Afrique", "UK", "LLM"]
  }
];

// =============================================================================
// FONCTIONS UTILITAIRES (OPTIONNELLES)
// =============================================================================

// Filtrer par tag
function filterAfricanInitiativeByTag(tag) {
  return africanInitiativeDomains.filter(d => d.tags.includes(tag));
}

// Filtrer par niveau de risque
function filterAfricanInitiativeByRiskLevel(level) {
  return africanInitiativeDomains.filter(d => d.riskLevel === level);
}

// Obtenir tous les tags uniques
function getAfricanInitiativeTags() {
  const allTags = new Set();
  africanInitiativeDomains.forEach(d => {
    d.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

// Obtenir les statistiques
function getAfricanInitiativeStats() {
  return {
    total: africanInitiativeDomains.length,
    highRisk: africanInitiativeDomains.filter(d => d.riskLevel === "high").length,
    mediumRisk: africanInitiativeDomains.filter(d => d.riskLevel === "medium").length,
    lowRisk: africanInitiativeDomains.filter(d => d.riskLevel === "low").length,
    tags: getAfricanInitiativeTags()
  };
}

// =============================================================================
// EXPORTS ET DISPONIBILITÉ GLOBALE
// =============================================================================

// Export pour Node.js / modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    africanInitiativeDomains,
    filterAfricanInitiativeByTag,
    filterAfricanInitiativeByRiskLevel,
    getAfricanInitiativeTags,
    getAfricanInitiativeStats
  };
}

// Disponibilité globale pour le navigateur
if (typeof window !== 'undefined') {
  window.africanInitiativeDomains = africanInitiativeDomains;
  window.AfricanInitiativeUtils = {
    filterByTag: filterAfricanInitiativeByTag,
    filterByRiskLevel: filterAfricanInitiativeByRiskLevel,
    getTags: getAfricanInitiativeTags,
    getStats: getAfricanInitiativeStats
  };
}

// Log de chargement
console.log(`Liste African Initiative chargée: ${africanInitiativeDomains.length} domaines identifiés`);
