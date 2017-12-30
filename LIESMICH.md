# Accessible PDF
Dieses *Repository* enthält die Inhalte von [accessible-pdf.info](accessible-pdf.info). Die Inhalte sind in Markdown geschrieben, extern in Github verwaltet und mit der WordPress Website synchronisiert.

## Inhaltsverzeichnis
| Nr.     | Titel auf Englisch | Titel auf Deutsch |
| :---    | :---               | :--- |
| `00-00` | Glossary           | Glossar |
| `00-01` |                    | Logische Dokumentenstruktur mit InDesign herstellen |
| `00-02` |                    | Logische Dokumentenstruktur mit Word herstellen |
| `01-01` |                    | *Document* ist nicht Tag auf oberster Ebene |
| `01-02` |                    | Falsche Inhaltsverzeichnis-Struktur |
| `01-03` |                    | Getaggte Tabellenlinien |
| `06-01` |                    | *UA-Identifier* fehlt |
| `07-01` |                    | Dokumenttitel ist nicht gesetzt |
| `13-01` |                    | Kein *Figure Tag* im Kompatibilitätsmodus |
| `13-02` |                    | Getaggte Bilder in Kopf- und Fusszeile |
| `13-03` |                    | Abbildung fehlt *Bounding Box* |
| `13-04` |                    | Abbildung als Block-Element |
| `14-01` |                    | Übersprungene Überschriftenebenen |
| `16-01` |                    | Liste ist nicht als Liste getaggt |

## Die Markdown Syntax
> Markdown is a lightweight markup language with plain text formatting syntax.
>
> <cite>— Wikipedia</cite>

Markdown wurde von John Gruber entwickelt und soll auf einfache Weise gewöhnlichen Text in semantisches HTML umwandeln. Es könnte sein, dass die Markdown Syntax beim ersten Mal etwas kompliziert aussieht. Um mehr darüber zu erfahren, empfehle ich die englische Seite [Markdown Basics](https://daringfireball.net/projects/markdown/basics) zu lesen. Ich verspreche es dauert nicht lange bis du die Markdown Syntax verstehst.

## Metadaten im Kopfbereich
Jede Markdowndatei benötigt zu Beginn ein paar Metadaten. Diese sind nötig um die Inhalte in die Datenbank der Website zu kopieren. Direkt nach dem Import in die Datenbank wird das [Plugin WPGHS](https://github.com/mAAdhaTTah/wordpress-github-sync) einen neuen Commit erstellen, welchen noch zusätzliche und fehlende Metadaten ergänzt.

Der Metadaten-Block benötigt folgende Informationen:

```
---
post_title: Name des Beitrags
author: Name des Autors
layout: page
published: true
post_excerpt: "Eine kurze Beschreibung des Beitrags."
tags:
  - Microsoft Word
categories:
  - 01. Getaggter realer Inhalt
---
```

### post_title
Der Titel beschreibt das Problem / die Anleitung so kurz und verständlich wie möglich.

### author
Der Name des Autors des Beitrags. Wenn jemand anders eine Änderung vorschlägt, bleibt der Autor bestehen.

### layout
Weil alle Inhalte denselben Post Type benutzen, ist `layout` immer `page`.

### published
`published` bestimmt ob der Beitrag direkt veröffentlicht wird.

### post_excerpt
Der Auszug hilft um rasch herauszufinden um was es im Beitrag geht. Nebst der Kategorie- und Archivseite wird der Auszug für Suchresultate verwendet.

### tags
Tags sind ein Navigationshilfsmittel. Sie können die Autorensoftware oder die Art des Testens beschreiben.

#### Autorensoftware
- Adobe InDesign
- Microsoft Word

#### Art des Testens
- Automatische Prüfung
- Manuelle Prüfung

### categories
Der Hauptzweck dieser Website ist die Lösung von PDF/UA Fehlern und Problemen. Dazu werden die Checkpoint-Namen des [Mattherhorn Protokolls](https://www.pdfa.org/publication/matterhorn-protokoll-1-02-deutsche-uebersetzung/?lang=de/) als Kategorien verwendet:

01. Getaggter realer Inhalt
02. Rollenzuordnung
03. Flimmer-, Blink- oder Blitzeffekte
04. Farbe und Kontraste
05. Töne
06. Metadaten
07. Dictionary
08. OCR-Validierung
09. Geeignete Tags
10. Zeichenkodierungen
11. Ausgewiesene natürliche Sprache
12. Streckbare Zeichen
13. Grafiken
14. Überschriften
15. Tabellen
16. Listen
17. Mathematische Ausdrücke
18. Kopfzeile und Fusszeile auf Seiten
19. Fuss-/Endnoten und Verweise
20. Optional Content
21. Eingebettete Dateien
22. Lesereihenfolge Artikelabschnitte
23. Digitale Signaturen
24. Nicht-interaktive Formularfelder
25. XFA
26. Sicherheit
27. Navigation
28. Annotationen
29. Aktionen
30. XObjects
31. Schriften

Für allgemeine Anleitungen wird die Kategorie *Allgemeine Anleitung* und für alle anderen Seiten die Kategorie *Allgemeines* verwendet.

### Weitere Metadaten
Die Metadaten *ID*, *Permalink* und *Veröffentlichungsdatum* werden automatisch hinzugefügt.

## Mithilfe
Diese Website ist als Community-Projekt gedacht. Ich wünsche mir Helferinen und Helfer aus der ganzen Welt, welche mich dabei unterstützen ein nützliches Nachschlagewerk für barrierefreie PDFs zu bauen und zu pflegen. Zusätzliche Infos folgen.

## Lizenz
Diese Websiteinhalte sind lizensiert unter der [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
