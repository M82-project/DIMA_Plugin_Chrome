// DIMA - Base de données d'opération : Réseau affilié à China News Service
// Généré le 2026-10-03 à partir de github.com/tripkrant/IO-Campaign-Collections
// 36 domaines issus de 1 rapport(s) public(s)

/**
 * INSTRUCTIONS D'UTILISATION
 * ==========================
 *
 * Ce fichier est déclaré dans manifest.json (content_scripts) AVANT
 * modules/Suspicioussitesmanager.js, qui détecte la variable globale
 * `chinaNewsServiceNetworkDomains` et l'enregistre comme source.
 *
 * riskLevel : high = site opéré/attribué à l'opération ou infrastructure d'hameçonnage ;
 *             medium = relais, média d'État, opérateur ; low = site légitime détourné, exploité ou compromis.
 * Les domaines sont des infrastructures malveillantes : ne pas les visiter directement.
 */

const chinaNewsServiceNetworkDomains = [
  {
    domain: "africachdaily.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "au123.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "azchinesenews1.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "br-cn.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "ccbestlink.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "cgw.gr",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "china-info24.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "chinanews.se",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "chine-info.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "chinesetimes.info",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "covusarnm.sinoing.net",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "dragonnewsru.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "europechinesenews.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "fenghuavoice.ca",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "gcmcu.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "homevoice.co.nz",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "huashangnews.cc",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "jpchinapress.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "jrlamei.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "lianhenews.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "livejapan.cn",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "mexicohuawentimes.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "mmgpmedia.com.mm",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "newsduan.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "newtimesnet.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "offshoremedia.net",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "offstoremedia.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "ouhuamedia.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "oushinet.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "oushivoyages.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "puxinbao.top",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "sino-mau.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "uschinapress.cn",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "uschinews.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "usqiaobao.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  },

  {
    domain: "xindb.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — réseau de sites de la diaspora chinoise affilié à China News Service. Rapport : « Chinese State-Linked Information Operation Revealed Social Media Account Takeover Potential ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/chinese-info-ops-account-takeover.pdf",
    identifiedDate: "2023-07-11",
    riskLevel: "high",
    tags: ["ChinaNewsServiceNetwork", "Chine", "Diaspora-chinoise"]
  }
];

// =============================================================================
// FONCTIONS UTILITAIRES (OPTIONNELLES)
// =============================================================================

// Filtrer par tag
function filterChinaNewsServiceNetworkByTag(tag) {
  return chinaNewsServiceNetworkDomains.filter(d => d.tags.includes(tag));
}

// Filtrer par niveau de risque
function filterChinaNewsServiceNetworkByRiskLevel(level) {
  return chinaNewsServiceNetworkDomains.filter(d => d.riskLevel === level);
}

// Obtenir tous les tags uniques
function getChinaNewsServiceNetworkTags() {
  const allTags = new Set();
  chinaNewsServiceNetworkDomains.forEach(d => {
    d.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

// Obtenir les statistiques
function getChinaNewsServiceNetworkStats() {
  return {
    total: chinaNewsServiceNetworkDomains.length,
    highRisk: chinaNewsServiceNetworkDomains.filter(d => d.riskLevel === "high").length,
    mediumRisk: chinaNewsServiceNetworkDomains.filter(d => d.riskLevel === "medium").length,
    lowRisk: chinaNewsServiceNetworkDomains.filter(d => d.riskLevel === "low").length,
    tags: getChinaNewsServiceNetworkTags()
  };
}

// =============================================================================
// EXPORTS ET DISPONIBILITÉ GLOBALE
// =============================================================================

// Export pour Node.js / modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    chinaNewsServiceNetworkDomains,
    filterChinaNewsServiceNetworkByTag,
    filterChinaNewsServiceNetworkByRiskLevel,
    getChinaNewsServiceNetworkTags,
    getChinaNewsServiceNetworkStats
  };
}

// Disponibilité globale pour le navigateur
if (typeof window !== 'undefined') {
  window.chinaNewsServiceNetworkDomains = chinaNewsServiceNetworkDomains;
  window.ChinaNewsServiceNetworkUtils = {
    filterByTag: filterChinaNewsServiceNetworkByTag,
    filterByRiskLevel: filterChinaNewsServiceNetworkByRiskLevel,
    getTags: getChinaNewsServiceNetworkTags,
    getStats: getChinaNewsServiceNetworkStats
  };
}

// Log de chargement
console.log(`Liste Réseau affilié à China News Service chargée: ${chinaNewsServiceNetworkDomains.length} domaines identifiés`);
