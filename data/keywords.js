// DIMA Enhanced Keywords Database
// Enhanced keyword patterns for manipulation technique detection

const DIMA_ENHANCED_KEYWORDS = {
  TE0111: {
    core: ["exemple", "cas", "témoignage", "example", "case", "testimony"],
    variants: {
      formal: ["illustration", "démonstration", "spécimen"],
      informal: ["vécu", "expérience unique"],
      intensity: {
        weak: ["petit exemple", "simple cas"],
        strong: ["exemple frappant", "cas édifiant", "témoignage bouleversant"],
      },
    },
    patterns: [
      /(?:par\s+exemple|for\s+example|comme\s+dans\s+le\s+cas)/i,
      /(?:prenons\s+l'exemple|take\s+the\s+example)/i,
    ],
  },

  TE0121: {
  core: [
    "partout", "everywhere", "de plus en plus", "more and more",
    "fréquent", "frequent", "épidémie", "epidemic", "sans cesse",
    "constantly", "en permanence", "all the time", "se répand",
    "spreading", "prolifère", "multiplies", "tendance", "trend",
    "phénomène", "phenomenon"
  ],
  variants: {
    formal: [
      "omniprésent", "omnipresent", "croissance exponentielle",
      "exponential growth", "généralisé", "widespread", "systématique",
      "systematic", "récurrent", "recurrent"
    ],
    informal: [
      "on en parle partout", "everyone's talking about", "tous en parlent",
      "sur toutes les lèvres", "on everyone's lips", "fait le buzz",
      "going viral", "viral", "les réseaux s'enflamment"
    ],
    intensity: {
      weak: [
        "assez fréquent", "quite frequent", "se développe", "developing",
        "en augmentation", "increasing"
      ],
      strong: [
        "explosion", "exploding", "monté en flèche", "skyrocketing",
        "déferlante", "surge", "invasion", "envahit", "invading",
        "impossible d'y échapper", "can't escape"
      ],
    },
  },
  patterns: [
    /(?:partout\s+(?:dans|sur)|everywhere\s+(?:in|on))/i,
    /(?:de\s+plus\s+en\s+plus\s+(?:de|nombreux)|more\s+and\s+more)/i,
    /(?:encore\s+un(?:e)?|another\s+one)/i,
    /(?:énième|umpteenth)/i,
    /(?:tous\s+les\s+jours|every\s+day)/i,
    /(?:à\s+chaque\s+fois|every\s+time)/i,
    /(?:nouveau\s+normal|new\s+normal)/i,
    /(?:devenu\s+courant|become\s+common)/i,
    /(?:sur\s+tous\s+les\s+écrans|on\s+every\s+screen)/i,
    /(?:dans\s+tous\s+les\s+médias|in\s+all\s+media)/i,
    /(?:croissance\s+exponentielle|exponential\s+growth)/i,
    /(?:se\s+répand\s+comme|spreading\s+like)/i,
  ],
},

  TE0122: {
  core: [
    "similaire", "similar", "same as", "cela rappelle", "reminds",
    "déjà vu", "dans ce contexte", "in this context", "comme",
    "like", "tel que", "such as", "à l'instar de"
  ],
  variants: {
    formal: [
      "analogie", "analogy", "parallèle", "parallel", "comparable",
      "comparaison", "comparison", "contexte analogue", "similar context",
      "par analogie", "by analogy", "corrélation", "correlation"
    ],
    informal: [
      "ça fait penser à", "makes you think of", "on dirait",
      "looks like", "pareil que", "même chose", "same thing",
      "du déjà-vu", "seen this before", "ça me dit quelque chose"
    ],
    intensity: {
      weak: [
        "un peu comme", "kind of like", "ressemble à", "resembles",
        "fait écho", "echoes", "évoque", "evokes"
      ],
      strong: [
        "exactement comme", "exactly like", "identique à", "identical to",
        "reproduit", "reproduces", "calqué sur", "copied from",
        "même schéma", "same pattern", "on connaît la suite"
      ],
    },
  },
  patterns: [
    /(?:dans\s+ce\s+contexte|in\s+this\s+context)/i,
    /(?:cela\s+rappelle|this\s+reminds)/i,
    /(?:déjà\s+vu|seen\s+(?:this|it)\s+before)/i,
    /(?:similaire\s+à|similar\s+to)/i,
    /(?:comme\s+(?:dans|avec|pour)|like\s+(?:in|with))/i,
    /(?:à\s+l'instar\s+de|just\s+like)/i,
    /(?:même\s+(?:chose|schéma|situation)|same\s+(?:thing|pattern|situation))/i,
    /(?:parallèle\s+avec|parallel\s+with)/i,
    /(?:fait\s+penser\s+à|makes\s+you\s+think\s+of)/i,
    /(?:on\s+dirait|looks\s+like)/i,
    /(?:reproduit\s+le\s+(?:schéma|modèle)|reproduces\s+the\s+pattern)/i,
    /(?:calqué\s+sur|modeled\s+on)/i,
  ],
},
  
  TE0153: {
    core: ["secret", "choquant", "incroyable", "shocking", "amazing"],
    variants: {
      clickbait_formulas: [
        "vous ne croirez pas",
        "ce qui arrive ensuite",
        "you won't believe",
        "what happens next",
        "les experts détestent",
        "un truc simple",
        "cette astuce",
        "révélation choc",
        "doctors hate this",
      ],
      emotional_hooks: [
        "ça va vous surprendre",
        "préparez-vous",
        "scandale",
        "exclusif",
        "urgent",
        "will shock you",
        "prepare yourself",
      ],
      curiosity_gaps: [
        "la raison va vous étonner",
        "voici pourquoi",
        "découvrez comment",
        "la vérité sur",
        "the reason will amaze you",
        "here's why",
      ],
    },
    patterns: [
      /\d+\s+(?:choses|façons|méthodes|secrets|things|ways|methods)\s+(?:que|pour|de|to|that)/i,
      /(?:voici|découvrez|here's|discover)\s+(?:comment|pourquoi|ce que|how|why|what)/i,
      /(?:cette|cette|this)\s+\w+\s+va\s+vous\s+(?:\w+|will)/i,
      /(?:shocking|amazing|incredible)\s+(?:secret|truth|fact)/i,
    ],
  },

  TE0132: {
    core: [
      "catastrophe",
      "panique",
      "chaos",
      "disaster",
      "danger",
      "menace",
      "threat",
      "risque",
      "risk",
      "grave",
      "serious",
      "crise",
      "crisis",
    ],
    variants: {
      intensity: {
        weak: ["problème", "difficulté", "souci", "issue", "concern"],
        strong: [
          "catastrophe majeure",
          "crise grave",
          "danger mortel",
          "major catastrophe",
          "deadly danger",
        ],
      },
      temporal: ["imminent", "proche", "bientôt", "soon", "approaching"],
      formal: ["situation critique", "état d'urgence", "alerte maximale"],
      informal: ["c'est la cata", "on est foutu", "ça craint"],
    },
    patterns: [
      /(?:alerte|alert|warning|attention)\s+(?:rouge|red|maximum)/i,
      /(?:situation|crisis|problem)\s+(?:critique|critical|dramatique|dramatic)/i,
    ],
  },

TE0141: {
  core: [
    "unique", "exceptionnel", "exceptional", "différent", "different",
    "se démarque", "stands out", "inhabituel", "unusual", "rare",
    "remarquable", "remarkable", "distinct", "à part"
  ],
  variants: {
    formal: [
      "singulier", "singular", "distinctif", "distinctive", "atypique",
      "atypical", "spécifique", "specific", "exclusif", "exclusive",
      "sans précédent", "unprecedented", "inédit", "novel"
    ],
    informal: [
      "pas comme les autres", "not like the others", "sort du lot",
      "stands out from the crowd", "tape à l'œil", "eye-catching",
      "crève les yeux", "catches the eye", "pas banal", "rien de commun"
    ],
    intensity: {
      weak: [
        "particulier", "particular", "assez différent", "quite different",
        "un peu spécial", "somewhat special", "original", "se distingue"
      ],
      strong: [
        "totalement unique", "totally unique", "absolument exceptionnel",
        "absolutely exceptional", "radicalement différent", "radically different",
        "jamais vu", "never seen before", "incomparable", "one of a kind",
        "hors norme", "extraordinary"
      ],
    },
  },
  patterns: [
    /(?:se\s+démarque|stands?\s+out)/i,
    /(?:unique\s+en\s+son\s+genre|one\s+of\s+a\s+kind)/i,
    /(?:pas\s+comme\s+les\s+autres|not\s+like\s+the\s+others)/i,
    /(?:sort\s+du\s+lot|stands?\s+out\s+from\s+the\s+crowd)/i,
    /(?:jamais\s+vu|never\s+seen)/i,
    /(?:sans\s+précédent|unprecedented)/i,
    /(?:seul(?:e)?\s+(?:à|de)|only\s+one\s+(?:to|that))/i,
    /(?:rien\s+de\s+comparable|nothing\s+comparable)/i,
    /(?:(?:totalement|complètement)\s+(?:unique|différent)|(?:totally|completely)\s+(?:unique|different))/i,
    /(?:hors\s+(?:norme|du\s+commun)|beyond\s+ordinary)/i,
    /(?:tape\s+à\s+l'œil|eye-catching)/i,
    /(?:crève\s+les\s+yeux|catches\s+the\s+eye)/i,
  ],
},

  TE0142: {
  core: [
    "initialement", "initially", "au départ", "at first",
    "à l'origine", "originally", "première", "first", "d'abord",
    "partir de", "starting from", "base", "baseline", "référence",
    "reference", "annoncé", "announced"
  ],
  variants: {
    formal: [
      "prix initial", "initial price", "valeur de référence",
      "reference value", "point de départ", "starting point",
      "estimation initiale", "initial estimate", "tarif de base",
      "base rate", "valeur d'origine", "original value",
      "montant annoncé", "announced amount", "chiffre avancé",
      "figure put forward"
    ],
    informal: [
      "avant c'était", "it used to be", "normalement à", "normally at",
      "prix barré", "crossed-out price", "au lieu de", "instead of",
      "habituellement", "usually", "en temps normal", "typically"
    ],
    journalistic: [
      "selon les premières estimations", "according to initial estimates",
      "les experts tablaient sur", "experts were banking on",
      "initialement prévu à", "initially planned at",
      "dans un premier temps", "in the first instance",
      "les premières projections", "initial projections",
      "annoncé en grande pompe", "announced with great fanfare",
      "le chiffre initialement avancé", "the figure initially put forward",
      "les prévisions initiales", "initial forecasts",
      "selon les premières déclarations", "according to initial statements",
      "évoqué lors de l'annonce", "mentioned at the announcement",
      "tel que présenté", "as presented", "présenté comme",
      "lors du lancement", "at launch", "au moment de l'annonce"
    ],
    intensity: {
      weak: [
        "environ", "approximately", "autour de", "around",
        "proche de", "close to", "près de", "near", "dans les",
        "on parlait de", "we were talking about"
      ],
      strong: [
        "valait", "was worth", "coûtait", "cost", "fixé à", "set at",
        "évalué à", "valued at", "estimé à", "estimated at",
        "chiffré à", "priced at", "annoncé à", "announced at",
        "établi à", "established at", "affiché à", "displayed at",
        "officiellement", "officially"
      ],
    },
  },
  patterns: [
    /(?:prix\s+(?:initial|d'origine|de\s+départ)|(?:initial|original|starting)\s+price)/i,
    /(?:au\s+lieu\s+de|instead\s+of)/i,
    /(?:avant\s+(?:c'était|:)|(?:used\s+to\s+be|was))\s*[\d,\.]+/i,
    /(?:normalement\s+à|normally\s+at)\s*[\d,\.]+/i,
    /(?:valeur\s+(?:de\s+référence|d'origine)|(?:reference|original)\s+value)/i,
    /(?:à\s+partir\s+de|starting\s+(?:from|at))\s*[\d,\.]+/i,
    /(?:estimé\s+à|valued\s+at)\s*[\d,\.]+/i,
    /(?:prix\s+barré|crossed(?:-|\s)out\s+price)/i,
    /(?:base\s+de|baseline\s+of)\s*[\d,\.]+/i,
    /(?:point\s+de\s+(?:départ|référence)|(?:starting|reference)\s+point)/i,
    /(?:initialement\s+(?:à|de|prévu)|initially\s+(?:at|of|planned))\s*[\d,\.]*/i,
    /(?:en\s+temps\s+normal|under\s+normal\s+circumstances)/i,
    /(?:selon\s+les\s+premières\s+(?:estimations|projections|prévisions)|according\s+to\s+initial\s+(?:estimates|projections|forecasts))/i,
    /(?:les\s+experts\s+tablaient\s+sur|experts\s+were\s+banking\s+on)/i,
    /(?:dans\s+un\s+premier\s+temps|in\s+the\s+first\s+instance)/i,
    /(?:annoncé\s+(?:en\s+grande\s+pompe|à)|announced\s+(?:with\s+great\s+fanfare|at))/i,
    /(?:chiffre\s+(?:initialement\s+)?avancé|figure\s+(?:initially\s+)?put\s+forward)/i,
    /(?:lors\s+(?:du\s+lancement|de\s+l'annonce)|at\s+(?:launch|the\s+announcement))/i,
    /(?:tel\s+que\s+présenté|as\s+presented)/i,
  ],
},
  
TE0143: {
  core: [
    "comparé à", "compared to", "par rapport à", "in comparison",
    "contrairement à", "unlike", "alors que", "whereas",
    "en revanche", "however", "tandis que", "while",
    "plutôt que", "rather than", "versus", "vs"
  ],
  variants: {
    formal: [
      "en comparaison de", "in comparison with", "par contraste avec",
      "in contrast to", "à la différence de", "unlike",
      "en opposition à", "as opposed to", "confronté à",
      "juxtaposé à", "juxtaposed with", "mis en regard de"
    ],
    informal: [
      "à côté de ça", "next to that", "face à", "faced with",
      "quand on voit", "when you see", "si on compare",
      "if you compare", "c'est rien comparé à", "nothing compared to",
      "pas grand-chose à côté de", "not much next to"
    ],
    journalistic: [
      "loin des", "far from", "bien en-deçà de", "well below",
      "dépassant largement", "far exceeding", "nettement supérieur à",
      "significantly higher than", "très inférieur à", "much lower than",
      "sans commune mesure avec", "in no way comparable to",
      "éclipsé par", "eclipsed by", "pâlit face à", "pales in comparison",
      "fait pâle figure face à", "cuts a poor figure compared to",
      "fait figure de", "appears as", "tranche avec", "contrasts sharply with",
      "à mille lieues de", "worlds apart from"
    ],
    intensity: {
      weak: [
        "légèrement différent de", "slightly different from",
        "un peu moins que", "a bit less than", "sensiblement",
        "somewhat", "relativement à", "relative to"
      ],
      strong: [
        "radicalement différent de", "radically different from",
        "totalement opposé à", "completely opposite to",
        "incomparable avec", "incomparable to", "abyssal",
        "rien à voir avec", "nothing to do with",
        "monde à part", "world apart", "jour et nuit", "night and day"
      ],
    },
  },
  patterns: [
    /(?:comparé\s+(?:à|au|aux)|compared\s+to)/i,
    /(?:par\s+rapport\s+(?:à|au|aux)|in\s+comparison\s+(?:to|with))/i,
    /(?:contrairement\s+(?:à|au|aux)|unlike)/i,
    /(?:alors\s+que|whereas|while)/i,
    /(?:en\s+revanche|however|on\s+the\s+other\s+hand)/i,
    /(?:plutôt\s+que|rather\s+than)/i,
    /(?:versus|vs\.?|par\s+contraste)/i,
    /(?:à\s+la\s+différence\s+de|unlike)/i,
    /(?:en\s+opposition\s+à|as\s+opposed\s+to)/i,
    /(?:loin\s+des|far\s+from)/i,
    /(?:bien\s+(?:en-deçà|au-delà)\s+de|(?:well\s+below|far\s+beyond))/i,
    /(?:dépassant\s+largement|far\s+exceeding)/i,
    /(?:nettement\s+(?:supérieur|inférieur)|(?:significantly|much)\s+(?:higher|lower))/i,
    /(?:sans\s+commune\s+mesure|in\s+no\s+way\s+comparable)/i,
    /(?:éclipsé\s+par|eclipsed\s+by)/i,
    /(?:pâlit\s+(?:face\s+à|devant)|pales\s+in\s+comparison)/i,
    /(?:fait\s+pâle\s+figure|cuts\s+a\s+poor\s+figure)/i,
    /(?:tranche\s+avec|contrasts\s+sharply)/i,
    /(?:à\s+mille\s+lieues|worlds?\s+apart)/i,
    /(?:rien\s+à\s+voir|nothing\s+to\s+do\s+with)/i,
    /(?:jour\s+et\s+nuit|night\s+and\s+day)/i,
  ],
},
  
TE0151: {
  core: [
    "comparaison", "comparison", "comparez", "compare",
    "face à face", "side by side", "différence", "difference",
    "option A vs option B", "versus", "vs", "choix entre",
    "choice between"
  ],
  variants: {
    formal: [
      "tableau comparatif", "comparison table", "analyse comparative",
      "comparative analysis", "mise en parallèle", "juxtaposition",
      "confrontation des options", "option comparison",
      "évaluation comparative", "comparative evaluation"
    ],
    informal: [
      "lequel choisir", "which one to choose", "mettons-les côte à côte",
      "let's put them side by side", "regardez la différence",
      "look at the difference", "vous hésitez entre",
      "hesitating between", "face-à-face", "head-to-head"
    ],
    commercial: [
      "comparez nos offres", "compare our offers",
      "nos deux formules", "our two plans", "basique vs premium",
      "basic vs premium", "standard ou avancé", "standard or advanced",
      "pack A ou pack B", "package A or B", "quelle formule choisir",
      "which plan to choose", "voir les différences", "see the differences",
      "tableau des options", "options table"
    ],
    journalistic: [
      "les deux candidats face à face", "two candidates head-to-head",
      "analyse comparative", "comparative analysis",
      "points de divergence", "points of divergence",
      "où se situent les différences", "where the differences lie",
      "décryptage des options", "decoding the options",
      "forces et faiblesses comparées", "compared strengths and weaknesses"
    ],
    emphasis_differences: [
      "contrairement à", "unlike", "alors que", "whereas",
      "là où X offre", "where X offers", "X propose tandis que Y",
      "X offers while Y", "différence notable", "notable difference",
      "écart significatif", "significant gap", "distinction majeure",
      "major distinction", "ce qui les sépare", "what separates them"
    ],
    intensity: {
      weak: [
        "quelques différences", "some differences",
        "légèrement différent", "slightly different",
        "nuances entre", "nuances between"
      ],
      strong: [
        "différences majeures", "major differences",
        "radicalement différent", "radically different",
        "opposés sur tous les points", "opposite on all points",
        "rien de comparable", "nothing comparable",
        "monde de différence", "world of difference"
      ]
    }
  },
  patterns: [
    /(?:comparez|compare)\s+(?:les|nos|our)?\s*(?:deux|2|two)?\s*(?:options?|offres?|formules?|plans?)/i,
    /(?:face\s+à\s+face|side\s+by\s+side|côte\s+à\s+côte)/i,
    /(?:versus|vs\.?|contre)/i,
    /(?:option|formule|pack|plan)\s+[A-Z]\s+(?:vs|ou|or)\s+(?:option|formule|pack|plan)\s+[A-Z]/i,
    /(?:tableau|table)\s+(?:comparatif|des\s+options|comparison)/i,
    /(?:différence|difference)\s+(?:entre|between|notable|majeure|significative)/i,
    /(?:lequel|laquelle|which\s+one)\s+(?:choisir|to\s+choose)/i,
    /(?:vous\s+hésitez\s+entre|hesitating\s+between)/i,
    /(?:contrairement\s+à|unlike)\s+.+\s+(?:propose|offre|offers?)/i,
    /(?:alors\s+que|whereas|while)\s+.+\s+(?:propose|offre|offers?)/i,
    /(?:là\s+où|where)\s+\w+\s+(?:offre|propose|offers?)/i,
    /(?:écart|gap)\s+(?:significatif|notable|important|significant)/i,
    /(?:ce\s+qui\s+les\s+(?:sépare|distingue)|what\s+(?:separates|distinguishes)\s+them)/i,
    /(?:basique|basic|standard)\s+(?:vs|ou|or)\s+(?:premium|avancé|advanced)/i,
  ],
},
TE0152: {
  core: [
    "progressivement", "gradually", "petit à petit", "little by little",
    "étape par étape", "step by step", "incrémentiel", "incremental",
    "hausse progressive", "gradual increase", "ajustement",
    "adjustment", "légère augmentation", "slight increase"
  ],
  variants: {
    formal: [
      "progression graduelle", "gradual progression",
      "augmentation séquentielle", "sequential increase",
      "modification incrémentale", "incremental modification",
      "ajustement progressif", "progressive adjustment",
      "évolution par paliers", "step-wise evolution",
      "croissance contrôlée", "controlled growth"
    ],
    informal: [
      "doucement mais sûrement", "slowly but surely",
      "pas à pas", "step by step", "au fur et à mesure",
      "as we go along", "tranquillement", "quietly",
      "sans qu'on s'en rende compte", "without noticing"
    ],
    normalization: [
      "devient la norme", "becomes the norm",
      "nouvelle normalité", "new normal", "on s'y habitue",
      "we get used to it", "habituation", "accoutumance",
      "désensibilisation", "desensitization",
      "acceptation progressive", "gradual acceptance",
      "normalisation", "normalization"
    ],
    drowning_fish: [
      "noyer le poisson", "muddy the waters",
      "saturation d'information", "information saturation",
      "surexposition", "overexposure", "bombardement",
      "bombardment", "submergé par", "overwhelmed by",
      "inondé de", "flooded with", "trop d'information",
      "information overload", "dilué dans", "diluted in"
    ],
    journalistic: [
      "glissement progressif", "gradual shift",
      "dérive insensible", "imperceptible drift",
      "évolution en douceur", "smooth evolution",
      "changement par petites touches", "change by small increments",
      "transformation silencieuse", "silent transformation",
      "mutation progressive", "progressive mutation",
      "érosion graduelle", "gradual erosion"
    ],
    pricing: [
      "petite hausse de", "small increase in",
      "léger ajustement tarifaire", "slight price adjustment",
      "révision progressive", "gradual revision",
      "augmentation modérée", "moderate increase",
      "hausse contenue", "contained increase",
      "adaptation au marché", "market adjustment",
      "quelques centimes", "a few cents", "seulement",
      "only", "juste", "just"
    ],
    intensity: {
      weak: [
        "minime", "minimal", "imperceptible", "barely noticeable",
        "presque invisible", "almost invisible",
        "à peine perceptible", "barely perceptible"
      ],
      strong: [
        "série d'augmentations", "series of increases",
        "hausses successives", "successive increases",
        "accumulation", "accumulation", "effet cumulatif",
        "cumulative effect", "spirale", "spiral"
      ]
    }
  },
  patterns: [
    /(?:progressivement|gradually|petit\s+à\s+petit|little\s+by\s+little)/i,
    /(?:étape\s+par\s+étape|step\s+by\s+step)/i,
    /(?:léger(?:e)?\s+(?:hausse|augmentation|ajustement)|slight\s+(?:increase|adjustment))/i,
    /(?:seulement|only|juste|just)\s+(?:quelques|a\s+few)\s+(?:%|pour\s*cent|percent|centimes|cents|euros?)/i,
    /(?:nouvelle\s+normalité|new\s+normal)/i,
    /(?:on\s+s'y\s+habitue|we\s+get\s+used\s+to\s+it)/i,
    /(?:sans\s+qu'on\s+s'en\s+rende\s+compte|without\s+noticing)/i,
    /(?:noyer\s+le\s+poisson|muddy\s+the\s+waters)/i,
    /(?:saturation|surexposition|bombardement|overload)/i,
    /(?:glissement|dérive|drift)\s+(?:progressif|insensible|imperceptible)/i,
    /(?:transformation\s+silencieuse|silent\s+transformation)/i,
    /(?:érosion\s+graduelle|gradual\s+erosion)/i,
    /(?:hausses?\s+successives?|successive\s+increases?)/i,
    /(?:effet\s+cumulatif|cumulative\s+effect)/i,
    /(?:par\s+paliers|step-wise)/i,
    /(?:devient\s+la\s+norme|becomes\s+the\s+norm)/i,
  ],
},
  
  
  TE0212: {
  core: [
    "anecdote",
    "exemple",
    "example",
    "témoignage",
    "testimony",
    "j'ai un ami",
    "I have a friend",
    "mon voisin",
    "my neighbor",
    "une connaissance",
    "an acquaintance"
  ],
  variants: {
    personal_stories: [
      "j'ai un ami qui",
      "I know someone who",
      "ma cousine",
      "my cousin",
      "un collègue",
      "a colleague",
      "quelqu'un que je connais",
      "someone I know",
      "dans ma famille",
      "in my family",
      "mon oncle",
      "my uncle"
    ],
    anecdotal_intro: [
      "prenons l'exemple de",
      "take the example of",
      "regardez le cas de",
      "look at the case of",
      "considérez l'histoire de",
      "consider the story of",
      "voici l'histoire de",
      "here's the story of"
    ],
    generalizing_phrases: [
      "cela prouve que",
      "this proves that",
      "la preuve c'est que",
      "the proof is that",
      "comme le montre cet exemple",
      "as this example shows",
      "cet exemple illustre",
      "this example illustrates",
      "cette histoire démontre",
      "this story demonstrates"
    ],
    intensity: {
      weak: [
        "un exemple parmi d'autres",
        "one example among others",
        "cela suggère",
        "this suggests"
      ],
      strong: [
        "la preuve absolue",
        "absolute proof",
        "démontre définitivement",
        "definitively demonstrates",
        "prouve sans conteste",
        "proves beyond doubt"
      ]
    }
  },
  patterns: [
    /(?:j'ai|I\s+have)\s+(?:un|une|a)\s+(?:ami|amie|collègue|voisin|cousin|friend|neighbor|colleague)/i,
    /(?:prenons|regardez|considérez|take|look\s+at|consider)\s+(?:l'exemple|le\s+cas|the\s+example|the\s+case)\s+(?:de|of)/i,
    /(?:cette|this)\s+(?:histoire|anecdote|story)\s+(?:prouve|démontre|montre|proves|demonstrates|shows)/i,
    /(?:quelqu'un|someone)\s+(?:que\s+je\s+connais|I\s+know)/i,
    /(?:dans|in)\s+(?:ma|my)\s+(?:famille|family)/i,
    /(?:cela|this)\s+(?:prouve|démontre|illustre|proves|demonstrates|illustrates)\s+que/i
  ]
},

  TE0321: {
  core: [
    "stéréotype",
    "stereotype", 
    "tous les",
    "toutes les",
    "every single",
    "généralement",
    "typically",
    "les français",
    "les américains",
    "americans",
    "foreigners",
    "immigrants"
  ],
  variants: {
    universal_generalizations: [
      "sans exception",
      "without exception",
      "systématiquement",
      "invariablement",
      "à chaque fois",
      "every time",
      "c'est toujours comme ça",
      "always the same",
      "ils sont tous pareils",
      "they're all the same"
    ],
    group_attributions: [
      "c'est typique des",
      "typical of",
      "comme tous les",
      "like all the",
      "ils sont tous",
      "they all are",
      "en général les",
      "generally the"
    ],
    discriminatory: [
      "ce genre de personnes",
      "these kind of people",
      "cette catégorie",
      "this category",
      "ce type de gens",
      "that type of people"
    ],
    intensity: {
      weak: [
        "souvent les",
        "often the",
        "parfois les",
        "sometimes the"
      ],
      strong: [
        "TOUS les",
        "ALL the",
        "absolument tous",
        "absolutely all",
        "sans aucune exception",
        "without any exception"
      ]
    }
  },
  patterns: [
    /(?:tous|toutes|all)\s+(?:les|the)\s+\w+\s+(?:sont|are|font|do)/i,
    /(?:c'est|it's)\s+(?:typique|typical)\s+(?:des|of)\s+\w+/i,
    /(?:comme|like)\s+(?:tous|all)\s+(?:les|the)\s+\w+/i,
    /(?:ils|elles|they)\s+sont\s+(?:tous|toutes|all)\s+(?:pareils?|the\s+same)/i,
    /(?:généralement|usually|typically)\s+(?:les|the)\s+\w+/i,
    /(?:sans|without)\s+(?:exception|any\s+exception)/i
  ]
},

  TE0251: {
    core: ["tout le monde", "consensus", "everyone", "la plupart", "most people", "nous pensons", "we think"],
    variants: {
      universal_claims: [
      "personne ne peut nier",
      "nobody can deny", 
      "c'est du bon sens",
      "it's common sense",
      "chacun sait que",
      "everyone knows"
      ],
      majority_appeals: [
      "la majorité pense",
      "the majority thinks",
      "l'opinion générale", 
      "most agree"
      ]
    },
    patterns: [
      /(?:tout le monde|everyone)\s+(?:sait|knows?|dit|says?)/i,
      /(?:la plupart|most)\s+(?:des gens|people)\s+(?:pensent|think)/i
    ],
  },

  TE0222: {
  core: [
    "confirme",
    "confirms",
    "prouve",
    "proves",
    "démontre",
    "demonstrates",
    "comme prévu",
    "as expected",
    "j'avais raison",
    "I was right",
    "évident",
    "obvious"
  ],
  variants: {
    validation_phrases: [
      "cela confirme que",
      "this confirms that",
      "la preuve c'est que",
      "the proof is that",
      "comme le montre",
      "as shown by",
      "exactement",
      "exactly",
      "forcément",
      "inevitably"
    ],
    predictive_claims: [
      "comme je le disais",
      "as I said",
      "je l'avais dit",
      "I told you",
      "comme prédit",
      "as predicted",
      "sans surprise",
      "unsurprisingly"
    ],
    reinforcement: [
      "encore une fois",
      "once again",
      "une fois de plus",
      "one more time",
      "toujours pareil",
      "always the same",
      "ça recommence",
      "here we go again"
    ],
    intensity: {
      weak: [
        "cela suggère",
        "suggests",
        "semble confirmer",
        "seems to confirm"
      ],
      strong: [
        "PROUVE définitivement",
        "PROVES definitively",
        "confirme sans l'ombre d'un doute",
        "confirms beyond doubt",
        "la preuve irréfutable",
        "irrefutable proof"
      ]
    }
  },
  patterns: [
    /(?:cela|this)\s+(?:confirme|prouve|démontre|proves|confirms)\s+(?:que|that)/i,
    /(?:comme|as)\s+(?:prévu|je\s+le?\s+disais|expected|I\s+said)/i,
    /(?:j'avais|I\s+was)\s+(?:raison|right)/i,
    /(?:la\s+preuve|the\s+proof)\s+(?:c'est\s+que|is\s+that)/i,
    /(?:évidemment|obviously|forcément|inevitably)/i,
    /(?:sans\s+surprise|unsurprisingly|comme\s+attendu|as\s+anticipated)/i
  ]
},
  
  TE0414: {
    core: [
      "ne ratez pas",
      "don't miss",
      "dernière chance",
      "last chance",
      "limité",
      "limited",
      "exclusif",
      "exclusive",
    ],
    variants: {
      urgency: [
        "dépêchez-vous",
        "hurry up",
        "vite",
        "quickly",
        "maintenant ou jamais",
        "now or never",
      ],
      scarcity: [
        "stock limité",
        "places limitées",
        "limited stock",
        "limited seats",
        "offre limitée",
      ],
    },
    patterns: [
      /(?:seulement|only)\s+\d+\s+(?:jours?|heures?|minutes?|days?|hours?|minutes?)/i,
      /(?:expire|ends?)\s+(?:bientôt|soon|today|demain|tomorrow)/i,
    ],
  },
  

  TE0422: {
    core: ["autorité", "authority", "expert", "spécialiste", "specialist", "professeur", "professor", "docteur", "doctor", "officiel"],
    variants: {
      titles: ["Dr.", "Pr.", "Prof.", "PhD", "expert reconnu", "spécialiste renommé"],
      institutions: ["selon Harvard", "université de", "une étude de", "des chercheurs de"],
      appeal_phrases: ["selon les experts", "la science prouve", "études montrent", "scientifiquement prouvé"]
    },
    patterns: [
    /(?:selon|according to)\s+(?:les?\s+)?(?:experts?|spécialistes?)/i,
    /(?:étude|study|research)\s+(?:révèle|shows?|démontre)/i,
    /(?:Dr\.|Prof\.|PhD)\s+\w+\s+(?:affirme|says?)/i
    ],
  },

  TE0421: {
  core: [
    "déjà investi", "already invested",
    "coûts irrécupérables", "sunk cost",
    "trop tard pour reculer", "too late to back out",
    "après tout ce qu'on a fait", "after all we've done"
  ],
  variants: {
    temporal: [
      "temps passé", "time spent", "années perdues", "years wasted",
      "tant de temps", "so much time", "des mois", "months"
    ],
    financial: [
      "argent dépensé", "money spent", "investissement", "investment",
      "pertes", "losses", "coûts engagés", "costs incurred",
      "budget utilisé", "budget used"
    ],
    emotional: [
      "efforts", "effort", "tant fait", "so much done",
      "sacrifices", "énergie dépensée", "energy spent",
      "sang et larmes", "blood and tears"
    ],
    continuation: [
      "continuer", "continue", "persister", "persist",
      "ne pas abandonner", "don't give up", "aller au bout", "see it through",
      "tenir bon", "hold on", "persévérer", "persevere"
    ],
    waste_aversion: [
      "gâchis", "waste", "perdu pour rien", "all for nothing",
      "en vain", "in vain", "tout perdre", "lose everything"
    ],
    point_of_no_return: [
      "point de non-retour", "point of no return",
      "trop avancé", "too far", "pas de retour", "no turning back",
      "impossible de reculer", "can't go back"
    ],
    escalation: [
      "investir plus", "invest more", "doubler la mise", "double down",
      "on est engagé", "we're committed", "faut aller au bout", "must finish"
    ]
  },
  patterns: [
    // Expressions "après + investissement"
    /(?:après|given|vu)\s+(?:tant|so much|all|le|tout)\s+(?:d[e'])?(?:temps|argent|efforts?|time|money|effort)/i,
    
    // "Trop tard pour..."
    /(?:trop\s+tard|too\s+late)\s+(?:pour|to)\s+(?:reculer|arrêter|abandonner|back\s+out|stop|give\s+up)/i,
    
    // "Maintenant qu'on a..."
    /(?:maintenant\s+qu'on|now\s+that\s+we|puisqu'on)\s+(?:a|have)/i,
    
    // Point de non-retour
    /(?:point\s+de\s+non-retour|point\s+of\s+no\s+return)/i,
    
    // Gaspillage
    /(?:ce serait|it would be)\s+(?:du\s+)?(?:gâchis|a\s+waste)/i,
    
    // "Déjà investi/dépensé"
    /(?:déjà|already)\s+(?:investi|invested|dépensé|spent|mis|put\s+in)/i,
    
    // "On ne peut plus..."
    /(?:on\s+ne\s+peut\s+plus|can't|cannot)\s+(?:reculer|arrêter|abandonner|turn\s+back|go\s+back|stop)/i,
    
    // "Coûts irrécupérables"
    /(?:coûts?\s+irrécupérables?|sunk\s+costs?)/i
    ]
  },
  TE0424: {
    core: [
      "rare", "limité", "limited", "exclusif", "exclusive",
      "stock limité", "limited stock", "dernières pièces", "last pieces"
    ],
    variants: {
      quantity: [
        "quantité limitée", "limited quantity", "places limitées", "limited seats",
        "derniers exemplaires", "last copies", "plus que", "only left",
        "il ne reste que", "only remaining"
      ],
      temporal: [
        "pour une durée limitée", "for a limited time",
        "offre limitée dans le temps", "time-limited offer",
        "tant que les stocks durent", "while supplies last",
        "jusqu'à épuisement", "until sold out"
      ],
      urgency: [
        "presque épuisé", "almost sold out", "bientôt épuisé", "selling fast",
        "rupture de stock imminente", "stock running out",
        "en voie de disparition", "going away soon"
      ],
      exclusivity: [
        "édition limitée", "limited edition", "série limitée", "limited series",
        "collection exclusive", "exclusive collection", "accès privilégié", "privileged access",
        "réservé aux membres", "members only", "VIP uniquement", "VIP only"
      ]
    },
    patterns: [
      // "Plus que X" / "Seulement X"
      /(?:plus\s+que|seulement|only|just)\s+\d+\s+(?:places?|exemplaires?|pièces?|left|remaining)/i,
      
      // "Stock limité" / "Quantité limitée"
      /(?:stock|quantité|quantity)\s+(?:limité|limitée|limited|restreinte?)/i,
      
      // "Édition limitée" / "Série limitée"
      /(?:édition|série|collection)\s+(?:limitée?|exclusive?|limited)/i,
      
      // "Pour une durée limitée"
      /(?:pour|for)\s+(?:une?\s+)?(?:durée|temps|time)\s+(?:limité|limitée?|limited)/i,
      
      // "Tant que" / "Jusqu'à épuisement"
      /(?:tant\s+que|while|jusqu'à|until)\s+(?:les\s+stocks?\s+durent|supplies?\s+last|épuisement|sold\s+out)/i,
      
      // "Presque épuisé" / "Bientôt épuisé"
      /(?:presque|bientôt|almost|nearly)\s+(?:épuisé|vendu|sold\s+out)/i,
      
      // "Réservé à" / "Accès limité"
      /(?:réservé|reserved|limité|limited)\s+(?:à|aux|to|for)\s+(?:membres?|VIP|privilégiés?)/i
    ]
  },

  TE0425: {
    core: [
      "commencez par", "start with", "essai gratuit", "free trial",
      "sans engagement", "no commitment", "premiers pas", "first steps"
    ],
    variants: {
      initial_step: [
        "premier pas", "first step", "petit pas", "small step",
        "simple", "simple", "facile", "easy", "rapide", "quick"
      ],
      no_commitment: [
        "sans obligation", "no obligation", "aucun engagement", "no strings attached",
        "annulation gratuite", "free cancellation", "résiliable", "cancellable"
      ],
      trial: [
        "essayez", "try", "testez", "test", "découvrez", "discover",
        "période d'essai", "trial period", "démo gratuite", "free demo",
        "juste essayer", "just try"
      ],
      signup: [
        "simple inscription", "simple signup", "inscription rapide", "quick registration",
        "créez un compte", "create account", "inscrivez-vous", "sign up",
        "rejoignez-nous", "join us"
      ],
      gradual: [
        "étape par étape", "step by step", "progressivement", "gradually",
        "à votre rythme", "at your own pace", "petit à petit", "little by little"
      ],
      minimal: [
        "quelques minutes", "few minutes", "juste un clic", "just one click",
        "instantané", "instant", "en quelques clics", "in a few clicks"
      ]
    },
    patterns: [
      // "Commencez par" / "Start with"
      /(?:commencez|commencer|démarrez|start|begin)\s+(?:par|with|maintenant|now|aujourd'hui|today)/i,
      
      // "Essai gratuit" / "Free trial"
      /(?:essai|trial|test|démo)\s+(?:gratuit|free|sans\s+engagement)/i,
      
      // "Sans engagement" / "No commitment"
      /(?:sans|no|aucun)\s+(?:engagement|obligation|commitment|strings)/i,
      
      // "Juste" / "Il suffit de"
      /(?:juste|just|il\s+suffit\s+de|simply|only|all\s+you\s+need)/i,
      
      // "Quelques minutes" / "Few clicks"
      /(?:quelques?|few|just)\s+(?:minutes?|secondes?|clics?|clicks?)/i,
      
      // "Inscrivez-vous" / "Sign up"
      /(?:inscrivez-vous|sign\s+up|rejoignez|join|créez|create)\s+(?:maintenant|now|gratuitement|free)?/i,
      
      // "Vous pouvez annuler"
      /(?:vous\s+pouvez|you\s+can)\s+(?:annuler|cancel|résilier|stop)/i
    ]
  },

  TE0426: {
    core: [
      "en retour", "in return", "rendre service", "return the favor",
      "vous devez", "you owe", "après tout ce qu'on a fait", "after all we've done"
    ],
    variants: {
      obligation: [
        "vous devez", "you should", "il faut", "you must",
        "vous nous devez", "you owe us", "redevable", "indebted",
        "obligation", "obligation", "dette", "debt"
      ],
      favor: [
        "rendre la pareille", "return the favor", "faire quelque chose pour", "do something for",
        "on vous a aidé", "we helped you", "nous vous avons aidé", "we've helped you"
      ],
      gift: [
        "cadeau gratuit", "free gift", "offert", "offered",
        "en cadeau", "as a gift", "bonus gratuit", "free bonus",
        "pour vous", "for you"
      ],
      gratitude: [
        "reconnaissant", "grateful", "reconnaissance", "gratitude",
        "montrez votre gratitude", "show your gratitude",
        "la moindre des choses", "the least you can do"
      ],
      reciprocity: [
        "réciprocité", "reciprocity", "donnant-donnant", "give and take",
        "échange de bons procédés", "mutual benefit",
        "à votre tour", "your turn"
      ],
      guilt: [
        "après tout", "after all", "compte tenu de", "given that",
        "vu que", "considering", "étant donné que", "given that"
      ]
    },
    patterns: [
      // "En retour" / "In return"
      /(?:en\s+retour|in\s+return|en\s+échange|in\s+exchange)/i,
      
      // "Rendre" + service/faveur
      /(?:rendre|return)\s+(?:la\s+pareille|un?\s+service|the\s+favor|a\s+favor)/i,
      
      // "Vous devez" / "You owe"
      /(?:vous\s+devez|you\s+(?:should|must|owe))/i,
      
      // "Après tout ce qu'on a fait"
      /(?:après|after)\s+(?:tout\s+ce\s+qu'on|all\s+(?:we'?ve?|that))\s+(?:a\s+fait|done)/i,
      
      // "On vous a aidé" / "We helped you"
      /(?:on|nous)\s+(?:vous\s+)?(?:a|avons)\s+(?:aidé|offert|donné|helped|offered|given)/i,
      
      // "Cadeau gratuit"
      /(?:cadeau|bonus|gift)\s+(?:gratuit|free|offert|offered)/i,
      
      // "À votre tour" / "Your turn"
      /(?:à\s+votre|your|maintenant\s+c'est\s+à\s+vous|now\s+it'?s\s+your)\s+(?:tour|turn)/i,
      
      // "La moindre des choses"
      /(?:la\s+moindre\s+des\s+choses|the\s+least\s+you\s+can\s+do)/i,
      
      // "Montrez votre gratitude"
      /(?:montrez?|show)\s+(?:votre|your)\s+(?:gratitude|reconnaissance|appreciation)/i
    ]
  },
};

const CONTEXT_PATTERNS = {
  urgency: {
    patterns: [
      /(?:urgent|rapidement|vite|immédiatement|maintenant|now|quickly|immediately)/i,
      /(?:dernière\s+chance|temps\s+limité|offre\s+limitée|last\s+chance|limited\s+time)/i,
      /(?:dépêchez-vous|ne\s+ratez\s+pas|hurry|don't\s+miss)/i,
    ],
    boost: 1.3,
    techniques: ["TE0501", "TE0414"],
  },
  authority: {
    patterns: [
      /(?:selon\s+(?:les\s+)?(?:experts?|spécialistes?|docteurs?|doctors?|experts?))/i,
      /(?:étude\s+(?:révèle|montre|démontre|shows?|reveals?))/i,
      /(?:recherche\s+(?:scientifique|universitaire|scientific|university))/i,
    ],
    boost: 1.4,
    techniques: ["TE0422", "TE0212"],
  },
  social_proof: {
    patterns: [
      /(?:\d+(?:\.\d+)?[km]?\s+personnes?\s+(?:utilisent|font|pensent|people\s+(?:use|do|think)))/i,
      /(?:tout\s+le\s+monde|la\s+plupart\s+des\s+gens|everyone|most\s+people)/i,
      /(?:viral|tendance|populaire|trending|popular)/i,
    ],
    boost: 1.2,
    techniques: ["TE0251", "TE0221"],
  },
  scarcity: {
    patterns: [
      /(?:stock|quantité|places?)\s+(?:limité|limited)/i,
      /(?:plus\s+que|only)\s+\d+/i,
      /(?:édition|série)\s+limitée?/i
    ],
    boost: 1.3,
    techniques: ["TE0424", "TE0414"], // Rareté + FOMO se renforcent
  },
  
  low_barrier: {
    patterns: [
      /(?:gratuit|free|sans\s+engagement|no\s+commitment)/i,
      /(?:essai|trial|test)/i,
      /(?:commencez|start|inscrivez)/i
    ],
    boost: 1.2,
    techniques: ["TE0425", "TE0426"], // Pied dans la porte + Réciprocité
  },
  
  obligation: {
    patterns: [
      /(?:vous\s+devez|you\s+(?:should|must|owe))/i,
      /(?:en\s+retour|in\s+return)/i,
      /(?:après\s+tout|after\s+all)/i
    ],
    boost: 1.4,
    techniques: ["TE0426"],
  },
  stereotyping: {
  patterns: [
    /(?:tous|toutes|all)\s+(?:les|the)\s+\w+\s+(?:sont|are)/i,
    /(?:typique|typical)\s+(?:des|of)/i,
    /(?:généralement|usually|typically)\s+(?:les|the)/i,
    /(?:sans|without)\s+exception/i
  ],
  boost: 1.5,
  techniques: ["TE0321", "TE0231"]
},
  confirmation: {
  patterns: [
    /(?:confirme|prouve|démontre|proves|confirms)\s+(?:que|that)/i,
    /(?:comme|as)\s+(?:prévu|je\s+le\s+disais|expected|I\s+said)/i,
    /(?:j'avais|I\s+was)\s+raison/i,
    /(?:encore|once)\s+une\s+fois/i
  ],
  boost: 1.4,
  techniques: ["TE0222"]
},
  false_dichotomy: {
  patterns: [
    /(?:soit|either)\s+.+\s+(?:soit|or)/i,
    /(?:deux|two|2)\s+(?:options?|choix|choices?)/i,
    /(?:avec|for|with)\s+(?:nous|moi|us|me)\s+ou\s+(?:contre|against)/i,
    /(?:pas|no)\s+(?:d'autre|other)\s+(?:choix|option|choice)/i
  ],
  boost: 1.6,
  techniques: ["TE0151"]
},
  anecdotal_evidence: {
  patterns: [
    /(?:j'ai|I\s+have)\s+(?:un|une|a)\s+(?:ami|collègue|friend|colleague)/i,
    /(?:prenons|regardez|take|look)\s+(?:l'exemple|the\s+example)/i,
    /(?:cette|this)\s+(?:histoire|story)\s+(?:prouve|démontre|proves)/i,
    /(?:quelqu'un|someone)\s+(?:que|I)\s+(?:je\s+connais|know)/i
  ],
  boost: 1.5,
  techniques: ["TE0212", "TE0211"]
},
};

// Make keywords and patterns available globally for Chrome extension
window.DIMA_ENHANCED_KEYWORDS = DIMA_ENHANCED_KEYWORDS;
window.CONTEXT_PATTERNS = CONTEXT_PATTERNS;
