// DIMA - Laundromat Database
// Russian propaganda "information laundering" network documented by GMF Alliance for Securing Democracy

/**
 * OPÉRATION LAUNDROMAT
 * ====================
 * 
 * Réseau de "blanchiment d'information" où le contenu de RT.com est republié
 * sur environ 400 domaines tiers pour contourner les sanctions et restrictions.
 * 
 * Source: GMF Alliance for Securing Democracy, University of Amsterdam, ISD
 * Rapport: "The Russian Propaganda Nesting Doll" (Mai 2024)
 * URL: https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf
 */

const laundromatDomains = [
  // Sites avec score de correspondance élevé (>90%) et multiples occurrences
  {
    domain: "azerbaycan24.com",
    matchType: "exact",
    reason: "Site azerbaïdjanais republiant massivement du contenu RT (574 URLs), souvent avec attribution enterrée en fin d'article",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Azerbaïdjan", "Blanchiment-Information", "High-Volume"]
  },
  {
    domain: "thepressunited.com",
    matchType: "exact",
    reason: "Site à correspondance parfaite (96.1% avg) republiant du contenu RT identique ou quasi-identique",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Blanchiment-Information", "High-Match"]
  },
  {
    domain: "ground.news",
    matchType: "exact",
    reason: "Agrégateur de nouvelles présentant une 'diversité de sources' incluant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Agrégateur", "Multi-Source"]
  },
  
  // Réseaux sociaux contournant les restrictions
  {
    domain: "reddit.com",
    matchType: "contains",
    reason: "4e domaine le plus observé malgré l'interdiction de RT. Utilise swentr.site et autres proxies pour contourner les restrictions",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Réseaux-Sociaux", "Contournement", "Reddit"]
  },
  {
    domain: "m.youtube.com",
    matchType: "contains",
    reason: "Articles RT narrés via text-to-speech automatisé pour contourner l'interdiction de chaînes RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "YouTube", "Contournement", "Text-to-Speech"]
  },
  
  // Sites miroirs RT
  {
    domain: "swentr.site",
    matchType: "exact",
    reason: "Domaine miroir officiel de RT enregistré par TV-Novosti le 5 mars 2022, 3 jours après l'interdiction UE",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2022-03-05",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Site-Miroir", "TV-Novosti", "Contournement-Sanctions"]
  },
  
  // Domaines "zombies" réutilisés
  {
    domain: "buypainpills.net",
    matchType: "exact",
    reason: "Domaine zombie réutilisé avec page d'accueil en chinois (loterie) et pages intérieures miroir de RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Domaine-Zombie", "Infrastructure"]
  },
  {
    domain: "davidress.com",
    matchType: "exact",
    reason: "Domaine zombie réutilisé (ancien site de vêtements féminins) avec structure identique à buypainpills.net",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Domaine-Zombie", "Infrastructure"]
  },
  {
    domain: "billerexchange.com",
    matchType: "exact",
    reason: "Domaine zombie réutilisé (ancien site de paiement) avec page accueil en chinois et miroir RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Domaine-Zombie", "Infrastructure"]
  },
  {
    domain: "bkkbn.org",
    matchType: "exact",
    reason: "Domaine zombie réutilisé avec structure identique aux autres domaines zombies du réseau",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Domaine-Zombie", "Infrastructure"]
  },
  
  // Faux médias locaux - Big News Network
  {
    domain: "irishsun.com",
    matchType: "exact",
    reason: "Faux média local irlandais, partie du Big News Network (UAE). 33 URLs observées avec republication RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Irlande", "Faux-Média-Local", "Big-News-Network"]
  },
  {
    domain: "bignewsnetwork.com",
    matchType: "exact",
    reason: "Réseau de syndication UAE gérant des centaines de faux médias locaux. Plus grande source de contenu RT au UK",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "UAE", "Faux-Média-Local", "Réseau", "Infrastructure"]
  },
  {
    domain: "malaysiasun.com",
    matchType: "exact",
    reason: "Faux média local malaisien, propriété du Big News Network",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Malaisie", "Faux-Média-Local", "Big-News-Network"]
  },
  {
    domain: "dailytelegraph.co.nz",
    matchType: "exact",
    reason: "Faux média local néo-zélandais se présentant comme 'indépendant'. Liste des contributeurs RT comme auteurs",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Nouvelle-Zélande", "Faux-Média-Local"]
  },
  {
    domain: "sanfranciscotelegraph.com",
    matchType: "exact",
    reason: "Faux média local SF, articles RT sans attribution ni lien source, byline générique 'San Francisco Telegraph'",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "USA", "Faux-Média-Local", "Attribution-Masquée"]
  },
  {
    domain: "kigalidailynews.com",
    matchType: "exact",
    reason: "Faux média rwandais avec section 'Russia-Ukraine War'. Articles RT attribués à auteur fictif 'Esha Saxena Mandala'",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Rwanda", "Faux-Média-Local", "Auteur-Fictif"]
  },
  {
    domain: "capitalethiopia.com",
    matchType: "exact",
    reason: "Faux média local éthiopien republiant du contenu RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Éthiopie", "Faux-Média-Local"]
  },
  
  // Médias d'État étrangers
  {
    domain: "english.almanar.com.lb",
    matchType: "exact",
    reason: "Al Manar TV (Hezbollah), désigné 'entité terroriste spéciale' aux USA. Republie RT/Sputnik/Tass exclusivement",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Liban", "Hezbollah", "Média-État", "Terrorisme"]
  },
  {
    domain: "en.mehrnews.com",
    matchType: "exact",
    reason: "Mehr News Agency (Iran), média d'État. Republie RT verbatim souvent sans attribution claire",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Iran", "Média-État"]
  },
  {
    domain: "mtv.com.lb",
    matchType: "exact",
    reason: "Chaîne câblée libanaise (MTV Liban, pas MTV US) avec score correspondance 98.1%",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Liban", "Média"]
  },
  {
    domain: "tasnimnews.com",
    matchType: "exact",
    reason: "Agence de presse iranienne republiant du contenu RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Iran", "Média-État"]
  },
  {
    domain: "farsnews.ir",
    matchType: "exact",
    reason: "Fars News Agency (Iran), média d'État republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Iran", "Média-État"]
  },
  {
    domain: "khmertimeskh.com",
    matchType: "exact",
    reason: "Khmer Times (Cambodge), média d'État republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Cambodge", "Média-État"]
  },
  {
    domain: "nna-leb.gov.lb",
    matchType: "exact",
    reason: "National News Agency (Liban), agence d'État republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Liban", "Média-État"]
  },
  {
    domain: "herald.co.zw",
    matchType: "exact",
    reason: "The Herald (Zimbabwe), média d'État republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Zimbabwe", "Média-État"]
  },
  {
    domain: "sundaymail.co.zw",
    matchType: "exact",
    reason: "Sunday Mail (Zimbabwe), média d'État republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Zimbabwe", "Média-État"]
  },
  {
    domain: "zbcnews.co.zw",
    matchType: "exact",
    reason: "Zimbabwe Broadcasting Corporation, média d'État",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Zimbabwe", "Média-État"]
  },
  {
    domain: "saba.ye",
    matchType: "exact",
    reason: "Saba News Agency (Yémen), média d'État",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Yémen", "Média-État"]
  },
  {
    domain: "nigerianobservernews.com",
    matchType: "exact",
    reason: "Nigerian Observer, média capturé/d'État republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Nigéria", "Média-État"]
  },
  {
    domain: "neweralive.na",
    matchType: "exact",
    reason: "New Era (Namibie), média d'État",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Namibie", "Média-État"]
  },
  {
    domain: "en.alghadeertv.iq",
    matchType: "exact",
    reason: "Al Ghadeer TV (Irak), chaîne pro-iranienne, organisation Badr republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Irak", "Pro-Iran"]
  },
  
  // Sites conspirationnistes et extrémistes
  {
    domain: "infowars.com",
    matchType: "exact",
    reason: "Site conspirationniste d'Alex Jones, republie RT depuis 2017 sans permission (14 observations)",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "USA", "Conspiration", "InfoWars"]
  },
  {
    domain: "zerohedge.com",
    matchType: "exact",
    reason: "Blog financier bulgare, republie RT avec attribution masquée via swentr.site, accusé par US de diffuser propagande russe",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Finance", "Attribution-Masquée"]
  },
  {
    domain: "veteranstoday.com",
    matchType: "exact",
    reason: "Site pro-Kremlin depuis longtemps connecté à propagande russe",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Pro-Kremlin"]
  },
  {
    domain: "greatawakening.win",
    matchType: "exact",
    reason: "Site QAnon republiant contenu RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "QAnon", "Conspiration"]
  },
  {
    domain: "qresear.ch",
    matchType: "exact",
    reason: "Site QAnon republiant contenu RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "QAnon", "Conspiration"]
  },
  {
    domain: "dailystormer.ir",
    matchType: "exact",
    reason: "Site néo-nazi d'extrême-droite (domaine alternatif .ir)",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Néo-Nazi", "Extrême-Droite", "Haine"]
  },
  {
    domain: "jewworldorder.org",
    matchType: "exact",
    reason: "Site antisémite promouvant négationnisme de l'Holocauste et idéologies racistes",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Antisémitisme", "Négationnisme", "Haine"]
  },
  {
    domain: "gab.com",
    matchType: "contains",
    reason: "Plateforme alternative hébergeant comptes nationalistes blancs partageant contenu RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Gab", "Extrême-Droite"]
  },
  {
    domain: "8kun.top",
    matchType: "contains",
    reason: "Forum imageboard republiant contenu RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "8kun", "Forum"]
  },
  {
    domain: "stormfront.org",
    matchType: "exact",
    reason: "Forum nationaliste blanc/néo-nazi",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Néo-Nazi", "Nationalisme-Blanc", "Haine"]
  },
  
  // Sites "conspiritualité"
  {
    domain: "yogaesoteric.net",
    matchType: "exact",
    reason: "Site conspiritualité lié à MISA (Roumanie). Fondateur arrêté en 2023 pour trafic humain, viol, enlèvement",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Roumanie", "Conspiritualité", "Trafic-Humain"]
  },
  {
    domain: "davidicke.com",
    matchType: "exact",
    reason: "Site de conspiration géré par David Icke, interdit Pays-Bas. Republie RT souvent via InfoWars",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "UK", "Conspiration", "Conspiritualité"]
  },
  {
    domain: "eraoflight.com",
    matchType: "exact",
    reason: "Site conspiritualité New Age republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Conspiritualité", "New-Age"]
  },
  {
    domain: "cassiopaea.org",
    matchType: "exact",
    reason: "Site conspiritualité republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Conspiritualité"]
  },
  
  // Sites religieux/spirituels
  {
    domain: "onevoice4jesusministries.com",
    matchType: "exact",
    reason: "Ministère catholique conservateur Texas, article RT sur sanctions syriennes parmi contenu scripturaire",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "low",
    tags: ["Laundromat", "Russie", "USA", "Religion", "Catholique"]
  },
  {
    domain: "genuinechristianitynow.com",
    matchType: "exact",
    reason: "Site 'Christian Liberty' republiant RT verbatim sans attribution",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Religion", "Chrétien"]
  },
  {
    domain: "endtimesprophecywatch.com",
    matchType: "exact",
    reason: "Site focalisé sur 'rapture' republiant RT sans attribution",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Religion", "Eschatologie"]
  },
  {
    domain: "newageislam.com",
    matchType: "exact",
    reason: "Site promouvant 'New Age Islam' republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Religion", "Islam", "New-Age"]
  },
  
  // Sites masculins/intérêts divers
  {
    domain: "manstuffnews.com",
    matchType: "exact",
    reason: "Site 'intérêts masculins' (grillades, sports, voitures) avec section 'world news' exclusivement RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Lifestyle"]
  },
  
  // Agrégateurs et flux RSS - Réseau Shafaqna
  {
    domain: "pk.shafaqna.com",
    matchType: "exact",
    reason: "Réseau Shafaqna Pakistan (100+ sous-domaines, 65 pays), agrégateur Shia utilisant flux RSS RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Pakistan", "Agrégateur", "RSS", "Shia"]
  },
  {
    domain: "usa.shafaqna.com",
    matchType: "exact",
    reason: "Réseau Shafaqna USA, agrégateur utilisant flux RSS RT/Tass",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "USA", "Agrégateur", "RSS"]
  },
  {
    domain: "syria.shafaqna.com",
    matchType: "exact",
    reason: "Réseau Shafaqna Syrie, agrégateur utilisant flux RSS RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Syrie", "Agrégateur", "RSS"]
  },
  {
    domain: "shia.shafaqna.com",
    matchType: "exact",
    reason: "Réseau Shafaqna section Shia, agrégateur RSS",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Agrégateur", "RSS", "Shia"]
  },
  {
    domain: "economynews.shafaqna.com",
    matchType: "exact",
    reason: "Réseau Shafaqna section économie, agrégateur RSS",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Agrégateur", "RSS"]
  },
  
  // Sites pro-palestiniens
  {
    domain: "shoah.org.uk",
    matchType: "exact",
    reason: "Site anti-sioniste 'Zio-Nazi oppression', republie RT sur Moldova, économie chinoise (hors Moyen-Orient)",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "UK", "Pro-Palestine", "Antisémitisme"]
  },
  {
    domain: "palestinechronicle.com",
    matchType: "exact",
    reason: "Site pro-palestinien republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Pro-Palestine"]
  },
  {
    domain: "palestinetoday.quora.com",
    matchType: "exact",
    reason: "Espace Quora pro-palestinien republiant RT",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "Pro-Palestine", "Quora"]
  },
  
  // Autres sites significatifs (>80% match, 5+ observations)
  {
    domain: "en.pressbee.net",
    matchType: "exact",
    reason: "Site Press Bee avec 537 URLs RT, score 83% (2e plus observé)",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "High-Volume"]
  },
  {
    domain: "worldandwe.com",
    matchType: "exact",
    reason: "Site avec score correspondance 93.4%, 58 URLs",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "High-Match"]
  },
  {
    domain: "sott.net",
    matchType: "exact",
    reason: "Site avec score 83.6%, 35 URLs observées",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie"]
  },
  {
    domain: "globalvillagespace.com",
    matchType: "exact",
    reason: "Site avec score 91.9%, 25 URLs",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "High-Match"]
  },
  {
    domain: "theinteldrop.org",
    matchType: "exact",
    reason: "Site avec score 82.2%, 23 URLs",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie"]
  },
  {
    domain: "lebanonnewsapp.com",
    matchType: "exact",
    reason: "Application actualités Liban, score 87.9%",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Liban"]
  },
  {
    domain: "uaenewsapp.com",
    matchType: "exact",
    reason: "Application actualités UAE",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "medium",
    tags: ["Laundromat", "Russie", "UAE"]
  },
  {
    domain: "qatarnewsapp.com",
    matchType: "exact",
    reason: "Application actualités Qatar, score 81.8%",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Qatar"]
  },
  {
    domain: "alethonews.com",
    matchType: "exact",
    reason: "Site grec republiant RT, utilisé sur Reddit pour contourner ban",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "Grèce", "Contournement"]
  },
  {
    domain: "dissentwatch.com",
    matchType: "exact",
    reason: "Site avec score 82.4%",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie"]
  },
  {
    domain: "newsrescue.com",
    matchType: "exact",
    reason: "Site avec score 93.6%, correspondance élevée",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie", "High-Match"]
  },
  {
    domain: "straightlinelogic.com",
    matchType: "exact",
    reason: "Site avec score 85.8%",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie"]
  },
  {
    domain: "pressenza.com",
    matchType: "exact",
    reason: "Agence de presse internationale, score 85.4%",
    source: "GMF Alliance for Securing Democracy",
    reportUrl: "https://securingdemocracy.gmfus.org/wp-content/uploads/2024/05/Laundromat-Paper.pdf",
    identifiedDate: "2024-05-02",
    riskLevel: "high",
    tags: ["Laundromat", "Russie"]
  }

  // NOTE: Le rapport identifie 386 domaines au total dans son appendice (pages 40-47).
  // Cette liste contient les domaines les plus significatifs avec scores de correspondance
  // élevés (>80%) et mentions dans le corps du rapport. Pour une liste complète,
  // consulter directement l'Appendix du rapport PDF.
];

// Export pour Node.js / modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { laundromatDomains };
}

// Disponibilité globale pour le navigateur
if (typeof window !== 'undefined') {
  window.laundromatDomains = laundromatDomains;
}

// Log de chargement
console.log(`Liste Laundromat chargée: ${laundromatDomains.length} domaines identifiés`);