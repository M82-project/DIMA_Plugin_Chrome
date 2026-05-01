// UI Manager Module
// Responsible for creating and managing the user interface elements
// Version 2.1.0 - Bug #3 fix: bandeau alerte suspect automatique via showSuspiciousAlert

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

        try {
            // Supprimer les éléments existants d'abord
            document.getElementById('dima-btn')?.remove();
            document.getElementById('dima-suspicious-alert')?.remove();

            if (this.buttonCreated) return;

            // Vérifier si le site est suspect
            this.suspiciousSiteCheck = window.checkSuspiciousSite ? 
                                        window.checkSuspiciousSite(window.location.href) : 
                                        { isSuspicious: false };

            // Créer le bouton principal
            const button = document.createElement('div');
            button.id = 'dima-btn';
            
            button.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    🧠 
                    <span style="font-weight: bold;">${this.analysisResults.globalScore}</span>
                    <span style="font-size: 0.8em; opacity: 0.9;">${this.analysisResults.riskLevel}</span>
                </div>
            `;
            
            button.style.cssText = `
                position: fixed !important;
                top: 20px !important;
                right: 20px !important;
                z-index: 999999999 !important;
                background: linear-gradient(135deg, ${this.analysisResults.riskColor}, ${this.adjustColor(this.analysisResults.riskColor, -20)}) !important;
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
            
            // Afficher le bandeau si site suspect
            if (this.suspiciousSiteCheck.isSuspicious) {
                this.showSuspiciousAlert(this.suspiciousSiteCheck);
            }
            
            this.buttonCreated = true;
            this.log('Bouton créé avec succès');

        } catch (error) {
            console.error('DIMA: Erreur création bouton:', error);
        }
    }

    showSuspiciousAlert(checkResult) {
        if (document.getElementById('dima-suspicious-alert')) return;

        const alertBanner = document.createElement('div');
        alertBanner.id = 'dima-suspicious-alert';
        alertBanner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, ${checkResult.riskConfig.color}, ${checkResult.riskConfig.color}dd);
            color: white;
            padding: 15px 20px;
            z-index: 999999998;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transform: translateY(-100%);
            transition: transform 0.4s ease-out;
        `;

        alertBanner.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                <span style="font-size: 24px;">${checkResult.riskConfig.icon}</span>
                <div>
                    <div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">
                        ${checkResult.riskConfig.label} — ${checkResult.siteInfo.source}
                    </div>
                    <div style="font-size: 14px; opacity: 0.95;">
                        ${checkResult.siteInfo.reason}
                    </div>
                </div>
            </div>
            <button id="dima-close-alert" style="
                background: rgba(255,255,255,0.2);
                border: 1px solid rgba(255,255,255,0.3);
                color: white;
                padding: 8px 15px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 14px;
            ">✕</button>
        `;

        document.body.appendChild(alertBanner);

        // Déclencher l'animation d'entrée
        requestAnimationFrame(() => {
            alertBanner.style.transform = 'translateY(0)';
        });

        document.getElementById('dima-close-alert').addEventListener('click', () => {
            alertBanner.style.transform = 'translateY(-100%)';
            setTimeout(() => alertBanner.remove(), 400);
        });
    }

    showSuspiciousSiteDetails() {
        const { siteInfo, riskConfig } = this.suspiciousSiteCheck;
        
        const detailsModal = document.createElement('div');
        detailsModal.id = 'dima-suspicious-details-modal';
        
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
        
        detailsModal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 20px; max-width: 600px; max-height: 90vh; overflow-y: auto; margin: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); animation: slideIn 0.3s ease-out;">
                
                <div style="text-align: center; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 10px;">
                        <img src="${logoUrl}" 
                             style="width: 24px; height: 24px;" 
                             alt="M82 Project"
                             onerror="this.style.display='none'">
                        <h2 style="color: #2c3e50; margin: 0; font-size: 1.8em;">Site Suspect Identifié</h2>
                    </div>
                    <div style="display: inline-block; background: ${riskConfig.color}; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-top: 10px;">
                        ${riskConfig.icon} ${riskConfig.label}
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <div style="background: linear-gradient(135deg, #fff3cd, #ffeaa7); padding: 20px; border-radius: 12px; border-left: 4px solid ${riskConfig.color}; margin-bottom: 20px;">
                        <h3 style="margin: 0 0 10px 0; color: #856404; font-size: 1.1em;">⚠️ Avertissement</h3>
                        <p style="margin: 0; color: #856404; line-height: 1.6;">
                            ${riskConfig.message}
                        </p>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                        <h4 style="margin: 0 0 12px 0; color: #2c3e50; font-size: 1em;">📋 Détails de l'identification</h4>
                        <div style="display: grid; gap: 12px;">
                            <div>
                                <strong style="color: #7f8c8d; font-size: 0.9em;">Raison :</strong>
                                <div style="color: #2c3e50; margin-top: 4px;">${siteInfo.reason}</div>
                            </div>
                            <div>
                                <strong style="color: #7f8c8d; font-size: 0.9em;">Source du rapport :</strong>
                                <div style="color: #2c3e50; margin-top: 4px;">${siteInfo.source}</div>
                            </div>
                            <div>
                                <strong style="color: #7f8c8d; font-size: 0.9em;">Date d'identification :</strong>
                                <div style="color: #2c3e50; margin-top: 4px;">${new Date(siteInfo.identifiedDate).toLocaleDateString('fr-FR')}</div>
                            </div>
                            ${siteInfo.tags && siteInfo.tags.length > 0 ? `
                            <div>
                                <strong style="color: #7f8c8d; font-size: 0.9em;">Tags :</strong>
                                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
                                    ${siteInfo.tags.map(tag => `<span style="background: #e9ecef; color: #495057; padding: 3px 10px; border-radius: 12px; font-size: 0.85em;">${tag}</span>`).join('')}
                                </div>
                            </div>` : ''}
                        </div>
                    </div>
                    
                    ${siteInfo.reportUrl ? `
                    <a href="${siteInfo.reportUrl}" target="_blank" 
                       style="display: block; text-align: center; background: #3498db; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: background 0.3s;">
                        📄 Consulter le rapport source
                    </a>` : ''}
                </div>
                
                <div style="text-align: center;">
                    <button onclick="document.getElementById('dima-suspicious-details-modal').remove()" 
                            style="background: #95a5a6; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 500; transition: all 0.3s;">
                        Fermer
                    </button>
                </div>
                
                <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #7f8c8d; font-size: 0.85em;">
                    Base de données maintenue par 
                    <a href="https://m82-project.org/" target="_blank" 
                       style="color: #3498db; text-decoration: none; font-weight: 500;">M82 Project</a>
                </div>
            </div>
        `;
        
        detailsModal.addEventListener('click', (e) => {
            if (e.target === detailsModal) detailsModal.remove();
        });
        
        document.body.appendChild(detailsModal);
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

        const totalTechniques = this.analysisResults.detectedTechniques.length;
        const totalScore = Object.values(phaseStats).reduce((sum, phase) => sum + phase.totalScore, 0);

        let dominantPhase = null;
        let maxCount = 0;
        Object.entries(phaseStats).forEach(([phase, stats]) => {
            if (stats.count > maxCount) {
                maxCount = stats.count;
                dominantPhase = phase;
            }
        });

        const explanation = this.generatePhaseExplanation(dominantPhase, phaseStats, totalTechniques);

        return `
            <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e9ecef;">
                <h3 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 1.2em; display: flex; align-items: center; gap: 10px;">
                    📊 Analyse par Phase DIMA
                    <span style="font-size: 0.7em; color: #7f8c8d; font-weight: normal; font-style: italic;">
                        (Detect, Informer, Mémoriser, Agir)
                    </span>
                </h3>
                
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

                <div style="background: white; padding: 15px; border-radius: 10px; border: 1px solid #e9ecef;">
                    <h4 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 0.95em;">Distribution du score par phase</h4>
                    ${Object.entries(phaseStats).map(([phase, stats]) => {
                        const percentage = totalScore > 0 ? Math.round((stats.totalScore / totalScore) * 100) : 0;
                        return `
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                                <div style="width: 80px; font-size: 0.85em; color: #2c3e50; font-weight: 500;">${stats.icon} ${phase}</div>
                                <div style="flex: 1; background: #f0f0f0; border-radius: 6px; height: 20px; overflow: hidden;">
                                    <div style="width: ${percentage}%; height: 100%; background: ${stats.color}; border-radius: 6px; transition: width 0.5s;"></div>
                                </div>
                                <div style="width: 40px; text-align: right; font-size: 0.8em; color: #7f8c8d; font-weight: 600;">${percentage}%</div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <details style="margin-top: 15px;">
                    <summary style="cursor: pointer; color: #3498db; font-size: 0.9em; font-weight: 500;">
                        ℹ️ Comprendre les phases DIMA
                    </summary>
                    <div style="margin-top: 10px; padding: 15px; background: white; border-radius: 8px; font-size: 0.9em; line-height: 1.6; color: #555;">
                        <div style="margin-bottom: 10px;">
                            <strong style="color: #3498db;">👁️ Detect</strong> : 
                            Techniques de captation d'attention et d'identification des cibles vulnérables.
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
        `;
    }

    generatePhaseExplanation(dominantPhase, phaseStats, totalTechniques) {
        const explanations = {
            'Detect': `Le contenu utilise principalement des techniques de <strong>détection et captation d'attention</strong> (${phaseStats['Detect'].count}/${totalTechniques} techniques). Cela suggère une stratégie axée sur l'identification des publics réceptifs et l'accroche initiale. Le contenu cherche à attirer et cibler des audiences spécifiques.`,
            
            'Informer': `Le contenu se concentre sur des techniques de <strong>transmission et cadrage de l'information</strong> (${phaseStats['Informer'].count}/${totalTechniques} techniques). L'objectif est de contrôler la perception de l'information via le choix des faits présentés, leur contextualisation, et les biais introduits dans le message.`,
            
            'Mémoriser': `Le contenu privilégie des techniques de <strong>mémorisation et ancrage</strong> (${phaseStats['Mémoriser'].count}/${totalTechniques} techniques). Ces méthodes visent à inscrire durablement les messages dans la mémoire du public, souvent par répétition, simplification ou associations émotionnelles fortes.`,
            
            'Agir': `Le contenu met l'accent sur des techniques d'<strong>incitation à l'action</strong> (${phaseStats['Agir'].count}/${totalTechniques} techniques). L'objectif est de mobiliser le public vers des comportements spécifiques : partage, engagement, manifestation, ou modification d'opinions et de votes.`
        };

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
            let suspiciousAlert = '';
            if (this.suspiciousSiteCheck.isSuspicious) {
                const { riskConfig, siteInfo } = this.suspiciousSiteCheck;
                suspiciousAlert = `
                    <div style="background: linear-gradient(135deg, ${riskConfig.color}, ${this.adjustColor(riskConfig.color, -15)}); color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 2px solid rgba(255,255,255,0.2);">
                        <div style="display: flex; align-items: start; gap: 12px;">
                            <span style="font-size: 28px;">${riskConfig.icon}</span>
                            <div style="flex: 1;">
                                <h3 style="margin: 0 0 8px 0; font-size: 1.2em;">${riskConfig.label}</h3>
                                <p style="margin: 0 0 12px 0; font-size: 0.95em; line-height: 1.5;">
                                    ${riskConfig.message}
                                </p>
                                <button class="suspicious-details-btn"
                                        style="background: white; color: ${riskConfig.color}; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all 0.2s;">
                                    Voir les détails du rapport →
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            modal.innerHTML = `
                <div style="background: white; padding: 30px; border-radius: 20px; max-width: 900px; max-height: 90vh; overflow-y: auto; margin: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); animation: slideIn 0.3s ease-out;">
                    
                    <div style="text-align: center; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 10px;">
                            <img src="${logoUrl}" 
                                 style="width: 24px; height: 24px;" 
                                 alt="M82 Project"
                                 onerror="this.style.display='none'">
                            <h2 style="color: #2c3e50; margin: 0; font-size: 1.8em;">Analyse DIMA</h2>
                        </div>
                        <p style="color: #7f8c8d; margin: 0; font-size: 0.95em;">
                            Détection de techniques de manipulation cognitive par 
                            <a href="https://m82-project.org/" target="_blank" 
                               style="color: #3498db; text-decoration: none; font-weight: 500;">M82 Project</a>
                        </p>
                    </div>
                    
                    ${suspiciousAlert}
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 15px; margin-bottom: 25px;">
                        <div style="background: linear-gradient(135deg, ${this.analysisResults.riskColor}, ${this.adjustColor(this.analysisResults.riskColor, -15)}); color: white; padding: 20px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                            <div style="font-size: 2.2em; font-weight: bold; margin-bottom: 5px;">${this.analysisResults.globalScore}</div>
                            <div style="font-size: 0.9em; opacity: 0.9;">Score Global</div>
                        </div>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #e9ecef;">
                            <div style="font-size: 2.2em; font-weight: bold; color: #3498db; margin-bottom: 5px;">${this.analysisResults.detectedTechniques.length}</div>
                            <div style="color: #7f8c8d; font-size: 0.9em;">Techniques</div>
                        </div>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #e9ecef;">
                            <div style="font-size: 1.4em; font-weight: bold; color: ${this.analysisResults.riskColor}; margin-bottom: 5px;">${this.analysisResults.riskLevel}</div>
                            <div style="color: #7f8c8d; font-size: 0.9em;">Niveau Risque</div>
                        </div>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #e9ecef;">
                            <div style="font-size: 1.6em; font-weight: bold; color: #17a2b8; margin-bottom: 5px;">${this.analysisResults.contentLength}</div>
                            <div style="color: #7f8c8d; font-size: 0.9em;">Caractères</div>
                        </div>
                    </div>

                    ${this.generatePhaseAnalysis()}

                    <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #e9ecef;">
                        <h4 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 1.1em;">📄 Page analysée</h4>
                        <div style="font-weight: 500; margin-bottom: 8px; line-height: 1.4;">${this.analysisResults.title}</div>
                        <div style="color: #666; font-size: 0.9em; word-break: break-all; margin-bottom: 8px;">${this.analysisResults.url}</div>
                        <div style="color: #888; font-size: 0.85em;">
                            Analysé le ${new Date(this.analysisResults.timestamp).toLocaleString('fr-FR')} • 
                            ${this.analysisResults.analyzedText} caractères traités • Type: ${this.pageType}
                        </div>
                    </div>

                    ${this.analysisResults.detectedTechniques.length === 0 ?
                    `
                        <div style="background: linear-gradient(135deg, #d4edda, #c3e6cb); color: #155724; padding: 25px; border-radius: 12px; text-align: center; border: 1px solid #c3e6cb;">
                            <div style="font-size: 2em; margin-bottom: 10px;">✅</div>
                            <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 8px;">Aucune manipulation détectée</div>
                            <div style="font-size: 0.95em; opacity: 0.8;">Le contenu analysé semble exempt de techniques de manipulation cognitive manifestes</div>
                        </div>
                    ` : `
                        <div style="background: linear-gradient(135deg, #fff3cd, #ffeaa7); padding: 20px; border-radius: 12px; border: 1px solid #ffeaa7;">
                            <h4 style="margin: 0 0 20px 0; color: #856404; font-size: 1.2em;">⚠️ Techniques de manipulation détectées</h4>
                            <div style="display: grid; gap: 12px;">
                                ${this.analysisResults.detectedTechniques.slice(0, 8).map(technique => `
                                    <div style="background: white; padding: 16px; border-radius: 10px; border-left: 4px solid #e67e22; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                                        <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 8px;">
                                            <div style="flex: 1;">
                                                <div style="font-weight: bold; color: #2c3e50; margin-bottom: 4px; font-size: 1.05em;">
                                                    ${technique.phase === 'Detect' ? '👁️' : technique.phase === 'Informer' ? '📢' : technique.phase === 'Mémoriser' ? '🧠' : '⚡'} ${technique.index}: ${technique.nom}
                                                </div>
                                                ${technique.tactic ? `<div style="font-size: 0.75em; color: #7f8c8d; margin-bottom: 8px;">↳ Tactique: ${technique.tactic}</div>` : ''}
                                                ${technique.description ? `<div style="color: #666; font-size: 0.9em; margin-bottom: 8px; line-height: 1.4;">${technique.description}</div>` : ''}
                                            </div>
                                            <span style="background: #27ae60; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8em; font-weight: bold; margin-left: 15px;">
                                                ${technique.confidence}%
                                            </span>
                                        </div>
                                        
                                        <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 8px;">
                                            <span style="background: #e67e22; color: white; padding: 3px 8px; border-radius: 6px; font-size: 0.8em; font-weight: 500;">
                                                ${technique.phase}
                                            </span>
                                            <div style="text-align: right; font-size: 0.75em; color: #7f8c8d;">
                                                <div>Score pondéré: ${technique.weightedScore?.toFixed(1) || technique.score}</div>
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
                                                            ${keyword.keyword} ${(keyword.count > 1) ? `(×${keyword.count})` : ''}
                                                        </span>`
                                                    ).join('')}
                                                    ${technique.matchedKeywords.length > 4 ? 
                                                        `<span style="color: #999; font-size: 0.75em; padding: 2px 4px;">+${technique.matchedKeywords.length - 4} autres...</span>` 
                                                        : ''
                                                    }
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `}
                    
                    <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="document.getElementById('dima-modal').remove()" 
                                    style="background: #3498db; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500; transition: background 0.3s;">
                                Fermer
                            </button>
                            <button onclick="window.open('https://m82-project.org/', '_blank')" 
                                    style="background: #95a5a6; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500; transition: background 0.3s;">
                                En savoir plus
                            </button>
                        </div>
                    </div>

                    <style>
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        @keyframes slideIn {
                            from { transform: translateY(30px); opacity: 0; }
                            to { transform: translateY(0); opacity: 1; }
                        }
                        @keyframes slideInRight {
                            from { transform: translateX(100%); opacity: 0; }
                            to { transform: translateX(0); opacity: 1; }
                        }
                        #dima-modal button:hover {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                        }
                    </style>
                </div>
            `;

            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.remove();
            });
            
            // Ajouter l'événement pour le bouton des détails du site suspect
            modal.querySelector('.suspicious-details-btn')?.addEventListener('click', () => {
                this.showSuspiciousSiteDetails();
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