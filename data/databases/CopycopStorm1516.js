// DIMA - Base de données d'opération : CopyCop / Storm-1516
// Généré le 2026-10-03 à partir de github.com/tripkrant/IO-Campaign-Collections
// 34 domaines (sur 293) issus de 9 rapport(s) public(s)

/**
 * INSTRUCTIONS D'UTILISATION
 * ==========================
 *
 * Ce fichier est déclaré dans manifest.json (content_scripts) AVANT
 * modules/Suspicioussitesmanager.js, qui détecte la variable globale
 * `copycopStorm1516Domains` et l'enregistre comme source.
 *
 * Les 259 domaines déjà présents dans une autre base du plugin ont été
 * retirés pour éviter les doublons (258 dans Storm1516.js, 1 dans laundromat.js).
 *
 * riskLevel : high = site opéré/attribué à l'opération ou infrastructure d'hameçonnage ;
 *             medium = relais, média d'État, opérateur ; low = site légitime détourné, exploité ou compromis.
 * Les domaines sont des infrastructures malveillantes : ne pas les visiter directement.
 */

const copycopStorm1516Domains = [
  {
    domain: "aktuell-nachricht.de",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ». Également cité par : Recorded Future (2025-02-13).",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "LLM"]
  },

  {
    domain: "andererseits-seite.de",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "LLM"]
  },

  {
    domain: "armeniadaily.org",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « The Kremlin’s 2026 Election Campaign In Armenia ». Également cité par : Institute for Strategic Dialogue (2026-05-27).",
    source: "EK Strategic Communications Center Report",
    reportUrl: "https://ekstrategies.org/articles/the-kremlins-2026-election-campaign-in-armenia",
    identifiedDate: "2026-06-04",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Élections"]
  },

  {
    domain: "armenianinsider.am",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « All operations on Armenia: Russia’s influence machine targets the vote ».",
    source: "Institute for Strategic Dialogue",
    reportUrl: "https://www.isdglobal.org/digital-dispatch/all-operations-on-armenia-russias-influence-machine-targets-the-vote/",
    identifiedDate: "2026-05-27",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Élections"]
  },

  {
    domain: "bostontimes.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "capitolpulse.org",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Russia-Linked CopyCop Expands to Cover US Elections, Target Political Leaders ».",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/cta-ru-2024-0624.pdf",
    identifiedDate: "2024-06-24",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "USA", "UK", "France", "Élections"]
  },

  {
    domain: "casinohotelvunipalacehotel.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "LLM"]
  },

  {
    domain: "dcweekly.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Nation-states engage in US-focused influence operations ahead of US presidential election ».",
    source: "Microsoft Threat Analysis Center",
    reportUrl: "https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2024/04/MTAC-Report-Elections-Report-Nation-states-engage-in-US-focused-influence-operations-ahead-of-US-presidential-election-04172024.pdf",
    identifiedDate: "2024-04-17",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "USA", "Élections", "Usurpation-Identité"]
  },

  {
    domain: "devend.online",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "medium",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "Amplification-Artificielle", "LLM"]
  },

  {
    domain: "donbass-insider.com",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "medium",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "Amplification-Artificielle", "LLM"]
  },

  {
    domain: "euronews.us.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « CopyCop Targets AI Investment in Armenia ».",
    source: "Recorded Future",
    reportUrl: "https://www.recordedfuture.com/blog/copycop-targets-ai-investment",
    identifiedDate: "2026-08-18",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Technologie", "IA", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "gizmodo.cc",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « CopyCop Targets AI Investment in Armenia ».",
    source: "Recorded Future",
    reportUrl: "https://www.recordedfuture.com/blog/copycop-targets-ai-investment",
    identifiedDate: "2026-08-18",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Technologie", "IA", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "gosuslugi.group",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "haaretz24.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « CopyCop Targets AI Investment in Armenia ».",
    source: "Recorded Future",
    reportUrl: "https://www.recordedfuture.com/blog/copycop-targets-ai-investment",
    identifiedDate: "2026-08-18",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Technologie", "IA", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "infoindependants.fr",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Sombres Influences: Russian and Iranian Influence Networks Target French Elections ». Également cité par : Recorded Future (2024-06-24).",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/TA-2024-0628.pdf",
    identifiedDate: "2024-06-28",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "Élections", "USA", "UK"]
  },

  {
    domain: "londoncrier.news",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Russia-Linked CopyCop Expands to Cover US Elections, Target Political Leaders ».",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/cta-ru-2024-0624.pdf",
    identifiedDate: "2024-06-24",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "USA", "UK", "France", "Élections"]
  },

  {
    domain: "londoncrier.uk",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Russia-Linked CopyCop Expands to Cover US Elections, Target Political Leaders ».",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/cta-ru-2024-0624.pdf",
    identifiedDate: "2024-06-24",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "USA", "UK", "France", "Élections"]
  },

  {
    domain: "mediaalternatif.fr",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Sombres Influences: Russian and Iranian Influence Networks Target French Elections ». Également cité par : Recorded Future (2024-06-24).",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/TA-2024-0628.pdf",
    identifiedDate: "2024-06-28",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "Élections", "USA", "UK"]
  },

  {
    domain: "miamchronicle.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Nation-states engage in US-focused influence operations ahead of US presidential election ».",
    source: "Microsoft Threat Analysis Center",
    reportUrl: "https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2024/04/MTAC-Report-Elections-Report-Nation-states-engage-in-US-focused-influence-operations-ahead-of-US-presidential-election-04172024.pdf",
    identifiedDate: "2024-04-17",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "USA", "Élections"]
  },

  {
    domain: "monitor.falconeye.tech",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Russia-Linked CopyCop Uses LLMs to Weaponize Influence Content at Scale ».",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/cta-2024-0509.pdf",
    identifiedDate: "2024-05-09",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "USA", "UK", "France", "LLM"]
  },

  {
    domain: "politico-24.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « CopyCop Targets AI Investment in Armenia ».",
    source: "Recorded Future",
    reportUrl: "https://www.recordedfuture.com/blog/copycop-targets-ai-investment",
    identifiedDate: "2026-08-18",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Technologie", "IA", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "reseauinternational.net",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "medium",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "Amplification-Artificielle", "LLM"]
  },

  {
    domain: "sengager-ukraine.fr",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Sombres Influences: Russian and Iranian Influence Networks Target French Elections ». Également cité par : Recorded Future (2024-05-09).",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/TA-2024-0628.pdf",
    identifiedDate: "2024-06-28",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "Élections", "USA", "UK", "LLM"]
  },

  {
    domain: "tech-crunch.org",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « CopyCop Targets AI Investment in Armenia ».",
    source: "Recorded Future",
    reportUrl: "https://www.recordedfuture.com/blog/copycop-targets-ai-investment",
    identifiedDate: "2026-08-18",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Technologie", "IA", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "theinteldrop.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Nation-states engage in US-focused influence operations ahead of US presidential election ».",
    source: "Microsoft Threat Analysis Center",
    reportUrl: "https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2024/04/MTAC-Report-Elections-Report-Nation-states-engage-in-US-focused-influence-operations-ahead-of-US-presidential-election-04172024.pdf",
    identifiedDate: "2024-04-17",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "USA", "Élections"]
  },

  {
    domain: "theislander.eu",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "medium",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "Amplification-Artificielle", "LLM"]
  },

  {
    domain: "thelondontimes.co.uk",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « All operations on Armenia: Russia’s influence machine targets the vote ».",
    source: "Institute for Strategic Dialogue",
    reportUrl: "https://www.isdglobal.org/digital-dispatch/all-operations-on-armenia-russias-influence-machine-targets-the-vote/",
    identifiedDate: "2026-05-27",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Élections", "Usurpation-Identité"]
  },

  {
    domain: "timescanada.ca",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « All operations on Armenia: Russia’s influence machine targets the vote ».",
    source: "Institute for Strategic Dialogue",
    reportUrl: "https://www.isdglobal.org/digital-dispatch/all-operations-on-armenia-russias-influence-machine-targets-the-vote/",
    identifiedDate: "2026-05-27",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Arménie", "Élections", "Usurpation-Identité"]
  },

  {
    domain: "trk.falconeye.tech",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Russia-Linked CopyCop Uses LLMs to Weaponize Influence Content at Scale ».",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/cta-2024-0509.pdf",
    identifiedDate: "2024-05-09",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "USA", "UK", "France", "LLM"]
  },

  {
    domain: "usstate.agency",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "LLM"]
  },

  {
    domain: "vtforeignpolicy.com",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "medium",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "Amplification-Artificielle", "LLM"]
  },

  {
    domain: "wehrpflicht.de",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "LLM"]
  },

  {
    domain: "wokeschools.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Analysis of the Russian information manipulation set Storm-1516 ».",
    source: "VIGINUM",
    reportUrl: "https://www.sgdsn.gouv.fr/files/files/Publications/20250507_TLP-CLEAR_NP_SGDSN_VIGINUM_Technical%20report_Storm-1516.pdf",
    identifiedDate: "2025-05-06",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "France", "USA", "Allemagne", "Élections", "LLM"]
  },

  {
    domain: "xn--wochenberblick-berlin-eic.de",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération russe CopyCop / Storm-1516 (John Mark Dougan), faux médias locaux générés par IA. Rapport : « Stimmen aus Moskau: Russian Influence Operations Target German Elections ».",
    source: "Recorded Future",
    reportUrl: "https://go.recordedfuture.com/hubfs/reports/ta-ru-2025-0213.pdf",
    identifiedDate: "2025-02-13",
    riskLevel: "high",
    tags: ["CopycopStorm1516", "Russie", "Allemagne", "Élections"]
  }
];

// =============================================================================
// FONCTIONS UTILITAIRES (OPTIONNELLES)
// =============================================================================

// Filtrer par tag
function filterCopycopStorm1516ByTag(tag) {
  return copycopStorm1516Domains.filter(d => d.tags.includes(tag));
}

// Filtrer par niveau de risque
function filterCopycopStorm1516ByRiskLevel(level) {
  return copycopStorm1516Domains.filter(d => d.riskLevel === level);
}

// Obtenir tous les tags uniques
function getCopycopStorm1516Tags() {
  const allTags = new Set();
  copycopStorm1516Domains.forEach(d => {
    d.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

// Obtenir les statistiques
function getCopycopStorm1516Stats() {
  return {
    total: copycopStorm1516Domains.length,
    highRisk: copycopStorm1516Domains.filter(d => d.riskLevel === "high").length,
    mediumRisk: copycopStorm1516Domains.filter(d => d.riskLevel === "medium").length,
    lowRisk: copycopStorm1516Domains.filter(d => d.riskLevel === "low").length,
    tags: getCopycopStorm1516Tags()
  };
}

// =============================================================================
// EXPORTS ET DISPONIBILITÉ GLOBALE
// =============================================================================

// Export pour Node.js / modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    copycopStorm1516Domains,
    filterCopycopStorm1516ByTag,
    filterCopycopStorm1516ByRiskLevel,
    getCopycopStorm1516Tags,
    getCopycopStorm1516Stats
  };
}

// Disponibilité globale pour le navigateur
if (typeof window !== 'undefined') {
  window.copycopStorm1516Domains = copycopStorm1516Domains;
  window.CopycopStorm1516Utils = {
    filterByTag: filterCopycopStorm1516ByTag,
    filterByRiskLevel: filterCopycopStorm1516ByRiskLevel,
    getTags: getCopycopStorm1516Tags,
    getStats: getCopycopStorm1516Stats
  };
}

// Log de chargement
console.log(`Liste CopyCop / Storm-1516 chargée: ${copycopStorm1516Domains.length} domaines identifiés`);
