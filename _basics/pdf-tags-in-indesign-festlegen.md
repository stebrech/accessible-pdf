---
ID: 368
post_title: '<em>PDF-Tags</em> in InDesign festlegen'
author: Stefan Brechbühl
post_excerpt: >
  In InDesign können die
  Überschriften-Tags innerhalb der
  Absatzformateinstellungen definiert
  werden. Unter „Tagsexport“ wird
  einem Absatzformat ein PDF-Tag
  zugewiesen.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/pdf-tags-in-indesign-festlegen/
published: true
post_date: 2018-01-19 12:45:49
tags:
  - Adobe InDesign
categories: [ ]
---
In InDesign können die Überschriften-*Tags* innerhalb der Absatzformateinstellungen definiert werden. Unter „Tagsexport“ wird einem Absatzformat ein PDF-*Tag* zugewiesen.

![PDF-Tag für Absatzformat in InDesign definieren. Gif-Animation.][1]

Zudem gibt es auch die Möglichkeit ein bestimmtes Absatzformat als Artefakt zu behandeln. Mehr über Artefakte erfährst du in [„Unwichtige und dekorative Inhalte als Artefakt“][2].

## Alle *Tags* auf einmal festlegen

Im Flyout-Menü des Panels „Absatzformate“ befindet sich der Befehl „Alle Exporttags bearbeiten“.

![Wo befindet sich das Flyout-Menü der Absatzformate? Screenshot.][3]

Das Fenster, welches sich anschliessend öffnet, erlaubt es sehr schnell alle vorhandenen Absatzformate mit einem Exporttag zu versehen.

## Exportoption

Beim Export wird nur ein *Tagged PDF* erstellt, wenn die Option „PDF mit Tags erstellen“ aktiviert wurde. Diese Option existiert in den Exportoptionen von Adobe PDF (Druck)

![Screenshot vom PDF-Exportdialog Druck.][4]

sowie auch für Adobe PDF (Interaktiv).

![Screenshot vom PDF-Exportdialog Interaktiv.][5]

## Rollenzuordnung der *Tags*

Auch wenn nach all den oben beschriebenen Schritten vorgegangen wurde, findet man im Navigationsfenster „Tags“ in Acrobat nicht die gewählten Überschriften-*Tags*. Die Inhalte sind zwar in Tags unterteilt, diese tragen aber den Namen des Absatzformates von InDesign.

Was ist denn nun passiert? InDesign hat beim Export die korrekten Tags per Rollenzuordnung zugewiesen. Geöffnet wird die Rollenzuordnung in den Optionen des Navigationsfensters „Tags“.

![Wo befinden sich die Optionen des Navigationsfensters „Tags“? Animiertes Gif.][6]

 [1]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_tagsexport.gif
 [2]: https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/
 [3]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_absatzformate_flyout.png
 [4]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_pdf_export_druck.jpg
 [5]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_pdf_export_interaktiv.jpg
 [6]: https://accessible-pdf.info/wp/wp-content/uploads/acrobat_rollenzuordnung.gif