// DIMA - Base de données d'opération : Autres opérations (privées / régionales)
// Généré le 2026-10-03 à partir de github.com/tripkrant/IO-Campaign-Collections
// 41 domaines issus de 16 rapport(s) public(s)

/**
 * INSTRUCTIONS D'UTILISATION
 * ==========================
 *
 * Ce fichier est déclaré dans manifest.json (content_scripts) AVANT
 * modules/Suspicioussitesmanager.js, qui détecte la variable globale
 * `diversAutresDomains` et l'enregistre comme source.
 *
 * riskLevel : high = site opéré/attribué à l'opération ou infrastructure d'hameçonnage ;
 *             medium = relais, média d'État, opérateur ; low = site légitime détourné, exploité ou compromis.
 * Les domaines sont des infrastructures malveillantes : ne pas les visiter directement.
 */

const diversAutresDomains = [
  {
    domain: "agitanews.net",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (BlackCore (Angola)). Rapport : « BlackCore’s Influence Operations for Hire ».",
    source: "Citizen Lab",
    reportUrl: "https://citizenlab.ca/research/blackcores-influence-operations-for-hire/",
    identifiedDate: "2026-09-17",
    riskLevel: "high",
    tags: ["BlackCore_Angola", "Angola"]
  },

  {
    domain: "alo.rs",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération d'influence (Serbian government-linked op (amplified media)). Rapport : « “Fighting Like a Lion for Serbia”: An Analysis of Government-Linked Influence Operations in Serbia ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://fsi-live.s3.us-west-1.amazonaws.com/s3fs-public/serbia_march_twitter.pdf",
    identifiedDate: "2020-04-02",
    riskLevel: "medium",
    tags: ["Serbian_government_linked_op_amplified_media", "Serbie", "Amplification-Artificielle"]
  },

  {
    domain: "ar-gr.com",
    matchType: "exact",
    reason: "Domaine de l'opérateur ou de l'entreprise derrière l'opération — opération d'influence (Archimedes Group (Israel)). Rapport : « Inauthentic Israeli Facebook Assets Target the World ».",
    source: "DFRLab",
    reportUrl: "https://medium.com/dfrlab/inauthentic-israeli-facebook-assets-target-the-world-281ad7254264",
    identifiedDate: "2019-05-17",
    riskLevel: "medium",
    tags: ["Archimedes_Group_Israel", "Israël", "Afrique", "Opérateur"]
  },

  {
    domain: "asktruth24.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Operation Red Card). Rapport : « Operation Red Card ».",
    source: "Graphika",
    reportUrl: "https://public-assets.graphika.com/reports/graphika_report_operation_redcard.pdf",
    identifiedDate: "2020-03-02",
    riskLevel: "high",
    tags: ["Operation_Red_Card", "Inconnue", "UK"]
  },

  {
    domain: "catrachonews.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Venezuela/US-based CIB). Rapport : « Meta’s Adversarial Threat Report, First Quarter 2023 ».",
    source: "Meta",
    reportUrl: "https://about.fb.com/wp-content/uploads/2023/05/Meta-Quarterly-Adversarial-Threat-Report-Q1-2023.pdf",
    identifiedDate: "2023-05-03",
    riskLevel: "high",
    tags: ["Venezuela_US_based_CIB", "Venezuela", "Afrique-Ouest", "Amérique-latine", "Europe", "Élections"]
  },

  {
    domain: "countermisinformation.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Hidden Charkha). Rapport : « Influence Operations and Conflict Escalation in South Asia ».",
    source: "Recorded Future",
    reportUrl: "https://assets.recordedfuture.com/insikt-report-pdfs/2025/cta-2025-0902.pdf",
    identifiedDate: "2025-09-02",
    riskLevel: "high",
    tags: ["Hidden_Charkha", "Inde", "Pakistan"]
  },

  {
    domain: "cultureofpersia.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Mind Force – Palestinian cluster). Rapport : « Mind Farce: An Investigation into an Inauthentic Facebook and Instagram Network Linked to an Israeli Public Relations Firm ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:vh191ny7721/20220804%20Mind%20Force.pdf",
    identifiedDate: "2022-08-04",
    riskLevel: "high",
    tags: ["Mind_Force_Palestinian_cluster", "Israël", "Palestine", "Angola", "Iran"]
  },

  {
    domain: "eleccionesguate2023.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Venezuela/US-based CIB). Rapport : « Meta’s Adversarial Threat Report, First Quarter 2023 ».",
    source: "Meta",
    reportUrl: "https://about.fb.com/wp-content/uploads/2023/05/Meta-Quarterly-Adversarial-Threat-Report-Q1-2023.pdf",
    identifiedDate: "2023-05-03",
    riskLevel: "high",
    tags: ["Venezuela_US_based_CIB", "Venezuela", "Afrique-Ouest", "Amérique-latine", "Europe", "Élections"]
  },

  {
    domain: "empoweringghana.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Ghana election covert IO). Rapport : « Disrupting malicious uses of our models: an update February 2025 ».",
    source: "OpenAI",
    reportUrl: "https://cdn.openai.com/threat-intelligence-reports/disrupting-malicious-uses-of-our-models-february-2025-update.pdf",
    identifiedDate: "2025-02-21",
    riskLevel: "high",
    tags: ["Ghana_election_covert_IO", "Inconnue", "USA", "Ghana", "Amérique-latine", "Élections", "LLM"]
  },

  {
    domain: "evenpolitics.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (EvenPolitics). Rapport : « Information Operations Targeting 2022 U.S. Midterm Elections Include Trolling, Narratives Surrounding Specific Races, Politicians ». Également cité par : Election Integrity Partnership (2022-11-01).",
    source: "Mandiant",
    reportUrl: "https://www.mandiant.com/resources/blog/information-operations-2022-midterm-elections",
    identifiedDate: "2022-12-19",
    riskLevel: "high",
    tags: ["EvenPolitics", "Inconnue", "USA", "Élections"]
  },

  {
    domain: "fafwatch.xyz",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (GTG-50029). Rapport : « Detecting and countering misuse of AI: September 2026 ».",
    source: "Anthropic",
    reportUrl: "https://www.anthropic.com/threat-intelligence-report-september-2026",
    identifiedDate: "2026-09-10",
    riskLevel: "high",
    tags: ["GTG_50029", "Inconnue", "Multi-pays", "LLM"]
  },

  {
    domain: "flaviojapa.com.br",
    matchType: "exact",
    reason: "Domaine de l'opérateur ou de l'entreprise derrière l'opération — opération d'influence (Movimento Transparência de Itanhaém / Presença Online). Rapport : « How Bots Spread a Viral Disinformation Video Prior to the 2022 Brazilian Presidential Election ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/brazlilian-election-disinformation-campaign-2022.pdf",
    identifiedDate: "2023-04-19",
    riskLevel: "medium",
    tags: ["Movimento_Transpar_ncia_de_Itanha_m_Presen_a_Online", "Brésil", "Élections", "Opérateur"]
  },

  {
    domain: "haqqin.az",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération d'influence (Azerbaijan-linked sockpuppet network (amplified)). Rapport : « Sockpuppets Target Nagorno-Karabakh ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:ym664kv8876/twitter-takedown-about-azerbaijan-feb-2021.pdf",
    identifiedDate: "2021-02-01",
    riskLevel: "medium",
    tags: ["Azerbaijan_linked_sockpuppet_network_amplified", "Azerbaïdjan", "Arménie", "Amplification-Artificielle"]
  },

  {
    domain: "hashtag-jordanians.blogspot.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Jordanian domestic network). Rapport : « My Heart Loves the Army: An Investigation into a Jordanian Disinformation Campaign on Facebook, TikTok and Twitter ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:hh528nc2557/20210707-jordan-fb-takedown.pdf",
    identifiedDate: "2021-07-07",
    riskLevel: "high",
    tags: ["Jordanian_domestic_network", "Jordanie"]
  },

  {
    domain: "hondurasleaks.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Venezuela/US-based CIB). Rapport : « Meta’s Adversarial Threat Report, First Quarter 2023 ».",
    source: "Meta",
    reportUrl: "https://about.fb.com/wp-content/uploads/2023/05/Meta-Quarterly-Adversarial-Threat-Report-Q1-2023.pdf",
    identifiedDate: "2023-05-03",
    riskLevel: "high",
    tags: ["Venezuela_US_based_CIB", "Venezuela", "Afrique-Ouest", "Amérique-latine", "Europe", "Élections"]
  },

  {
    domain: "informer.rs",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération d'influence (Serbian government-linked op (amplified media)). Rapport : « “Fighting Like a Lion for Serbia”: An Analysis of Government-Linked Influence Operations in Serbia ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://fsi-live.s3.us-west-1.amazonaws.com/s3fs-public/serbia_march_twitter.pdf",
    identifiedDate: "2020-04-02",
    riskLevel: "medium",
    tags: ["Serbian_government_linked_op_amplified_media", "Serbie", "Amplification-Artificielle"]
  },

  {
    domain: "luandaleaks.net",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Mind Force – Angolan cluster). Rapport : « Mind Farce: An Investigation into an Inauthentic Facebook and Instagram Network Linked to an Israeli Public Relations Firm ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:vh191ny7721/20220804%20Mind%20Force.pdf",
    identifiedDate: "2022-08-04",
    riskLevel: "high",
    tags: ["Mind_Force_Angolan_cluster", "Israël", "Palestine", "Angola", "Iran"]
  },

  {
    domain: "manchesterweeklyuk.wordpress.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Operation Red Card). Rapport : « Operation Red Card ».",
    source: "Graphika",
    reportUrl: "https://public-assets.graphika.com/reports/graphika_report_operation_redcard.pdf",
    identifiedDate: "2020-03-02",
    riskLevel: "high",
    tags: ["Operation_Red_Card", "Inconnue", "UK"]
  },

  {
    domain: "marcelovitorino.com.br",
    matchType: "exact",
    reason: "Domaine de l'opérateur ou de l'entreprise derrière l'opération — opération d'influence (Movimento Transparência de Itanhaém / Presença Online). Rapport : « How Bots Spread a Viral Disinformation Video Prior to the 2022 Brazilian Presidential Election ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/brazlilian-election-disinformation-campaign-2022.pdf",
    identifiedDate: "2023-04-19",
    riskLevel: "medium",
    tags: ["Movimento_Transpar_ncia_de_Itanha_m_Presen_a_Online", "Brésil", "Élections", "Opérateur"]
  },

  {
    domain: "mind-force.net",
    matchType: "exact",
    reason: "Domaine de l'opérateur ou de l'entreprise derrière l'opération — opération d'influence (Mind Force (Israeli PR firm)). Rapport : « Mind Farce: An Investigation into an Inauthentic Facebook and Instagram Network Linked to an Israeli Public Relations Firm ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:vh191ny7721/20220804%20Mind%20Force.pdf",
    identifiedDate: "2022-08-04",
    riskLevel: "medium",
    tags: ["Mind_Force_Israeli_PR_firm", "Israël", "Palestine", "Angola", "Iran", "Opérateur"]
  },

  {
    domain: "mirrorherald.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Operation Red Card). Rapport : « Operation Red Card ».",
    source: "Graphika",
    reportUrl: "https://public-assets.graphika.com/reports/graphika_report_operation_redcard.pdf",
    identifiedDate: "2020-03-02",
    riskLevel: "high",
    tags: ["Operation_Red_Card", "Inconnue", "UK"]
  },

  {
    domain: "newscomworld.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Pro-Indian Army covert IO). Rapport : « My Heart Belongs to Kashmir: An Analysis of a Pro-Indian Army Covert Influence Operation on Twitter ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:zs105tw7107/20220921%20India%20takedown.pdf",
    identifiedDate: "2022-09-21",
    riskLevel: "high",
    tags: ["Pro_Indian_Army_covert_IO", "Inde", "Pakistan", "Chine"]
  },

  {
    domain: "newsofjordan.wordpress.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Jordanian domestic network). Rapport : « My Heart Loves the Army: An Investigation into a Jordanian Disinformation Campaign on Facebook, TikTok and Twitter ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:hh528nc2557/20210707-jordan-fb-takedown.pdf",
    identifiedDate: "2021-07-07",
    riskLevel: "high",
    tags: ["Jordanian_domestic_network", "Jordanie"]
  },

  {
    domain: "nonagenda.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Zero Zeno (STOIC, Israel)). Rapport : « Disrupting deceptive uses of AI by covert influence operations ».",
    source: "OpenAI",
    reportUrl: "https://downloads.ctfassets.net/kftzwdyauwt9/5IMxzTmUclSOAcWUXbkVrK/3cfab518e6b10789ab8843bcca18b633/Threat_Intel_Report.pdf",
    identifiedDate: "2024-05-30",
    riskLevel: "high",
    tags: ["Zero_Zeno_STOIC_Israel", "Israël", "Multi-pays", "LLM"]
  },

  {
    domain: "novosti.az",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération d'influence (Azerbaijan-linked sockpuppet network (amplified)). Rapport : « Sockpuppets Target Nagorno-Karabakh ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:ym664kv8876/twitter-takedown-about-azerbaijan-feb-2021.pdf",
    identifiedDate: "2021-02-01",
    riskLevel: "medium",
    tags: ["Azerbaijan_linked_sockpuppet_network_amplified", "Azerbaïdjan", "Arménie", "Amplification-Artificielle"]
  },

  {
    domain: "pink.rs",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération d'influence (Serbian government-linked op (amplified media)). Rapport : « “Fighting Like a Lion for Serbia”: An Analysis of Government-Linked Influence Operations in Serbia ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://fsi-live.s3.us-west-1.amazonaws.com/s3fs-public/serbia_march_twitter.pdf",
    identifiedDate: "2020-04-02",
    riskLevel: "medium",
    tags: ["Serbian_government_linked_op_amplified_media", "Serbie", "Amplification-Artificielle"]
  },

  {
    domain: "policenationale.cc",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (GTG-50014). Rapport : « Detecting and countering misuse of AI: September 2026 ».",
    source: "Anthropic",
    reportUrl: "https://www.anthropic.com/threat-intelligence-report-september-2026",
    identifiedDate: "2026-09-10",
    riskLevel: "high",
    tags: ["GTG_50014", "Inconnue", "Multi-pays", "LLM", "Usurpation-Identité"]
  },

  {
    domain: "presencaonline.com",
    matchType: "exact",
    reason: "Domaine de l'opérateur ou de l'entreprise derrière l'opération — opération d'influence (Movimento Transparência de Itanhaém / Presença Online). Rapport : « How Bots Spread a Viral Disinformation Video Prior to the 2022 Brazilian Presidential Election ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/brazlilian-election-disinformation-campaign-2022.pdf",
    identifiedDate: "2023-04-19",
    riskLevel: "medium",
    tags: ["Movimento_Transpar_ncia_de_Itanha_m_Presen_a_Online", "Brésil", "Élections", "Opérateur"]
  },

  {
    domain: "prod-artfkt.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (GTG-50029). Rapport : « Detecting and countering misuse of AI: September 2026 ».",
    source: "Anthropic",
    reportUrl: "https://www.anthropic.com/threat-intelligence-report-september-2026",
    identifiedDate: "2026-09-10",
    riskLevel: "high",
    tags: ["GTG_50029", "Inconnue", "Multi-pays", "LLM"]
  },

  {
    domain: "raventribune.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Operation Red Card). Rapport : « Operation Red Card ».",
    source: "Graphika",
    reportUrl: "https://public-assets.graphika.com/reports/graphika_report_operation_redcard.pdf",
    identifiedDate: "2020-03-02",
    riskLevel: "high",
    tags: ["Operation_Red_Card", "Inconnue", "UK"]
  },

  {
    domain: "redalmac.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (ALMAC / Chalecos Amarillos network). Rapport : « Colombian Election Disinformation Networks – Identifying the Role of Paramilitary Groups ».",
    source: "Nisos",
    reportUrl: "https://6068438.fs1.hubspotusercontent-na1.net/hubfs/6068438/colombian-election-disinformation-networks.pdf",
    identifiedDate: "2022-12-19",
    riskLevel: "high",
    tags: ["ALMAC_Chalecos_Amarillos_network", "Colombie", "Élections"]
  },

  {
    domain: "sns.org.rs",
    matchType: "exact",
    reason: "Domaine de l'opérateur ou de l'entreprise derrière l'opération — opération d'influence (Serbian government-linked op (linked sites)). Rapport : « “Fighting Like a Lion for Serbia”: An Analysis of Government-Linked Influence Operations in Serbia ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://fsi-live.s3.us-west-1.amazonaws.com/s3fs-public/serbia_march_twitter.pdf",
    identifiedDate: "2020-04-02",
    riskLevel: "medium",
    tags: ["Serbian_government_linked_op_linked_sites", "Serbie", "Opérateur"]
  },

  {
    domain: "soraki.cc",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (GTG-50014). Rapport : « Detecting and countering misuse of AI: September 2026 ».",
    source: "Anthropic",
    reportUrl: "https://www.anthropic.com/threat-intelligence-report-september-2026",
    identifiedDate: "2026-09-10",
    riskLevel: "high",
    tags: ["GTG_50014", "Inconnue", "Multi-pays", "LLM"]
  },

  {
    domain: "soraki.work",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (GTG-50014). Rapport : « Detecting and countering misuse of AI: September 2026 ».",
    source: "Anthropic",
    reportUrl: "https://www.anthropic.com/threat-intelligence-report-september-2026",
    identifiedDate: "2026-09-10",
    riskLevel: "high",
    tags: ["GTG_50014", "Inconnue", "Multi-pays", "LLM"]
  },

  {
    domain: "t3lem.org",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Mind Force – Palestinian cluster). Rapport : « Mind Farce: An Investigation into an Inauthentic Facebook and Instagram Network Linked to an Israeli Public Relations Firm ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:vh191ny7721/20220804%20Mind%20Force.pdf",
    identifiedDate: "2022-08-04",
    riskLevel: "high",
    tags: ["Mind_Force_Palestinian_cluster", "Israël", "Palestine", "Angola", "Iran"]
  },

  {
    domain: "the-good-samaritan.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Zero Zeno (STOIC, Israel)). Rapport : « Disrupting deceptive uses of AI by covert influence operations ».",
    source: "OpenAI",
    reportUrl: "https://downloads.ctfassets.net/kftzwdyauwt9/5IMxzTmUclSOAcWUXbkVrK/3cfab518e6b10789ab8843bcca18b633/Threat_Intel_Report.pdf",
    identifiedDate: "2024-05-30",
    riskLevel: "high",
    tags: ["Zero_Zeno_STOIC_Israel", "Israël", "Multi-pays", "LLM"]
  },

  {
    domain: "today.az",
    matchType: "exact",
    reason: "Site relais ayant amplifié les contenus de l'opération — opération d'influence (Azerbaijan-linked sockpuppet network (amplified)). Rapport : « Sockpuppets Target Nagorno-Karabakh ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://stacks.stanford.edu/file/druid:ym664kv8876/twitter-takedown-about-azerbaijan-feb-2021.pdf",
    identifiedDate: "2021-02-01",
    riskLevel: "medium",
    tags: ["Azerbaijan_linked_sockpuppet_network_amplified", "Azerbaïdjan", "Arménie", "Amplification-Artificielle"]
  },

  {
    domain: "truenewssource.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Operation Red Card). Rapport : « Operation Red Card ».",
    source: "Graphika",
    reportUrl: "https://public-assets.graphika.com/reports/graphika_report_operation_redcard.pdf",
    identifiedDate: "2020-03-02",
    riskLevel: "high",
    tags: ["Operation_Red_Card", "Inconnue", "UK"]
  },

  {
    domain: "uc4canada.com",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Zero Zeno (STOIC, Israel)). Rapport : « Disrupting deceptive uses of AI by covert influence operations ».",
    source: "OpenAI",
    reportUrl: "https://downloads.ctfassets.net/kftzwdyauwt9/5IMxzTmUclSOAcWUXbkVrK/3cfab518e6b10789ab8843bcca18b633/Threat_Intel_Report.pdf",
    identifiedDate: "2024-05-30",
    riskLevel: "high",
    tags: ["Zero_Zeno_STOIC_Israel", "Israël", "Multi-pays", "LLM"]
  },

  {
    domain: "ufnews.io",
    matchType: "exact",
    reason: "Site attribué à l'opération — opération d'influence (Zero Zeno (STOIC, Israel)). Rapport : « Disrupting deceptive uses of AI by covert influence operations ».",
    source: "OpenAI",
    reportUrl: "https://downloads.ctfassets.net/kftzwdyauwt9/5IMxzTmUclSOAcWUXbkVrK/3cfab518e6b10789ab8843bcca18b633/Threat_Intel_Report.pdf",
    identifiedDate: "2024-05-30",
    riskLevel: "high",
    tags: ["Zero_Zeno_STOIC_Israel", "Israël", "Multi-pays", "LLM"]
  },

  {
    domain: "vucic.rs",
    matchType: "exact",
    reason: "Domaine de l'opérateur ou de l'entreprise derrière l'opération — opération d'influence (Serbian government-linked op (linked sites)). Rapport : « “Fighting Like a Lion for Serbia”: An Analysis of Government-Linked Influence Operations in Serbia ».",
    source: "Stanford Internet Observatory",
    reportUrl: "https://fsi-live.s3.us-west-1.amazonaws.com/s3fs-public/serbia_march_twitter.pdf",
    identifiedDate: "2020-04-02",
    riskLevel: "medium",
    tags: ["Serbian_government_linked_op_linked_sites", "Serbie", "Opérateur"]
  }
];

// =============================================================================
// FONCTIONS UTILITAIRES (OPTIONNELLES)
// =============================================================================

// Filtrer par tag
function filterDiversAutresByTag(tag) {
  return diversAutresDomains.filter(d => d.tags.includes(tag));
}

// Filtrer par niveau de risque
function filterDiversAutresByRiskLevel(level) {
  return diversAutresDomains.filter(d => d.riskLevel === level);
}

// Obtenir tous les tags uniques
function getDiversAutresTags() {
  const allTags = new Set();
  diversAutresDomains.forEach(d => {
    d.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

// Obtenir les statistiques
function getDiversAutresStats() {
  return {
    total: diversAutresDomains.length,
    highRisk: diversAutresDomains.filter(d => d.riskLevel === "high").length,
    mediumRisk: diversAutresDomains.filter(d => d.riskLevel === "medium").length,
    lowRisk: diversAutresDomains.filter(d => d.riskLevel === "low").length,
    tags: getDiversAutresTags()
  };
}

// =============================================================================
// EXPORTS ET DISPONIBILITÉ GLOBALE
// =============================================================================

// Export pour Node.js / modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    diversAutresDomains,
    filterDiversAutresByTag,
    filterDiversAutresByRiskLevel,
    getDiversAutresTags,
    getDiversAutresStats
  };
}

// Disponibilité globale pour le navigateur
if (typeof window !== 'undefined') {
  window.diversAutresDomains = diversAutresDomains;
  window.DiversAutresUtils = {
    filterByTag: filterDiversAutresByTag,
    filterByRiskLevel: filterDiversAutresByRiskLevel,
    getTags: getDiversAutresTags,
    getStats: getDiversAutresStats
  };
}

// Log de chargement
console.log(`Liste Autres opérations (privées / régionales) chargée: ${diversAutresDomains.length} domaines identifiés`);
