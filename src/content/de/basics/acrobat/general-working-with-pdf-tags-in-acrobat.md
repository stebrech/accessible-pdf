---
title: Generelles Arbeiten mit PDF-Tags in Acrobat
layout: post.njk
author: Stefan Brechbühl
date: 2019-12-09
description: Das Arbeiten mit dem sogenannten Tagbaum, welcher im Navigationsfenster „Tags“ abgebildet ist, kann vor allem zu Beginn etwas unübersichtlich sein. Um dem entgegenzuwirken, werden in diesem Beitrag einige Arbeitstechniken erklärt.
---

Das Arbeiten mit dem sogenannten *Tag*baum, welcher im Navigationsfenster „Tags“ abgebildet ist, kann vor allem zu Beginn etwas unübersichtlich sein. Um dem entgegenzuwirken, werden in diesem Beitrag einige Arbeitstechniken erklärt.

- [_Getaggter_ Text im *Tag*baum finden](#getaggter-text-im-tagbaum-finden)
- [Zum Inhalt von ausgewähltem _Tag_ navigieren und markieren](#zum-inhalt-von-ausgewähltem-tag-navigieren-und-markieren)
- [Standardisierte _Tags_ und _Tags_ mit Rollenzuordnung](#standardisierte-tags-und-tags-mit-rollenzuordnung)

<p class="note">
  Softwarehinweis: Um mit den <em>Tags</em> arbeiten zu können, wird der kostenpflichtige 
  <a href="https://acrobat.adobe.com/ch/de/acrobat.html">Adobe Acrobat</a> benötigt. Mit dem
  kostenlosen <a href="https://get.adobe.com/de/reader/">Adobe Acrobat Reader</a> können *Tags*
  weder geprüft noch geändert werden.
</p>

<p class="note">
Das Navigationsfenster „Tags“ lässt sich öffnen indem auf das Symbol mit dem Namensschild geklickt wird.

 <img src="/assets/img/tag-icon.png" alt="Tag Icon in Acrobat" />

Falls dieses in der linken Leiste noch nicht aufgeführt ist, kann es mit einem Rechtsklick oder unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ hinzugefügt und das Navigationsfenster angezeigt werden.

</p>

## _Getaggter_ Text im *Tag*baum finden

Um schnell zu einer gewünschten Postion im *Tag*baum zu gelangen, kann wie folgt vorgegangen werden:

1. Das Navigationsfenster „Tags“ muss geöffnet sein
2. Wähle die betroffene Textstelle mit dem Auswahlwerkzeug aus
3. Öffne die Optionen im Navigationsfenster „Tags“ und wähle „Tag in Auswahl suchen“

<p class="note">
Die Optionen des Navigationsfenster „Tags“ können oben links unter dem kleinen Symbol mit den zwei Listenpunkten aufgerufen werden.

 <img src="/assets/img/tags-options-icon.png" alt="Menüicon der Tags Optionen in Acrobat" />
</p>

## Zum Inhalt von ausgewähltem _Tag_ navigieren und markieren

Um beim Bearbeiten der _Tags_ zu erkennen an welcher Stelle man sich im PDF befindet, muss folgende Einstellung vorgenommen werden:

1. Öffne das Navigationsfenster „Tags“
2. Öffne die Optionen im Navigationsfenster „Tags“ und aktiviere „Inhalt markieren“

Mit dieser Option wird ein blauer Rahmen um den betroffenen Bereich angezeigt. Falls sich der aktive _Tag_ nicht bereits im angezeigten Bereich befindet, wird automatisch dorthin navigiert.

## Standardisierte _Tags_ und _Tags_ mit Rollenzuordnung

Wenn das Navigationsfenster „Tags“ geöffnet ist, können _Tags_ anhand der Spitzklammern (`< >`) erkannt werden. Der Name dieser _Tags_ muss verständlicherweise einem Standard folgen. Ansonsten ist es [AT](/de/glossary/#at) nicht möglich, diese korrekt zu interpretieren. Der Standard, der diese *Tag*bezeichnungen beschreibt, heisst PDF 1.7 oder künftig PDF 2.0. Die definierten _Tags_ in PDF 1.7 kannst du in [„Übersicht der PDF-_Tags_“](/de/basics/general/overview-of-the-pdf-tags) nachschlagen.

Glücklicherweise gibt es aber noch eine weitere Möglichkeit wenn die Autorensoftware nicht direkt die standardisierten _Tags_ zuordnen kann. Dieser Weg heisst Rollenzuordnung und bedeutet, dass ein nicht standardisierter _Tag_ einem standardisierten zugeordnet wird. Beispielsweise Adobe InDesign liefert fast ausschliesslich nicht standardisierte _Tags_ mit Rollenzuordnung im exportierten PDF aus.

<p class="note">
  Seit Adobe Acrobat DC 2017 hat es in den Optionen des Navigationsfensters „Tags“ eine neue Option
  namens „Rollenzuordnung auf Tags anwenden“. Wenn diese Option aktiv ist, siehst du die
  zugeordneten <em>Tags</em> anstelle der Namens, wie sie tatsächlich benannt wurden.
</p>

Um alle eine Einträge der Rollenzuordnung anzusehen und allenfalls anzupassen, gehe wie folgt vor:

1. Öffne das Navigationsfenster „Tags“
2. Öffne die Optionen im Navigationsfenster „Tags“ und klicke auf „Rollenzuordnung bearbeiten“
3. Klappe den Eintrag „Dokumentrollen“ im neu geöffneten Fenster auf, indem du links auf das kleine Dreieck klickst
