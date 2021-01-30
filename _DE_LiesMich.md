# Accessible PDF

Dies ist das Repository der Website [accessible-pdf.info](https://accessible-pdf.info/de). Die Website wurde mit dem React-basierten Framework [Gatsby](https://www.gatsbyjs.com/) erstellt, gehostet und bereitgestellt mit [Github](https://github.com/) und [Netlify](https://www.netlify.com/). 

## Lokale Installation

1. Klone dieses Repository auf deinen Computer
2. Navigiere in den neuen Ordner und führe `npm install` aus
3. Gib den Befehl `gatsby develop` ein
4. Wenn du fertig bist, stoppe den Entwicklungsserver (mit `Ctrl + C` in deiner Kommandozeile)

## Markdown Inhalte

Der Inhalt ist in Markdown geschrieben, einer leichtgewichtigen Auszeichnungssprache. Eigentlich sind es [MDX](https://mdxjs.com/)-Dateien, die JSX innerhalb von Markdown ermöglichen.

Wenn Markdown neu für dich ist, empfehle ich [Markdown Guide](https://www.markdownguide.org/), ein gutes Nachschlagewerk.

Neben den üblichen Formatierungsmöglichkeiten mit Markdown gibt es die folgenden Komponenten:

- `<NoteMessage>` 
- `<WarningMessage>`

## Metadaten im Kopfbereich

Jede MDX-Datei benötigt zu Beginn ein paar Metadaten:

```
---
title: Name des Beitrags
slug: Domainpfad ohne den Sprachenkürzel
lang: Sprachenkürzel
author: Namen aller Autoren
date: Datum nach ISO 8601
description: Eine kurze Beschreibung. Es ist gewöhnlich identisch mit dem Lead des Beitrags. Diese Beschreibung wird für SEO-Zwecken benötigt.
---
```

## Mithilfe

Ich schätze deine Hilfe und Vorschläge zur Verbesserung der Website sehr. Bitte schaue dir dazu die [CONTRIBUTING.md](CONTRIBUTING.md#de) an.

### Beginner

Wenn du noch keine Erfahrungen mit Git und dem Mitwirken auf Github hast – kein Problem. Es existiert ein nützliches Repository wo du das lernen kannst: [first-contributions](https://github.com/firstcontributions/first-contributions)

## Lizenz

Die Website-Inhalte sind lizensiert unter der [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/) 