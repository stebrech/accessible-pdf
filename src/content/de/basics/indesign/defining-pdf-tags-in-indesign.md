---
title: PDF-Tags in InDesign festlegen
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-07
description: In InDesign kannst du Überschriften-Tags manuell über die Einstellungen des Absatzformats definieren. Für Tabellen, Listen und Fussnoten wirst du die entsprechenden Tags automatisch erhalten, wenn die verfügbaren Tools korrekt verwendet wurden.
order: 1
---

In InDesign kannst du Überschriften-_Tags_ manuell über die Einstellungen des Absatzformats definieren. Für Tabellen, Listen und Fussnoten wirst du die entsprechenden _Tags_ automatisch erhalten, wenn die verfügbaren _Tools_ korrekt verwendet wurden.

## *Tags*export

Eines der wichtigsten Strukturelemente sind verschachtelte mehrstufige Überschriften, siehe auch [„Struktur mit Hilfe von mehrstufigen Überschriften“](/de/basics/general/structure-with-the-help-of-multi-level-headings/). Um ein _Tag_ je Absatzformat zu definieren

1. klickst du mit der rechten Maustaste auf das Absatzformat welches du ändern möchtest und wählst „… bearbeiten“;
2. öffnest den letzten Abschnitt „Tagsexport“;
3. und wählst das passende _Tag_ im letzten _Dropdown_-Feld mit der Bezeichnung „PDF“ → „Tag“.

![Screenshot der Absatzformat-Optionen mit geöffnetem Reiter Tagsexport.](src/assets/img/indesign_tagsexport.png)

Du kannst dem Absatzformat jeden beliebigen Überschriften-_Tag_ zuweisen. Es besteht auch die Möglichkeit „Artifact“ auszuwählen, wenn der Text keine relevanten Informationen enthält. Mehr dazu findest du unter [„Artefakte in InDesign festlegen“](/de/basics/indesign/defining-artifacts-in-indesign/).

### Alle _Tags_ auf einmal festlegen

Im _Flyout_-Menü oben rechts im Panel „Absatzformate“ findest du den Befehl „Alle Exporttags bearbeiten“. Im sich öffnenden Fenster musst du auf „PDF“ wechseln. Danach kannst du die _Tags_ alle auf einmal festlegen.

## Tabellen, Listen und Fussnoten

Verwende zum Erstellen von Tabellen den Menüpunkt „Tabelle“ und erstelle keine „falsche“ Tabelle mit Hilfe von Tabulatoren. Dies wäre semantisch nicht korrekt und verursacht Probleme mit der [logischen Lesereihenfolge](/de/glossary/#logische-lesereihenfolge). Innerhalb der Tabellenoptionen kannst du wählen, wie viele Kopf- und Fusszeilen die Tabelle haben soll.

Auch Listen müssen korrekt angelegt werden. Du darfst nicht nur ein Bindestrich oder eine Zahl eingeben um eine Liste zu erstellen. Innerhalb der Absatzformateinstellungen kann eine korrekt nummerierte oder ungeordnete Liste erstellt werden.

Im Menüpunkt „Schrift“ können korrekte Fuss- oder Endnoten hinzugefügt werden.

## Export

Sobald dein Dokument fertig ist, gibt es eine wichtige Exporteinstellung, die du prüfen musst. Die Option „PDF mit Tags erstellen“ muss aktiviert sein. Du wirst sie finden ob du das Format „Adobe PDF (Druck)“.

![Screenshot der Exportoptionen im PDF-Druckformat.](src/assets/img/indesign_pdf_export_druck.png)

oder „Adobe PDF (Interaktiv)“ auswählst.

![Screenshot der Exportoptionen im interaktiven PDF-Format.](src/assets/img/indesign_pdf_export_interaktiv.png)

Wenn dein Dokument interaktiv ist und Links oder Formularfelder enthält, musst du „Adobe PDF (Interaktiv)“ wählen und auch die Option „Struktur für Aktivierreihenfolge verwenden“ aktivieren.

## Rollenzuordnung von Tags

Wenn du dir in Acrobat den Navigationsbereich „Tags“ anschaust, wirst du feststellen, dass das Dokument _getaggt_ wurde. Die _Tags_ werden jedoch nach dem Absatzformat benannt, den du in InDesign gewählt hast und nicht nach dem ausgewählten Export-_Tag_.

Also, weshalb die zusätzliche Arbeit? InDesign hat mit Hilfe der Rollenzuordnung die richtigen Tags zugewiesen. Im Beitrag [„Generelles Arbeiten mit PDF-Tags in Acrobat“](/de/basics/acrobat/general-working-with-pdf-tags-in-acrobat/#standardisierte-tags-und-tags-mit-rollenzuordnung) kannst du mehr über diese Rollenzuordnung erfahren.
