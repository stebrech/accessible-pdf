---
ID: 21939
post_title: 'PDF-<em>Tags</em> in InDesign festlegen'
author: Stefan Brechbühl
post_excerpt: >
  In InDesign kannst du
  Überschriften-Tags manuell über die
  Einstellungen des Absatzformats
  definieren. Für Tabellen, Listen und
  Fussnoten wirst du die entsprechenden
  Tags automatisch erhalten, wenn die
  verfügbaren Tools korrekt verwendet
  wurden.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/pdf-tags-in-indesign-festlegen/
published: true
post_date: 2018-01-19 12:45:49
tags:
  - InDesign
categories: [ ]
---
In InDesign kannst du Überschriften-<em>Tags</em> manuell über die Einstellungen des Absatzformats definieren. Für Tabellen, Listen und Fussnoten wirst du die entsprechenden *Tags* automatisch erhalten, wenn die verfügbaren *Tools* korrekt verwendet wurden.

## *Tags*export

Eines der wichtigsten Strukturelemente sind verschachtelte mehrstufige Überschriften, siehe auch [„Struktur mit Hilfe von mehrstufigen Überschriften“](https://accessible-pdf.info/de/basics/strukturieren-mithilfe-von-hierarchischen-ueberschriften/). Um ein *Tag* je Absatzformat zu definieren

1. klickst du mit der rechten Maustaste auf das Absatzformat welches du ändern möchtest und wählst „… bearbeiten“;
2. öffnest den letzten Abschnitt „Tagsexport“;
3. und wählst das passende *Tag* im letzten *Dropdown*-Feld mit der Bezeichnung „PDF“ → „Tag“.

Du kannst dem Absatzformat jeden beliebigen Überschriften-*Tag* zuweisen. Es besteht auch die Möglichkeit „Artifact“ auszuwählen, wenn der Text keine relevanten Informationen enthält. Mehr dazu findest du unter [„Unwichtige und dekorative Inhalte als Artefakt“](https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/).

### Alle *Tags* auf einmal festlegen

Im *Flyout*-Menü oben rechts im Panel „Absatzformate“ findest du den Befehl „Alle Exporttags bearbeiten“. Im sich öffnenden Fenster musst du auf „PDF“ wechseln. Danach kannst du die *Tags* alle auf einmal festlegen.

## Tabellen, Listen und Fussnoten

Verwende zum Erstellen von Tabellen den Menüpunkt „Tabelle“ und erstelle keine „falsche“ Tabelle mit Hilfe von Tabulatoren. Dies wäre semantisch nicht korrekt und verursacht Probleme mit der [logischen Lesereihenfolge](https://accessible-pdf.info/de/glossar/#logische-lesereihenfolge). Innerhalb der Tabellenoptionen kannst du wählen, wie viele Kopf- und Fusszeilen die Tabelle haben soll.

Auch Listen müssen korrekt angelegt werden. Du darfst nicht nur ein Bindestrich oder eine Zahl eingeben um eine Liste zu erstellen. Innerhalb der Absatzformateinstellungen kann eine korrekt nummerierte oder ungeordnete Liste erstellt werden.

Im Menüpunkt „Schrift“ können korrekte Fuss- oder Endnoten hinzugefügt werden.

## Export

Sobald dein Dokument fertig ist, gibt es eine wichtige Exporteinstellung, die du prüfen musst. Die Option „PDF mit Tags erstellen“ muss aktiviert sein. Du wirst sie finden ob du das Format „Adobe PDF (Druck)“.

![Screenshot der Exportoptionen im PDF-Druckformat.](https://accessible-pdf.info/wp/wp-content/uploads/indesign_pdf_export_druck.jpg)

oder „Adobe PDF (Interaktiv)“ auswählst.

![Screenshot der Exportoptionen im interaktiven PDF-Format.](https://accessible-pdf.info/wp/wp-content/uploads/indesign_pdf_export_interaktiv.jpg)

Wenn dein Dokument interaktiv ist und Links oder Formularfelder enthält, musst du „Adobe PDF (Interaktiv)“ wählen und auch die Option „Struktur für Aktivierreihenfolge verwenden“ aktivieren.

## Rollenzuordnung von Tags

Wenn du dir in Acrobat den Navigationsbereich „Tags“ anschaust, wirst du feststellen, dass das Dokument *getaggt* wurde. Die *Tags* werden jedoch nach dem Absatzformat benannt, den du in InDesign gewählt hast und nicht nach dem ausgewählten Export-*Tag*.

Also, weshalb die zusätzliche Arbeit? InDesign hat mit Hilfe der Rollenzuordnung die richtigen Tags zugewiesen. Das bedeutet, dass jedes *Tag* mit dem Namen des Absatzformats einem [gültigen PDF-*Tag*](https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/) zugeordnet wird.

Um diese Regeln zu überprüfen oder zu ändern, öffnest du das Menü in „Tags“ und wählst „Rollenzuordnung bearbeiten“.

Seit Adobe Acrobat DC 2017 hat es im Menü „Tags“ eine neue Option namens „Rollenzuordnung auf Tags anwenden“. Wenn diese Option aktiv ist, siehst du die zugeordneten *Tags* anstelle der Namens, wie sie tatsächlich benannt wurden.