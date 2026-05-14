// UI Manager Module
// Responsible for creating and managing the user interface elements

const _extensionAPI = typeof browser !== 'undefined' ? browser : chrome;

class UIManager {
  constructor(settings) {
    this.settings = settings || {
      debugMode: false,
    };
    this.buttonCreated = false;
    this.analysisResults = null;
    this.pageType = 'general';
    this.suspiciousSiteCheck = null;
  }

  log(message, data = null) {
    if (this.settings.debugMode) {
      console.log(`UIManager: ${message}`, data || "");
    }
  }

  setPageType(pageType) {
    this.pageType = pageType;
  }

  createButton(analysisResults = null) {
    if (analysisResults) {
      this.analysisResults = analysisResults;
    }

    if (!this.analysisResults) {
      console.error('DIMA: Aucun résultat d\'analyse disponible pour créer le bouton');
      return;
    }

    // Vérifier si le site est suspect
    this.suspiciousSiteCheck = window.checkSuspiciousSite ?
                                window.checkSuspiciousSite(window.location.href) :
                                { isSuspicious: false };

        try {
            // Supprimer bouton existant
            document.getElementById('dima-btn')?.remove();
            document.getElementById('dima-suspicious-alert')?.remove();

            // Couleur du bouton: blindée pour éviter qu'une valeur invalide
            // ne produise un gradient cassé via adjustColor.
            const safeRiskColor = this.sanitizeHexColor(this.analysisResults.riskColor);

            // Créer le bouton principal (construction DOM-safe: jamais d'innerHTML
            // sur des valeurs dérivées des résultats d'analyse).
            const button = document.createElement('div');
            button.id = 'dima-btn';

            const inner = document.createElement('div');
            inner.style.cssText = 'display: flex; align-items: center; gap: 8px;';

            const brain = document.createElement('span');
            brain.textContent = '🧠';

            const scoreSpan = document.createElement('span');
            scoreSpan.style.fontWeight = 'bold';
            scoreSpan.textContent = String(this.analysisResults.globalScore ?? '');

            const levelSpan = document.createElement('span');
            levelSpan.style.cssText = 'font-size: 0.8em; opacity: 0.9;';
            levelSpan.textContent = String(this.analysisResults.riskLevel ?? '');

            inner.appendChild(brain);
            inner.appendChild(scoreSpan);
            inner.appendChild(levelSpan);
            button.appendChild(inner);

            button.style.cssText = `
                position: fixed !important;
                top: 20px !important;
                right: 20px !important;
                z-index: 999999999 !important;
                background: linear-gradient(135deg, ${safeRiskColor}, ${this.adjustColor(safeRiskColor, -20)}) !important;
                color: white !important;
                padding: 12px 16px !important;
                border-radius: 25px !important;
                cursor: pointer !important;
                font-family: 'Segoe UI', Arial, sans-serif !important;
                font-size: 14px !important;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.1) !important;
                border: 2px solid rgba(255,255,255,0.2) !important;
                user-select: none !important;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                backdrop-filter: blur(10px) !important;
            `;

            button.title = this.generateTooltip();
            
            // Événements
            button.addEventListener('click', () => this.showModal());
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'scale(1.05) translateY(-2px)';
                button.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1) translateY(0)';
                button.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.1)';
            });

            document.body?.appendChild(button);
            
            // Créer l'alerte de site suspect si nécessaire
            if (this.suspiciousSiteCheck.isSuspicious) {
                this.createSuspiciousSiteAlert();
            }
            
            this.buttonCreated = true;
            this.log('Bouton créé avec succès');

        } catch (error) {
            console.error('DIMA: Erreur création bouton:', error);
        }
    }

    createSuspiciousSiteAlert() {
        const { riskConfig } = this.suspiciousSiteCheck;
        const safeColor = this.sanitizeHexColor(riskConfig.color);

        const alert = document.createElement('div');
        alert.id = 'dima-suspicious-alert';

        const row = document.createElement('div');
        row.style.cssText = 'display: flex; align-items: start; gap: 12px;';

        const iconSpan = document.createElement('span');
        iconSpan.style.fontSize = '24px';
        iconSpan.textContent = riskConfig.icon || '⚠️';

        const textBlock = document.createElement('div');
        textBlock.style.flex = '1';

        const labelDiv = document.createElement('div');
        labelDiv.style.cssText = 'font-weight: bold; margin-bottom: 4px; font-size: 14px;';
        labelDiv.textContent = riskConfig.label || '';

        const warnDiv = document.createElement('div');
        warnDiv.style.cssText = 'font-size: 12px; line-height: 1.4; margin-bottom: 8px;';
        warnDiv.textContent = "Vigilance : ce site appartient à un dispositif de manipulation de l'information identifié.";

        const detailsBtn = document.createElement('button');
        detailsBtn.id = 'dima-suspicious-details';
        detailsBtn.style.cssText = `
            background: white;
            color: ${safeColor};
            border: none;
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 11px;
            font-weight: 600;
            transition: all 0.2s;
        `;
        detailsBtn.textContent = 'En savoir plus →';

        textBlock.appendChild(labelDiv);
        textBlock.appendChild(warnDiv);
        textBlock.appendChild(detailsBtn);

        const closeBtn = document.createElement('button');
        closeBtn.id = 'dima-suspicious-close';
        closeBtn.type = 'button';
        closeBtn.setAttribute('aria-label', "Fermer l'alerte");
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 20px;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.7;
            transition: opacity 0.2s;
        `;
        closeBtn.textContent = '×';

        row.appendChild(iconSpan);
        row.appendChild(textBlock);
        row.appendChild(closeBtn);
        alert.appendChild(row);

        alert.style.cssText = `
            position: fixed !important;
            top: 70px !important;
            right: 20px !important;
            z-index: 999998 !important;
            background: linear-gradient(135deg, ${safeColor}, ${this.adjustColor(safeColor, -15)}) !important;
            color: white !important;
            padding: 16px !important;
            border-radius: 12px !important;
            max-width: 350px !important;
            font-family: 'Segoe UI', Arial, sans-serif !important;
            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
            border: 2px solid rgba(255,255,255,0.2) !important;
            animation: slideInRight 0.4s ease-out !important;
            backdrop-filter: blur(10px) !important;
        `;
        
        document.body?.appendChild(alert);

        detailsBtn.addEventListener('click', () => {
            this.showSuspiciousSiteDetails();
        });
        closeBtn.addEventListener('click', () => {
            alert.remove();
        });

        detailsBtn.addEventListener('mouseenter', () => {
            detailsBtn.style.transform = 'translateY(-1px)';
            detailsBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
        });
        detailsBtn.addEventListener('mouseleave', () => {
            detailsBtn.style.transform = 'translateY(0)';
            detailsBtn.style.boxShadow = 'none';
        });

        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.opacity = '1';
        });
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.opacity = '0.7';
        });
    }

    showSuspiciousSiteDetails() {
        const { siteInfo, riskConfig } = this.suspiciousSiteCheck;
        const safeColor = this.sanitizeHexColor(riskConfig.color);

        const previouslyFocused = document.activeElement;

        const detailsModal = document.createElement('div');
        detailsModal.id = 'dima-suspicious-details-modal';
        detailsModal.setAttribute('role', 'dialog');
        detailsModal.setAttribute('aria-modal', 'true');
        detailsModal.setAttribute('aria-labelledby', 'dima-suspicious-details-title');
        detailsModal.tabIndex = -1;
        detailsModal.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: rgba(0,0,0,0.75) !important;
            backdrop-filter: blur(5px) !important;
            z-index: 10000000 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-family: 'Segoe UI', Arial, sans-serif !important;
            animation: fadeIn 0.3s ease-out !important;
        `;

        const logoUrl = _extensionAPI.runtime.getURL('M82-logo-16.png');

        const card = document.createElement('div');
        card.style.cssText = 'background: white; padding: 30px; border-radius: 20px; max-width: 600px; max-height: 90vh; overflow-y: auto; margin: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); animation: slideIn 0.3s ease-out;';

        // En-tête
        const header = document.createElement('div');
        header.style.cssText = 'text-align: center; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;';

        const headerRow = document.createElement('div');
        headerRow.style.cssText = 'display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 10px;';

        const logoImg = document.createElement('img');
        logoImg.src = logoUrl;
        logoImg.alt = 'M82 Project';
        logoImg.style.cssText = 'width: 24px; height: 24px;';
        logoImg.addEventListener('error', () => { logoImg.style.display = 'none'; });

        const title = document.createElement('h2');
        title.id = 'dima-suspicious-details-title';
        title.style.cssText = 'color: #2c3e50; margin: 0; font-size: 1.8em;';
        title.textContent = 'Site Suspect Identifié';

        headerRow.appendChild(logoImg);
        headerRow.appendChild(title);

        const badge = document.createElement('div');
        badge.style.cssText = `display: inline-block; background: ${safeColor}; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-top: 10px;`;
        badge.textContent = `${riskConfig.icon || ''} ${riskConfig.label || ''}`.trim();

        header.appendChild(headerRow);
        header.appendChild(badge);

        // Contenu
        const contentWrap = document.createElement('div');
        contentWrap.style.marginBottom = '25px';

        const warnBox = document.createElement('div');
        warnBox.style.cssText = `background: linear-gradient(135deg, #fff3cd, #ffeaa7); padding: 20px; border-radius: 12px; border-left: 4px solid ${safeColor}; margin-bottom: 20px;`;
        const warnTitle = document.createElement('h3');
        warnTitle.style.cssText = 'margin: 0 0 10px 0; color: #856404; font-size: 1.1em;';
        warnTitle.textContent = '⚠️ Avertissement';
        const warnP = document.createElement('p');
        warnP.style.cssText = 'margin: 0; color: #856404; line-height: 1.6;';
        warnP.textContent = riskConfig.message || '';
        warnBox.appendChild(warnTitle);
        warnBox.appendChild(warnP);

        const detailsBox = document.createElement('div');
        detailsBox.style.cssText = 'background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 15px;';
        const detailsTitle = document.createElement('h4');
        detailsTitle.style.cssText = 'margin: 0 0 12px 0; color: #2c3e50; font-size: 1em;';
        detailsTitle.textContent = "📋 Détails de l'identification";
        const detailsGrid = document.createElement('div');
        detailsGrid.style.cssText = 'display: grid; gap: 12px;';

        const makeField = (labelText, valueText) => {
            const field = document.createElement('div');
            const strong = document.createElement('strong');
            strong.style.cssText = 'color: #7f8c8d; font-size: 0.9em;';
            strong.textContent = labelText;
            const value = document.createElement('div');
            value.style.cssText = 'color: #2c3e50; margin-top: 4px;';
            value.textContent = valueText;
            field.appendChild(strong);
            field.appendChild(value);
            return field;
        };

        detailsGrid.appendChild(makeField('Raison :', siteInfo.reason || ''));
        detailsGrid.appendChild(makeField('Source du rapport :', siteInfo.source || ''));
        const dateText = siteInfo.identifiedDate
            ? new Date(siteInfo.identifiedDate).toLocaleDateString('fr-FR')
            : '';
        detailsGrid.appendChild(makeField("Date d'identification :", dateText));

        if (Array.isArray(siteInfo.tags) && siteInfo.tags.length > 0) {
            const tagsField = document.createElement('div');
            const tagsLabel = document.createElement('strong');
            tagsLabel.style.cssText = 'color: #7f8c8d; font-size: 0.9em;';
            tagsLabel.textContent = 'Catégories :';
            const tagsRow = document.createElement('div');
            tagsRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;';
            siteInfo.tags.forEach(tag => {
                const span = document.createElement('span');
                span.style.cssText = 'background: #e9ecef; color: #495057; padding: 4px 10px; border-radius: 12px; font-size: 0.8em;';
                span.textContent = String(tag);
                tagsRow.appendChild(span);
            });
            tagsField.appendChild(tagsLabel);
            tagsField.appendChild(tagsRow);
            detailsGrid.appendChild(tagsField);
        }

        detailsBox.appendChild(detailsTitle);
        detailsBox.appendChild(detailsGrid);

        const recoBox = document.createElement('div');
        recoBox.style.cssText = 'background: #e8f4f8; padding: 16px; border-radius: 10px; border-left: 4px solid #17a2b8;';
        const recoTitle = document.createElement('h4');
        recoTitle.style.cssText = 'margin: 0 0 8px 0; color: #0c5460; font-size: 0.95em;';
        recoTitle.textContent = '💡 Recommandations';
        const recoList = document.createElement('ul');
        recoList.style.cssText = 'margin: 0; padding-left: 20px; color: #0c5460; line-height: 1.6;';
        [
            'Vérifiez les informations auprès de sources fiables',
            'Consultez plusieurs sources avant de partager',
            'Soyez attentif aux techniques de manipulation détectées',
            'Signalez le contenu suspect si nécessaire',
        ].forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            recoList.appendChild(li);
        });
        recoBox.appendChild(recoTitle);
        recoBox.appendChild(recoList);

        contentWrap.appendChild(warnBox);
        contentWrap.appendChild(detailsBox);
        contentWrap.appendChild(recoBox);

        // Actions
        const actions = document.createElement('div');
        actions.style.cssText = 'display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;';

        if (this.isSafeHttpUrl(siteInfo.reportUrl)) {
            const reportLink = document.createElement('a');
            reportLink.href = siteInfo.reportUrl;
            reportLink.target = '_blank';
            reportLink.rel = 'noopener noreferrer';
            reportLink.style.cssText = 'background: #3498db; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 500; transition: all 0.3s; box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3); text-decoration: none; display: inline-block;';
            reportLink.textContent = '📄 Consulter le rapport complet';
            actions.appendChild(reportLink);
        }

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.setAttribute('aria-label', 'Fermer la fenêtre de détails');
        closeBtn.style.cssText = 'background: #95a5a6; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 500; transition: all 0.3s;';
        closeBtn.textContent = 'Fermer';

        let cleanedUp = false;
        const cleanup = () => {
            if (cleanedUp) return;
            cleanedUp = true;
            document.removeEventListener('keydown', onKeyDown, true);
            if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
                previouslyFocused.focus();
            }
        };
        const closeModal = () => {
            if (detailsModal.isConnected) detailsModal.remove();
            cleanup();
        };

        // Focus trap: garde le focus à l'intérieur du dialog.
        // Capture phase + stopPropagation pour empêcher les raccourcis
        // globaux de la page hôte (Escape, Tab) de se déclencher.
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
                return;
            }
            if (e.key !== 'Tab') return;
            const focusables = detailsModal.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (focusables.length === 0) {
                e.preventDefault();
                e.stopPropagation();
                detailsModal.focus();
                return;
            }
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const active = document.activeElement;
            if (e.shiftKey && (active === first || !detailsModal.contains(active))) {
                e.preventDefault();
                e.stopPropagation();
                last.focus();
            } else if (!e.shiftKey && (active === last || !detailsModal.contains(active))) {
                e.preventDefault();
                e.stopPropagation();
                first.focus();
            } else {
                // Tab à l'intérieur du dialog : on laisse le navigateur faire,
                // mais on empêche la page hôte d'intercepter.
                e.stopPropagation();
            }
        };
        closeBtn.addEventListener('click', closeModal);
        actions.appendChild(closeBtn);

        const footer = document.createElement('div');
        footer.style.cssText = 'text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #7f8c8d; font-size: 0.85em;';
        footer.appendChild(document.createTextNode('Base de données maintenue par '));
        const m82Link = document.createElement('a');
        m82Link.href = 'https://m82-project.org/';
        m82Link.target = '_blank';
        m82Link.rel = 'noopener noreferrer';
        m82Link.style.cssText = 'color: #3498db; text-decoration: none; font-weight: 500;';
        m82Link.textContent = 'M82 Project';
        footer.appendChild(m82Link);

        card.appendChild(header);
        card.appendChild(contentWrap);
        card.appendChild(actions);
        card.appendChild(footer);
        detailsModal.appendChild(card);

        detailsModal.addEventListener('click', (e) => {
            if (e.target === detailsModal) closeModal();
        });
        document.addEventListener('keydown', onKeyDown, true);

        document.body.appendChild(detailsModal);
        closeBtn.focus();
    }

    sanitizeHexColor(color) {
        // Restreint à #RRGGBB car adjustColor() ne gère que ce format.
        const fallback = '#c0392b';
        if (typeof color !== 'string') return fallback;
        return /^#[0-9a-fA-F]{6}$/.test(color) ? color : fallback;
    }

    // Échappe une chaîne pour insertion sûre dans un fragment HTML.
    // Utilisé pour les valeurs dérivées des bases de données (technique.nom,
    // .index, .description, .tactic, matchedKeywords[].keyword) qui sont
    // contrôlées par les contributeurs des bases mais ne sont pas garanties
    // exemptes de caractères HTML; même remarque pour les valeurs page-controlled.
    escapeHtml(value) {
        if (value == null) return '';
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    isSafeHttpUrl(url) {
        if (typeof url !== 'string' || !/^https?:\/\//i.test(url)) {
            return false;
        }
        try {
            const parsed = new URL(url);
            return parsed.protocol === 'https:' || parsed.protocol === 'http:';
        } catch (_) {
            return false;
        }
    }

    adjustColor(color, amount) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * amount);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
                     (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
                     (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    generateTooltip() {
        const techniques = this.analysisResults.detectedTechniques.slice(0, 3);
        let tooltip = `DIMA Score: ${this.analysisResults.globalScore} (${this.analysisResults.riskLevel})
${this.analysisResults.detectedTechniques.length} techniques détectées
${techniques.map(t => `• ${t.nom}`).join('\n')}`;
        
        if (this.suspiciousSiteCheck.isSuspicious) {
            tooltip += `\n\n⚠️ SITE SUSPECT IDENTIFIÉ`;
        }
        
        tooltip += `\nContenu: ${this.analysisResults.contentLength} caractères`;
        
        return tooltip;
    }

    generatePhaseAnalysis() {
        if (!this.analysisResults || !this.analysisResults.detectedTechniques || this.analysisResults.detectedTechniques.length === 0) {
            return '';
        }

        // Analyser les techniques par phase
        const phaseStats = {
            'Detect': { count: 0, totalScore: 0, techniques: [], icon: '👁️', color: '#3498db' },
            'Informer': { count: 0, totalScore: 0, techniques: [], icon: '📢', color: '#e67e22' },
            'Mémoriser': { count: 0, totalScore: 0, techniques: [], icon: '🧠', color: '#9b59b6' },
            'Agir': { count: 0, totalScore: 0, techniques: [], icon: '⚡', color: '#e74c3c' }
        };

        this.analysisResults.detectedTechniques.forEach(technique => {
            const phase = technique.phase || 'Detect';
            if (phaseStats[phase]) {
                phaseStats[phase].count++;
                phaseStats[phase].totalScore += technique.weightedScore || technique.score || 0;
                phaseStats[phase].techniques.push(technique);
            }
        });

        // Calculer les pourcentages
        const totalTechniques = this.analysisResults.detectedTechniques.length;
        const totalScore = Object.values(phaseStats).reduce((sum, phase) => sum + phase.totalScore, 0);

        // Trouver la phase dominante
        let dominantPhase = null;
        let maxCount = 0;
        Object.entries(phaseStats).forEach(([phase, stats]) => {
            if (stats.count > maxCount) {
                maxCount = stats.count;
                dominantPhase = phase;
            }
        });

        // Générer l'explication contextuelle
        const explanation = this.generatePhaseExplanation(dominantPhase, phaseStats, totalTechniques);

        // Générer le HTML
        return `
            <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e9ecef;">
                <h3 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 1.2em; display: flex; align-items: center; gap: 10px;">
                    📊 Analyse par Phase DIMA
                    <span style="font-size: 0.7em; color: #7f8c8d; font-weight: normal; font-style: italic;">
                        (Detect, Informer, Mémoriser, Agir)
                    </span>
                </h3>
                
                <!-- Explication contextuelle -->
                <div style="background: linear-gradient(135deg, #e8f4f8, #d4e8f0); padding: 16px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid ${phaseStats[dominantPhase]?.color || '#3498db'};">
                    <div style="display: flex; align-items: start; gap: 12px;">
                        <span style="font-size: 24px;">${phaseStats[dominantPhase]?.icon || '💡'}</span>
                        <div>
                            <h4 style="margin: 0 0 8px 0; color: #0c5460; font-size: 1em;">
                                Analyse : Phase dominante "${dominantPhase}"
                            </h4>
                            <p style="margin: 0; color: #0c5460; font-size: 0.9em; line-height: 1.5;">
                                ${explanation}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Répartition visuelle des phases -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 20px;">
                    ${Object.entries(phaseStats).map(([phase, stats]) => {
                        const percentage = totalTechniques > 0 ? Math.round((stats.count / totalTechniques) * 100) : 0;
                        const scorePercentage = totalScore > 0 ? Math.round((stats.totalScore / totalScore) * 100) : 0;
                        const isActive = stats.count > 0;
                        
                        return `
                            <div style="
                                background: ${isActive ? 'white' : '#f8f9fa'}; 
                                padding: 15px; 
                                border-radius: 10px; 
                                text-align: center; 
                                border: ${isActive ? `2px solid ${stats.color}` : '1px solid #e9ecef'};
                                opacity: ${isActive ? '1' : '0.5'};
                                transition: all 0.3s;
                            ">
                                <div style="font-size: 24px; margin-bottom: 8px;">${stats.icon}</div>
                                <div style="font-weight: bold; color: ${stats.color}; font-size: 0.85em; margin-bottom: 4px;">
                                    ${phase}
                                </div>
                                <div style="font-size: 1.8em; font-weight: bold; color: ${isActive ? stats.color : '#bdc3c7'}; margin-bottom: 4px;">
                                    ${stats.count}
                                </div>
                                <div style="font-size: 0.75em; color: #7f8c8d; margin-bottom: 8px;">
                                    ${percentage}% techniques
                                </div>
                                ${isActive ? `
                                    <div style="background: ${stats.color}20; padding: 4px 8px; border-radius: 6px; font-size: 0.7em; color: ${stats.color}; font-weight: 600;">
                                        ${scorePercentage}% du score
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- Graphique à barres -->
                <div style="background: white; padding: 15px; border-radius: 10px; border: 1px solid #e9ecef;">
                    <h4 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 0.95em;">Distribution du score par phase</h4>
                    ${Object.entries(phaseStats).map(([phase, stats]) => {
                        const percentage = totalScore > 0 ? (stats.totalScore / totalScore) * 100 : 0;
                        const displayScore = stats.totalScore.toFixed(1);
                        
                        return `
                            <div style="margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                    <span style="font-size: 0.85em; font-weight: 600; color: #2c3e50;">
                                        ${stats.icon} ${phase}
                                    </span>
                                    <span style="font-size: 0.8em; color: #7f8c8d;">
                                        ${displayScore} pts (${Math.round(percentage)}%)
                                    </span>
                                </div>
                                <div style="background: #e9ecef; height: 8px; border-radius: 4px; overflow: hidden;">
                                    <div style="
                                        background: linear-gradient(90deg, ${stats.color}, ${this.adjustColor(stats.color, -15)}); 
                                        width: ${percentage}%; 
                                        height: 100%;
                                        transition: width 0.6s ease-out;
                                        border-radius: 4px;
                                    "></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- Comprendre les phases -->
                <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 10px; border: 1px solid #e9ecef;">
                    <details style="cursor: pointer;">
                        <summary style="font-weight: 600; color: #2c3e50; font-size: 0.9em; padding: 5px; outline: none;">
                            ℹ️ Comprendre les phases DIMA
                        </summary>
                        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e9ecef; font-size: 0.85em; line-height: 1.6; color: #555;">
                            <div style="margin-bottom: 10px;">
                                <strong style="color: #3498db;">👁️ Detect (Détecter)</strong> : 
                                Techniques visant à capter l'attention et identifier les cibles sensibles aux messages.
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong style="color: #e67e22;">📢 Informer</strong> : 
                                Techniques de transmission et cadrage de l'information pour influencer la perception.
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong style="color: #9b59b6;">🧠 Mémoriser</strong> : 
                                Techniques d'ancrage mémoriel et de renforcement des messages dans la durée.
                            </div>
                            <div>
                                <strong style="color: #e74c3c;">⚡ Agir</strong> : 
                                Techniques d'incitation à l'action et de mobilisation comportementale.
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        `;
    }

    generatePhaseExplanation(dominantPhase, phaseStats, totalTechniques) {
        const explanations = {
            'Detect': `Le contenu utilise principalement des techniques de <strong>détection et captation d'attention</strong> (${phaseStats['Detect'].count}/${totalTechniques} techniques). Cela suggère une stratégie axée sur l'identification des publics réceptifs et l'accroche initiale. Le contenu cherche à attirer et cibler des audiences spécifiques.`,
            
            'Informer': `Le contenu se concentre sur des techniques de <strong>transmission et cadrage de l'information</strong> (${phaseStats['Informer'].count}/${totalTechniques} techniques). L'objectif est de contrôler la perception de l'information via le choix des faits présentés, leur contextualisation, et les biais introduits dans le message.`,
            
            'Mémoriser': `Le contenu privilégie des techniques de <strong>mémorisation et ancrage</strong> (${phaseStats['Mémoriser'].count}/${totalTechniques} techniques). Ces méthodes visent à inscrire durablement les messages dans la mémoire du public, souvent par répétition, simplification ou associations émotionnelles fortes.`,
            
            'Agir': `Le contenu met l'accent sur des techniques d'<strong>incitation à l'action</strong> (${phaseStats['Agir'].count}/${totalTechniques} techniques). L'objectif est de mobiliser le public vers des comportements spécifiques : partage, engagement, manifestation, ou modification d'opinions et de votes.`
        };

        // Si plusieurs phases sont également représentées
        const topPhases = Object.entries(phaseStats)
            .filter(([_, stats]) => stats.count > 0)
            .sort((a, b) => b[1].count - a[1].count)
            .slice(0, 2);

        if (topPhases.length > 1 && topPhases[0][1].count === topPhases[1][1].count) {
            return `Le contenu présente une <strong>stratégie équilibrée</strong> entre les phases "${topPhases[0][0]}" et "${topPhases[1][0]}" (${topPhases[0][1].count} techniques chacune). Cette combinaison indique une approche sophistiquée visant à la fois à attirer l'attention et à générer un impact durable.`;
        }

        return explanations[dominantPhase] || 'Analyse de la répartition des techniques de manipulation cognitive détectées selon le modèle DIMA.';
    }

    showModal() {
        try {
            this.log('Affichage du modal');
            
            document.getElementById('dima-modal')?.remove();

            const modal = document.createElement('div');
            modal.id = 'dima-modal';
            
            modal.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                background: rgba(0,0,0,0.75) !important;
                backdrop-filter: blur(5px) !important;
                z-index: 9999999 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-family: 'Segoe UI', Arial, sans-serif !important;
                animation: fadeIn 0.3s ease-out !important;
            `;

            const logoUrl = _extensionAPI.runtime.getURL('M82-logo-16.png');
            
            // Construire le contenu avec alerte site suspect si nécessaire
            // Note : les valeurs page-controlled (title, url) et user-DB-controlled
            // (riskConfig.label/message, siteInfo.*) sont injectées via textContent
            // après l'innerHTML pour éviter toute injection HTML.
            let suspiciousAlert = '';
            let suspiciousSafeColor = '';
            if (this.suspiciousSiteCheck.isSuspicious) {
                suspiciousSafeColor = this.sanitizeHexColor(this.suspiciousSiteCheck.riskConfig.color);
                suspiciousAlert = `
                    <div style="background: linear-gradient(135deg, ${suspiciousSafeColor}, ${this.adjustColor(suspiciousSafeColor, -15)}); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 2px solid rgba(255,255,255,0.2);">
                        <div style="display: flex; align-items: start; gap: 12px;">
                            <span style="font-size: 28px;" data-dima-placeholder="suspicious-icon"></span>
                            <div style="flex: 1;">
                                <h3 style="margin: 0 0 8px 0; font-size: 1.2em;" data-dima-placeholder="suspicious-label"></h3>
                                <p style="margin: 0 0 12px 0; font-size: 0.95em; line-height: 1.5;" data-dima-placeholder="suspicious-message"></p>
                                <button type="button"
                                        class="suspicious-details-btn"
                                        style="background: white; color: ${suspiciousSafeColor}; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all 0.2s;">
                                    Voir les détails du rapport →
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            // Note: Toutes les valeurs dérivées de l'analyse (technique.*,
            // matchedKeywords, page title/url) sont injectées via this.escapeHtml()
            // pour éviter qu'un caractère HTML dans une base de données ne casse
            // le rendu ou n'introduise un vecteur XSS. Les onclick/onerror inline
            // ont été remplacés par des addEventListener (CSP-safe).
            const esc = (v) => this.escapeHtml(v);
            const phaseIcon = (phase) => {
                switch (phase) {
                    case 'Detect': return '👁️';
                    case 'Informer': return '📢';
                    case 'Mémoriser': return '🧠';
                    case 'Agir': return '⚡';
                    default: return '•';
                }
            };

            const safeRiskColor = this.sanitizeHexColor(this.analysisResults.riskColor);
            const detectedHtml = this.analysisResults.detectedTechniques.length === 0
                ? `
                    <div style="background: linear-gradient(135deg, #d4edda, #c3e6cb); color: #155724; padding: 25px; border-radius: 12px; text-align: center; border: 1px solid #c3e6cb;">
                        <div style="font-size: 2em; margin-bottom: 10px;">✅</div>
                        <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 8px;">Aucune manipulation détectée</div>
                        <div style="font-size: 0.95em; opacity: 0.8;">Le contenu analysé semble exempt de techniques de manipulation cognitive manifestes</div>
                    </div>
                `
                : `
                    <div style="background: linear-gradient(135deg, #fff3cd, #ffeaa7); padding: 20px; border-radius: 12px; border: 1px solid #ffeaa7;">
                        <h4 style="margin: 0 0 20px 0; color: #856404; font-size: 1.2em;">⚠️ Techniques de manipulation détectées</h4>
                        <div style="display: grid; gap: 12px;">
                            ${this.analysisResults.detectedTechniques.slice(0, 8).map(technique => `
                                <div style="background: white; padding: 16px; border-radius: 10px; border-left: 4px solid #e67e22; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                                    <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 8px;">
                                        <div style="flex: 1;">
                                            <div style="font-weight: bold; color: #2c3e50; margin-bottom: 4px; font-size: 1.05em;">
                                                ${esc(phaseIcon(technique.phase))} ${esc(technique.index)}: ${esc(technique.nom)}
                                            </div>
                                            ${technique.tactic ? `<div style="font-size: 0.75em; color: #7f8c8d; margin-bottom: 8px;">↳ Tactique: ${esc(technique.tactic)}</div>` : ''}
                                            ${technique.description ? `<div style="color: #666; font-size: 0.9em; margin-bottom: 8px; line-height: 1.4;">${esc(technique.description)}</div>` : ''}
                                        </div>
                                        <span style="background: #27ae60; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8em; font-weight: bold; margin-left: 15px;">
                                            ${esc(technique.confidence)}%
                                        </span>
                                    </div>

                                    <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 8px;">
                                        <span style="background: #e67e22; color: white; padding: 3px 8px; border-radius: 6px; font-size: 0.8em; font-weight: 500;">
                                            ${esc(technique.phase)}
                                        </span>
                                        <div style="text-align: right; font-size: 0.75em; color: #7f8c8d;">
                                            <div>Score pondéré: ${esc(technique.weightedScore?.toFixed(1) ?? technique.score)}</div>
                                        </div>
                                    </div>

                                    ${technique.matchedKeywords?.length > 0 ? `
                                        <div style="margin-top: 10px;">
                                            <div style="font-size: 0.85em; color: #666; margin-bottom: 6px; font-weight: 500;">
                                                🔎 Mots-clés détectés:
                                            </div>
                                            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                                                ${technique.matchedKeywords.slice(0, 4).map(keyword =>
                                                    `<span style="background: #e9ecef; color: #495057; padding: 2px 6px; border-radius: 4px; font-size: 0.75em;">
                                                        ${esc(keyword.keyword)} ${(keyword.count > 1) ? `(×${esc(keyword.count)})` : ''}
                                                    </span>`
                                                ).join('')}
                                                ${technique.matchedKeywords.length > 4 ?
                                                    `<span style="color: #999; font-size: 0.75em; padding: 2px 4px;">+${esc(technique.matchedKeywords.length - 4)} autres...</span>`
                                                    : ''
                                                }
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            modal.innerHTML = `
                <div style="background: white; padding: 30px; border-radius: 20px; max-width: 900px; max-height: 90vh; overflow-y: auto; margin: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); animation: slideIn 0.3s ease-out;">

                    <!-- En-tête -->
                    <div style="text-align: center; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 10px;">
                            <img src="${esc(logoUrl)}"
                                 id="dima-modal-logo"
                                 style="width: 24px; height: 24px;"
                                 alt="M82 Project">
                            <h2 style="color: #2c3e50; margin: 0; font-size: 1.8em;">Analyse DIMA</h2>
                        </div>
                        <p style="color: #7f8c8d; margin: 0; font-size: 0.95em;">
                            Détection de techniques de manipulation cognitive par
                            <a href="https://m82-project.org/" target="_blank" rel="noopener noreferrer"
                               style="color: #3498db; text-decoration: none; font-weight: 500;">M82 Project</a>
                        </p>
                    </div>

                    ${suspiciousAlert}

                    <!-- Métriques principales -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 15px; margin-bottom: 25px;">
                        <div style="background: linear-gradient(135deg, ${safeRiskColor}, ${this.adjustColor(safeRiskColor, -15)}); color: white; padding: 20px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                            <div style="font-size: 2.2em; font-weight: bold; margin-bottom: 5px;">${esc(this.analysisResults.globalScore)}</div>
                            <div style="font-size: 0.9em; opacity: 0.9;">Score Global</div>
                        </div>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #e9ecef;">
                            <div style="font-size: 2.2em; font-weight: bold; color: #3498db; margin-bottom: 5px;">${esc(this.analysisResults.detectedTechniques.length)}</div>
                            <div style="color: #7f8c8d; font-size: 0.9em;">Techniques</div>
                        </div>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #e9ecef;">
                            <div style="font-size: 1.4em; font-weight: bold; color: ${safeRiskColor}; margin-bottom: 5px;">${esc(this.analysisResults.riskLevel)}</div>
                            <div style="color: #7f8c8d; font-size: 0.9em;">Niveau Risque</div>
                        </div>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #e9ecef;">
                            <div style="font-size: 1.6em; font-weight: bold; color: #17a2b8; margin-bottom: 5px;">${esc(this.analysisResults.contentLength)}</div>
                            <div style="color: #7f8c8d; font-size: 0.9em;">Caractères</div>
                        </div>
                    </div>

                    ${this.generatePhaseAnalysis()}

                    <!-- Informations sur la page -->
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e9ecef;">
                        <h4 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 1.1em;">📄 Page analysée</h4>
                        <div style="font-weight: 500; margin-bottom: 8px; line-height: 1.4;" data-dima-placeholder="page-title"></div>
                        <div style="color: #666; font-size: 0.9em; word-break: break-all; margin-bottom: 8px;" data-dima-placeholder="page-url"></div>
                        <div style="color: #888; font-size: 0.85em;">
                            Analysé le ${esc(new Date(this.analysisResults.timestamp).toLocaleString('fr-FR'))} •
                            ${esc(this.analysisResults.analyzedText)} caractères traités • Type: ${esc(this.pageType)}
                        </div>
                    </div>

                    ${detectedHtml}

                    <!-- Actions -->
                    <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button type="button" id="dima-modal-close-btn"
                                    style="background: #3498db; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500; transition: background 0.3s;">
                                Fermer
                            </button>
                            <button type="button" id="dima-modal-learn-more-btn"
                                    style="background: #95a5a6; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500; transition: background 0.3s;">
                                En savoir plus
                            </button>
                        </div>
                    </div>

                    <style>
                        #dima-modal button:hover {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                        }
                    </style>
                </div>
            `;

            // Injection sûre des valeurs page-controlled / DB-controlled
            // via textContent (jamais innerHTML) — évite tout XSS.
            const setPlaceholder = (key, value) => {
                const el = modal.querySelector(`[data-dima-placeholder="${key}"]`);
                if (el) el.textContent = value == null ? '' : String(value);
            };
            setPlaceholder('page-title', this.analysisResults.title);
            setPlaceholder('page-url', this.analysisResults.url);
            if (this.suspiciousSiteCheck.isSuspicious) {
                const { riskConfig } = this.suspiciousSiteCheck;
                setPlaceholder('suspicious-icon', riskConfig.icon || '⚠️');
                setPlaceholder('suspicious-label', riskConfig.label || '');
                setPlaceholder('suspicious-message', riskConfig.message || '');
            }

            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.remove();
            });

            modal.querySelector('.suspicious-details-btn')?.addEventListener('click', () => {
                this.showSuspiciousSiteDetails();
            });

            // Boutons Fermer / En savoir plus : on remplace les anciens
            // onclick inline (bloqués par les CSP strictes des sites hôtes).
            modal.querySelector('#dima-modal-close-btn')?.addEventListener('click', () => {
                modal.remove();
            });
            modal.querySelector('#dima-modal-learn-more-btn')?.addEventListener('click', () => {
                window.open('https://m82-project.org/', '_blank', 'noopener,noreferrer');
            });
            // onerror inline du logo, également bloqué par certaines CSP.
            modal.querySelector('#dima-modal-logo')?.addEventListener('error', (e) => {
                e.currentTarget.style.display = 'none';
            });

            document.body.appendChild(modal);
            this.log('Modal affiché');

        } catch (error) {
            console.error('DIMA: Erreur modal:', error);
        }
    }
}

// Make UIManager available globally for Chrome extension
window.UIManager = UIManager;
