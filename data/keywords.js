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
  }
};

// Make keywords and patterns available globally for Chrome extension
window.DIMA_ENHANCED_KEYWORDS = DIMA_ENHANCED_KEYWORDS;
window.CONTEXT_PATTERNS = CONTEXT_PATTERNS;
