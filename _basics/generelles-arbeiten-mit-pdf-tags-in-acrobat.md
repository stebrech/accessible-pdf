---
ID: 57935
post_title: 'Generelles Arbeiten mit PDF-<em>Tags</em> in Acrobat'
author: Stefan Brechbühl
post_excerpt: 'Das Arbeiten mit dem sogenannten <em>Tag</em>baum, welcher im Navigationsfenster „Tags“ abgebildet ist, kann vor allem zu Beginn etwas unübersichtlich sein. Um dem entgegenzuwirken, werden in diesem Beitrag einige Arbeitstechniken erklärt.'
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/generelles-arbeiten-mit-pdf-tags-in-acrobat/
published: true
post_date: 2019-01-25 05:57:32
tags: [ ]
categories: [ ]
---
Das Arbeiten mit dem sogenannten *Tag*baum, welcher im Navigationsfenster „Tags“ abgebildet ist, kann vor allem zu Beginn etwas unübersichtlich sein. Um dem entgegenzuwirken, werden in diesem Beitrag einige Arbeitstechniken erklärt.

- [*Getaggter* Text im *Tag*baum finden](#tagfinden)
- [Zum Inhalt von ausgewähltem *Tag* navigieren und markieren](#inPDFfinden)
- [Standardisierte *Tags* und *Tags* mit Rollenzuordnung](#rollenzuordnung)

<aside class="note-block">Softwarehinweis: Um mit den <em>Tags</em> arbeiten zu können, wird der kostenpflichtige <a href="https://acrobat.adobe.com/ch/de/acrobat.html">Adobe Acrobat</a> benötigt. Mit dem kostenlosen <a href="https://get.adobe.com/de/reader/">Adobe Acrobat Reader</a> können <em>Tags</em> weder geprüft noch geändert werden.</aside>

<aside class="note-block">Das Navigationsfenster „Tags“ lässt sich öffnen indem auf das Symbol mit dem Namensschild geklickt wird.<br><img src="https://accessible-pdf.info/wp/wp-content/uploads/tag-icon.png" alt="Tag Icon in Acrobat"><br>Falls dieses in der linken Leiste noch nicht aufgeführt ist, kann es mit einem Rechtsklick oder unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ hinzugefügt und das Navigationsfenster angezeigt werden.</aside>

## *Getaggter* Text im *Tag*baum finden {#tagfinden}

Um schnell zu einer gewünschten Postion im *Tag*baum zu gelangen, kann wie folgt vorgegangen werden:

1. Das Navigationsfenster „Tags“ muss geöffnet sein
2. Wähle die betroffene Textstelle mit dem Auswahlwerkzeug aus
3. Öffne die Optionen im Navigationsfenster „Tags“ und wähle „Tag in Auswahl suchen“

<aside class="note-block">Die Optionen des Navigationsfenster „Tags“ können oben links unter dem kleinen Symbol mit den zwei Listenpunkten aufgerufen werden.<br><img src="https://accessible-pdf.info/wp/wp-content/uploads/tags-options-icon.png" alt="Menüicon der Tags Optionen in Acrobat" /></aside>

## Zum Inhalt von ausgewähltem *Tag* navigieren und markieren {#inPDFfinden}

Um beim Bearbeiten der *Tags* zu erkennen an welcher Stelle man sich im PDF befindet, muss folgende Einstellung vorgenommen werden:

1. Öffne das Navigationsfenster „Tags“
2. Öffne die Optionen im Navigationsfenster „Tags“ und aktiviere „Inhalt markieren“

Mit dieser Option wird ein blauer Rahmen um den betroffenen Bereich angezeigt. Falls sich der aktive *Tag* nicht bereits im angezeigten Bereich befindet, wird automatisch dorthin navigiert.

## Standardisierte *Tags* und *Tags* mit Rollenzuordnung {#rollenzuordnung}

Wenn das Navigationsfenster „Tags“ geöffnet ist, können *Tags* anhand der Spitzklammern (< >) erkannt werden. Der Name dieser *Tags* muss verständlicherweise einem Standard folgen. Ansonsten ist es [AT](https://accessible-pdf.info/de/glossar/#at) nicht möglich, diese korrekt zu interpretieren. Der Standard, der diese *Tag*bezeichnungen beschreibt, heisst PDF 1.7 oder künftig PDF 2.0. Die definierten *Tags* in PDF 1.7 kannst du in [„Übersicht der PDF-*Tags*“](https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/) nachschlagen.

Glücklicherweise gibt es aber noch eine weitere Möglichkeit wenn die Autorensoftware nicht direkt die standardisierten *Tags* zuordnen kann. Dieser Weg heisst Rollenzuordnung und bedeutet, dass ein nicht standardisierter *Tag* einem standardisierten zugeordnet wird. Beispielsweise Adobe InDesign liefert fast ausschliesslich nicht standardisierte *Tags* mit Rollenzuordnung im exportierten PDF aus.

<aside class="note-block">Seit Adobe Acrobat DC 2017 hat es in den Optionen des Navigationsfensters „Tags“ eine neue Option namens „Rollenzuordnung auf Tags anwenden“. Wenn diese Option aktiv ist, siehst du die zugeordneten *Tags* anstelle der Namens, wie sie tatsächlich benannt wurden.</aside>

Um alle eine Einträge der Rollenzuordnung anzusehen und allenfalls anzupassen, gehe wie folgt vor:

1. Öffne das Navigationsfenster „Tags“
2. Öffne die Optionen im Navigationsfenster „Tags“ und klicke auf „Rollenzuordnung bearbeiten“
3. Klappe den Eintrag „Dokumentrollen“ im neu geöffneten Fenster auf, indem du links auf das kleine Dreieck klickst