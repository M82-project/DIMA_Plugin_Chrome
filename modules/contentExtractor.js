// Content Extractor Module
// Responsible for extracting and cleaning content from web pages

class ContentExtractor {
  constructor(settings) {
    this.settings = settings || {
      maxContentLength: 5000,
      minKeywordLength: 3,
      debugMode: false,
    };
    this.skipPatternCache = new Map();
  }

  log(message, data = null) {
    if (this.settings.debugMode) {
      console.log(`ContentExtractor: ${message}`, data || "");
    }
  }

  extractTitle() {
    const titleSources = [
      () => document.title,
      () => document.querySelector('meta[property="og:title"]')?.content,
      () => document.querySelector('meta[name="twitter:title"]')?.content,
      () => document.querySelector("h1")?.textContent?.trim(),
      () =>
        document
          .querySelector('.title, .headline, [class*="title"]')
          ?.textContent?.trim(),
    ];

    return titleSources
      .map((fn) => fn())
      .filter(Boolean)
      .join(" ")
      .substring(0, 500)
      .trim();
  }

  extractContent() {
    this.log("Début extraction de contenu...");

    const extractedTexts = new Set();
    let content = "";

    // Sélecteurs prioritaires pour le contenu principal
    const contentSelectors = [
      "article",
      '[role="main"]',
      "main",
      ".article-content, .post-content, .entry-content",
      ".content, .story-body, .article-body",
      "#article-body, .post-body, .text-content",
    ];

    // Extraction du contenu principal
    for (const selector of contentSelectors) {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        this.log(`Contenu trouvé avec: ${selector}`);
        content += this.extractTextFromElements(elements, extractedTexts);
        if (content.length > 1000) break;
      }
    }

    // Fallback si contenu insuffisant
    if (content.length < 300) {
      this.log("Contenu insuffisant, utilisation de fallbacks...");
      const fallbackSelectors = [
        "p, h1, h2, h3, h4, h5, h6",
        ".text, .description, .summary",
        '[class*="content"], [class*="text"]',
        "blockquote, figcaption",
      ];

      for (const selector of fallbackSelectors) {
        const elements = document.querySelectorAll(selector);
        content += this.extractTextFromElements(elements, extractedTexts, 30);
        if (content.length > 1500) break;
      }
    }

    // Dernier recours
    if (content.length < 200) {
      this.log("Dernier recours - texte visible filtré");
      const paragraphs = document.body.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li");
      const fallbackTexts = new Set(extractedTexts);
      content += this.extractTextFromElements(paragraphs, fallbackTexts, 50);

      // body.innerText uniquement si toujours insuffisant
      if (content.length < 200) {
        content = this.cleanText(document.body.innerText).substring(0, this.settings.maxContentLength);
      }
    }

    const finalContent = content
      .substring(0, this.settings.maxContentLength)
      .trim();
    this.log(`Extraction terminée: ${finalContent.length} caractères`);

    return finalContent;
  }

  extractTextFromElements(elements, extractedTexts, maxElements = 100) {
    let text = "";
    const elementsArray = Array.from(elements).slice(0, maxElements);

    for (const element of elementsArray) {
      if (this.shouldSkipElement(element)) continue;

      const elementText = this.cleanText(
        element.textContent || element.innerText
      );
      if (
        elementText &&
        elementText.length > 15 &&
        !extractedTexts.has(elementText)
      ) {
        extractedTexts.add(elementText);
        text += elementText + " ";

        if (text.length > this.settings.maxContentLength) break;
      }
    }

    return text;
  }

  getSkipPattern(skip) {
    if (!this.skipPatternCache.has(skip)) {
      const escapedSkip = skip.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
      this.skipPatternCache.set(
        skip,
        new RegExp(`(^|[-_])${escapedSkip}([-_]|$)`)
      );
    }

    return this.skipPatternCache.get(skip);
  }

  shouldSkipElement(element) {
    // Balises structurellement publicitaires ou non-éditoriales
    const skipTags = ["ins", "iframe", "script", "style", "noscript", "nav", "header", "footer", "aside"];
    if (skipTags.includes(element.tagName?.toLowerCase())) return true;
    const skipClasses = [
      // Navigation / structure
      "nav", "menu", "footer", "header", "sidebar", "breadcrumb", "pagination",
      // Publicité — génériques
      "ad", "ads", "advert", "advertisement",
      // Publicité — régies et formats connus
      "adsbygoogle", "dfp", "gpt-ad", "publi", "sponsor", "sponsored",
      "partner", "outbrain", "taboola", "teads", "criteo", "dianomi",
      "smartad", "smartclip", "adsense",
      // Social / partage
      "social", "share", "sharing",
      // Éléments parasites
      "cookie", "popup", "modal", "overlay", "banner", "newsletter",
      "related", "suggest", "recommend", "widget", "promo", "promotion",
      "comment", "rating", "review", "tag", "metadata", "byline",
      "author-bio", "subscription", "paywall"
    ];
    
    const skipIds = ["nav", "menu", "footer", "header", "sidebar", "comments","cookie-banner", "newsletter", "popup", "modal", "overlay",
    "related-articles", "advertisement", "social-sharing","google_ads", "dfp", "gpt"];

    // Attributs data spécifiques aux régies publicitaires
    const adDataAttributes = [
      "data-ad", "data-ads", "data-ad-slot", "data-ad-unit", "data-adunit",
      "data-google-query-id", "data-adsbygoogle-status", "data-ad-client",
    ];

    const matchesSkipPattern = (value, skip) => {
      if (!value) return false;
      return this.getSkipPattern(skip).test(value);
    };

    const classTokens = Array.from(element.classList || [], (token) =>
      token.toLowerCase()
    );

    const id = element.id?.toLowerCase() || "";

    if (
      skipClasses.some((skip) =>
        classTokens.some((token) => matchesSkipPattern(token, skip))
      )
    ) {
      return true;
    }
    if (skipIds.some((skip) => matchesSkipPattern(id, skip))) return true;
    if (adDataAttributes.some((attr) => element.hasAttribute(attr))) return true;
    if (element.getAttribute("aria-hidden") === "true") return true;
    if (["banner", "navigation", "complementary"].includes(element.getAttribute("role"))) return true;
    if (getComputedStyle(element).display === "none") return true;

    // Vérification des ancêtres (profondeur 5)
    let parent = element.parentElement;
    for (let depth = 0; parent && depth < 5; depth++) {
      // Vérifier si le parent est une balise structurelle à ignorer
      if (skipTags.includes(parent.tagName?.toLowerCase())) return true;
      
      const parentClassTokens = Array.from(parent.classList || [], (token) =>
        token.toLowerCase()
      );
      const parentId = parent.id?.toLowerCase() || "";
      if (
        skipClasses.some((skip) =>
          parentClassTokens.some((token) => matchesSkipPattern(token, skip))
        ) ||
        skipIds.some((skip) => matchesSkipPattern(parentId, skip)) ||
        adDataAttributes.some((attr) => parent.hasAttribute(attr))
      ) return true;
      parent = parent.parentElement;
    }

    return false;
  }

  cleanText(text) {
    if (!text) return "";

    // On préserve toutes les écritures (cyrillique, chinois, arabe, etc.):
    // \p{L} = lettres tous scripts, \p{N} = chiffres, \p{M} = signes diacritiques.
    // L'ancienne regex basée sur \w (ASCII) stripait le contenu non latin —
    // bloquant l'analyse précisément sur les médias que le plugin cible.
    return text
      .replace(/[\r\n\t]/g, " ")
      .replace(/[^\p{L}\p{N}\p{M}\s\.,!?;:()\-'"%]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  detectPageType() {
    // On distingue le hostname du reste de l'URL pour éviter que des
    // sous-chaînes comme "news" matchent dans une querystring quelconque,
    // et on utilise des frontières non alphanumériques pour distinguer
    // "news.example.com" de "businessnews.example.com".
    let hostname = "";
    let pathAndQuery = "";
    try {
      const u = new URL(window.location.href);
      hostname = u.hostname.toLowerCase();
      pathAndQuery = (u.pathname + u.search).toLowerCase();
    } catch (_) {
      const url = window.location.href.toLowerCase();
      hostname = url;
      pathAndQuery = url;
    }

    // matchWord exige une frontière complète (ex: `news` ne matche pas
    // `businessnews`); matchStem n'exige qu'une frontière de début pour
    // accepter les pluriels / dérivés (`product` → `products`, `shop` → `shopping`).
    const matchWord = (haystack, word) =>
      new RegExp(`(^|[^a-z0-9])${word}([^a-z0-9]|$)`).test(haystack);
    const matchStem = (haystack, stem) =>
      new RegExp(`(^|[^a-z0-9])${stem}`).test(haystack);

    // Réseaux sociaux : on cible le hostname pour éviter qu'un article
    // mentionnant "facebook" dans l'URL d'un autre média soit classé "social".
    const socialHosts = ["facebook.com", "twitter.com", "x.com", "instagram.com", "t.me", "telegram.me", "tiktok.com", "vk.com"];
    if (socialHosts.some((h) => hostname === h || hostname.endsWith("." + h))) return "social";

    if (
      matchWord(hostname, "news") ||
      matchWord(pathAndQuery, "news") ||
      // matchStem accepte les pluriels et dérivés:
      // `/articles/foo` et `/blogs/foo` sont des segments très courants
      // qu'un matchWord strict aurait classés en "general".
      matchStem(pathAndQuery, "article") ||
      matchStem(pathAndQuery, "actualit")
    ) return "news";

    if (matchStem(hostname, "blog") || matchStem(pathAndQuery, "blog")) return "blog";

    if (
      matchStem(hostname, "shop") ||
      matchStem(pathAndQuery, "shop") ||
      matchStem(pathAndQuery, "product") ||
      matchWord(pathAndQuery, "commerce") ||
      matchWord(pathAndQuery, "buy")
    ) return "commerce";

    return "general";
  }
}

// Make ContentExtractor available globally for Chrome extension
window.ContentExtractor = ContentExtractor;
