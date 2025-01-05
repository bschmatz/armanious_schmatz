# Checkliste

## allgemeine Hinweise zur Checkliste
Diese Checkliste dient als Grundlage für die finale Beurteilung des Projekts und wird herangezogen, um den Erfolg und die Qualität der Umsetzung zu bewerten. Beachten Sie, dass die maximal erreichbaren Punkte nur dann vergeben werden, wenn die Inhalte der Übungen maßgeblich auf ein eigenes Thema erweitert oder adaptiert werden. Ohne eine solche Anpassung müssen Sie mit einer Punktereduktion von bis zu 20% rechnen, da die eigenständige Anwendung der Übungsinhalte in die Bewertung einfließt.

Bitte beachten Sie, dass die Checkliste eine dynamische Grundlage ist, die im Laufe des Semesters angepasst oder erweitert werden kann. Zudem sind die Punkte der Checkliste nicht stets gleichgewichtend; einige Aspekte könnten schwerwiegender sein als andere, abhängig von den Anforderungen des jeweiligen Projekts.

Wenn bestimmte Punkte der Checkliste in Ihrem Projekt nicht umgesetzt werden, ist es erforderlich, dass Sie begründen, warum diese für Ihr gewähltes Beispiel nicht relevant sind. Dies dient nicht nur der Vollständigkeit, sondern auch der Qualität der Dokumentation und wird bei der finalen Beurteilung berücksichtigt.

**ES MÜSSEN NICHT ALLE PUNKTE DIESER CHECKLISTE UMGESETZT WERDEN**. Sie sollen anhand der Checkliste Überlegungen treffen

- Welche Punkte sind für das Demo-Projekt relevant?
- Warum habe ich bestimmte Punkte nicht integriert? (Hinweis: fehlende Zeit ist keine adäquate Begründung)


Es wird dringend empfohlen, diese Checkliste in Ihr eigenes Projekt-Repository zu kopieren und dort als eigenständige Datei zu führen. Auf diese Weise können Sie den Fortschritt Ihres Projekts kontinuierlich und transparent nachverfolgen. Neben dem Abhaken der erledigten Punkte ist es ebenfalls ratsam, fortlaufend zu dokumentieren, wie Sie die einzelnen Inhalte konkret implementiert haben. Diese Dokumentation kann sowohl als Lernressource für Sie selbst dienen als auch den Lehrenden und Kolleg:innen einen detaillierten Einblick in Ihre Arbeitsweise geben. Durch diese fortlaufende Dokumentation erleichtern Sie sich zudem die abschließende Projektdokumentation und stellen sicher, dass Ihr Projekt im Rahmen der Beurteilung vollumfänglich gewürdigt werden kann.


## Checkliste für die eigene fortlaufende Übung / TechDemo in Continuous Delivery

### Einführung und Grundlagen
- [ ] Verständnis von Continuous Delivery und dessen Bedeutung
- [ ] Unterschiede zwischen Continuous Integration, Continuous Delivery und Continuous Deployment
- [ ] CI-Anti Pattern identifizieren

### 20% Projekt Setup
- [ ] Initialisierung des Repository (Git) -> (Blank Project + Project Name = nachname) 
- [ ] Checkliste kopieren und in neues geklontes Repository/project einfügen
- [ ] Checkliste versionieren
- [ ] README anfertigen mit Verlinkungen, Hinweisen, etc. zum Inhalt des Repository
- [ ] zweites Repository für Übungen, Ausprobieren, etc. inkl. README sowie Verlinkungen und Übersicht zu den Übungen
- [ ] .gitignore angepasst: Stelle sicher, dass unnötige Dateien nicht im Repository landen (z. B. durch ein angepasstes .gitignore-File).

### 10% Automatisierung
- [ ] Automatisierte Builds eingerichtet
- [ ] Automatisierte Tests implementiert
- [ ] Automatisierte Deployments konfiguriert
- [ ] Automatisierte Code-Qualitätsanalyse: Setze statische Code-Analyse-Tools ein, um Codequalität automatisiert zu überprüfen.

### 10% Testing
- [ ] (Unit) Tests geschrieben und automatisiert
- [ ] Integrationstests implementiert (optional)
- [ ] End-to-End Tests eingerichtet (optional)

### Deployment-Strategien
- [ ] Deployment-Strategien identifizieren
- [ ] Rollback-Strategien (optional)

### 10% Containerisierung
- [ ] Docker oder ähnliche Technologien eingesetzt
- [ ] Integration in eine Build-Pipeline

### 20% Infrastruktur- und Konfigurationsmanagement
- [ ] Template Konfigurationsdateien versioniert und zentralisiert
- [ ] Konfigurationsdateien ausgenommen
- [ ] Verwendung in einer Build-Pipeline
- [ ] Infrastructure as Code (IaC): Nutze Tools wie Terraform oder Ansible, um die Infrastruktur als Code zu verwalten und sicherzustellen, dass Deployments wiederholbar sind.

### 10% Sicherheit
- [ ] Zugangsdaten sicher hinterlegt
- [ ] Sicherheitsüberprüfungen: Integriere automatisierte Sicherheitstests (z. B. OWASP ZAP) in die Pipeline, um potenzielle Sicherheitslücken frühzeitig zu erkennen.

### Datenbanken
- [ ] Datenbank-Migrationen automatisiert
- [ ] Datenbank-Backups und Recovery-Pläne

### 20% Abschluss und Dokumentation
- [ ] Projekt-Dokumentation vervollständigt
- [ ] Branching-Strategie dokumentieren: Definiere eine Branching-Strategie (z. B. GitFlow) und dokumentiere die Entscheidungsfindung.
- [ ] Pipeline-Dokumentation: Erstelle eine vollständige technische Dokumentation deiner CI/CD-Pipeline, einschließlich aller verwendeten Tools, Skripte und Konfigurationen.
- [ ] Build Pipeline spezifizieren: Stelle sicher, dass alle Schritte der CI/CD-Pipeline klar definiert sind, inklusive Test-, Build- und Deployment-Schritte.